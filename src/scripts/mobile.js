export default class Mobile{
    constructor(x, y, image, dx=0, dy=0){
        this._x = x;
        this._y = y;
        this._dx = dx;
        this._dy = dy;
        this.image = image;
    }

    // setters
    set x(x){ this._x = x; }
    set y(y){ this._y = y; }

    // getters
    get x(){ return this._x; }
    get y(){ return this._y; }

    // getters
    get dx(){ return this._dx; }
    get dy(){ return this._dy; }

    set dx(dx){ this._dx = dx; }
    set dy(dy){ this._dy = dy; }

    draw(context){
        context.drawImage(this.image, this.x, this.y);
    }

    move(x, y){
        this.x = x;
        this.y = y;
    }
}