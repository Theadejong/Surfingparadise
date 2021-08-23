// add speed, but keeps undefined & add Hawaiian Flowers
const obstacleImg = document.createElement('img');
obstacleImg.src = './Images/Shark.png';

class Obstacle {

    constructor( canvasContext, positionX, positionY ){
        (this.ctx = canvasContext),
        (this.x = 0),
        (this.y = 0),
        (this.width = 100),
        (this.height = 100);
    }

    draw(){
        this.ctx.drawImage(obstacleImg, this.x, this.y, this.width, this.height);
    }
}