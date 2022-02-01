class Player{
    constructor(ctx){
        this.ctx = ctx;
        this.width = 35;
        this.height = 25;
        
        this.x = 10;
        this.y = 10;

        this.vx = 0;
        this.vy = 0.1;
        

        this.img = new Image();
        this.img.src = "/images/rocket.png"; 
    }

    init(){
        this.x= 10;
        this.y= 10;
        this.vx = 0;
    }

    move(event){      
        if(event.type === "keyup"){
            this.vx = 0
            this.vy = 0
        }else if(event.type === "keydown"){
            this.vx = 1
            this.vy = 1
        }
        
            switch(event.keyCode){
                case 38:
                    this.y += -this.vy;
                    break;
                case 40:
                    this.y += this.vy;
                    break;
                case 37:
                    this.x += -this.vx;
                    break;
                case 39:
                    this.x += this.vx;
                    break;
            };    
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