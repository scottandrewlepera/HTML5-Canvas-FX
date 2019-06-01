import { Particle } from '../types/Particle';

export class DustMote implements Particle {
    
    x: number;
    y: number;
    vx: number;
    vy: number;

    alpha: number;
    rgb: string;
    render: (ctx: CanvasRenderingContext2D) => void;
    maxWidth: number;
    
    constructor(rgb: string, maxWidth: number) {

        this.alpha = 1;
        this.rgb = rgb;
        this.maxWidth = maxWidth;

        this.render = function(ctx: CanvasRenderingContext2D) {
            this.alpha = Math.random() * (1 - 0.2) + 0.2; 
            ctx.fillStyle = `rgba(${this.rgb}, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.maxWidth, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}



