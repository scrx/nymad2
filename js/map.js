import Tile from './tile';
import Position from './position';

export default class Map {
  static fromJSON(config) {
    return new Map(config.name, config.width, config.height, config.spritesUrl, config.board);
  }

  constructor(name, width, height, spritesURL, board) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.sprites = this.loadSprites(spritesURL);
    this.board = this.buildBoard(board);

    this.walkableTypes = ['grass', 'sand', 'door', 'rocks']
  }

  loadSprites(url) {
    let image = new Image(32, 32);
    image.src = url;
    return image;
  }

  buildBoard(boardArray) {
    return boardArray.map((row) => {
      return row.map((tile) => {
        return new Tile(tile.type, tile.sx, tile.sy, tile.options || {});
      });
    });
  }

  getTile(position) {
    if (position.x < 0 || position.y < 0 || position.x > this.width - 1 || position.y > this.height - 1)
      return Tile.empty();
    else
      return this.board[position.y][position.x];
  }

  isWalkablePosition(position) {
    return this.walkableTypes.includes(this.getTile(position).type);
  }

  isPassagePosition(position) {
    return this.getTile(position).type == 'door';
  }

  getPassageDestination(passagePosition) {
    let passage = this.getTile(passagePosition).options.destination;
    return {mapId: passage.id, position: new Position(passage.x, passage.y)}
  }
}
