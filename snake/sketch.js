
let snake;
let apple;
let cols;
let rows;
let score = 0;

const SCL = 20;


function setup() {
	createCanvas(400, 400);
	rows = width / SCL;
	cols = height / SCL;
  	snake = new Snake();
  	frameRate(5);
  	appleLocation();
}

function draw() {
	background(51);
	snake.update();
	snake.show();

	

	if (snake.eatsApple(apple)) {
		appleLocation();
		score++
		//if (score=5) {

		//frameRate(10);
		//}
	}

	text(score, SCL, height - SCL);

	fill(random(255), 0, random(255));
	rect(apple.x, apple.y, SCL, SCL);
	
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.moveDir(0, -1);

	} else if (keyCode === DOWN_ARROW) {
		snake.moveDir(0, 1);

	} else if (keyCode === RIGHT_ARROW) {
		snake.moveDir(1, 0);

	} else if (keyCode === LEFT_ARROW) {
		snake.moveDir(-1, 0);
	}
}

function appleLocation() {
	// this.x = Math.floor(random(rows));
	// this.y = Math.floor(random(cols));
				apple = createVector(floor(random(cols), (random(rows))));
				apple.mult(SCL);

		//var x = Math.floor(random(width / SCL));
	//var y = Math.floor(random(height / SCL));

  //return createVector(x, y);
}

function gameOver() {

  noLoop();
  textSize(60);
  text("GAME OVER!", width / 14, height / 6);
  textSize(30);
  text("Try next time!", width / 4, height / 4 + 50);
}







	
