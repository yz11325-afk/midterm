let trail = 20;
let x = [];
let y = [];

let xb, yb;
let xspeed, yspeed;
let r = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  xb = width / 2;
  yb = height / 2;
  xspeed = 5;
  yspeed = 3;
  colorMode(HSB, 100);
  
  for(let i = 0; i<trail; i++){
    x[i] = mouseX;
    y[i] = mouseY;
  }
}

function draw() {
  background(0);
  
  ellipse(xb, yb, r * 2, r * 2);
  xb += xspeed;
  yb += yspeed;
  
  if (xb > width - r) {
      xspeed = -xspeed;
    fill(random(255), random(50), random(50));
      }
  if(yb > height -r ) {
    yspeed = -yspeed;
    fill(random(255), random(255), random(255));
  }
  if(xb < 0 + r) {
    xspeed = -xspeed;
    fill(random(255), random(255), random(255));
  }
  if(yb < 0 + r) {
    yspeed = -yspeed;
    fill(random(255), random(255), random(255));
  }

  for (let i = trail - 1; i > 0; i--) {
    x[i] = x[i - 1];
    y[i] = y[i - 1];
  }
  
  for (let i = 0; i < trail; i++) {
    ellipse(x[i], y[i], 40);
  }
  
  x[0] = mouseX;
  y[0] = mouseY;
}