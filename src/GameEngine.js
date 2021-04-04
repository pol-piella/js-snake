class GameEngine {

    constructor(canvas, ctx, blockSize) {
        this.blockSize = blockSize
        this.rows = canvas.height / blockSize
        this.columns = canvas.width / blockSize
        this.ctx = ctx;
        const { x, y } = this.randomCoordinates();
        this.snake = new Snake(0, 0, canvas, this.ctx, "#FF0000", blockSize);
        this.food = new Food(x, y, ctx, "#FF0000", blockSize);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.gameLoop = this.gameLoop.bind(this);

        window.setInterval(this.gameLoop, 100);
        window.addEventListener('keydown', this.onKeyDown);
    }

    randomCoordinates() {
        return {
            x: (Math.floor(Math.random() * this.columns - 1) + 1) * this.blockSize,
            y: (Math.floor(Math.random() * this.rows - 1) + 1) * this.blockSize
        }
    }

    gameLoop() {
        // Clear Previous State
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw Food
        this.food.draw();
        // Update and Draw Snake
        this.snake.update();
        this.snake.draw();

        // Handle Collision
        if (this.snake.eat(this.food)) {
            const { x, y } = this.randomCoordinates();
            this.food.x = x;
            this.food.y = y;
        }
    }

    onKeyDown(e) {
        switch(e.key) {
            case 'ArrowDown':
                this.snake.xSpeed = 0;
                this.snake.ySpeed = this.blockSize;
                break;
            case 'ArrowUp':
                this.snake.xSpeed = 0;
                this.snake.ySpeed = -this.blockSize;
                break;
            case 'ArrowLeft':
                this.snake.xSpeed = -this.blockSize;
                this.snake.ySpeed = 0;
                break;
            case 'ArrowRight':
                this.snake.xSpeed = this.blockSize;
                this.snake.ySpeed = 0;
                break;
        }
    }
}