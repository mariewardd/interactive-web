// used chat gpt to help with how to make an image a layer mask for text
// and to scale the image larger (I tried making it bigger in the png but it wouldn't work for some reason on the webpage)
let baseSize = 30;
let extraSize = 30;
let targetSize = 200;
let speed = 1;
let animating = false;

let startTime;


let textGfx;
let maskImg;
let painbrain;

function preload() {
  painbrain = loadImage("painbrain.png"); // Your brain shape
}

function setup() {
  createCanvas(850, 570);
  textAlign(CENTER, CENTER);
  textFont("Impact");
  fill("white");
    startTime = millis(); // Start the timer
  textGfx = createGraphics(width, height);
}

function draw() {
  background(255, 0, 0);
  
  // animate size
  if (animating) {
    if (extraSize < targetSize) {
      extraSize += speed;
    } else {
      baseSize += targetSize;
      speed = speed+.2;
      extraSize = 0;
      animating = false;
    }
  }

  // text to off-screen buffer
  textGfx.clear(); 
  textGfx.textAlign(CENTER, CENTER);
  textGfx.textFont("Impact");
  textGfx.fill(255);
  textGfx.textSize(baseSize + extraSize);
  textGfx.text("PAIN", width / 2 - 230, height / 2 - 130);


  // brain shape as a mask
  let maskedText = textGfx.get();
  let brainMask = painbrain.get();
  maskedText.mask(brainMask);

  let scaleFactor = 1.2;
  let newWidth = maskedText.width * scaleFactor;
  let newHeight = maskedText.height * scaleFactor;
  image(maskedText, width / 2 - newWidth / 2 + 280, height / 2 - newHeight / 2 +80, newWidth, newHeight);
    
      if (millis() - startTime < 3000) {
    text("click! click! click!", width / 2, height / 2);

    textSize(20);
    fill(0);
    textAlign(CENTER, CENTER);
  }
}

function mousePressed() {
  if (!animating) {
    animating = true;
    extraSize = 0;
    targetSize = 10;
  }
  
}