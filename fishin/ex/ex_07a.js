/*
7) color basics + randomized colors

For shapes, use fill(r,g,b, [a]) and stroke(...).

For bitmaps, use tint(r,g,b, [a]).
*/

// (a) random shape color on click
let r = 200,
  g = 80,
  b = 100;
let checkS = 10;

function preload() {
  fish = loadImage("/assets/ex5a/fish.png");
  check = loadImage("/assets/check.png");
  yay = loadSound("/assets/yay.mp3");
}

function setup() {
  createCanvas(500, 300);

  fish.resize(200, 100);
}

function draw() {
  background(65, 107, 223);
  tint(r, g, b);
  image(fish, 150, 100);

  setTimeout(yayFunc, 5000);

  function yayFunc() {
    image(check, 170, 70, checkS, checkS);
    yay.play();
    if (checkS < 150) {
      checkS += 15;
    }
    noLoop();
  }
}

function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}
