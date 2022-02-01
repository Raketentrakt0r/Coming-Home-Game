class PLayer{
    constructor(ctx){
        this.ctx = ctx;
        this.width = 50;
        this.height = 50;
        
        this.x = 100;
        this.y = 100;

        this.img = new Image();
        this.img.src = "/images/rocket.png";

        this.spriteColumns = 3;
        this.spriteRows = 1;
    }

    init(){
        this.x=100;
        this.y=100;
        this.vy=0;
    }

    draw(){
        this.ctx.drawImage(
            this.img,

        )
    }
}