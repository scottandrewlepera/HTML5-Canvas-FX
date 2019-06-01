export interface Particle {
    render: (ctx: CanvasRenderingContext2D) => void;
    x: number;
    y: number;
    vx: number;
    vy: number;
    rgb?: string;
    maxWidth?: number;
}