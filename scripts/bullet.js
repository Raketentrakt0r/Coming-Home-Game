class Bullets{
    constructor(ctx){  
        this.ctx = ctx;
        this.width = 100;
        this.height = 45;
        this.items=[];
        this.vx = 4
        this.vy = 0

        this.img = new Image();
        this.img.src = "images/shot.png"
    }

    init(){
        this.items=[];        
    }

    shot(player){        
        let newBullet = {
            x:player.x,
            y:player.y,
            width: this.width,
            height: this.height,
            vx:this.vx,
            vy:this.vy
        }

        this.items.push(newBullet)

    }


    move(frameNumber){
        this.items.forEach(bullet => {
            bullet.x += bullet.vx;
    })
}

    draw(frameNumber){
        this.items.forEach(bullet => {
            this.ctx.drawImage(
                this.img,
                bullet.x,
                bullet.y,
                this.width,
                this.height,
                );

                
        })
    };
}


