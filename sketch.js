const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  engine = Engine.create();
  world = engine.world;

  var goptions = {
    isStatic: true
  }

  var boptions = {
    restitution: 2
  }

  ground = Bodies.rectangle(200, 390, 400, 20, goptions);
  World.add(world, ground);

  ball = Bodies.circle(200, 200, 30, boptions);
  World.add(world, ball);
  
  
  
  createCanvas(400,400);
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  fill("white");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30);

  drawSprites();
}