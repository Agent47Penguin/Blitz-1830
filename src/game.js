// Imports
import { Player } from "./player.js";
import { drawGrid } from "./debug.js";

// Get the canvas element and its contexts
const canvas = document.getElementById('game-box');
const ctx = canvas.getContext('2d');

// Grid variables
let tileSize = 20;
let showGrid = false;

// Create the player instance with appropriate values
const player = new Player(0, 0, tileSize, 5);

// Input functions
function onKeyDown(e) {
    switch (e.key) {
        case "w":
            player.moving.up = true;
            break;
        case "s":
            player.moving.down = true;
            break;
        case "a":
            player.moving.left = true;
            break;
        case "d":
            player.moving.right = true;
            break;
        case "g":
            showGrid = true;
            break;
    }
}

function onKeyUp(e) {
    switch (e.key) {
        case "w":
            player.moving.up = false;
            break;
        case "s":
            player.moving.down = false;
            break;
        case "a":
            player.moving.left = false;
            break;
        case "d":
            player.moving.right = false;
            break;
        case "g":
            showGrid = false;
            break;
    }
}

// Link input functions
document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

// Clear the canvas
function clear() {
    ctx.fillStyle = "White";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Continue game loop
function gameLoop() {
    // Clear canvas
    clear();

    // Draw grid
    if (showGrid) {
        drawGrid(ctx, tileSize, "Green");
    }

    // Update and draw player
    player.update();
    player.draw(ctx);

    // Push
    requestAnimationFrame(gameLoop);
}

gameLoop();
