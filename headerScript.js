function setup() {
  let canvas = createCanvas(windowWidth - 15, 200);
  canvas.parent("header");
}

function draw() {
  background(65, 105, 225);

  drawcloud(windowWidth / 3, 70, .5);
  drawcloud(windowWidth / 5, 170, 1);
  drawcloud(windowWidth * 0.25, 130, .75);
  // draw two more clouds

  textSize(40);
  fill(0);
  textAlign(CENTER, CENTER);

  text("Welcome", (windowWidth - 15) / 2, 100);
}

// finish up the drawcloud function
function drawcloud(x, y, scale) {
  fill(255, 255, 255);
  noStroke();

  ellipse(x - (10 * scale), y, 50 * scale, 50 * scale);
  ellipse(x + (10 * scale), y, 50 * scale, 50 * scale);
  ellipse(x + (30 * scale), y, 50 * scale, 50 * scale);
  ellipse(x + (2 * scale), y - (20 * scale), 40 * scale, 30 * scale);
  ellipse(x + (20 * scale), y - (20 * scale), 40 * scale, 40 * scale);

}