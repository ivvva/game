class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.map = new Tilesheet()
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
    this.tilesheetImage = loadImage("assets/tileset.png")
    this.tilemap = ('tilemap', 'tilemap.csv')
  }

//   display.Tilesheet =  function(tile_size, columns)
//     this.image = new Image();
//     this.tile_size = tile_size;
//     this.columns = columns


  draw() {
    clear();
    this.background.draw();
    this.player.draw();
    this.map.draw();
  }
}
