import { Drawing, Vec2 } from 'app/lib';

export class Entity{

    private pos: Vec2;
    private radius: number;
    private vel: Vec2;
    private color: string;

    constructor(private canvas: HTMLCanvasElement,
                private ctx: CanvasRenderingContext2D,
                private drawing: Drawing){
        
            this.pos = new Vec2(50,50);
            this.radius = 10;
            this.vel = new Vec2(200,100);
            this.color = '#f00';

    }

    public update(deltaTime: number){
        this.pos.x += this.vel.x * deltaTime;
        this.pos.y += this.vel.y * deltaTime;
        this.checkCollision();
    }

    public draw(){
        this.drawing.fillCircle(this.pos.x, this.pos.y, this.radius, this.color);
    }

    private checkCollision(){
        if (this.pos.x > this.canvas.width){
            this.pos.x = 0;
        }

        if ( this.pos.x < 0){
            this.pos.x = this.canvas.width;
        }

        if (this.pos.y > this.canvas.height){
            this.pos.y = 0;
        }

        if (this.pos.y < 0){
            this.pos.y = this.canvas.height;
        }      

    }
    
}