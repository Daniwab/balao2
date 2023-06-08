var bow , arrow,  scene;
var bowImage, arrowImage
var green_balloonImage
var red_balloonImage
var blue_balloonImage
var backgroundImage;
var red, blue, green
var score=0;
var PLAY = 1
var END = 0
var gameState = PLAY
var grupoVermelho
var grupoVerde
var grupoAzul



function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5

  red = createSprite(100, 100)
  red.addImage(red_balloonImage);
  red.scale = 0.1
   red.velocityX = 3

     green = createSprite(100, 220)
     green.addImage(green_balloonImage);
     green.scale = 0.1
     green.velocityX = 3

     blue = createSprite(100, 350)
     blue.addImage(blue_balloonImage);
     blue.scale = 0.1
     blue.velocityX = 3

    grupoVermelho = new Group ()
    grupoVerde = new Group ()
    grupoAzul = new Group ()
        
        // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);

 if(gameState === PLAY){

  redBalloon()
  blueBalloon()
  greenBalloon()

   // chão em movimento
    scene.velocityX = -3 
   
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
   
   //arco em movimento
   bow.y = World.mouseY
   
   // soltar arco quando a tecla espaço for pressionada
   if (keyDown("space")) {
    createArrow();
    
}
 
}

if(bow.isTouching(grupoVermelho)){
  gameState = END

}else if(gameState === END){
  scene.velocityX = 0;
  grupoAzul.setVelocityXEach(0);
  grupoVerde.setVelocityXEach(0);
  grupoVermelho.setVelocityXEach(0);
  grupoAzul.setLifetimeEach(-1);
  grupoVerde.setLifetimeEach(-1);
  grupoVermelho.setLifetimeEach(-1);
  
}

   
  //criando inimigos continuamente
  var num = Math.round(random(1,4));
  switch(num){
    case 1: //chamar o balão vermelho
    //green.addImage(red_balloonImage)
    break;
    case 2: // chamar o balão azul
   // red.addImage(blue_balloonImage)
    break;
    case 3: // chamar o balão verde
   // red.addImage(green_balloonImage)
    break;
    case 4: // chamar o balão rosa
    //red.addImage(pink_balloonImage)
    break;
    default:break;
  }
    
  drawSprites();
 
 // pinkBalloon()

 
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  if(frameCount % 100 === 40 ){
 var y = Math.round(random(20,400)) ;
 red = createSprite(100, y)
 red.velocityX = 3
  red.addImage(red_balloonImage);
   red.lifetime = 150;
  red.scale = 0.1;
  grupoVermelho.add(red, red_balloonImage)
  }
} 

function blueBalloon() {
  if(frameCount % 100 === 30 ){
    var y = Math.round(random(20,400)) ;
    blue = createSprite(100, y)
     blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  grupoAzul.add(blue,blue_balloonImage)
  }
}

function greenBalloon() {
  if(frameCount % 100 === 0 ){
    var y = Math.round(random(20,400)) ;
    green = createSprite(100, y)
   green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  grupoVerde.add(green, green_balloonImage)
  }
}