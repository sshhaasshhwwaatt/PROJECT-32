const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hexagon ;
var log1,log2;
var slingslot;
var score=0;

function preload()
{
    logi=loadImage("sprites/l2.png")
    

}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,480,1200,40);

    re12 = new Rectangle(600,170,50,50);
    re13 = new Rectangle(625,220,50,50);
    re14 = new Rectangle(575,220,50,50);
    re15 = new Rectangle(600,270,50,50);
    re11 = new Rectangle(650,270,50,50);
    re1 = new Rectangle(550,270,50,50);
    re2 = new Rectangle(675,320,50,50);
    re3 = new Rectangle(575,320,50,50);
    re4 = new Rectangle(625,320,50,50);
    re5 = new Rectangle(525,320,50,50);
    re6 = new Rectangle(650,370,50,50);
    re7 = new Rectangle(550,370,50,50);
    re8 = new Rectangle(700,370,50,50);
    re9 = new Rectangle(600,370,50,50);
    re10 = new Rectangle(500,370,50,50);
  

    re12d = new Rectangle(1000,70,50,50);
    re13d = new Rectangle(1025,120,50,50);
    re14d = new Rectangle(975,120,50,50);
    re15d = new Rectangle(1000,170,50,50);
    re11d= new Rectangle(950,170,50,50);
    re1d = new Rectangle(1050,170,50,50);
    re2d = new Rectangle(1075,220,50,50);
    re3d = new Rectangle(975,220,50,50);
    re4d = new Rectangle(925,220,50,50);
    re5d = new Rectangle(1025,220,50,50);


    line1=new Log(600,400,300,50)
    line2=new Log(1000,250,300,50)
    
    hexagon = new Hexagon(150,200);
    
    slingshot = new SlingShot(hexagon.body,{x:150, y:200});

}

function draw(){

background(0)    

    Engine.update(engine);


re1.display();
re2.display();
re3.display();
re4.display();
re5.display();
re6.display();
re7.display();
re8.display();
re9.display();
re10.display();
re11.display();
re12.display();
re13.display();
re14.display();
re15.display();

re1d.display();
re2d.display();
re3d.display();
re4d.display();
re5d.display();
re11d.display();
re12d.display();
re13d.display();
re14d.display();
re15d.display();


line1.display();
line2.display();
hexagon.display();
slingshot.display();
ground.display();

textFont("Bodoni MT Black")
fill("Yellow")
textSize(40)
text("Drag the Hexagonal Stone and Release it , ",10,50)
text("to launch it towards the blocks .",10,100)

drawSprites();

textFont("Bodoni MT Black")
fill("red")
textSize(40)
text("SCORE:-"+score,640,150)

}


function mouseDragged(){

        Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
    slingshot.fly();
    //gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(hexagon.body);
       hexagon.trajectory =[];
       Matter.Body.setPosition(hexagon.body,{x:200, y:50});    }
}