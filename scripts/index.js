console.log("We are connected!!")

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const background = new Background(ctx)
const player = new Player(ctx)
const enemies = new Enemies(ctx)
const bullets = new Bullets(ctx)

const game = new Game(ctx,background,player,enemies,bullets)


const startButton = document.getElementById("start-button");
startButton.onclick = () => {
    startButton.remove();
      game.start();
}
 
document.addEventListener("keydown", (event) =>{
    switch(event.code){
        case "ArrowUp":
            player.vy = -1
            break;

        case "ArrowDown":
            player.vy = 1
            break;

        case "ArrowLeft": 
            player.vx = -1
            break;

        case "ArrowRight":
            player.vx = 1
            break;
            
        case "Space":
          bullets.shot(player); 
          game.shotSound.play()
    };  

}

          
)

document.addEventListener("keyup",(event) =>{
    player.vx = 0
    player.vy = 0
})