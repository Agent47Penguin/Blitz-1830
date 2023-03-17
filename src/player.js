export class Player {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.moving = { up: false, down: false, left: false, right: false };
    }

    update() {
        if (this.moving.up) this.y -= this.speed;
        if (this.moving.down) this.y += this.speed;
        if (this.moving.left) this.x -= this.speed;
        if (this.moving.right) this.x += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = "Black";
        ctx.fillRect(this.x, this.y, this.size, this.size / 2);
    }
}

