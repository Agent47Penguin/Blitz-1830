// Get the canvas element and its context
const canvas = document.getElementById('game-box');
const ctx = canvas.getContext('2d');

// Clear the canvas
function clear() {
    ctx.fillStyle = "White";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Continue game loop
function gameLoop() {
    clear();
    requestAnimationFrame(gameLoop);
}

gameLoop();
