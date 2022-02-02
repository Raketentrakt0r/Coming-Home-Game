class Enemies{
    constructor(ctx , x, y){
        this.ctx = ctx
        this.width = 35;
        this.height = 25;
        
        this.x = x;
        this.y = y;

        this.vx = 1;
        this.vy = 0;
        
        this.img = new Image();
        this.img.src = "/images/alien.png"; 
        this.items = [];
    }

    init(){
        this.items = []
    }


    addEnemy(){
        let newEnemy ={
            x: Math.random() * 800, //crea enemgos aleatoriamente 
            y: Math.random() * 500, 
            vx:this.vx,
            vy:this.vy
        }
        // solo quiero 10 enemigos
             this.items.push(newEnemy)
    // }
         //console.log(this.items)
    }

    
    draw(frameNumber){
        this.items.forEach(item=>{
            this.ctx.drawImage(
                this.img,
                item.x,
                item.y,
                this.width,
                this.height
                )}
)}

  checkBulletCollision(bullets){
     this.items =  this.items.filter((enemy)=>{
          !bullets.items.every((bullet)=>this.collidesWith(enemy, bullet))
      })
  }


  // verificar logica de colision
  /*collidesWith(enemy, object){
      let isCollision = false
      // logica de choque que muda el valor de isCollision

      if(enemy.x >= object.x){

          if(
              object.y <= enemy.y + this.height &&
              object.y + object.height >= enemy.y){
                isCollision = true
            }
    }
      return isCollision 
  }*/

    
}