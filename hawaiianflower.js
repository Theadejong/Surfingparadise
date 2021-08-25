class Flower {

    constructor( canvasContext, positionX, positionY, speed ){
        this.ctx = canvasContext;
        this.flowerImg = document.createElement('img');
        this.flowerImg.src = './Images/HawaiianFlower.png';
        this.x = positionX;
        this.y = positionY;
        this.width = 30;
        this.height = 30;
        this.speed = speed;
    }

    draw(){
        this.ctx.drawImage(this.flowerImg, this.x, this.y, this.width, this.height);
    }

    move(){
        this.x -= this.speed;
    };
}