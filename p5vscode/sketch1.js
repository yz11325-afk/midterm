let xR = 0;
let col1, col2, col;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0);
  
  col1 = color(random(255), random(255), random(255));
  col2 = color(random(255), random(255), random(255));
}

function draw() {
  rect(xR,0, 10,height)
  
  let i = map(xR, 0, width, 0,1) 
  col = lerpColor(col1, col2,i)
  
  fill(col);
  
  xR+=5;
  
  if(xR > width * 2){
  col1 = color(random(255),random(255),random(255));
  col2 = color(random(255),random(255),random(255));
  xR = 0;
    
  }
}