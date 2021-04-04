class Snake {

    constructor(x, y, canvas, ctx, headColor, tailColor, blockSize) {
        this.x = 90;
        this.y = y;
        this.blockSize = blockSize;
        this.headColor = headColor;
        this.tailColor = tailColor;
        this.xSpeed = blockSize;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];
        this.canvas = canvas;
        this.ctx = ctx;
    }

    draw() {
        for (let i=0; i<this.tail.length; i++) {
            this.ctx.fillStyle = this.tailColor;
            this.ctx.fillRect(this.tail[i].x, this.tail[i].y, this.blockSize, this.blockSize);
        }

        this.ctx.fillStyle = this.headColor;
        this.ctx.fillRect(this.x, this.y, this.blockSize, this.blockSize);
    }

    update() {
        for (let i=0; i<this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y }

        this.x += this.xSpeed
        this.y += this.ySpeed

        if (this.x > this.canvas.width) {
            this.x = 0;
        } else if (this.y > this.canvas.height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = this.canvas.height;
        } else if (this.x < 0) {
            this.x = this.canvas.width;
        }
    }

    eat(food) {
        const hasCollided = food.x == this.x && food.y == this.y;
        if (hasCollided) { this.total++; }
        return hasCollided;
    }

}