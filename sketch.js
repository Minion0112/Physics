const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld,ground,ball;

function setup () {
myengine=Engine.create();
myworld=myengine.World;
var goptions={
isStatic:true
}
ground=Bodies.rectangle(200,390,400,20,goptions);
World.add(myworld,ground);
var boption={
restitution:1.0;
}
ball=Bodies.circle(100,100,20,boptions);
World.add(myworld,ball);

}




function draw (){
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);







}

