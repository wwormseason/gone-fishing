/*
3) positioning & centering

Two common approaches:

Direct coordinates: use width/2, height/2 for the canvas center.

Translate: move the drawing origin, then draw shapes around (0,0).
*/

let line_move = 5;
let checkS = 10;

function preload() {
  check = loadImage("/assets/check.png");
  yay = loadSound("/assets/yay.mp3");
}

function setup() {
  createCanvas(600, 400);
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
  line(250, -1000000 + line_move, 250, 400 + line_move);
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

  line_move += 5;

  setTimeout(yayFunc, 5000);

  function yayFunc() {
    image(check, 230, 100, checkS, checkS);
    yay.play();
    if (checkS < 150) {
      checkS += 15;
    }
    noLoop();
  }
}
