function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(300, 300, 70, 70);
}

function draw() {
  background("purple");  
  moving.x = mouseX
  moving.y = mouseY
  if(abs(fixed.x-moving.x)<=fixed.width/2+moving.width/2 &&
  abs(fixed.y-moving.y)<=fixed.height/2+moving.height/2){
fixed.shapeColor="blue"
moving.shapeColor="blue"
  }else{
fixed.shapeColor="orange"
moving.shapeColor="orange"
  }
  drawSprites();
}