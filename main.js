nose_x = "";
nose_y = "";




function take_snapshot() {

save("my_clown_nose.png");

}
function preload() {



}
function setup() {

    Canvas = createCanvas(640,480);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded );
    posenet.on( 'pose',gotPoses);


}
function modelLoaded() {

console.log("succes posenet");

}
function gotPoses(results) {

if (results.length > 0)
{

console.log(results);

console.log("nose x =" + results[0].pose.nose.x);
console.log("nose y =" + results[0].pose.nose.y);

nose_x =   results[0].pose.nose.x;
nose_y =   results[0].pose.nose.y;

}

}
function draw() {

image(video,0,0,640,);
fill(255,0,0);
stroke(255,0,0);
circle(nose_x,nose_y,20);

}