class Game {
    constructor(ctx,background,player,enemies,bullets){
        this.ctx = ctx;
        this.background = background;
        this.player = player;
        this.frameNumber = 0; 
        this.enemies = enemies;
        this.enemyClock = null
        this.bullets = bullets;

        this.shotSound = new Audio("sound/laser-gun.mp3")
        this.bgSound = new Audio("sound/Night-Patrol.mp3")

        this.score = 0;
        
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
        this.score = 0 //Score without functionality
    }

    play(){
        this.move();
        this.draw();
        //this.checkBulletCollision()
        //this.checkPlazerCollision()
        requestAnimationFrame(this.play.bind(this))
        this.bgSound.play() // pause para el Game Over

        // Llamar a los metodos para que la funcionabilidad trabaje
        
    } 

    // verificar los metodos de las coliciones
    
    checkBulletCollision(){
        this.enemies.checkBulletCollision(this.bullets)

    }

    checkPlayerCollision(){

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

    drawScore(){
        this.ctx.fillStyle = "White";
        this.ctx.Font = "bold 24px sans:serif";
        this.fillText = `${this.score}`;
        this.restore()// borrar o iniciar el score- Ya que este hecha la funcionabilidad
    }

}