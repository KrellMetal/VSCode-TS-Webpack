import { Lib } from 'app/lib';

export class App {

    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;

    private lib: Lib;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext('2d');

        this.lib = new Lib(this.ctx);

        this.lib.fillRect(0, 0, this.canvas.width, this.canvas.height, '#000');

        this.setupButtonHandlers();

    }

    private setupButtonHandlers() {
        document.getElementById('btnTest').onclick = () => {
            this.test();
        }
    }

    public test(): void {
        this.lib.fillCircle(150, 150, 10, '#ffffff');
    }

}