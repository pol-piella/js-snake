class Food {
    
    constructor(x=0, y=0, ctx, color, blockSize) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.blockSize = blockSize;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = "#FF0000"
        this.ctx.fillRect(this.x, this.y, this.blockSize, this.blockSize);
    }
}