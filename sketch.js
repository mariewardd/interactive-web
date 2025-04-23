let blurAmount = 2;

function setup() {
  createCanvas(800, 200);
  textSize(100);
  textFont("Keania One");
}

function draw() {
  background(255,0,0);
  noStroke();
  textAlign(CENTER, CENTER);
  

  let textX = width/2;
  let textY = height/2;
  let textW = textWidth("BLURRY VISION");
  let textH = 100;


  let hovering = (
    mouseX > textX - textW / 2 &&
    mouseX < textX + textW / 2 &&
    mouseY > textY - textH / 2 &&
    mouseY < textY + textH / 2
  );

  // blur transition -- chat gpt prompt "how to make a blur gradually change in p5.js"
  if (hovering) {
    blurAmount = lerp(blurAmount, 8, .07); // increase blur
  } else {
    blurAmount = lerp(blurAmount, 1, .07); // decrease blur
  }
  textAlign(CENTER, CENTER);



  fill(255, 10);
  for (let i = -blurAmount; i <= blurAmount; i++) {
    for (let j = -blurAmount; j <= blurAmount; j++) {
      text("BLURRY VISION", textX + i, textY + j);
    }
  }
}