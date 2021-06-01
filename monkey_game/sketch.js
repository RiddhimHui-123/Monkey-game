
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(670,400);
  score=0;
var  survivalTime=0;

     monkey=createSprite(90,375,10,10)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  
  
   ground=createSprite(0,400,1500,10);
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  
  background("green");


  monkey.collide(ground);
  
  if(keyDown("space")&&monkey.y>300){
    
    monkey.velocityY=-10;
    
  
    
  }
  
  

  
  monkey.velocityY=monkey.velocityY+0.3;
  
  ground.velocityX=-7
  ground.x=ground.width/2;
  
 if(World.frameCount%200===0){
   
   fruits();
 }
  
 if(World.frameCount%300===0){
   
   stones();
 }

  
  
  if(monkey.isTouching(FoodGroup)){
    
    FoodGroup.destroyEach();
  }
  
  drawSprites();

   
  
  
    fill("white") 
  text("Score: "+ score, 500,50);
  
  fill("black")
  var survivalTime=Math.round(getFrameRate()/1);
  text("Survival Time: "+ survivalTime,350,50)
}

function fruits(){
  banana=createSprite(670,Math.round(random(150,300)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1;
  banana.velocityX=-3;
FoodGroup.add(banana);
}

function stones(){
  obstacle=createSprite(670,380,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.5
obstacleGroup.add(obstacle);
}







