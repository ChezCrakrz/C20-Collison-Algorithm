var fRect, mRect;

function setup() {
  createCanvas(800,400);
  fRect = createSprite(200,100,50,70);
  mRect = createSprite(400,100,70,50);
  fRect.shapeColor = "green";
  mRect.shapeColor = "green";
  fRect.debug = true;
  mRect.debug = true;
}

function draw() {
  background(255,255,255); 
  mRect.x = mouseX;
  mRect.y = mouseY;

  if(mRect.x - fRect.x < mRect.width/2 + fRect.width/2
    && fRect.x - mRect.x < mRect.width/2 + fRect.width/2
    && fRect.y - mRect.y < mRect.height/2 + fRect.height/2
    && mRect.y - fRect.y < mRect.height/2 + fRect.height/2){ 
      fRect.shapeColor = "orange";
      mRect.shapeColor = "orange";
  }
  
  else{
    fRect.shapeColor = "green";
    mRect.shapeColor = "green";
  }

  drawSprites();
}