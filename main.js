function preload(){

}

function setup(){
    canvas = createCanvas(400,600);
    canvas.position(550,175);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,550,400);
    
}