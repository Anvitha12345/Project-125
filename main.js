
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){

    video = createCapture(VIDEO);
    video.size(550,500);
    

    canvas = createCanvas(550,500);
    canvas.position(600,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}


    function draw(){
        background('#33cccc');
        document.getElementById("font_size").innerHTML = "Font Size Of The Text Is = "+difference+"px";
        textSize(difference);
        fill("#e28743");
        text('Anvitha',50,400);
        
        
        
        
    }


function preload(){


}

function modelLoaded(){

    console.log('Posenet is Initialized');
}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("rightWrist X = "+results[0].pose.rightWrist.x + " rightWrist Y= "+results[0].pose.rightWrist.y);
        console.log("leftWrist X = "+results[0].pose.leftWrist.x + " leftWrist Y = "+results[0].pose.leftWrist.y);
    }
}


    
