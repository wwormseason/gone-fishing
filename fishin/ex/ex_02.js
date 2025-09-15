/*
2) drawing shapes: ellipse, rect, square, line, triangle

fill() sets interior color; stroke() sets outline color; noStroke() removes it.
*/

let checkS = 10;

function preload() {
  bag = loadImage("../assets/ex2/bag.webp");
  boots = loadImage("../assets/ex2/boots.webp");
  bucket = loadImage("../assets/ex2/bucket.png");
  hat = loadImage("../assets/ex2/hat.png");
  jacket = loadImage("../assets/ex2/life_jacket.webp");
  rod = loadImage("../assets/ex2/rod.png");
  tackle = loadImage("../assets/ex2/tackle_box.png");
  check = loadImage("../assets/check.png");
  yay = loadSound("../assets/yay.mp3");
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
}

function draw() {
  background(240);

  function drawBucket() {
    image(bucket, 50, 40);
    noLoop();
  }
  function drawHat() {
    image(hat, 180, 30);
    noLoop();
  }
  function drawJacket() {
    image(jacket, 330, 0);
    noLoop();
  }
  function drawRod() {
    image(rod, 60, 170);
    noLoop();
  }
  function drawTackle() {
    image(tackle, 40, 260);
    noLoop();
  }
  function drawBag() {
    image(bag, 180, 230);
    noLoop();
  }
  function drawBoots() {
    image(boots, 340, 200);
    noLoop();
  }
  setTimeout(drawBucket, 1000);
  setTimeout(drawHat, 1500);
  setTimeout(drawJacket, 2000);
  setTimeout(drawRod, 2500);
  setTimeout(drawTackle, 3000);
  setTimeout(drawBag, 3500);
  setTimeout(drawBoots, 4000);

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
