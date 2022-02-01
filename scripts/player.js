class Player{
    constructor(ctx){
        this.ctx = ctx;
        this.width = 35;
        this.height = 25;
        
        this.x = 10;
        this.y = 10;

        this.vx = 0;
        this.vy = 0;
        

        this.img = new Image();
        this.img.src = "/images/rocket.png"; 
    }

    init(){
        this.x= 10;
        this.y= 10;
        this.vx = 0;

    }

    move(){
        document.addEventListener("keydown", (e) =>{
            switch(e.keyCode){
                case 38:
                    player.vy -= 1;
                    break;
                case 40:
                    player.vy += 1;
                    break;
                case 37:
                    player.vx -= 1;
                    break;
                case 39:
                    player.vx += 1;
                    break;
            }
        });

        document.addEventListener("keyup",(e) =>{
            player.vx=0;
            player.vy=0;
        })


    }
    
    
    draw(frameNumber){
        console.log("Qué pasa!?")
        this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height,
        
        );
    };
}