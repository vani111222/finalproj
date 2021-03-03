var character,character1;
var bg,startimg,start,bg1,bg2;
var score=0;
var gameState;

function preload(){
character=loadImage("images/char.png")
bg1=loadImage("images/bg1.jpg")
bg2=loadImage("images/bg2.webp")
startimg=loadImage("images/start.png")
//towerimg=loadImage("images/tower.png")
}
function setup(){
    createCanvas(1200,1200);
    
    bg=createSprite(600,200,1200,1200)
    bg.addImage(bg1);
   bg.velocityY=2;
   bg.scale=1.5;
   bgg=createSprite(600,600)
bgg.addImage(bg2);
bgg.velocityY=2;
bgg.scale=1.5;
bgg.visible=false;
    towerGroup= new Group()
    character1=createSprite(600,900,20,20);
    character1.addImage(character)
    character1.scale=0.5
    start=createSprite(600,600)
    start.addImage(startimg);
    start.scale=0.3

    //tower.addImage(towerimg);
   // tower.scale=0.2;
    
}
function draw(){
    background("black")

    textSize(20);
    fill("White")
    text("Score: "+ score,100,100)        
    if(mousePressedOver(start))
    {
     start.visible=false;
    gameState='PLAY'
        
    }
    if(bg.y>600){

        console.log("DONE");
        bg.visible=false;
       bgg.visible=true;
        //bg.addImage(bg2);
        
    }
    if(bgg.y>700){
        //console.log("DONE");
        bgg.y=600;
      }  
    
    if (gameState==='PLAY'){
        score = score + Math.round(getFrameRate()/60);
    //if (bg2.y<0){
       // bg2.y=bg2.displayWidth/2;
    //}
    if (keyDown("space")){
        character1.velocityY=-7
    }
        character1.velocityY = character1.velocityY + 0.8
    
      if (keyDown("left_arrow")){
        character1.x=character1.x-3
    }
      if (keyDown("right_arrow")){
        character1.x=character1.x+3
    }
    //bg4();
    if (character1.y>=1200){
        gameState='END'
        console.log("game over")
    }
    
    
    if(towerGroup.isTouching(character1)){
        character1.velocityY = 0;
      }
      
}
if (gameState==='END'){
    fill("White")
    textSize(100)
    text("TRY AGAIN",600,600);
}
towers();

    drawSprites();
}
function towers (){
    if(frameCount % 60 === 0){
    tower=createSprite(random(200,1000),-50,100,20)
    tower.shapeColor="255";
    tower.velocityY=3;
    towerGroup.add(tower)
    }
    
}

/*function bg4 (){

    bg2=createSprite(displayWidth,displayHeight,displayWidth,displayHeight)
    bg2.addImage(bg)
    
    
    bg2.velocityY=-2;
    if (bg2.y<0){
        bg2.addImage(bg1)
    }

}*/
