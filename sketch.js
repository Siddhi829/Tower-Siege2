const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,stand1,stand2;
var polygon_img,polygon;

var block1,block2 ,block3 ,block4  ,block5 ,block6 ,block7 ,block8 ,block9,block10,block11,block12,block13,block14,block15,block16; 




function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);
 
  //level one
  block1 = new Box(300,275,30,40);
  //console.log(block1);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  //top
  block16 = new Box(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Box(640,175,30,40);
  blocks2 = new Box(670,175,30,40);
  blocks3 = new Box(700,175,30,40);
  blocks4 = new Box(730,175,30,40);
  blocks5 = new Box(760,175,30,40);
  //level two
  blocks6 = new Box(670,135,30,40);
  blocks7 = new Box(700,135,30,40);
  blocks8 = new Box(730,135,30,40);
  //top
  blocks9 = new Box(700,95,30,40);



    polygon= new Polygon(50,200,50,50)
    

    sling = new SlingShot(polygon.body,{x:100,y:200});
    
}


    function draw(){
        background("lightyellow");
        Engine.update(engine);
        strokeWeight(4);
        stand1.display();
        stand2.display();
        strokeWeight(2);
        stroke(15);
        fill("lightgreen");
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        fill("pink");
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        fill("turquoise");
        block13.display();
        block14.display();
        block15.display();
        fill("grey");
        block16.display();
        fill("lightgreen");
        blocks1.display();
        blocks2.display();
        blocks3.display();
        blocks4.display();
        blocks5.display();
        fill("turquoise");
        blocks6.display();
        blocks7.display();
        blocks8.display();
        fill("pink")
        blocks9.display();

        polygon.display();
        sling.display(); 
        ground.display();
        //stand.display();   
    }
    
    function mouseDragged(){
        Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
    
    
    }
    
    function mouseReleased(){
        sling.release()
    
    
    }

    function keyPressed(){
        if(keyCode === 32){
       
            sling.attach(polygon.body);
        }






    }
