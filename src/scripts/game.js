import StarShip from './starship';
import Saucer from './saucer';
import Shoot from './shoot';

export default class Game{
    constructor(){
        this.canvas = document.getElementById("stars");
        this.context = this.canvas.getContext("2d");

        const centerY = (this.canvas.height/2)-(39/2);
        this.starship = new StarShip(40, centerY);

        this.saucers = [];
        this.shoots = [];
        this.score = 0;

        this.scoreDiv = document.getElementById("score");

        this.intervalId = null;
        this.raf = null;
    }

    animate(){
        //console.log(this.canvas.width);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.starship.draw(this.context);

        // draw saucers //
        this.saucers = this.saucers.filter( saucer => {
            if(saucer){
                saucer.move(this);
                if(saucer.x <= 0){
                    // remove points // 
                    this.score-= 1000;
                    this.scoreDiv.textContent = this.score;
                    return false;
                }else if(saucer.y >= this.canvas.height-Saucer.IMAGE_HEIGHT){
                    // add points //
                    this.score+= 200;
                    this.scoreDiv.textContent = this.score;
                    return false;
                }else{
                    saucer.draw(this.context);
                }
                return true;
            }else{
                return saucer != null;
            }
            return false;
        });

        this.shoots = this.shoots.filter( shoot => {
            this.saucers = shoot.setSaucers(this.saucers);
            if(shoot.collision){
                return false
            }else{
                shoot.move();
                if(shoot.x >= this.canvas.width-Shoot.IMAGE_WIDTH){
                    return false;
                }else{
                    shoot.draw(this.context);
                }
                return true;
            }
        })

        this.raf = window.requestAnimationFrame(this.animate.bind(this));
    }

    addKeyBoardEvents(){
        window.addEventListener("keydown", this.listenerKeyBoardEvent.bind(this));
        window.addEventListener("keyup", this.listenerKeyBoardEvent.bind(this));
    }

    listenerKeyBoardEvent(event){
        document.activeElement.blur();
        const keyPressed = event.keyCode;
        switch (keyPressed) {
            case 32:
                // Space
                const xCoord = this.starship.x+ (StarShip.IMAGE_WIDTH*0.8);
                const yCoord = this.starship.y+(StarShip.IMAGE_HEIGHT/3);
                const shoot = new Shoot(xCoord, yCoord);
                this.shoots.push(shoot);
                break;
            case 38:
                // ArrowUp
                this.starship.moveUp(this);
                break;
            case 40:
                // ArrowDown
                this.starship.moveDown(this);
                break;
            default:
                break;
        }
    }

    addSaucer(){
        const xCoord = Math.floor(Math.random()*10)*Saucer.IMAGE_HEIGHT;
        const saucer = new Saucer(this.canvas.width-Saucer.IMAGE_WIDTH, xCoord);
        this.saucers.push(saucer);
    }

    addSaucerRandomly(){
        if(this.intervalId != null){
            clearInterval(this.intervalId);
            this.intervalId = null;
        }else{
            this.intervalId = setInterval(this.addSaucer.bind(this), 600);
        }
        
    }
}