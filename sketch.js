
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var car,wall;
var speed, weight;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
	car=createSprite(50, 200, 50,50)
speed=random(55,99)
weight=random(400,1500)
	engine = Engine.create();
	world = engine.world;
wall=createSprite(1500,200, 60, height/2)
	//Create the Bodies Here.
car.velocityX = speed;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
	  car.velocityX=0;
	  var deformation=0.5*weight*speed*speed/22509;
	  if(deformation>180)
	  {
		  car.shapeColor=color(255,0,0);
	  }

	  if(deformation<100)
	  {
		  car.shapeColor=color(0,255,0)
	  }
  }
  drawSprites();
 
}



