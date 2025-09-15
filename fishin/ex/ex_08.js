/*
8) create shapes on clicks at random positions

Use mousePressed() to push new shapes into an array.
*/
let fishes = [];
let checkS = 10;

function preload() {
  fish = loadImage("/assets/ex5a/fish.png");
  check = loadImage("/assets/check.png");
  yay = loadSound("/assets/yay.mp3");
}

function setup() {
  createCanvas(600, 350);

  fish.resize(200, 100);

  noStroke();
}

function draw() {
  background(65, 107, 223);
  for (let d of fishes) {
    tint(d.c);
    image(fish, d.x, d.y);
  }

  setTimeout(yayFunc, 1000);

  function yayFunc() {
    image(check, 230, 70, checkS, checkS);
    yay.play();
    if (checkS < 150) {
      checkS += 15;
    }
    noLoop();
  }
}

function mousePressed() {
  const d = {
    x: random(width),
    y: random(height),
    size: random(10, 40),
    c: color(random(255), random(255), random(255)),
  };
  fishes.push(d);
}
