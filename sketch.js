
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbinLeft,dustbinRight,dustbinDown,ground,dustbinImg,bin1;


function preload()
{
  dustbinImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(150,590,70,70 );
   ground = new Ground(650,610,1800,20,);
   bin1=createSprite(900,520,100,100);
   bin1.addImage(dustbinImg);
   bin1.scale=0.5;
   dustbinDown = new Dustbin(900,595,120,10);
   dustbinLeft = new Dustbin(845,520,10,140);
   dustbinRight = new Dustbin(955,520,10,140);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 

  paper.display();
  ground.display();
  dustbinDown.display();
  dustbinLeft.display();
  dustbinRight.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
   if (keyCode==UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-5})
     
   }
}