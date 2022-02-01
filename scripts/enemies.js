class Enemies{
    constructor(ctx){
        this.ctx = ctx
        this.width = 35;
        this.height = 25;
        
        this.x = 250;
        this.y = 100;

        this.vx = 1;
        this.vy = 0;
        
        this.img = new Image();
        this.img.src = "/images/nave-2.jpg"; 
        this.items = [];
    }

    addEnemy(){
        let newEnemy ={
            x:this.x * Math.random(), //crea enemgos aleatoriamente
            y:this.y * Math.random(), // lo mismo
            vx:this.vx,
            vy:this.vy
        }
        if(this.items.length < 10){ // solo quiero 10 enemigos
             this.items.push(newEnemy)
        }
        
         
        
         
       
    }

    init(){
        this.items = [] // 
    }

    draw(){
            this.items.forEach(item =>{
                console.log(this, " enemies")
                this.ctx.drawImage(
                    this.img,
                    item.x,
                    item.y,
                    this.width,
                    this.height,
                    );
        })
        
    }
}