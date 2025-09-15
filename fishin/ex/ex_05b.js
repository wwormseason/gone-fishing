/*
5) frame rate & looping movement across screen

frameRate(n) asks p5 to target n FPS.

Move an object and wrap it when it goes past the edge.
*/

// (b) move vertically & wrap

let y = -60;
let v = 2.5;
let checkS = 10;

function preload() {
  hook = loadImage("/assets/ex5b/hook_line.png");
  check = loadImage("/assets/check.png");
  yay = loadSound("/assets/yay.mp3");
}

function setup() {
  createCanvas(300, 400);
}

function draw() {
  background(65, 107, 223);
  image(hook, width / 100, y);
  stroke(170, 170, 170);
  strokeWeight(2);
  line(width / 1.64, y, width / 1.64, 0);

  y += v;
  if (y > height) y = -60; // reappear from top

  setTimeout(yayFunc, 5000);

  function yayFunc() {
    image(check, 80, 80, checkS, checkS);
    yay.play();
    if (checkS < 150) {
      checkS += 15;
    }
    noLoop();
  }
}
