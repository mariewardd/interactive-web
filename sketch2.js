let mouseHeld = false;
let startTime;


function setup() {
  createCanvas(1920, 1080);
  resizeCanvas(windowWidth, windowHeight);
  startTime = millis(); // Start the timer


}

function draw() {
    //asked chatgpt how to make the background stop being random when the mouse is held - I couldn't figure it out!

    textFont("Impact");
    textSize(40);
    background(mouseHeld ? "blue" : color(random(255), 0, random(255)));

    for (let x = 0; x <= width; x += 245) {
    for (let y = 0; y <= height; y += 45) {
      let jitterX = mouseHeld ? 0 : random(-8, 8);
      let jitterY = mouseHeld ? 0 : random(-8, 8);
      fill(255, 0, 0, 100);
      text("MYHEADHURTS", x + jitterX, y + jitterY, 150);

    }
  }

  for (let x = 0; x <= width; x += 245) {
    for (let y = 0; y <= height; y += 45) {
      let jitterX = mouseHeld ? 0 : random(-8, 8);
      let jitterY = mouseHeld ? 0 : random(-8, 8);
      fill(0, 0, 255, 100);
      text("MYHEADHURTS", x + jitterX, y + jitterY, 150);
    }
  }

  for (let x = 0; x <= width; x += 245) {
    for (let y = 0; y <= height; y += 45) {
      let jitterX = mouseHeld ? 0 : random(-8, 8);
      let jitterY = mouseHeld ? 0 : random(-8, 8);
      fill(255, 50);
      text("MYHEADHURTS", x + jitterX, y + jitterY, 150);

    }
  }

  for (let x = 0; x <= width; x += 245) {
    for (let y = 0; y <= height; y += 45) {
      let jitterX = mouseHeld ? 0 : random(-8, 8);
      let jitterY = mouseHeld ? 0 : random(-8, 8);
      fill(0, 200);
      text("MYHEADHURTS", x + jitterX, y + jitterY, 150);

    }
  }


  if (millis() - startTime < 3000) {
    textSize(20);
    fill(255);
    textAlign(CENTER, CENTER);
    text("h o l d  d o w n  t h e  m o u s e", width / 2, height / 2);
  }

}

function mousePressed() {
  mouseHeld = true;
}

function mouseReleased() {
  mouseHeld = false;
}