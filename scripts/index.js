console.log("We are connected!!")

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const background = new Background(ctx)
const player = new Player(ctx)
const enemies = new Enemies(ctx)

const game = new Game(ctx,background,player,enemies)


const startButton = document.getElementById("start-button");
startButton.onclick = () => {
    startButton.remove();
      game.start();
}

document.addEventListener("keydown", (event) =>{
  game.move(event)
})

//Esta bien afuera o tendrá que ir adentro?
document.addEventListener("keyup",(event) =>{
  game.move(event)
})