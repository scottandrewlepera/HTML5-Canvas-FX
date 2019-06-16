import { initRequestAnimFrame } from '../requestAnimFrame';
import { getCanvasAttributes, paintCanvas } from '../canvas';
import { FX_SYSTEM_ATTR } from '../constants';

export class FlickerSystem {

    update: () => void;
    rgb: string;
    alpha: number;

    constructor(canvas: HTMLCanvasElement, rgb: string) {

        let ctx = canvas.getContext('2d');
        this.rgb = rgb;
        this.alpha = 0;

        this.update = function () {
            this.alpha = Math.random() * 0.3;
            ctx.fillStyle = `rgba(${this.rgb}, ${this.alpha})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }
}

export function init(window) {

    initRequestAnimFrame(window);
    let document = window.document;

    let canvases = document.querySelectorAll(`canvas[${FX_SYSTEM_ATTR}="flicker"]`);
    console.log(canvases.length);
    Array.from(canvases).forEach((canvas: HTMLCanvasElement) => {

        let { rgb } = getCanvasAttributes(canvas);
        let system = new FlickerSystem(canvas, rgb);
        
        function paint() {
            paintCanvas(canvas, system, window.fx.paused);
            window.requestAnimFrame(paint);
        }
        
        window.requestAnimFrame(paint);
    });
}
