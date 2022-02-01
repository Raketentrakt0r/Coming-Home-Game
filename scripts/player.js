class Player{
    constructor(ctx){
        this.ctx = ctx;
        this.width = 35;
        this.height = 25;
        
        this.x = -10;
        this.y = -10;

        this.img = new Image();
        this.img.src = "/images/rocket.png"; 
    }

    init(){
        this.x= 10;
        this.y= 10;  
    }

    draw(frameNumber){
        console.log("Qué pasa!?")
        this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height
        );
    };
}