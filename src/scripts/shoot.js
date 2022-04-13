import Mobile from './mobile';
import Saucer from './saucer';
import TirImage from '../assets/images/tir.png';

export default class Shoot extends Mobile{

    static IMAGE_WIDTH = 32;
    static IMAGE_HEIGHT = 8;

    constructor(x, y, dx=8, dy=0){
        let image = new Image();
        image.src = TirImage;
        super(x, y, image, dx, dy);
        this._collision = false;
    }

    set collision(c){ this._collision = c ? true : false; }
    get collision(){ return this._collision; }
    
    move(){
        super.move(this.x+this.dx, this.y);
    }

    setSaucers(saucers){
        return saucers.map( saucer => {
            if(this.detectCollision(saucer)){
                saucer.dx = 0;
                saucer.dy = 3;
                saucer.falling = true;
                this.collision = true;
            }
            return saucer;
        });
    }

    detectCollision(mobile){
        const collides =
            this.x < mobile.x + Saucer.IMAGE_WIDTH &&
            this.x + Shoot.IMAGE_WIDTH > mobile.x &&
            this.y < mobile.y + Saucer.IMAGE_HEIGHT &&
            Shoot.IMAGE_HEIGHT + this.y > mobile.y &&
            mobile.falling == false;
        return collides;
    }
}