import Position from './position';
import SpriteImage from './sprite_image';


export default class NPC {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.image_src = data.image;
      this.image = new SpriteImage(this.getSprite(), 0, 0);
      this.position = new Position(data.x, data.y);
      this.x = data.x;
      this.y = data.y;
    }
  
  
    position() {
      return this.position;
    }
  
    moveTo(destinationPosition) {
      this.position.setTo(destinationPosition);
    }
  
    moveToMap(mapId) {
      this.map = mapId;
    }
  
    getSprite() {
      var image = new Image(32, 32);
      image.src = this.image_src;
      return image;
    }

  }
  