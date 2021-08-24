const bgImg = document.createElement('img');
bgImg.src = './Images/Background.png';
class Background {
    constructor( canvasContext ){
        (this.ctx = canvasContext),
        (this.x = 0),
        (this.y = 0),
        (this.width = 2000),
        (this.height = 800);
    }

    draw(){
        this.ctx.drawImage(bgImg, this.x, this.y, this.width, this.height);
    }

}