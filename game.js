let layer = [];
let layerImages = [];

let tiledmap;
let font;
let meow;
let jump;
let player;
let pickup;

let gravity = 0.3;
let spritesheet;
let spritesheet_animation;

let BACKGROUND = 0;
let DETAILS = 1;
let GROUND = 2;
let LADDERS = 3;
let DEATH = 4;
let FOREGROUND = 5;

let deathScreen = document.getElementById("game-over");
let restartBtn = document.querySelectorAll(".restart-btn");
let kittenCount = document.querySelector(".kitten-count")
let winScreen = document.getElementById("win")
restartBtn.forEach(button => {
  button.addEventListener("click", function(){
    location.reload();
  })
});

// let pickup;

// console.log(new Pickup)
function preload() {
  tiledmap = loadTiledMap("new-map", "images");
  // pickupImage = loadImage("images/pngwing.com.png", 100, 100)
}

function setup() {
  createCanvas(800, 450);
  meow = loadSound("assets/ringt-nature-kidden1.wav");
  jump = loadSound("assets/mixkit-player-jumping-in-a-video-game-2043.wav");

  player = createSprite(30, 50);
  player.velocity.x = 0;
  player.setDefaultCollider();
  player.alive = true;
  player.addAnimation("stand", "images/Cat Sprite Sheet (6) (1).png");

  pickup = createSprite(100, 218);
  pickup.setDefaultCollider();
  pickup.addAnimation("hehe", "images/sleeping-kitten.png");
  pickup.immovable = true;

  pickup2 = createSprite(450, 85);
  pickup2.setDefaultCollider();
  pickup2.addAnimation("bru", "images/sleeping-kitten.png");
  pickup2.immovable = true;

  pickup3 = createSprite(715, 200);
  pickup3.setDefaultCollider();
  pickup3.addAnimation("bruhh", "images/sleeping-kitten.png");
  pickup3.immovable = true;

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
  drawSprite(pickup);
  drawSprite(pickup2);
  drawSprite(pickup3);
  // pickup.show()

  image(layerImages[FOREGROUND], 0, 0);
}

// function checkPickup(player){
//   if(pickup.collide(player)){
//     console.log('first')
//     pickup.remove;
//     return true;
//   } return false;
// }

function die() {
  player.velocity.x = 0;
  player.velocity.y = -10;
  player.rotationSpeed = 20;
}
let count = document.querySelector(".count")
function checkInput() {
  if (count.innerText == 3){
    winScreen.classList.remove('hidden')
  }


  if (pickup.overlap(player)) {
    pickup.remove();
    count.innerText++
    meow.play();
  } else if (pickup2.overlap(player)) {
    pickup2.remove();
    count.innerText++
    meow.play();
  } else if (pickup3.overlap(player)) {
    pickup3.remove();
    count.innerText++
    meow.play();
  }
  let isOnDeath = isInContact(player, layer[DEATH]);
  if (isOnDeath.any) {
    player.alive = false;
    die();
    deathScreen.classList.remove("hidden");
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
    jump.play();
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
