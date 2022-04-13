import Mobile from './mobile';
import SaucerImage from '../assets/images/flyingSaucer-petit.png';

export default class Saucer extends Mobile{

    static IMAGE_WIDTH = 48;
    static IMAGE_HEIGHT = 36;

    constructor(x, y, dx=-3, dy=0){
        let image = new Image();
        image.src = SaucerImage;
        super(x, y, image, dx, dy);
        this._falling = false;
    }

    set falling(f){ this._falling = f ? true: false; }
    get falling(){ return this._falling; }

    move(game){
        const maxHeight = game.canvas.height-Saucer.IMAGE_HEIGHT;
        let newX = Math.max(0, this.x+this.dx);
        let newY = Math.min(maxHeight, this.y+this.dy);
        super.move(newX, newY);
    }
}