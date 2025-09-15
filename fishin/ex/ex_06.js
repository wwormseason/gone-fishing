/*
6) boundary detection & bounce (invert direction)

Detect edges and flip the velocity when you hit them.
*/
let x = 100,
  y = 80;
let vx = 3,
  vy = 2;
const d = 40; // diameter
let checkS = 10;

function preload() {
  hook = loadImage("/assets/ex5b/hook_line.png");
  fish = loadImage("/assets/ex5a/fish.png");
  check = loadImage("/assets/check.png");
  yay = loadSound("/assets/yay.mp3");
}

function setup() {
  createCanvas(600, 300);

  fish.resize(200, 100);
  hook.resize(150, 250);
}

function draw() {
  background(65, 107, 223);

  // update
  x += vx;
  y += vy;

  // bounce horizontally
  if (x < d / 2 || x > width - d / 2) vx *= -1;
  // bounce vertically
  if (y < d / 2 || y > height - d / 2) vy *= -1;

  // draw
  image(hook, 250, -100);
  image(fish, x, y);

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
