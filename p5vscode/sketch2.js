let img;
let imgSize = 0.5;
let x, y;
let xVel = 10;
let yVel = 7;
let degree = 0;
let hueValue = 0;

function preload(){
  img = loadImage('one.png')
  //print(img);
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);
  
  x = width/2
  y = height/2

  colorMode(HSB, 100);
}
function draw() {
  background(hueValue, 100, 100);
  hueValue = (hueValue + 1) % 100;
  //imgSize = map(mouseX,0,width,1,10);
  
  //print(mouseX);
  
  image(img,x,y,img.width/imgSize,img.height/imgSize);
  
  x+=xVel;
  y+=yVel;
  
  if(x > width - (img.width/imgSize)/2){
    xVel = -xVel;
  }
  
  if(x < 0 + (img.width/imgSize)/2){
    xVel = -xVel;
  }
  
   if(y > height - (img.height/imgSize)/2){
    yVel = -yVel;
  }
  
  if(y < 0 + (img.height/imgSize)/2){
    yVel = -yVel;
  }
  
  translate(mouseX, mouseY);
  
  fill('#34ebd8');
  ellipse(0,0,50,50);
  
  push();
  rotate(degree);
  translate(60,0);
  fill('#34eb96');
  ellipse(0,0,25,25);
  pop();
  
  degree = degree + 0.3;
    
}