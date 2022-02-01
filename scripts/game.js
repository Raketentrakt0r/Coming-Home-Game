class Game {
    constructor(ctx,background,player){
        this.ctx = ctx;
        this.background = background;
        this.player = player;
        this.frameNumber = 0;   
    }

    start(){ //inicia el juego
        console.log("Hola estas ahí?")
        this.init()
        this.play()
    }
    
    init(){
        this.frameNumber = 0
        this.background.init()
        this.player.init()
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
        this.ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);
        this.background.draw(this.frameNumber);
        this.player.draw(this.frameNumber);
    }

}