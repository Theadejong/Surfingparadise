// add speed, but keeps undefined & add Hawaiian Flowers
class Obstacle {

    constructor( canvasContext, positionX, positionY, speed, img ){
        if (img === undefined) {
            img = "./Images/Shark.png"
        }
        this.ctx = canvasContext;
        this.obstacleImg = document.createElement('img');
        this.obstacleImg.src = img;        
        this.x = positionX;
        this.y = positionY;
        this.width = 100;
        this.height = 100;
        this.speed = speed;
    }

    draw(){
        this.ctx.drawImage(this.obstacleImg, this.x, this.y, this.width, this.height);
    }

    move(){
        this.x -= this.speed;
    };
}