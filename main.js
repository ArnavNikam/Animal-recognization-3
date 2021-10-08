function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0kbU3Xav0/model.json',modelready)
}

function modelready(){
    classifier.classify(gotresult)
}

function gotresult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);

        Redone=Math.floor(Math.random()*255)+1;

        Blueone=Math.floor(Math.random()*255)+1;

        Greenone=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;

        document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;

        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('animal_image');

        if (results[0].label == "bark") {
            img.src = 'dog.gif';
            dog = dog+1;
        } else if (results[0].label == "cat") {
            img.src = 'Cat.gif';
            cat = cat + 1;
        } else if (results[0].label == "tiger") {
            img.src = 'tiger.gif';
            tiger = tiger + 1;
        } else {
            img.src = 'listen.gif';
        }
    }
}