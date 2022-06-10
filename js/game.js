class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
    this.backgroundImages = [];
    this.coinImage;
  }
  preload() {
    this.backgroundImages = [
      { src: loadImage("assets/BG_Light_Layer_7.png"), x: 0, speed: 0 },
      { src: loadImage("assets/BG_Light_Layer_6.png"), x: 0, speed: 0.5 },
      { src: loadImage("assets/BG_Light_Layer_5.png"), x: 0, speed: 2 },
      { src: loadImage("assets/BG_Light_Layer_4.png"), x: 0, speed: -0.5 },
      { src: loadImage("assets/BG_Light_Layer_3.png"), x: 0, speed: 1 },
      { src: loadImage("assets/BG_Light_Layer_2.png"), x: 0, speed: 5 },
      { src: loadImage("assets/BG_Light_Layer_1.png"), x: 0, speed: 7 },
    ];
    this.playerImage = loadImage("assets/katze-prototype.gif");
  }

  draw() {
    clear();
    this.background.draw();
    this.player.draw();
  }
}
