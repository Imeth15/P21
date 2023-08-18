
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground, leftWall, rightWall

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball_option = {
		isStatic: false,
		restitution: 0.3, 
		friction : 0,
		density: 1.2
	}

	ball = Bodies.circle(260, 100, 20, ball_option);
	World.add(world, ball);

	ground =  new Ground(width/2, height-20, width, 20);

	leftWall = new Ground(1100, 600, 20, 120);
	rightWall = new Ground(1350, 600, 20, 120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ellipse(ball.position.x, ball.position.y, 40, 40)

  ground.display();
  leftWall.display();
  rightWall.display();
 
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		Matter.Body.applyForce(ball, ball.position,{x: 85, y: -85});
	}
}


