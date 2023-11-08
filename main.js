//https://teachablemachine.withgoogle.com/models/2sBFxqQfu/model.json

//Background Noise

//tiger

//dog

//fox

//cat

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2sBFxqQfu/model.json", modelsuccess)
}

function end(){
 navigator.mediaDevices.getUserMedia({audio:false})
}

function modelsuccess(){
    classifier.classify(Gotresults);
    console.log("Your Model is working");
}

function Gotresults(error,results){
    if(error){
        console.error(error);
    }

    else{
        console.log(results);
        RNR = Math.floor(Math.random() * 255) + 1;
        RNG = Math.floor(Math.random() * 255) + 1;
        RNB = Math.floor(Math.random() * 255) + 1;

        document.getElementById("IH").innerHTML = "I hear a sound of a - " + results[0].label;
        document.getElementById("Accuracy").innerHTML = "Accuracy - " + (results[0].confidence).toFixed(2)+" %";

        document.getElementById("IH").style.color = "rgb("+RNR+","+RNG+","+RNB+")";
        document.getElementById("Accuracy").style.color = "rgb("+RNR+","+RNG+","+RNB+")";

        gif1 = document.getElementById("one");
        gif2 = document.getElementById("two");
        gif3 = document.getElementById("three");
        gif4 = document.getElementById("four");

        if(results[0].label == "dog"){
            gif1.src = "giphy.gif";
            gif2.src = "download.jpg";
            gif3.src = "download (1).jpg";
            gif4.src = "Stripes_Tiger-Terrific_KIDS_0722_4x3.avif";
        }

        else if(results[0].label == "cat"){
            gif1.src = "dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
            gif2.src = "cute-kitty.gif";
            gif3.src = "download (1).jpg";
            gif4.src = "Stripes_Tiger-Terrific_KIDS_0722_4x3.avif";
        }

        else if(results[0].label == "fox"){
            gif1.src = "dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
            gif2.src = "download.jpg";
            gif3.src = "giphy(1).gif";
            gif4.src = "Stripes_Tiger-Terrific_KIDS_0722_4x3.avif";
        }

        else{
            gif1.src = "dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
            gif2.src = "download.jpg";
            gif3.src = "download (1).jpg";
            gif4.src = "tiger.gif";
        }
    }
}
