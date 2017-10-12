export class Lib {

    private ctx: CanvasRenderingContext2D;
    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    public fillRect(x: number, y: number,
        width: number, height: number,
        color: string | CanvasGradient | CanvasPattern) {

        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);

    }

    public fillCircle(x: number, y: number,
        radius: number,
        color: string | CanvasGradient | CanvasPattern) {

        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        this.ctx.fill();

    }

}