let mouseHeld = false;

function setup() {
  createCanvas(1920, 1080);
  resizeCanvas(windowWidth, windowHeight);

  textFont("Impact");
  textSize(50);

}

function draw() {
    //asked chatgpt how to make the background stop being random when the mouse is held - I couldn't figure it out!

    background(mouseHeld ? "blue" : color(random(255), 0, random(255)));

    for (let x = 0; x <= width; x += 295) {
    for (let y = 0; y <= height; y += 45) {
      let jitterX = mouseHeld ? 0 : random(-5, 5);
      let jitterY = mouseHeld ? 0 : random(-5, 5);
      fill(0, 255);
      text("MYHEADHURTS", x + jitterX, y + jitterY, 150);
    }
  }
}

function mousePressed() {
  mouseHeld = true;
  background(0);
}

function mouseReleased() {
  mouseHeld = false;
  background(0);
}