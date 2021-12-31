
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball2
var ground2
var ball3
var ground3
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   var ball2_options={
     restitution:1,
     frictionAir:0.02
   }
   var ball3_options ={
    restitution:2,
    frictionAir:0.05
  }

   var ground_options ={
     isStatic: true
   };
   var ground2_options={
     isStatic:true
   }
   var ground3_options={
    isStatic:true
  }
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground2 = Bodies.rectangle(300,200,50,20,ground2_options);
  World.add(world,ground2);

  ball2=Bodies.circle(350,10,20,ball2_options)
  World.add(world,ball2)

  ground3 = Bodies.rectangle(100,200,50,20,ground3_options);
  World.add(world,ground3);
  
  ball3=Bodies.circle(50,10,20,ball3_options)
  World.add(world,ball3)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
  ellipse(ball2.position.x,ball2.position.y,20)
  rect(ground2.position.x,ground2.position.y,50,20)

  ellipse(ball3.position.x,ball3.position.y,20)
  rect(ground3.position.x,ground3.position.y,50,20)
}

