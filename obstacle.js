// add speed, but keeps undefined & add Hawaiian Flowers
const obstacleImg = document.createElement('img');
obstacleImg.src = './Images/Shark.png';

class Obstacle {

    constructor( canvasContext, positionX, positionY, speed ){
        (this.ctx = canvasContext),
        (this.x = positionX),
        (this.y = positionY),
        (this.width = 100),
        (this.height = 100),
        (this.speed = speed);
    }

    draw(){
        this.ctx.drawImage(obstacleImg, this.x, this.y, this.width, this.height);
    }

    move(){
        this.x -= this.speed;
    };
}