import { Drawing, Vec2} from 'app/lib';
import { Entity } from 'app/Entity';
import { Timer } from 'app/Timer';

export class App {

    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;

    private drawing: Drawing;

    private timer : Timer;


    private entity : Entity;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext('2d');

        this.drawing = new Drawing(this.ctx);

       

        this.setupButtonHandlers();

        this.entity = new Entity(this.canvas, this.ctx, this.drawing);        

        /*
        setInterval(()=>{
            this.update();
            this.draw();
        },1000/60);
        */

        this.timer = new Timer();
        this.timer.update = (deltaTime) => {
            this.update(deltaTime);
            this.draw();
        }
        this.timer.start();
        

    }

    private update(deltaTime:number){
        this.entity.update(deltaTime);
    }

    private draw(){
        this.drawing.fillRect(0, 0, this.canvas.width, this.canvas.height, 'black');
        this.entity.draw();
    }

    private setupButtonHandlers() {
        document.getElementById('btnTest').onclick = () => {
            this.test();
        }
    }

    public test(): void {
        this.drawing.fillCircle(150, 150, 10, '#ffffff');
        this.timer.start();
    }

}