class Background {
    constructor(ctx){
        this.ctx = ctx;
        this.width = 300
        this.height= 500
        this.img = new Image(this.width,this.height)
        this.img.src = "/images/background.jpg"
        this.x = 0
        this.y = 0
        this.vx =0
        this.vy =0  
    }

   init(){
        this.x = 0,
        this.y = 0
    }

    move(frameNumber){
        
           
    }

    draw(frameNumber){
        //this.ctx.fillRect(0,0,300,500)
        
            this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        );    
    }
}