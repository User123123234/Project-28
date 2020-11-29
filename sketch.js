
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var tree, boy;
var m1,m2,m3;
var ms1,ms2,ms3;
var bird, sling;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

m1= new Mango(600,330,20,20)
ms1= new SlingShot(m1.body,{x:600, y:330})




bird=new Bird(100,500,50,50)
sling=new SlingShot(bird.body,{x:100, y:500})
tree= new Tree(600,350)
boy= new Boy(100,500)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 tree.x = 600;
 tree.y = 350;


if (Matter.Detector.canCollide(m1, bird)==true){
sling.fly()



}


boy.display()
tree.display()
bird.display()
sling.display()



m1.display()


mouseDragged
mouseReleased

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function detectcollision(){


}
