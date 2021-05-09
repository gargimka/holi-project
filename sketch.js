const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("bg1.jpg");
}

function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 580, 1000, 20);

  hero = new Hero(200,340,150);
  rope = new Rope(hero.body, { x: 200, y: 50 });
  monster = new Monster(900,200,300);
  rope2=new Rope (monster.body,{x:1100,y:50}); 

  box1 = new Box(400, 500, 50, 70);
  box2 = new Box(460, 500, 50, 70);
  box3 = new Box(510, 500, 50, 70);
  box4 = new Box(570, 500, 50, 70);
  box5 = new Box(620, 500, 50, 70);
  box6 = new Box(680, 500, 50, 70);

  box7 = new Box(400, 430, 50, 70);
  box8 = new Box(460, 430, 50, 70);
  box9 = new Box(510, 430, 50, 70);
  box10 = new Box(570,430, 50, 70);
  box11 = new Box(620,430, 50, 70);
  box12= new Box(680, 430, 50, 70);

  box13= new Box(400, 360, 50, 70);
  box14= new Box(460, 360, 50, 70);
  box15= new Box(510, 360, 50, 70);
  box16= new Box(570, 360, 50, 70);
  box17= new Box(620, 360, 50, 70);
  box18= new Box(680, 360, 50, 70);

  box19= new Box(400, 290, 50, 70);
  box20= new Box(460, 290, 50, 70);
  box21= new Box(510, 290, 50, 70);
  box22= new Box(570, 290, 50, 70);
  box23= new Box(620, 290, 50, 70);
  box24= new Box(680, 290, 50, 70);
  
  box25= new Box(400, 220, 50, 70);
  box26= new Box(460, 220, 50, 70);
  box27= new Box(510, 220, 50, 70);
  box28= new Box(570, 220, 50, 70);
  box29= new Box(620, 220, 50, 70);
  box30= new Box(680, 220, 50, 70);
 
  box31= new Box(680, 150, 50, 70);
  box32= new Box(680, 150, 50, 70);
  box33= new Box(680, 150, 50, 70);
  box34= new Box(680, 150, 50, 70);
  box35= new Box(680, 150, 50, 70);
  box36= new Box(680, 150, 50, 70);
}

function draw() {
  background(bg);
  Engine.update(engine);
  //rope.display();
  hero.display();
  //rope2.display();
  monster.display();


  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();

  ground.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
