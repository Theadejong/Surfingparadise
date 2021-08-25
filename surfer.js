class Surfer {

    // position not correct yet---startposition is good but need to make sure it doesn't go out of the water! 
    constructor(canvasContext, startPositionX, startPositionY){
        this.ctx = canvasContext;
        this.surferImg = document.createElement('img');
        this.surferImg.src = './Images/Surfer.png';
        this.x = startPositionX;
        this.y = startPositionY;
        this.width = 100;
        this.height = 100;
    }

    draw(){
        this.ctx.drawImage(this.surferImg, this.x, this.y, this.width, this.height);
    }
}