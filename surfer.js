const surferImg = document.createElement('img');
surferImg.src = './Images/Surfer.png';

class Surfer {

    // position not correct yet---startposition is good but need to make sure it doesn't go out of the water! 
    constructor(canvasContext, positionX, positionY){
        this.ctx = canvasContext,
        this.image = surferImg,
        this.x = 0,
        this.y = 400,
        this.width = 100,
        this.height = 100
    }

    draw(){
        this.ctx.drawImage(surferImg, this.x, this.y, this.width, this.height);
    }
}