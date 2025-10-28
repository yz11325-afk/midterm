let x = 50;
let y = 50;
let speed = 3;
let radius = 10;

let walls = [];
let goal;

function setup() {
  createCanvas(800, 600);
  generateMaze();
}

function draw() {
  background(230);

  moveCircle();
  checkCollisions();

  fill(100);
  for (let wall of walls) {
    rect(wall.x, wall.y, wall.w, wall.h);
  }

  fill(255, 180, 0);
  ellipse(goal.x, goal.y, goal.r * 2);

  fill(0, 120, 255);
  ellipse(x, y, radius * 2);

  checkGoal();
}

function moveCircle() {
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) x -= speed; 
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) x += speed; 
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) y -= speed; 
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) y += speed; 
}

function generateMaze() {
  walls = [];
  let numWalls = 20;
  for (let i = 0; i < numWalls; i++) {
    let w = random(50, 200);
    let h = random(20, 100);
    let wx = random(0, width - w);
    let wy = random(0, height - h);
    walls.push({ x: wx, y: wy, w: w, h: h });
  }

  walls.push({ x: 0, y: 0, w: width, h: 20 });
  walls.push({ x: 0, y: height - 20, w: width, h: 20 });
  walls.push({ x: 0, y: 0, w: 20, h: height });
  walls.push({ x: width - 20, y: 0, w: 20, h: height });

  goal = {
    x: random(100, width - 100),
    y: random(100, height - 100),
    r: 20
  };

  x = 50; //when reset
  y = 50;
}

function checkCollisions() {
  for (let wall of walls) {
    let closestX = constrain(x, wall.x, wall.x + wall.w);
    let closestY = constrain(y, wall.y, wall.y + wall.h);

    let dx = x - closestX;
    let dy = y - closestY;
    let distance = sqrt(dx * dx + dy * dy);

    if (distance < radius) {
      let overlap = radius - distance;
      let angle = atan2(dy, dx);
      x += cos(angle) * overlap;
      y += sin(angle) * overlap;
    }
  }
}

function checkGoal() {
  let d = dist(x, y, goal.x, goal.y);
  if (d < radius + goal.r) {
    generateMaze();
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    generateMaze();
  }
}