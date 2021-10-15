rightEyeX="";
rightEyeY="";
rightWristX="";
rightWristY="";
function preload() {
    scarhead= loadImage("https://i.postimg.cc/MpFm0q6f/harrys-lightning-potter-scar-solid-icon-1320183612105303258-removebg-preview.png");
    oculusReparo= loadImage("https://i.postimg.cc/02JSgDPj/eyeglasses-icon-vector-illustration-260nw-1053713204-removebg-preview.png");
    DrgnHrtsng= loadImage("https://i.postimg.cc/fbjdkNr9/images-removebg-preview.png");
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
if (results.length>0)
{
    console.log(results);
    rightEyeX= results[0].pose.rightEye.x;
    rightEyeY= results[0].pose.rightEye.y;
    rightWristX= results[0].pose.rightWrist.x;
    rightWristY= results[0].pose.rightWrist.y;
    console.log("rightEye x=" + rightEyeX);
    console.log("rightEye y=" + rightEyeY);
    console.log("rightWrist x=" + rightWristX);
    console.log("rightWrist y=" + rightWristY);
}
}
function modelLoaded(){
    console.log("PoseNet is initialised");
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
stroke(255,0,0);
    //circle(rightEyeX, rightEyeY, 20);
    image(scarhead, rightEyeX-10, rightEyeY-50, 20, 30);
    image(oculusReparo, rightEyeX-25, rightEyeY-50, 100, 100);
    image(DrgnHrtsng, rightWristX-30, rightWristY-250, 100, 250);
}
function take_snapshot() {
    save('myFilterImage.png');
}