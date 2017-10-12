export class Timer{

    private accumulatedTime: number = 0;
    private lastTime: number = 0;


    constructor(private deltaTime = 1/60){
    }

    private enqueue(){
        requestAnimationFrame((time)=>{
            this.accumulatedTime += (time - this.lastTime) / 1000;
            while (this.accumulatedTime > this.deltaTime){
                this.update(this.deltaTime);
                this.accumulatedTime -= this.deltaTime;
            }
    
            this.lastTime = time;
            this.enqueue();
        });
    }

    public update: (deltaTime:number) => void;

    public start(){
        this.enqueue();
    }
}