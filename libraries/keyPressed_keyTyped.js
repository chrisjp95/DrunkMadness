function keyPressed(){
  if(keyCode == RIGHT_ARROW){
    hero.setSpeed(12,0);
    //hero animation plays turn Right animation
    hero.changeAnimation("heroRight");
    //hero resets to default animation
    hero.animation.changeFrame(0);
  }else if(keyCode == LEFT_ARROW){
    hero.setSpeed(12,180);
    //Change to left Turn animation
    hero.changeAnimation("heroLeft");
    //hero resets to default animation
    hero.animation.changeFrame(0);
  }else if(key==' '){
   if(heroState == 'regular'){
      //create bullet at the location of the hero and set the size
      var bullet = createSprite(hero.position.x,hero.position.y,10,10);
      bullet.setSpeed(40,270);
      bullet.life = 80;
      bullets.add(bullet);
      bullet.addImage(bulletImg);
    }
    if(heroState == 'power'){
      for(var i = 0;i < 5;i++){
      //create bullet at the location of the hero and set the size
      bullet = createSprite(hero.position.x,hero.position.y,10,10);
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
    }
}