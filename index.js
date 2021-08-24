window.onload = () => {

let canvas = document.querySelector('#myCanvas');
let ctx = canvas.getContext('2d');
let frameId = null;
let obstacleId = null;
let obstacleIdFlower = null;
let timeToStartObstacles = 0;
const background = new Background(ctx);
const surfer = new Surfer (ctx, canvas.height/3, canvas.width/3);

//Shark Obstacle
const sharkArray = [];

obstacleId = setInterval(function(){
    let sharkObstacle = new Obstacle (
    ctx,//canvas context
    canvas.width,
    Math.random() * (800 - 240) + 240,
    Math.ceil(Math.random() * 3) // will give the speed
    )
    sharkArray.push(sharkObstacle);
    console.log("hello", sharkArray)
},2000)

    //timeToStartObstacles = 1;

//Flower Obstacle
    const flowerArray = [];

obstacleIdFlower = setInterval(function(){
    let flowerObstacle = new Flower (
    ctx,//canvas context
    canvas.width,
    Math.random() * (800 - 240) + 240,
    Math.ceil(Math.random() * 2) // will give the speed
        )
    flowerArray.push(flowerObstacle);
    console.log("hello", flowerArray)
},5000)

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
    sharkArray.forEach((shark)=>{ //loop through the array in order to print the objects in the array
        shark.draw();
        shark.move();
    })
    flowerArray.forEach((flowers)=>{ //loop through the array in order to print the objects in the array
        flowers.draw();
        flowers.move();
    })
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
                if (surfer.y > 240) surfer.y -= 15; 
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