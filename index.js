//create score board
//game over / start game has no end
//rectangle around objects too large, needs to make this smaller
//lot's of sharks/flowers and on top of eachother.... need to fix this
//counting doesn't add +1, but counts incredible amount of flowers... need to figure that one out
window.onload = () => {

let canvas = document.querySelector('#myCanvas');
let ctx = canvas.getContext('2d');
let frameId = null;
let obstacleId = null;
let obstacleIdFlower = null;
let timeToStartObstacles = 0;
const background = new Background(ctx);
const surfer = new Surfer(ctx, canvas.width/6, canvas.height/2); // You modify this line to make it appear where you want
let collision = false;
let collectFlowers = 0;

//Shark Obstacle
const sharkArray = [];

obstacleId = setInterval(function(){
    let sharkObstacle = new Obstacle (
    ctx,//canvas context
    canvas.width,
    Math.random() * (800 - 240) + 240,
    Math.ceil(Math.random() * 1) // will give the speed
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
    Math.ceil(Math.random() * 1) // will give the speed
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

    console.log("score: ", collectFlowers);

    //Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Paint the objects, still missing the flowers
    background.draw();
    surfer.draw();
    sharkArray.forEach((shark)=>{ //loop through the array in order to print the objects in the array
        shark.draw();
        shark.move();
        checkCollision(surfer, shark);
    });
    flowerArray.forEach((flowers)=>{ //loop through the array in order to print the objects in the array
        flowers.draw();
        flowers.move();
        checkFlower(surfer, flowers);
    });
}

//Collision with Shark

function checkCollision (surfer, shark) {
    collision = 
    (surfer.x < shark.x + shark.width &&         
    surfer.x + surfer.width > shark.x &&           
    surfer.y < shark.y + shark.height &&         
    surfer.y + surfer.height > shark.y);           

    // Game over when collision happens
    if (collision) {
        clearInterval(frameId);
        clearInterval(obstacleId);
        clearInterval(obstacleIdFlower);
        alert("Game Over");
        window.location.reload();
      }
}

// FLOWERS
function checkFlower (surfer, flower) {
    if (surfer.x < flower.x + flower.width &&         // left
    surfer.x + surfer.width > flower.x &&            // right
    surfer.y < flower.y + flower.height &&          // top
    surfer.y + surfer.height > flower.y)           // bottom
    {
        collectFlowers++

    }
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