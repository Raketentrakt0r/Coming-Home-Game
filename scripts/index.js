console.log("We are connected!!")

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const background = new Background(ctx)

const game = new Game(ctx,background)


const startButton = document.getElementById("start-button");
startButton.onclick = () => {
    startButton.remove();
      game.start()
}