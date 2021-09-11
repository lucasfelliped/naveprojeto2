let perdido
let nave
let f2
let img
let rez=50
let food
let w
let h
var X=75
var Y=100
let snake
var opçao = 1
var tela = 0
function preload() {
  img = loadImage('assets/10 Texture.jpg');
  f2 = loadImage('assets/pixil-frame-0 (3).png');
  perdido = loadImage('assets/pixil-frame-0 (1).png');
  nave = loadImage('assets/tiny_ship.png');
  
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
 
  w= floor(width/rez)
  h= floor(height/rez)
  frameRate(4)
  snake= new Snake()
  foodLocation();
}
function foodLocation(){
  let x = floor(random(w))
  let y = floor(random(h)) 
  food=createVector(x,y)
}

function draw() {
  background(img);
  if(tela==0)
    menu()
  if(tela==1)
    fase1()
  if(tela==2)
    instruçoes();
  if(tela==3)
    creditos()
  
    
    
function menu(){  
rect(X,Y,170,45)
textSize(32)   
text("projeto 2",600,50)
text(">",40,130)
text("joga",90,130)
text(">",40,230)
text("intruçoes",90,230)
text(">",40,330)
text("creditos",90,330)
}
 
function fase1(){
  scale(rez)
  background(255,255,255);
   
  if (snake.eat(food)){
     foodLocation()
   }
  snake.upadet();
   snake.show();
      
    if (snake.endGame()) {
    print("MORREU");
    background( f2 );
    noLoop();
  }
  noStroke()
  image(perdido,food.x,food.y,1,1)
}
  
function instruçoes(){
  textSize(32)
  fill(255,255,255)
  text("instruçoes",120,50)
  textSize(20)
  text("use as setas para se movimentar",30,100)
  text("use enter para usar a açao",30,130)
  text("PROFESSOR NÃO DEFINIDO",30,170)
}
function creditos(){
  textSize(32)
  fill(255,255,255)
  text("creditos",120,50)
  textSize(20)
  text("programador",30,130)
  text("Lucas Fellipe D. Martins",30,170)
  text("obrigado por jogar",110,230)

}
}

function keyPressed() {
  if (key == "ArrowUp" && Y>130 ) {
    Y=Y-100
    opçao=opçao-1
  }
  if (key == "ArrowDown"  && Y<300) {
    Y=Y+100;
    opçao=opçao+1
  }
   if (key == "Enter"){
    tela=opçao}
  if (key == "Escape"){
    tela=0} 
  { if (keyCode ===LEFT_ARROW && tela===1){
   snake.setdir(-1,0)  
  }else if(keyCode ===RIGHT_ARROW && tela===1 ){
    snake.setdir(1,0)
  }else if(keyCode === UP_ARROW && tela===1){
    snake.setdir(0,-1)
  }else if(keyCode === DOWN_ARROW && tela===1){
        snake.setdir(0,1)
  }else if (key == ' ' && tela===1) {
    snake.grow();
  } 
           }
}