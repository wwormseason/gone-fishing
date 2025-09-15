/*
7) color basics + randomized colors

For shapes, use fill(r,g,b, [a]) and stroke(...).

For bitmaps, use tint(r,g,b, [a]).
*/

// (b) tint a loaded image (optional)

let tr = 255,
  tg = 255,
  tb = 255,
  ta = 255;
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
  const cx = width / 3;
  const cy = height / 8;

  // offsets around the center
  const offsets = [
    { dx: -150, dy: -50 },
    { dx: 200, dy: 140 },
    { dx: -180, dy: 190 },
    { dx: -70, dy: 130 },
    { dx: 30, dy: 160 },
    { dx: 0, dy: -30 },
  ];

  image(fish, 150, 100);
  tint(tr, tg, tb);

  for (let o of offsets) {
    image(fish, cx + o.dx, cy + o.dy);
  }

  setTimeout(yayFunc, 5000);

  function yayFunc() {
    image(check, 180, 60, checkS, checkS);
    yay.play();
    if (checkS < 150) {
      checkS += 15;
    }
    noLoop();
  }
}

function mousePressed() {
  tr = random(255);
  tg = random(255);
  tb = random(255);
  ta = random(100, 255);
}
