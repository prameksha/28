
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var landscape


function preload()
{

	landscape = loadImage("BackgroundI.jpg");


	
}

function setup() {
	createCanvas(1350,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(landscape);
  
  drawSprites();
 
}



