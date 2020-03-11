var paddle;
var ball
var stars
var boxs;
var play=false;
var hit=0;
var time=0;
var score=0;
var setupmode=false;
var l1=1;
var l2=0
var l3=0;
var l4=1;
var lazer;
var score;
var lives=5;
var c=20;
var o=0;
var shoot=false
var health=30;
var screen;
var spr=0;
function setup(){
screen=createSprite(252,5,10000,10000)
screen.visible=false
lazer=createSprite(700,700,50,50)
stars=createGroup();
boxs=createGroup();
createCanvas(505,700);
}
function draw(){
frameRate(30)
textAlign(CENTER)
background("black")
while(spr<6){stars.add(createSprite(random(25,480),random(25,675),5,5));spr++}
stars.overlap(screen,goaway)
screen.x=252.5;
screen.y=350;
drawSprites();
if(play==false){
textAlign(CENTER)
textSize(30)
fill("white")
text("Space Breakout!",252.5,50);
text("Press P to Play",252.5,250);
if(keyDown("p")){play=true;setupmode=true;}
}else{
if (setupmode==true){
paddle=createSprite(200,650,100,50)
paddle.shapeColor=random(50,200),random(50,200),random(50,200)
ball=createSprite(200,640,25,25)
ball.shapeColor=random(50,200),random(50,200),random(50,200)
enemy=createSprite(250,250,100,50)
enemy.shapeColor=random(50,200),random(50,200),random(50,200)
enemy.velocityX=5;
while (l3<84){
ball.velocityX=10
ball.velocityY=10;l3++;swap=createSprite(0+l1*25,l2*25,20,20);o=0
swap.shapeColor=random(50,200),random(50,200),random(50,200)
boxs.add(swap);o=o-0.125;
l1++;
l4++;
if (l4==c){l2=l2+1;c--;l1=Math.abs(21-c);l4=Math.abs(21-c)}
}}
fill("white")
textSize(30)
text("Lives:"+lives+" Score:"+score,252.5,50);
if (ball.velocityX<-13){ball.velocityX=-13;}
if (ball.velocityX>13){ball.velocityX=13;}
if (ball.velocityY<-13){ball.velocityY=-13;}
if (ball.velocityY>13){ball.velocityX=13;}
if (enemy.x>450){enemy.velocityX=-10;}
if (enemy.x<50){enemy.velocityX=10;}
setupmode=false;
if (ball.x<0){ball.velocityX=Math.abs(ball.velocityX)+10;}
if (ball.x>505){ball.velocityX=0-ball.velocityX;ball.x=ball.x-10;}
ball.bounceOff(paddle)
if (lives<1){text("Game Over",252.5,350);if(eee==false){}}
if (hit==80){text("You Win",252.5,350);if(eee==false){}}
if (random(1,6)>5){ball.displace(boxs,ballbox)}else{ball.bounceOff(boxs,ballbox)}
ball.bounceOff(enemy)
if (ball.isTouching(lazer)){ball.bounceOff(lazer);lazer.destroy();shoot=false;}
if (ball.y<0){ball.velocityY=12;ball.y=0}
paddle.y=650;
if (lazer.isTouching(paddle)){lazer.destroy();shoot=false;score=score-50;}
if (shoot==false){shoot=true;lazer=createSprite(enemy.x,enemy.y,10,50);lazer.shapeColor="red";lazer.velocityY=10;}
if (keyDown("RIGHT_ARROW")){paddle.x+=15}
if (keyDown("LEFT_ARROW")){paddle.x-=15}
if (lazer.y>700){shoot=false;lazer.destroy();}
if (ball.y>700){lives--;ball.x=mouseX;ball.y=paddle.y-50;ball.velocityY=10;}
if (ball.y<0){ball.x=mouseX;ball.y=650;}
if (ball.velocityX==0){ball.velocityX=random(-20,20)}}
}
function ballbox(ball,boxs){
score=score+25;
hit++;
boxs.destroy();
}
function goaway(stars,screen){
if (stars.width<20){if (stars.height<20){stars.visible=true;}}
stars.shapeColor="white"
stars.width=stars.width-1;
stars.height=stars.height-1;
if (stars.width<1){if (stars.height<1){spr=spr-1;stars.destroy();
}}}
