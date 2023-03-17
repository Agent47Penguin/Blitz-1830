export function drawGrid(ctx, tileSize, gridColor) {
    ctx.strokeStyle = gridColor;
    ctx.lineWidth;

    // Draw vertical lines
    for (let x = 0; x <= ctx.canvas.width; x += tileSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, ctx.canvas.height);
        ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= ctx.canvas.height; y += tileSize / 2) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(ctx.canvas.width, y);
        ctx.stroke();
    }
}