const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane , hammer , stone , rubber , sand1 , sand2 , sand3 , sand4 , sand5 , sand6 , sand7 , sand8 , sand9 , sand10;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	plane = new Plane(600,height,1200,20)
	hammer = new Hammer(10,100)
	stone = new Stone(700,320,100,100)
	rubber = new Rubber(900,350,70)
	sand1 = new Sand(505,450,8)
	sand2 = new Sand(510,450,8)
	sand3 = new Sand(515,450,8)
	sand4 = new Sand(520,450,8)
	sand5 = new Sand(525,450,8)
	sand6 = new Sand(530,445,8)
	sand7 = new Sand(535,445,8)
	sand8 = new Sand(540,445,8)
	sand9 = new Sand(545,445,8)
	sand10 = new Sand(550,445,8)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  plane.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();

  drawSprites();
 
}



