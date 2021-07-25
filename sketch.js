var human,humanImg;
var robot,robotImg;
var bg,bgImg;
function preload(){
  humanImg = loadImage("shooter_3.png");
 bgImg = loadImage("ff.png");
  robotImg = loadImage("robot.png");
}
function setup(){
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,290,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  human = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  human.addImage(humanImg)
    human.scale = 0.3
    human.debug = true
    human.setCollider("rectangle",0,0,300,300);
robotGroup=newgroup();
}

function draw(){
  background(0);
drawSprites();
}
function enemy(){
  if(frameCount%50===0){

    //giving random x and y positions for zombie to appear
    robot = createSprite(random(500,1100),random(100,500),40,40)

    robot.addImage(zombieImg)
    robot.scale = 0.15
   robot.velocityX = -3
   robot.debug= true
   robot.setCollider("rectangle",0,0,400,400)
   
    robot.lifetime = 400
   robotGroup.add(robot)
  }

}
