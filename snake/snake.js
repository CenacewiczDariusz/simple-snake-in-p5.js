class Snake {
	constructor() {
		this.pos = createVector(0, 0);
		this.xSpeed = SCL;
		this.ySpeed = 0;
		this.score = 0;
		this.tail = [];


	}

	update() {

		if (this.score === this.tail.length) {
			for (let i = 0; i < this.tail.length -1; i ++) {
				this.tail[i] = this.tail[i + 1];

			}
		}


		if (this.score > 0) {
			this.tail[this.score -1] = this.pos.copy();
		}
		this.pos.x = constrain(this.pos.x + this.xSpeed, 0, width - SCL);
		this.pos.y = constrain(this.pos.y + this.ySpeed, 0, height - SCL);

		this.crash();

	 }


	show() {
		fill(255);
		for ( let i = 0; i < this.tail.length; i ++){
			rect(this.tail[i].x, this.tail[i].y, SCL, SCL);
		}
		rect(this.pos.x, this.pos.y, SCL, SCL);
	}

	moveDir(x, y) {
		this.xSpeed = x * SCL;
		this.ySpeed = y * SCL;
	}

	eatsApple(applePos) {

		const d = this.pos.dist(applePos);
		//const d = this.pos.dist(this.x, this.y, pos.x, pos.y);
		if (d < 1) {
			this.score++
			return true;
		}
		return false;
	}

	crash() {
		for (let i = 0; i < this.tail.length; i++) {
			const tailpos = this.tail[i]
			const d = tailpos.dist(this.pos);
			if (d < 1) {
				this.score =0;
				this.tail = [];
				frameRate(0);
				gameOver();
				return true;
				
			}

			return false

		}
	}


}