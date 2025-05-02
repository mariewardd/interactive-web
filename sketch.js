let blurAmount = 2;
let startTime;


function setup() {
  createCanvas(800, 200);
  textFont("Keania One");
  startTime = millis(); // Start the timer

}

function draw() {
  textSize(100);
  textFont("Keania One");
  background(0,0,255);
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

   // Draw blurry text
   fill(255, 10); // very transparent
   for (let i = -blurAmount; i <= blurAmount; i++) {
     for (let j = -blurAmount; j <= blurAmount; j++) {
       text("BLURRY VISION", textX + i, textY + j);
     }
   }
 
   // ✅ Draw hover instruction ON TOP
   // Reset style so it's not affected by previous loop
   if (millis() - startTime < 5000) {
    textSize(20);
    textFont("Impact");
    fill(0);
    textAlign(CENTER, CENTER);
    text("hover over the text", width / 2, height / 2);
  }
}