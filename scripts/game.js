class Game {
    constructor(ctx,background,player,enemies,bullets){
        this.ctx = ctx;
        this.background = background;
        this.player = player;
        this.frameNumber = 0; 
        this.enemies = enemies;
        this.enemyClock = null
        this.bullets = bullets;
        
    }

    start(){ 
        this.init()
        this.play()
    }
    
    init(){
        if(this.frameNumber) cancelAnimationFrame(this.frameNumber)
        this.frameNumber = 0
        this.background.init()
        this.player.init()
        this.enemies.init()
        this.bullets.init()
        this.enemyClock = setInterval(this.enemies.addEnemy.bind(enemies), 2 * 1000)
    }

    play(){
        this.move();
        this.draw();
        this.checkBulletCollision()
        this.checkPlazerCollision()
        requestAnimationFrame(this.play.bind(this))
        
    } 
    
    checkBulletCollision(){
        this.enemies.checkBulletCollision(this.bullets)

    }

    checkPlazerCollision(){
        return false
    }

    move(event){
        this.player.move(event, this.frameNumber);
        this.bullets.move(this.frameNumber)
    }

    draw(){
        this.ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);
        this.background.draw(this.frameNumber);
        this.enemies.draw(this.frameNumber);
        this.player.draw(this.frameNumber);
        this.bullets.draw(this.frameNumber);
        
    }

}