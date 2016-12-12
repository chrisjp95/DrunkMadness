function enemyHit(enemy,bullet){
//create explosion when bullet hits
  for(var i = 0; i<10; i++) {
    var p = createSprite(bullet.position.x, bullet.position.y,4,4);
    
    p.setSpeed(random(3,5), random(360));
    p.friction = 0.95;
    p.life = 15;
  }
  heroState = 'regular';
  enemy.remove();
  bullet.remove();
  enemies.overlap(bullets,enemyHit);
  
  
    score++;
    
    if(score == 15){
    heroHealth = 3;
    gameState = 'countDown1';
    levelOne_music.stop();
    levelTwo_music.loop();
    }
    if(score == 30){
    heroHealth = 3;
    gameState = 'countDown2';
    levelTwo_music.stop();
    levelThree_music.loop();
    }
    if(score == 45){
    gameState = 'win';
    levelThree_music.stop();
    win_music.loop();
    } 
  } 
 


function heroHit(enemy,hero){
  heroState = 'regular';
  heroHealth--;
  if(heroHealth <= 0){
    gameState = 'lose';
    lose_music.loop();
    
    levelOne_music.stop();
    levelTwo_music.stop();
    levelThree_music.stop();
  }
  
  enemy.remove();
  
}
function powerHit(powerUp,hero){
  powerUp.remove();
  heroState = "power";
}
