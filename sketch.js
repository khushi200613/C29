const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit
var chain

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(250,680,500,20)
  rope = new Rope(7,{x:250,y:100})
  fruit = Bodies.circle(300,300,15)
  Composite.add(rope.body,fruit)
  chain = new Link(rope,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.display()
  rope.show()
  ellipse(fruit.position.x,fruit.position.y,15,15)
  
  Engine.update(engine);
  

 
   
}
