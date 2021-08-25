class Background {
    constructor( canvasContext ){
        this.ctx = canvasContext;
        this.bgImg = document.createElement('img');
        this.bgImg.src = './Images/Background.png';
        this.x = 0;
        this.y = 0;
        this.width = 2000;
        this.height = 800;
    }

    draw(){
        this.ctx.drawImage(this.bgImg, this.x, this.y, this.width, this.height);
    }

}