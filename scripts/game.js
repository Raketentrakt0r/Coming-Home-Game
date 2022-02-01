class Game {
    constructor(ctx,background,player,enemies){
        this.ctx = ctx;
        this.background = background;
        this.player = player;
        this.frameNumber = 0; 
        this.enemies = enemies;
        this.enemyClock = setInterval(this.enemies.addEnemy.bind(enemies), 2 * 1000) // intervalo de tiempo de los enemigos
        
    }

    start(){ //inicia el juego
        
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

    move(event){
              //this.background.move(this.frameNumber);
        this.player.move(event, this.frameNumber);

    }

    draw(){
        this.ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);
        this.background.draw(this.frameNumber);
        this.player.draw(this.frameNumber);
        this.enemies.draw(this.frameNumber);
        
    }

}