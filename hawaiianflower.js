const flowerImg = document.createElement('img');
flowerImg.src = './Images/HawaiianFlower.png';

class Flower {

    constructor( canvasContext, positionX, positionY, speed ){
        (this.ctx = canvasContext),
        (this.x = positionX),
        (this.y = positionY),
        (this.width = 50),
        (this.height = 50),
        (this.speed = speed);
    }

    draw(){
        this.ctx.drawImage(flowerImg, this.x, this.y, this.width, this.height);
    }

    move(){
        this.x -= this.speed;
    };
}