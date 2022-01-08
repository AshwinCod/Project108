function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/GeYBftMDc/model.json", modelLoaded);
}

function modelLoaded(){
   classifier.classify(getResult);
}

function getResult(error, results){
    if(error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("canHear").innerHTML = "I can Hear - "+results[0].label
        document.getElementById("accuracy").innerHTML = "Accuracy - "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("canHear").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
        document.getElementById("accuracy").style.color = "rgb("+random_number_g+","+random_number_r+","+random_number_b+")"

        img1 = document.getElementById("animal");

        if(results[0].label == "Neighing"){
            img1.src = "horse.png"
            
        }
        else if (results[0].label == "Barking"){
            img1.src = "dog.png"
            
        }
        else if(results[0].label == "Meowing"){
            img1.src = "cat.png"
            
        }
        else if(results[0].label == "Snake"){
            img1.src = "snake.png"
            
        } else {
            img1.src = "hear.png"
        }
    }
}
