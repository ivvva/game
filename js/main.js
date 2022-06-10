const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(1750, 1000);
  // var x = (windowWidth - width) / 2;
  // var y = (windowHeight - height) / 2;
  // canvas.position(x, y);
  // background('')
}

function draw() {
  game.draw();
}

function keyPressed() {
  if (keyCode == 68){
    game.player.moveRight()
  }
  if (keyCode == 65){
    game.player.moveLeft()
  }
  if(keyCode == 32){
    game.player.jump()
  }
}


