class Player {
  constructor() {
    this.velocity = 0;
    this.gravity = 0.8;
    this.height = 200;
    this.width = 200;
    this.x = 500;
    this.y = 800;
  }
  draw() {
    this.velocity += this.gravity
		this.y += this.velocity
		if (this.y >= height - this.height) {
			this.y = height - this.height
		}
    image(game.playerImage, this.x, this.y, this.width, this.height);

    if (keyIsDown(68)) {
      this.moveRight();
    }
    if (keyIsDown(65)) {
      this.moveLeft();
    }
  }
  jump() {
    this.velocity = -20;
    setTimeout('1000')
  }

  moveRight() {
    this.x += 10;
  }

  moveLeft() {
    this.x -= 5;
  }
}
