let baseSize = 20;
let extraSize = 0;
let targetSize = 40;
let speed = .3;
let animating = false;
//var painbrain;

//function preload(){
  //painbrain = loadImage("painbrain.png");
//}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textFont("Impact");
}

function draw() {
  background(0, 0, 255);
  
  if (animating) {
    if (extraSize < targetSize) {
      extraSize += speed;
    } else {
      // Once target reached, stop animation and increase base size
      baseSize += targetSize;
      extraSize = 0;
      animating = false;
    }
  }

  textSize(baseSize + extraSize);
  text("PAIN", width / 2, height / 2);
  
    //image(painbrain, 0, 0,);
}

function mousePressed() {
  if (!animating) {
    animating = true;
    extraSize = 0;
    targetSize = 10;
  }
}