var wall,thickness,bullet,speed,weight;
function setup() {
createCanvas(800,400)
thickness=random(22,83)
speed=random(20,50)
weight=random(1000,3000)

bullet=createSprite(10,200,50,20);
bullet.shapeColor="white"
 wall=createSprite(400,200,thickness,height/2);
 wall.shapeColor=color(80,80,80)
}

function draw() {
background("black")
fill("orange")
text("Damage : 0.5*weight*speed*speed/(thickness*thickness*thickness)",40,40)

bullet.velocityX=speed;

if(collided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
   
   if(damage>10){
      wall.shapeColor=color(255,0,0)
      wall.destroy()
   }
   if(damage<10){
     wall.shapeColor=color(0,255,0);
     wall.destroy()
   }
  }
  if( keyDown("r")){
    reset();
  }


drawSprites();
}
function collided(lbullet,lwall){
  if(lwall.x-lbullet.x<(lbullet.width+lwall.width)/2)
  {
  
  return true;
  }
  else{
  return false;
}
}
function reset(){
  bullet.destroy();
  thickness=random(22,83)
speed=random(20,50)
weight=random(1000,3000)

bullet=createSprite(10,200,50,20);
bullet.shapeColor="white"
 wall=createSprite(400,200,thickness,height/2);
 wall.shapeColor=color(80,80,80)
}