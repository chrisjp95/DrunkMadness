var hero; 
//declare hero state
var heroState = 'regular';
var heroHealth = 3;
var heroSpeed = 8;
var heroDefault,heroLeft,heroRight;

var score = 0;

var enemy;
var enemies;
var enemyDrunkess = 8;
var enemyRate = 120;
var enemyAngle = 80;
var enemyOneImg,enemyTwoImg,enemyThreeImg;
var canvasMultiplier = 40;

var powerUps;
var powerRate = 500;
var powerUpImg;

//variables for background images
var titleImg;

var road;

var bullet;
var bulletImg;

var explosionDensity = 12;

var gameState = 'startup';
var countDowntimer1 = 0;
var countDown1Img;
var countDowntimer2 = 0;
var countDown2Img;

var level1ScoreAdvance = 4;
var level2ScoreAdvance = 8;
var level3ScoreAdvance = 12;



//variables for health
var health_end,health_half,health_end;

var win,lose;
var enemyVelProb = 20;
var enemyVelChange = 2;

//SOUNDS
var gunshot;
var levelOne_music;
var levelTwo_music;
var levelThree_music;
var win_music;
var lose_music;
var title_music;

var animation_sheet; //only one of these each sheet

// one for for each animation
 
///////////////////////////////////////////////////////
   //DEFAULT ANIMATION
  
var hero_animation_default;
var hero_default_sheet;

var heroDefault_frames = [

  {'name':'hero_default', 'frame':{'x':0, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'hero_default_smoke', 'frame':{'x':256, 'y': 0, 'width': 256, 'height': 256}},

  ]; // one for each animation
  
///////////////////////////////////////////////////////
  //LEFT ANIMATION
  
var hero_animation_left;
var hero_left_sheet;

var heroLeft_frames = [

  {'name':'hero_left', 'frame':{'x':512, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'hero_left_smoke', 'frame':{'x':768, 'y': 0, 'width': 256, 'height': 256}},

  ]; // one for each animation
  
///////////////////////////////////////////////////////
  //RIGHT ANIMATION
  
var hero_animation_right;
var hero_right_sheet;


var heroRight_frames = [

  {'name':'hero_right', 'frame':{'x':1024, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'hero_right_smoke', 'frame':{'x':1280, 'y': 0, 'width': 256, 'height': 256}},

  ]; // one for each animation
///////////////////////////////////////////////////////
  //DEFAULT ENEMY ONE ANIMATION
  
var enemyOne_animation;
var enemyOne_sheet;

var enemyOne_frames = [

  {'name':'enemyOne', 'frame':{'x':0, 'y': 256, 'width': 256, 'height': 256}},


  ]; // one for each animation
  
///////////////////////////////////////////////////////
  //DEFAULT ENEMY TWO ANIMATION
  
var enemyTwo_animation;
var enemyTwo_sheet;

var enemyTwo_frames = [

  {'name':'enemyTwo', 'frame':{'x':256, 'y': 256, 'width': 256, 'height': 256}},


  ]; // one for each animation
  
///////////////////////////////////////////////////////
  //DEFAULT ENEMY Three ANIMATION
  
var enemyThree_animation;
var enemyThree_sheet;

var enemyThree_frames = [

  {'name':'enemyThree', 'frame':{'x':512, 'y': 256, 'width': 256, 'height': 256}},


  ]; // one for each animation
  
///////////////////////////////////////////////////////


function preload(){
////HERO/////////////////////////////////////////////////////////
  //DEFAULT
  hero_default_sheet = loadSpriteSheet('assets/animation_sheet.png',heroDefault_frames);
  hero_animation_default = loadAnimation(hero_default_sheet);
  //hero_animation_default.looping = false;
  
  //LEFT
  hero_left_sheet = loadSpriteSheet('assets/animation_sheet.png',heroLeft_frames);
  hero_animation_left = loadAnimation(hero_left_sheet);
 // hero_animation_left.looping = false;
  //RIGHT
  hero_right_sheet = loadSpriteSheet('assets/animation_sheet.png',heroRight_frames);
  hero_animation_right = loadAnimation(hero_right_sheet);
  //hero_animation_right.looping = false;
///////////////////////////////////////////////////////////
////ENEMIES////////////////////////////////////////////////

  //ENEMY ONE
  enemyOne_sheet = loadSpriteSheet('assets/animation_sheet.png',enemyOne_frames);
  enemyOne_animation = loadAnimation(enemyOne_sheet);
  //ENEMY TWO
  enemyTwo_sheet = loadSpriteSheet('assets/animation_sheet.png',enemyTwo_frames);
  enemyTwo_animation = loadAnimation(enemyTwo_sheet);
  //ENEMY Three
  enemyThree_sheet = loadSpriteSheet('assets/animation_sheet.png',enemyThree_frames);
  enemyThree_animation = loadAnimation(enemyThree_sheet);
  
  titleImg = loadImage("assets/title.png");
  
  health_end = loadImage("assets/health_end.png");
  health_half = loadImage("assets/health_half.png");
  health_full = loadImage("assets/health_full.png");
  
  road = loadAnimation("assets/road_00000.png" , "assets/road_00023.png");

  /*enemyOneImg = loadImage("assets/enemy1.png");
  enemyTwoImg = loadImage("assets/enemy2.png");
  enemyThreeImg = loadImage("assets/enemy3.png");
  */
  //powerUpImg = loadAnimation("assets/wrench_00000.png" , "assets/wrench_00003.png");
  powerUpImg = loadImage("assets/wrench_00001.png");
  
  countDown1Img = loadImage("assets/countDown1Img.png");
  countDown2Img = loadImage("assets/countDown2Img.png");
  
  winImg = loadImage("assets/win.png");
  loseImg = loadImage("assets/lose.png");
  gunshot = loadSound("assets/shot_01.mp3");
  levelOne_music = loadSound("assets/levelOne.mp3");
  levelTwo_music = loadSound("assets/levelTwo.mp3")
  levelThree_music = loadSound("assets/levelThree.mp3")
  title_music = loadSound("assets/title.mp3")
  lose_music = loadSound("assets/lose.mp3")
  win_music = loadSound("assets/win.mp3")
 
 
  /*hero = loadImage("assets/hero.png");
  heroLeft = loadAnimation("assets/heroLeft_00000.png" , "assets/heroLeft_00003.png");
  heroRight = loadAnimation("assets/heroRight_00000.png" , "assets/heroRight_00003.png");
  */
  bulletImg = loadImage("assets/bullet.png");
}


function setup(){
  title_music.loop();
  var tempWidth = canvasMultiplier *9;
  var tempHeight = canvasMultiplier *16;
  createCanvas(tempWidth,tempHeight);
  
  
  bullets = new Group();
  enemies = new Group();
  powerUps = new Group();
  
  
  hero = createSprite(width/2,height*.8,30,30);
  hero.scale = .5;
  //use animation
  hero.addAnimation('heroDefault_frames',hero_animation_default);
  hero.addAnimation('heroLeft_frames',hero_animation_left);
  hero.addAnimation('heroRight_frames',hero_animation_right);
  hero.friction = 0.85;
  
  //hero.addImage("hero");
  //hero.shapeColor = 'white';
  //add all animations to the hero
/*
  hero.addAnimation("heroLeft", heroLeft);
 
  hero.addAnimation("heroRight", heroRight);
 
  //start animating with the default
  hero.addAnimation("heroDefault", heroDefault);
  hero.changeAnimation("heroDefault");
  */
  
}

function draw(){
  
  switch(gameState){
    case 'startup':
      //draw image to background
      background(titleImg);
      break;
      
    case 'lose':
      background(loseImg);
      break;
      
    case 'win':
      background(winImg);
      break;
      
    case 'levelOne':
      levelOne();
      break;
      
    case 'levelTwo':
      levelTwo();
      break;

    case 'levelThree':
      levelThree();
      break;
     
    case 'countDown1':
      background(0);
      animation(road,width/2,height/2);
      fill('white');
      textSize(32);
      //only runs first time through countdown
      if(countDowntimer1 === 0){
        countDowntimer1 = frameCount;
      }
      var flooredCount =floor((frameCount - countDowntimer1)/60);
      //runs every time
      textAlign(CENTER);
      textSize(32);
      fill('white');
      text("Get Ready for Level 2 ", width/2, 100);
      textSize(200);
      if((3 - flooredCount) <= 0){
        text("GO!");
      }else{
        text(3 - flooredCount, width/2, 400);
      }
      
      //advance to level 2
      if(flooredCount > 3){
        gameState = "levelTwo";
      }
      break;
      
      case 'countDown2':
      background(0);
      animation(road,width/2,height/2);
      textSize(32);
      fill('white');
      //only runs first time through countdown
      if(countDowntimer2 === 0){
        countDowntimer2 = frameCount;
      }
      flooredCount =floor((frameCount - countDowntimer2)/60);
      //runs every time
      textAlign(CENTER);
      textSize(32);
      fill('white');
      text("Get Ready for Level 3 ", width/2, 100);
      textSize(200);
      text(3 - flooredCount, width/2, 400);
      //advance to level 2
      if(flooredCount > 3){
        gameState = "levelThree";
      }
      break;
  }
}

function keyPressed(){
   if(keyCode == RIGHT_ARROW){
      hero.setSpeed(12,0);
      //hero animation plays turn Right animation
      hero.changeAnimation('heroRight_frames');
      
      //hero resets to default animation
      hero.changeAnimation('heroDefault_frames');
    
      
   }else if(keyCode == LEFT_ARROW){
      hero.setSpeed(12,180);
      //Change to left Turn animation
      hero.changeAnimation('heroLeft_frames');
      
      //hero resets to default animation
      hero.changeAnimation('heroDefault_frames');
    
   }else if(key==' '){
      //sound settings
      var loudness = random(0.7,1);
      var panning = map(hero.position.x,0,width,-1,1);
      gunshot.pan(panning);
      gunshot.amp(loudness);
      //gunshot sound will play when spacebar is pressed
      gunshot.play();
    
   if(heroState == 'regular'){
      //create bullet at the location of the hero and set the size
      var bullet = createSprite(hero.position.x,hero.position.y,90,90);
      bullet.setSpeed(40,270);
      bullet.life = 80;
      bullets.add(bullet);
      bullet.addImage(bulletImg);
    }
   if(heroState == 'power'){
      for(var i = 0;i < 3;i++){
      //create bullet at the location of the hero and set the size
      var bullet = createSprite(hero.position.x,hero.position.y,90,90);
      var angle = 255 + (i*15);
      bullet.setSpeed(40,angle);
      bullet.life = 80;
      bullets.add(bullet);
      bullet.addImage(bulletImg);
      }
    }
  }
}
function keyTyped(){
  if(key == 'x'){
    gameState= 'levelOne';
    title_music.stop();
    levelOne_music.loop();
    }
}
