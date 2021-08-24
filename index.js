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
const surfer = new Surfer (ctx, canvas.height/3, canvas.width/3);
const shark = new Obstacle (ctx, canvas.height/2, canvas.width - 800);

const sharkArray = [];


obstacleId = setInterval(function(){
    let sharkObstacle = new Obstacle(
    ctx,
    Math.random() * canvas.height - 300, // How often en where the sharks are coming (set position to only stay in water!)
    0, // position x should be zero or the otherway around....??? check it out when playing!
    Math.random() * 100 + 100, //sharks to change size randomly
    Math.ceil(Math.random() * 3) // will give the speed
    )
})

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

   
    window.addEventListener('keydown', moveSurfer);
    function moveSurfer(event){
        event.preventDefault(); // prevents the keys from default behaviour
        switch (event.code){            
            case 'ArrowUp': // up
                if (surfer.y > 300) surfer.y -= 15; 
                console.log("up")
                break;
    
            /*case 39: // straight forward
               if (surfer.y < canvas.height - surfer.height) surfer.y += 15; 
                break; 
                also need to create a backward function - this will be done in later stage*/

            case 'ArrowDown': // down
                if (surfer.y < canvas.height - surfer.height) surfer.y += 15; 
                console.log("down")
                break;

            default:
                break;
        }
    }
};