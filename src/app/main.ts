import { App } from 'app/app';

window.onload = (ev) => {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    let app = new App(canvas);
}