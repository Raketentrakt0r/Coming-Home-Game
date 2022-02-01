class Game {
    constructor(ctx,background){
        this.ctx = ctx;
        //this.player = player;
        this.background = background;
        this.frameNumber = 0;   
    }

    start(){ //inicia el juego
        console.log("")
        this.init()
        this.draw()
       // this.play()
    }
    
    init(){
        this.frameNumber = 0
        //this.background.init()
    }

    play(){
        //this.frameNumber += 1;
        //this.move();
        //this.ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
        this.draw();
        requestAnimationFrame(this.play.bind(this))
    } 

    /*move(){
        this.background.move(this.frameNumber);
    }*/

    draw(){
                                                        //this.ctx.clearRect(0,0, ctx.canas.width,ctx.canvas.height);
        this.background.draw();

    }

}