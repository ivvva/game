class Player {
  constructor() {
    this.height = 200;
    this.width = 200;
    this.x = 500;
    this.y = 800;
}
draw() {
    image(game.playerImage, this.x, this.y, this.width, this.height);
    if(keyIsDown(68)){
        this.moveRight()
    }
    if(keyIsDown(65)){
        this.moveLeft()
    }
}
jump() {}

  moveRight() {
      this.x += 10
  }

  moveLeft() {
      this.x -= 5
  }
}
