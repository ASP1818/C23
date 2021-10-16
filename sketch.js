
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground,groudLeftSide,groudRightSide;
var radius = 40;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;
    
	var options={
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
  ball = Bodies.circle(260,100,radius/2, options);
  World.add(world,ball);
 
  ground = new Ground(width/2,670,width, 20);
  groundLeftSide = new Ground(1100,600,20,120);
  groundRightSide = new Ground(1350,600,20,120)
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, radius, radius);
  ground.display();
  groundLeftSide.display();
  groundRightSide.display();
  
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
}
   

}


 




