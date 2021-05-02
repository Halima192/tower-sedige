const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world; 

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_img;
//set one
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block21;

var blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9;
var slingshot;
function preload() {

}

function setup(){
   
    engine = Engine.create();
    world = engine.world;
 createCanvas(1200,400);
    ground=new Ground();
stand1=new Ground(380,300,270,10)
stand2=new Ground(700,200,200,10)
ball=new pantagon(50,200,50,50)
slingshot=new SlingShot(ball.body,{x:200,y:100})
//level one
block1=new Block (280,275,30,40)
block2=new Block(310,275,30,40);
block3=new Block(340,275,30,40);
block4=new Block(370,275,30,40);
block5=new Block(400,275,30,40);
block6=new Block(430,275,30,40);
block7=new Block(460,275,30,40);
block8=new Block(490,275,30,40);

//level two
block9=new Block(310,235,30,40);
block10=new Block(340,235,30,40);
block11=new Block(370,235,30,40);
block12=new Block(400,235,30,40);
block13=new Block(430,235,30,40);
block14=new Block(460,235,30,40);

//level three
block15=new Block(340,195,30,40);
block16=new Block(370,195,30,40);
block17=new Block(400,195,30,40);
block18=new Block(430,195,30,40);



//level five
block21=new Block(385,155,30,40);


//set two
//level one
blocks1=new Block (640,175,30,40)
blocks2=new Block(670,175,30,40);
blocks3=new Block(700,175,30,40);
blocks4=new Block(730,175,30,40);
blocks5=new Block(760,175,30,40);

//level two
blocks6=new Block(670,135,30,40);
blocks7=new Block(700,135,30,40);
blocks8=new Block(730,135,30,40);

//level three
blocks9=new Block(700,95,30,40);
}

function draw(){
    
    Engine.update(engine);
background("white")
    ground.display();
    stand1.display();
    stand2.display();
    ball.display();
    slingshot.display();
    //set one
    block2.display();
    block1.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
  
    block21.display();

    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    blocks6.display();
    blocks7.display();
    blocks8.display();
    blocks9.display();
}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{
    x:mouseX,
    y:mouseY
})
}

function mouseReleased(){
slingshot.fly()
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(ball.body)
    }
}