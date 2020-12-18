var car1,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car1 = createSprite(50, 200, 50, 50);
  car1.shapeColor = ("lightblue");
  wall = createSprite(1200,200,40,height/2);
  wall.shapeColor = (80,80,80);

  speed = random(50,110);
  weight = random(400,1200);
}

function draw() {
  background(255,255,255);  

  car1.velocityX = speed;
  car1.debug = true;
wall.debug = true;
  

if(wall.x-car1.x <  (car1.width + wall.width)/2){
  
     car1.velocityX = 0;


  deformation = 0.5 * speed *speed * weight/22500;  
  if (deformation < 100){
    car1.shapeColor = (0,255,0);
  }
}
  if (deformation < 100 && 180 > deformation){
  car1.shapeColor = ("red");
  }
    
  if (deformation > 180){
    car1.shapeColor = (255,0,0);
  }


   drawSprites();

   
}