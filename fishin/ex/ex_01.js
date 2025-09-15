/*
1) the empty sketch: setup() and draw()

setup() runs once at the start (good for createCanvas, loading assets, initializing variables).
draw() runs ~60 times per second by default—it’s your animation loop.
*/

let cloudX = 50;
let checkS = 10;

function preload() {
  cloud0 = loadImage("../assets/ex1/cloud.png");
  cloud1 = loadImage("../assets/ex1/cloud.png");
  cloud2 = loadImage("../assets/ex1/cloud.png");
  cloud3 = loadImage("../assets/ex1/cloud.png");
  cloud4 = loadImage("../assets/ex1/cloud.png");
  sun = loadImage("../assets/ex1/sun.png");
  check = loadImage("../assets/check.png");
  yay = loadSound("../assets/yay.mp3");
}

function setup() {
  createCanvas(600, 400); // runs once
  // put one-time setup here
  cloud0.resize(250, 150);
  cloud1.resize(150, 60);
  cloud2.resize(150, 60);
  cloud3.resize(200, 100);
  cloud4.resize(100, 60);
  sun.resize(200, 200);
}

function draw() {
  background(135, 206, 235);

  //grass
  fill(19, 133, 16);
  stroke(19, 133, 16);
  rect(0, 300, 600, 100);

  //sun
  image(sun, -50, -50);

  //clouds
  image(cloud0, cloudX, 36);
  image(cloud1, cloudX + 200, 15);
  image(cloud2, cloudX - 500, 5);
  image(cloud3, cloudX - 350, 20);
  image(cloud4, cloudX - 150, 28);
  cloudX = frameCount % width;

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
