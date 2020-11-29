const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygon_img;
var score = 0;
function preload() {
  polygon_img = loadImage("polygon.png");
}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Base();
  stand1 = new Ground(360, 300, 250, 10);
  stand2 = new Ground(670, 240, 200, 10);

  
  block1 = new Block(310, 275, 40, 40);
  block2 = new Block(330, 235, 40, 40);
  block3 = new Block(350, 275, 40, 40);
  block4 = new Block(370, 235, 40, 40);
  block5 = new Block(390, 275, 40, 40);
  block6 = new Block(350, 195, 40, 40);
  blocks1 = new Block(620, 215, 40, 40);
  blocks2 = new Block(660, 215, 40, 40);
  blocks3 = new Block(640, 175, 40, 40);
  blocks4 = new Block(700, 215, 40, 40);
  blocks5 = new Block(680, 175, 40, 40);
  blocks6 = new Block(660, 135, 40, 40);

  
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  slingShot = new Slingshot(this.ball, { x: 100, y: 200 });
}
function draw() {
  background(153, 217, 234);


  textSize(20);
  fill("red");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  text("Score : " + score,750,50)
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  imageMode(CENTER);
  image(polygon_img, ball.position.x, ball.position.y, 40, 40);
}
function mouseDragged() {
  Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.ball);
  }
}