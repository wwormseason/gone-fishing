/*
10) summary challenge (+ solution)

Challenge:
Make a sketch where clicking the canvas spawns colorful circles at random sizes and velocities.
They:

change to a new random color every time they bounce off a wall,

wrap vertically but bounce horizontally,

and you can press r to reset.
*/

let fishes = [];

function preload() {
  fish = loadImage("/assets/ex5a/fish.png");
}

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(135, 206, 235);

  //grass
  fill(19, 133, 16);
  stroke(19, 133, 16);
  rect(0, 150, 600, 800);

  //road
  fill(80, 80, 80);
  stroke(80, 80, 80);
  quad(300, 150, 200, 150, 10, 400, 550, 400);
  stroke("white");
  strokeWeight(5);
  drawingContext.setLineDash([15, 15]);
  line(250, -1000000, 250, 400);
  drawingContext.setLineDash([]);

  //sky
  fill(135, 206, 235);
  stroke(135, 206, 235);
  rect(0, 0, 600, 150);

  //"car"
  strokeWeight(5);
  fill(150, 150, 150);
  stroke(150, 150, 150);
  ellipse(300, 400, 650, 250);
  rect(245, 0, 15, 15);
  fill(212, 225, 236);
  rect(180, 15, 150, 50);
  fill(0, 0, 0, 0);
  stroke("black");
  strokeWeight(20);
  circle(150, 350, 200);
  fill("black");
  circle(150, 350, 50);
  strokeWeight(0);

  for (let f of fishes) {
    // update position
    f.x += f.vx;
    f.y += f.vy;

    // horizontal bounce -> invert vx and recolor
    if (f.x < f.size / 2 || f.x > width - f.size / 2) {
      f.vx *= -1;
      f.c = color(random(255), random(255), random(255));
    }
    /* if() {
      // do something
    }*/

    // vertical wrap
    if (f.x < -f.size) {
      f.x = width + f.size;
    }
    if (f.y < -f.size) {
      f.y = height + f.size;
    }
    /* 
    if() {do something}
    if() {do something}

    */

    // draw
    tint(f.c);
    image(fish, f.x - 80, f.y - 40, f.size + 100, f.size);
  }

  // UI hint
  fill(30);
  text("Click to add fish · Press r to reset", 10, 20);
  text(`Total number of fish: ${fishes.length}`, 10, 40);
}

function mousePressed() {
  fishes.push({
    x: mouseX,
    y: mouseY,
    vx: random(-3, 3) || 1, // avoid 0
    vy: random(-2, 2),
    size: random(50, 150),
    c: color(random(255), random(255), random(255)),
  });
}

function keyPressed() {
  if (key === "r" || key === "R") fishes = [];
}
