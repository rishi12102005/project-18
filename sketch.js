var monkey,monkey_running;
var ground;
var jungle,jungleImage;
var bananaImage;

function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  jungleImage = loadImage("jungle.jpg");
  bananaImage = loadImage("banana.png");
}

function setup(){
  var canvas = createCanvas(1200,600);
jungle = createSprite(750,300,10000000,100000000);
jungle.addImage(jungleImage);
jungle.scale = 1.8;

  monkey = createSprite(50,500,40,40);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;

  ground = createSprite(600,570,1200,30);
  ground.visible = false;
}

function draw(){
  background("cyan");

  jungle.velocityX= -5;
  if(jungle.x<300){
    jungle.x = jungle.width/2  +300;
  }
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  spawnBananas();
drawSprites();
}

function spawnBananas(){
  if(frameCount%60===0){
    var banana = createSprite(1200,300,40,40);
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.y= Math.round(random(50,500));
    banana.velocityX = -5;
  }
 
}


