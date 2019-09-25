import { initRequestAnimFrame } from '../requestAnimFrame';
import { getCanvasAttributes, paintCanvas, getCanvases } from '../canvas';

export class FlickerSystem {

    update: () => void;
    rgb: string;
    range: number;

    constructor(canvas: HTMLCanvasElement, rgb: string, range: number = 0.3) {

        let ctx = canvas.getContext('2d');
        this.rgb = rgb;
        this.range = range;

        this.update = function () {
            const alpha = Math.random() * this.range;
            ctx.fillStyle = `rgba(${this.rgb}, ${alpha})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }
}

export function init(window) {

    initRequestAnimFrame(window);
    var canvases = getCanvases('flicker');
    Array.from(canvases).forEach((canvas: HTMLCanvasElement) => {

        let { rgb, range } = getCanvasAttributes(canvas);
        let system = new FlickerSystem(canvas, rgb, range);
        
        function paint() {
            paintCanvas(canvas, system, window.fx.paused);
            window.requestAnimFrame(paint);
        }
        
        window.requestAnimFrame(paint);
    });
}
