/*
5) frame rate & looping movement across screen

frameRate(n) asks p5 to target n FPS.

Move an object and wrap it when it goes past the edge.
*/

// (a) move horizontally & wrap

let x = -60; // start left of the canvas
let speed = 3;
let checkS = 10;

function preload() {
  fish = loadImage("/assets/ex5a/fish.png");
  check = loadImage("/assets/check.png");
  yay = loadSound("/assets/yay.mp3");
}

function setup() {
  createCanvas(600, 200);
  frameRate(60);

  fish.resize(200, 100);
}

function draw() {
  background(65, 107, 223);

  // "image" placeholder: a rectangle
  image(fish, x, height / 4);

  x += speed;
  if (x > width) x = -60; // wrap to left again

  // display actual measured FPS (approximate)
  noStroke();
  fill(30);
  text("FPS ~ " + nf(frameRate(), 2, 0), 10, 20);

  setTimeout(yayFunc, 5000);

  function yayFunc() {
    image(check, 230, 20, checkS, checkS);
    yay.play();
    if (checkS < 150) {
      checkS += 15;
    }
    noLoop();
  }
}
