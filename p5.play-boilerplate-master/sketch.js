var moving,fixed ;
var abc,xyz
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,600,50,50);
  abc = createSprite (300,200,50,50)
  xyz = createSprite(600,200,50,50)
}

function draw() {
  background("blue");  
moving.y = mouseY
moving.x = mouseX

xyz.x = mouseX
xyz.y = mouseY

if (moving.x - fixed.x<moving.width/2+fixed.width/2
  && fixed.x - moving.x<moving.width/2+fixed.width/2
  && moving.y - fixed.y<moving.height/2+fixed.height/2
  && fixed.y - moving.y<fixed.height/2 +fixed.height/2 ){
    moving.shapeColor = "green"
    fixed.shapeColor = "yellow"
  }

  if (xyz.x - abc.x<moving.width/2+fixed.width/2
    && abc.x - xyz.x<xyz.width/2+abc.width/2
    && xyz.y - abc.y<xyz.height/2+abc.height/2
    && abc.y - xyz.y<abc.height/2+fixed.height/2 ){
      xyz.shapeColor = "black"
      abc.shapeColor = "red"
    }

  drawSprites();
}