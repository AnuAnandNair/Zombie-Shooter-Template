var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;

var score = 0;
var life = 3;
var bullets = 70;

var heart1, heart2, heart3

var gameState = "fight"

var lose, winning, explosionSound;


function preload(){
  
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zombieImg = loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")

  lose = loadSound("assets/lose.mp3")
  winning = loadSound("assets/win.mp3")
  explosionSound = loadSound("assets/explosion.mp3")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(width/2-20,height/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1;
  

  //creating the player sprite

   //creating sprites to depict lives remaining   

    //creating groups for zombies and bullets
}

function draw() {
  background(255); 


if(gameState === "fight"){

  

  //go to gameState "lost" when 0 lives are remaining
  

  //go to gameState "won" if score is 100
  

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")){
  
}
if(keyDown("DOWN_ARROW")){
 
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  
}

//go to gameState "bullet" when player runs out of bullets


//destroy the zombie when bullet touches it and increase score

//reduce life and destroy zombie when player touches it

//calling the function to spawn zombies

}




drawSprites();

//displaying the score and remaining lives and bullets
textSize(20)
  fill("white")


//destroy zombie and player and display a message in gameState "lost"

//destroy zombie and player and display a message in gameState "won"


//destroy zombie, player and bullets and display a message in gameState "bullet"


}


//creating function to spawn zombies
function enemy(){
  if(frameCount%100===0){

    
  }

}
