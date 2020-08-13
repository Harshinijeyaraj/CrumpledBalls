
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,ball1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	box1 = new Box(780,680,50,50);
	ball1 = new Ball(100,680,20,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  ball1.display();
  
  drawSprites();
 
}



