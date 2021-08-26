// add speed, but keeps undefined & add Hawaiian Flowers
class Obstacle {

    constructor( canvasContext, positionX, positionY, speed, img ){
        if (img === undefined) {
            img = "Images/BabyShark.png"
        }
        this.ctx = canvasContext;
        this.obstacleImg = document.createElement('img');
        this.obstacleImg.src = img;        
        this.x = positionX;
        this.y = positionY;
        this.width = 80;
        this.height = 80;
        this.speed = speed;
        this.scale = 1;
    }

    draw(){
        this.ctx.drawImage(this.obstacleImg, this.x, this.y, this.width * this.scale, this.height * this.scale);
    }

    move(){
        this.x -= this.speed;
    };
}