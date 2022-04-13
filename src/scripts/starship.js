import Mobile from './mobile';
import MoveState from './movestate';
import starShipImage from '../assets/images/vaisseau-ballon-petit.png';

export default class StarShip extends Mobile{
    static IMAGE_WIDTH = 48;
    static IMAGE_HEIGHT = 39;

    constructor(x, y, dx=0, dy=8){
        let image = new Image();
        image.src = starShipImage;
        super(x, y, image, dx, dy);
        this._moving = MoveState.NONE;
    }

    set moving(m){ this._moving = m; }
    get moving(){ return this._moving; }

    get up(){
        return this.moving === MoveState.UP;
    }
    get down(){
        return this.moving === MoveState.DOWN;
    }

    get game(){ return this._game; }

    moveUp(game){
        this.moving = MoveState.UP;
        this.move(game);
    }

    moveDown(game){
        this.moving = MoveState.DOWN;
        this.move(game);
    }

    move(game){
        const height = game.canvas.height;
        if(this.moving === MoveState.UP){
            let newY = Math.max(0, this.y-this.dy);
            super.move(this.x, newY);
        }else if(this.moving === MoveState.DOWN){
            let newY = Math.min(height-StarShip.IMAGE_HEIGHT, this.y+this.dy);
            super.move(this.x, newY);
        }
    }

    shoot(){}
}