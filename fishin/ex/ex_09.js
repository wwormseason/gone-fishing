/*
9) animate those shapes (positions + simple wrapping)

Add velocity to each dot, update per frame, and wrap.
*/

let fishes = [];
let checkS = 10;

function preload() {
  fish = loadImage("../assets/ex5a/fish.png");
  check = loadImage("../assets/check.png");
  yay = loadSound("../assets/yay.mp3");
}

function setup() {
  createCanvas(600, 350);

  fish.resize(200, 100);

  noStroke();
}

function draw() {
  background(65, 107, 223);

  for (let m of fishes) {
    // update
    m.x += m.vx;
    m.y += m.vy;

    // wrap around edges
    if (m.x < -m.size) m.x = width + m.size;
    if (m.x > width + m.size) m.x = -m.size;
    if (m.y < -m.size) m.y = height + m.size;
    if (m.y > height + m.size) m.y = -m.size;

    // draw
    tint(m.c);
    image(fish, m.x - 80, m.y - 40, m.size + 100, m.size);
  }

  setTimeout(yayFunc, 5000);

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
  fishes.push({
    x: mouseX,
    y: mouseY,
    vx: random(-2, 2),
    vy: random(-2, 2),
    size: random(50, 150),
    c: color(random(255), random(255), random(255)),
  });
}
