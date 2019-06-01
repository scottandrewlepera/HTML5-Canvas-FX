import { Particle } from '../types/particle';

export class Globe implements Particle {

    x: any;
    y: any;
    vx: any;
    vy: any;
    alpha: number;
    maxDiameter: any;
    rgb: string;
    render: (ctx: CanvasRenderingContext2D) => void;

    constructor(rgb: string, maxWidth: number) {

        this.alpha = 1;
        this.maxDiameter = maxWidth;
        this.rgb = rgb;
        
        this.render = function (ctx: CanvasRenderingContext2D) {
            this.alpha = Math.random() * (1 - 0.2) + 0.2;
            let radius = Math.random() * (this.maxDiameter - 2) + 2;

            ctx.fillStyle = `rgba(${this.rgb}, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
};
