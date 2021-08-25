//create score board
//http://bdadam.com/blog/panning-and-scrolling-background-images-using-the-canvas-element.html
//rectangle around objects too large, needs to make this smaller
//lot's of sharks/flowers and on top of eachother.... need to fix this
//counting doesn't add +1, but counts incredible amount of flowers... need to figure that one out

window.onload = () => {

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let frameId = null;
let obstacleId = null;
let obstacleIdMommy = null;
let obstacleIdDaddy = null;
let obstacleIdGrandMommy = null;
let obstacleIdGrandDaddy = null;
let obstacleIdFlower = null;
let timeToStartObstacles = 0;
const background = new Background(ctx);
const surfer = new Surfer(ctx, canvas.width/6, canvas.height/2); // You modify this line to make it appear where you want
let collision = false;
let speedMultiplier = 1;
let increaseSpeed = 10


//sounds
let playMusic = new Audio ()
playMusic.src = '/Music/MusicGame.mp4'
playMusic.volume = 0.1

let playMusicLandingPage = new Audio()
playMusicLandingPage.scr = '/Music/shark-tank-theme.mp3'
playMusicLandingPage.volume = 0.1

let playMusicCollectFlower = new Audio()
playMusicCollectFlower.scr = '/Music/Blip 003.wav'
playMusicCollectFlower.volume = 0.1

let playMusicGameOver = new Audio()
playMusicGameOver.scr = '/Music/Game Over 001.wav'
playMusicGameOver.volume = 0.1

//set the scoring for the flowers
const score = {
    points: 0,
    draw: function(){
        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText('Your score is:' + this.points, 300, 200);
    }
};

//Shark Obstacle
const sharkArray = [];

if(!obstacleId) {
    obstacleId = setInterval(function(){
    let sharkObstacle = new Obstacle (
    ctx,//canvas context
    canvas.width,
    Math.random() * (800 - 240) + 240,
    speedMultiplier * Math.ceil(Math.random() * 1) // will give the speed
    )
    sharkArray.push(sharkObstacle);
},2500)
}

if(!obstacleIdMommy) {
    obstacleIdMommy = setInterval(function(){
        let sharkObstacle = new Obstacle (
            ctx,//canvas context
            canvas.width,
            Math.random() * (800 - 240) + 240,
            speedMultiplier * Math.ceil(Math.random() * 4), // will give the speed
            "./Images/MommyShark.png"
        )
        sharkArray.push(sharkObstacle);
    },
    19000)
}

if(!obstacleIdDaddy) {
    obstacleIdDaddy = setInterval(function(){
        let sharkObstacle = new Obstacle (
            ctx,//canvas context
            canvas.width,
            Math.random() * (800 - 240) + 240,
            speedMultiplier * Math.ceil(Math.random() * 4), // will give the speed
            "./Images/DaddyShark.png"
        )
        sharkArray.push(sharkObstacle);
    },
    27000)
}

if(!obstacleIdGrandMommy) {
    obstacleIdGrandMommy = setInterval(function(){
        let sharkObstacle = new Obstacle (
            ctx,//canvas context
            canvas.width,
            Math.random() * (800 - 240) + 240,
            speedMultiplier * Math.ceil(Math.random() * 4), // will give the speed
            "./Images/GrandmomShark.png"
        )
        sharkArray.push(sharkObstacle);
    },
    36000)
}

if(!obstacleIdGrandDaddy) {
    obstacleIdGrandDaddy = setInterval(function(){
        let sharkObstacle = new Obstacle (
            ctx,//canvas context
            canvas.width,
            Math.random() * (800 - 240) + 240,
            speedMultiplier * Math.ceil(Math.random() * 5), // will give the speed
            "./Images/GranddadShark.png"
        )
        sharkArray.push(sharkObstacle);
    },
    44000)
}

//timeToStartObstacles = 1;

//Flower Obstacle
    const flowerArray = [];

if(!obstacleIdFlower) {
    obstacleIdFlower = setInterval(function(){
        // Create random x and y
        // Use collison with shark to change the values
        // it's easier to have the login in a while loop

        // this is the pseudo-code
            //Math.random() * (800 - 240) + 240,
            //Math.ceil(Math.random() * 1)
            // ... create the FIRST flower

        // while(collision(flower, shark)){
            //Math.random() * (800 - 240) + 240,
            //Math.ceil(Math.random() * 1)
            // ...
        //}
        // outside the while loop you push to the array
    
    let flowerObstacle = new Flower (
    ctx,//canvas context
    canvas.width,
    Math.random() * (800 - 240) + 240,
    Math.ceil(Math.random() * 1) // will give the speed
        )
    flowerArray.push(flowerObstacle);
},5000)
}

//This is where the game logic happens
function startGame() {
    //Create a loop to animate the game
    playMusicLandingPage.pause();
    playMusic.play();
    //Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //Paint the objects, still missing the flowers
    background.draw();
    score.draw();
    surfer.draw();
    sharkArray.forEach((shark)=>{ //loop through the array in order to print the objects in the array
        shark.move();
        shark.draw();
        checkCollision(surfer, shark);
    });

    flowerArray.forEach((flower, index)=>{ //loop through the array in order to print the objects in the array
        flower.move();
        flower.draw();
        checkFlower(surfer, flower, index);
    });

    if (collision === false) {
        frameId = requestAnimationFrame(startGame);
    }
}

//Collision with Shark

function checkCollision (surfer, shark) {
    const colliding = (
        surfer.x < shark.x + shark.width - 20 &&
        surfer.x + surfer.width - 20 > shark.x &&
        surfer.y < shark.y + shark.height - 20 &&
        surfer.y + surfer.height - 20 > shark.y
    );           

    // Game over when collision happens
    if (colliding) {
        collision = true;
        console.log('Uh oh! The surfer collided with a shark...')
        clearInterval(frameId);
        clearInterval(obstacleId);
        clearInterval(obstacleIdMommy);
        clearInterval(obstacleIdFlower);
        window.location.reload();
        playMusic.pause()
        playMusicGameOver.play()
      }
}

// FLOWERS
function checkFlower (surfer, flower, i) {
   if(
    (
        surfer.x < flower.x + flower.width &&   // left
        surfer.x + surfer.width > flower.x &&   // right
        surfer.y < flower.y + flower.height &&  // top
        surfer.y + surfer.height > flower.y     // bottom
    )
    ){
        score.points++; // increment score by 1 for each flower collision
        flowerArray.splice(i, 1) // to delete the flowers after they have collide
        playMusic.pause()
        playMusicCollectFlower.play()
        /*Add difficulty, increase speed
        if (score.points >= 10 && score.points < 20) {
            // Let's go through the array of sharks we have
            // and increase their speed by 1.1
            speedMultiplier *= increaseSpeed;
            sharkArray.forEach((shark) => {
                shark.speed *= increaseSpeed;
            })
        }*/
    }
};

window.addEventListener('keydown', moveSurfer);
    function moveSurfer(event){
        event.preventDefault(); // prevents the keys from default behaviour
        switch (event.code){            
            case 'ArrowUp': // up
                if (surfer.y > 240) surfer.y -= 15; 
                console.log("up")
                break;
    
            case 'ArrowRight': // straight forward
               if (surfer.x < canvas.height - surfer.height) surfer.x += 15; 
                break; 

            case 'ArrowDown': // down
                if (surfer.y < canvas.height - surfer.height) surfer.y += 15; 
                console.log("down")
                break;

            case 'ArrowLeft': // backwards
               if (surfer.x < canvas.height - surfer.height) surfer.x -= 15; 
                break; 

            default:
                break;
        }
    }

//Start the game when we click on the start button
const startButton = document.getElementById('start')
startButton.addEventListener("click", startGame)
};