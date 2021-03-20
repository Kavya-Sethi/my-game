var back ,bImage;
var hand,hImage;
var bat,batImage;


function preload(){
  bImage=loadImage("images/bkg.jpg")
  hImage=loadImage("images/hand1.png")
  batImage=loadImage("images/bat.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
 back=createSprite(width/2, height/2,windowWidth,height);
back.addImage(bImage)
back.scale=10;


hand=createSprite(width/2,height-70,50,100);
hand.addImage(hImage)

bat=createSprite(hand.x,hand.y-150,10,10);
bat.addImage(batImage);


}

function draw() {
  background(0,0,0);  
  camera.position.x=hand.x
  camera.position.y=hand.y
/*  if(hand.x + width/2 > back.x + back.width/2){
    back.x = camera.position.x;
   
  }
 else if(hand.x - width/2 < back.x - back.width/2){
    back.x = camera.position.x;
   
  }

  else if(hand.y + height/2 > back.y + back.height/2){
    back.y = camera.position.y;
   
  }

  else if(hand.y - height/2 < back.y - back.height/2){
    back.y = camera.position.y;
   
  }*/
 if (keyDown("up")) {
  //  hand.x = 0;
    hand.y -=20;
  }
  if (keyDown("down")) {
    //hand.x = 0;
    hand.y +=20;
  }
  if (keyDown("left")) {
    //hand.y = 0;
    hand.x -=20;
  }
  if (keyDown("right")) {
    //hand.y = 0;
    hand.x +=20;
  }

 bat.x=hand.x;
 bat.y=hand.y;
 
  drawSprites();
}