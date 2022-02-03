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
        this.img.src = "images/alien.png"; 
        this.items = [];
    }

    init(){
        this.items = []
        
    }


    addEnemy(){
        let newEnemy ={
            x: 100 + Math.random(this.x) * 600, //la "x" parte del 100 (canvas) y su limite es 600 del canvas.
            y: Math.random(this.y) * 500, 
            vx:this.vx,
            vy:this.vy    
        }
        // solo quiero 10 enemigos
            console.log("enemy: ", this.items)
            if (this.items.length < 10) // Ya funciona, pero en consola itera más veces ????
            this.items.push(newEnemy)
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
    /* 
    this.items =  this.items.filter((enemy)=>{
          !bullets.items.every((bullet)=>this.collidesWith(enemy, bullet))
      }) */
  }


  // verificar logica de colision
  collidesWith(enemy, bullet){
      let isCollision = false

      console-log("")
/*
    for(let i = 0; i < this.items; i++){
        for(let r = 0; i < this.items; i++){
            let b = items[i][r];
            if(enemy.x >= bullet.x && bullet.y <= enemy.y){

                if(
                    bullet.y <= enemy.y + this.height &&
                    bullet.y + bullet.height >= enemy.y){
                      isCollision = true
                  }
          }
        }
    }
    return isCollision

*/
      // logica de choque que muda el valor de isCollision
/*
      if(enemy.x >= bullet.x && bullet.y <= enemy.y){

          if(
              object.y <= enemy.y + this.height &&
              object.y + object.height >= enemy.y){
                isCollision = true
            }
    }
      return isCollision */
  }

    
}