// still need to work on this 1st part
window.onload = () => {

let canvas = document.querySelector('#myCanvas');
let ctx = canvas.getContext('2d');
let frameId = null;
let obstacleId = null;
//console.log("Check if JS is connected")
//console.log(myCanvas)

//check-out the width/height of the obstacle & surfer
const background = new Background(ctx);
const surfer = new Surfer (ctx);
const shark = new Obstacle (ctx, canvas.height/2, canvas.width - 800);

//This is where the game logic happens
function startGame() {
    //Create a loop to animate the game
    frameId = requestAnimationFrame(startGame);

    //Check if the game is working with a console log
    console.log('Game Started');

    //Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Paint the objects, still missing the flowers
    background.draw();
    surfer.draw();
    shark.draw();
}

//Start the game when we click on the start button
    document.getElementById('start').onclick = () => {
        startGame();
    };

    //keyCode added, but surfer is untraceable on page.....
    window.addEventListener('keydown', moveSurfer);
    function moveSurfer(event){
        switch (event.Keycode){
            case 38: // up
                if (surfer.y > 0) surfer.y -= 15; // how to set this??
                break;
    
            case 39: // straight forwards
                if (surfer.y < canvas.height - surfer.height) surfer.y += 15; //how to set this??
                break;

            case 40: // down
                if (surfer.y < canvas.height - surfer.height) surfer.y += 15; // how to set this??
                break;

            default:
                break;
        }
    }
};