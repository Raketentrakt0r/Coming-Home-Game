class Player{
    constructor(ctx){
        this.ctx = ctx;
        this.width = 45;
        this.height = 25;
        
        this.x = 20;
        this.y = 20;

        this.vx = 0;
        this.vy = 0;
        

        this.img = new Image();
        this.img.src = "images/rocket.png"; 
    }

    init(){
        this.x= 20;
        this.y= 20;
        this.vx = 0;
        this.vz = 0;
    }

    move(event){ 
        this.x += this.vx
        this.y += this.vy
    }
    
    draw(frameNumber){
        this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height,
        );
    };
}