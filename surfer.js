const surferImg = document.createElement('img');
surferImg.src = './Images/Surfer.png';

class Surfer {

    constructor(canvasContext, positionX, positionY){
        this.ctx = canvasContext,
        this.image = surferImg,
        this.x = positionX,
        this.y = positionY,
        this.width = 100,
        this.height = 100
    }

    draw(){
        this.ctx.drawImage(surferImg, this.x, this.y, this.width, this.height);
    }
}