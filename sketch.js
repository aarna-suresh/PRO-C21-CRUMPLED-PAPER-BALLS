
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var userEngine;
var userWorld;
var groundObj;
var leftSide, rightSide;

function preload() {

}

function setup() {
	createCanvas(1200, 500);


	userEngine = Engine.create();
	userWorld = userEngine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball = Bodies.circle(200, 200, 15, ball_options);
	World.add(userWorld, ball);

	groundObj = new Ground(width / 2, 450, width, 20);

	leftSide = new Ground(1000,400,20,120);
	rightSide = new Ground(1150,400,20,120);
}


function draw() {
	background(0);

	Engine.update(userEngine);
	fill("white");
	ellipseMode(CENTER);
	ellipse(ball.position.x, ball.position.y, 30, 30);

	groundObj.display();

	leftSide.display();
	rightSide.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:15,y:-10})
	}
}



