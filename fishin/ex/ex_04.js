// 4) manual offsets (x, y) for simple shapes

let i = 0;
let checkS = 10;

function preload() {
  dock = loadImage("/assets/ex4/dock.jpeg");

  bag = loadImage("/assets/ex2/bag.webp");
  boots = loadImage("/assets/ex2/boots.webp");
  bucket = loadImage("/assets/ex2/bucket.png");
  hat = loadImage("/assets/ex2/hat.png");
  jacket = loadImage("/assets/ex2/life_jacket.webp");
  rod = loadImage("/assets/ex2/rod.png");
  tackle = loadImage("/assets/ex2/tackle_box.png");
  check = loadImage("/assets/check.png");
  yay = loadSound("/assets/yay.mp3");
}

function setup() {
  createCanvas(600, 400);

  bag.resize(150, 150);
  boots.resize(200, 200);
  bucket.resize(100, 130);
  hat.resize(150, 150);
  jacket.resize(200, 200);
  rod.resize(450, 100);
  tackle.resize(130, 130);

  noStroke();
}

function draw() {
  background(dock);
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

  image(rod, 80, 100);

  const items = [bag, boots, bucket, hat, jacket, tackle];
  let i = 0;
  while (i < items.length) {
    for (let o of offsets) {
      image(items[i], cx + o.dx, cy + o.dy);
      i++;
    }
  }

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
