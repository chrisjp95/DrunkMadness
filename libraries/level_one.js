function levelOne(){
      
  if (frameCount%70 === 0){
    var enemy = createSprite(random(width), 0, 40, 40);
    enemy.setSpeed(4,90);
    enemy.life = 200;
    enemies.add(enemy);
    enemy.addAnimation('enemyOne_frames',enemyOne_animation);
    enemy.scale = .5;
  }
  
  for(var i = 0;i < enemies.length;i++){
    if(random(100) < 10){
      enemies[i].velocity.x += random(-2,2)
    }
  }
    if (frameCount%powerRate === 0){
    var powerUp = createSprite(random(width), 0, 40, 40);
      powerUps.add(powerUp);
      powerUp.setSpeed(2,90);
      powerUp.life = 1500;
      //powerUp.addAnimation('powerUps',powerUpImg);
      powerUp.addImage('powerUps',powerUpImg);
    
  }
  
  
  background(0);
  animation(road,width/2,height/2);
  
  enemies.overlap(bullets,enemyHit);
  enemies.overlap(hero,heroHit);
  powerUps.overlap(hero,powerHit);
  
  textSize(16);
  fill('white');
  textAlign(CENTER);
  text("Drunken Deaths: " + score,95,620);
  //HEALTH BAR//
  textSize(16);
  fill('white');
  textAlign(CENTER);
  text("Your Health",250,598);
  
    switch(heroHealth){
        case 1:
          image(health_end,200,600);break;
        case 2:
          image(health_half,200,600);break;
        case 3:
          image(health_full,200,600);break;
    }
  
  //find out if we are playing the left turn animation
  //is the left turn animation over?
  /*if(hero.getAnimationLabel() == "heroLeft" && hero.animation.getFrame() === hero.animation.getLastFrame()){
    hero.changeAnimation("heroDefault");
    //start at the beginning
    hero.animation.changeFrame(0);
  }
  if(hero.getAnimationLabel() == "heroRight" && hero.animation.getFrame() === hero.animation.getLastFrame()){
    hero.changeAnimation("heroDefault");
    //start at the beginning
    hero.animation.changeFrame(0);
  }
*/
  
  drawSprites();
  
  
  
}