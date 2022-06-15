let layer = [];
let layerImages = [];
let tiledmap;
let player;
let gravity = 0.3;
let spritesheet;
let spritesheet_animation;

let BACKGROUND = 0;
let DETAILS = 1;
let GROUND = 2;
let LADDERS = 3;
let DEATH = 4;
let FOREGROUND = 5;

function preload() {
  tiledmap = loadTiledMap("new-map", "images");
}

function setup() {
  createCanvas(800, 450);

  player = createSprite(100, 100);
  player.velocity.x = 0;
  player.setDefaultCollider();
  player.alive = true;
  player.addAnimation("stand", "images/Cat Sprite Sheet (6) (1).png");

  layer = getTilemapLayers(tiledmap);
  layerImages = getTilemapImages(tiledmap);
}

function draw() {
  checkInput();
  checkWorldBounds(player, tiledmap);

  image(layerImages[BACKGROUND], 0, 0);
  image(layerImages[DETAILS], 0, 0);
  image(layerImages[GROUND], 0, 0);
  image(layerImages[LADDERS], 0, 0);
  image(layerImages[DEATH], 0, 0);

  drawSprite(player);

  image(layerImages[FOREGROUND], 0, 0);
}

function die() {
  player.velocity.x = 0;
  player.velocity.y = -10;
  player.rotationSpeed = 20;
}

function checkInput() {
  let isOnDeath = isInContact(player, layer[DEATH]);
  if (isOnDeath.any) {
    player.alive = false;
    die();
  }
  if ((player.alive = false)) {
    return;
  }
  //movement
  let touchingGround = isInContact(player, layer[GROUND]);
  player.velocity.y = player.velocity.y + gravity;

  if (keyIsDown(LEFT_ARROW)) {
    player.mirrorX(-1);
    player.velocity.x = player.velocity.x - 1;
  } else if (keyIsDown(RIGHT_ARROW)) {
    player.mirrorX(1);
    player.velocity.x = player.velocity.x + 1;
  }

  if (player.velocity.x < -5) {
    player.velocity.x = -5;
  }
  if (player.velocity.x > 5) {
    player.velocity.x = 5;
  }
  if (player.velocity.x > -1 && player.velocity.x < 1) {
    player.velocity.x = 0;
  }

  player.velocity.x = 0.8 * player.velocity.x;
  playerBrake(player, touchingGround);

  //jumping
  if (keyIsDown(32) && touchingGround.below) {
    player.velocity.y = -6;
  }

  //ladder climbing
  let onLadder = isInContact(player, layer[LADDERS]);
  if (onLadder.any) {
    if (keyIsDown(UP_ARROW)) {
      player.velocity.y = 0;
      player.position.y -= 4;
    } else if (keyIsDown(DOWN_ARROW)) {
      player.velocity.y = 0;

      if (touchingGround.below) {
        player.position.y = player.position.y + touchingGround.belowDistance;
      } else {
        player.position.y += 4;
      }
    } else {
      player.velocity.y = 0;
    }
  }
}
