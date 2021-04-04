// Query elements and get context

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Start Game Engine!

const gameEngine = new GameEngine(canvas, ctx, 10);