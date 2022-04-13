function preload(){

}

function setup(){
    video=createCapture(VIDEO);
    video.size(550,560);
    video.position(50,150);
    canvas=createCanvas(550,550);
    canvas.position(660,160);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

function draw(){
    background('#F7D1CD');
}

function modelLoaded(){
    console.log("Model loaded!")
}