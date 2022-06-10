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
      { src: loadImage('assets/BG_Light_Layer_7.png') },
      { src: loadImage('assets/BG_Light_Layer_6.png') },
      { src: loadImage('assets/BG_Light_Layer_5.png') },
      { src: loadImage('assets/BG_Light_Layer_4.png') },
      { src: loadImage('assets/BG_Light_Layer_3.png') },
      { src: loadImage('assets/BG_Light_Layer_2.png') },
      { src: loadImage('assets/BG_Light_Layer_1.png') },
      ]
      this.playerImage = loadImage('assets/katze-prototype.gif')
  }

  draw(){
      clear()
      this.background.draw()
      this.player.draw()
  }

}
