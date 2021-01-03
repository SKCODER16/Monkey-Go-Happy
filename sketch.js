
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(400,400)
   monkey=createSprite(50,300)
monkey.addAnimation('moving' ,monkey_running  )
  monkey.scale=0.1
  
  ground=createSprite(400,335,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  
    score = 0;
  
  FoodGroup=createGroup()
  
  obstacleGroup=createGroup()
 
  
  
  //obstacle=createSprite(200,300);
 //obstacle.addImage(obstacleImage)
 // obstacle.scale=0.2
  
  
 // banana=createSprite(200,200)
  //banana.addImage(bananaImage)
 // banana.scale=0.1
}


function draw() {
  background("lightblue")
    text("Survival Time: "+ score,20,50);
drawSprites();
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  
  if(keyDown("space")&&monkey.y>299){
     
    monkey.velocityY = -15;
    
    }
monkey.velocityY= monkey.velocityY+.8
  console.log(monkey.y)
  
 monkey.collide(ground);
  
  B();
  O();
  
  
   
  if (FoodGroup.isTouching(monkey)){
    score=score+1
    FoodGroup.destroyEach()
    
     
     }
  if (obstacleGroup.isTouching( monkey)){
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
  monkey.visible=false;
      obstacle.visible=false;
    banana.visible=false;
    score.visible=false;
    text("GAME OVER",200,200)


}
}





function B(){
  if(frameCount%80===0){
    
 banana=createSprite(200,300)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-2
  banana.scale=0.1
  banana.y=Math.round(random(50,250));
    FoodGroup.add(banana)
  
    monkey.depth=banana.depth+1   
  } 
}

function O(){
  if(frameCount%200===0){
    
 obstacle=createSprite(350,300)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.2
  obstacle.velocityX=-2
  obstacle.scale=0.2
  obstacle.y=Math.round(random(300,300));
    obstacleGroup.add(obstacle)
  
    monkey.depth=obstacle.depth+1   
  } 
}



