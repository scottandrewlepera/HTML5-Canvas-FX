import { Particle } from '../types/Particle';

export class Shard implements Particle {
    
    x: number;
    y: number;
    vx: number;
    vy: number;

    alpha: number;
    rgb: string;
    render: (ctx: CanvasRenderingContext2D) => void;
    maxWidth: number;
    minWidth: number;
    rotations: any[];
    offsets: any[];
    
    constructor(rgb: string, maxWidth: number) {

        this.alpha = 1;
        this.rgb = rgb;
        this.maxWidth = maxWidth;
        this.x = 0;
        this.y = 0;
        this.offsets = []
        this.rotations = [];

        // point 1 is a random point directly east of x, no further
        // than maxWidth and no closer than 1/3 maxWidth

        let minWidth =  Math.floor(maxWidth / 3);

        // pre-calculate all points as offsets of x,y
        let point1 = {
            x: Math.random() * (maxWidth - minWidth) + minWidth,
            y: 0
        };

        // point 2 is a random point south of y and east of x, no further
        // than maxWidth and no closer than 1/2 maxWidth
        let point2 = {
            x: Math.random() * (maxWidth - minWidth) + minWidth,
            y: maxWidth
        };

        let centerX = Math.round((point1.x + point2.x) / 3);
        let centerY = Math.round((point1.y + point2.y) / 3);

        let point0Radian = getRadian(centerX, centerY, 0, 0);
        let point1Radian = getRadian(centerX, centerY, point1.x, point1.y);
        let point2Radian = getRadian(centerX, centerY, point2.x, point2.y);

        this.offsets[0] = getRotationCoordOffsets(point0Radian, centerX, centerY);
        this.offsets[1] = getRotationCoordOffsets(point1Radian, point1.x, point1.y);
        this.offsets[2] = getRotationCoordOffsets(point2Radian, point2.x, point2.y);

        console.log('rotations: ', this.rotations);

        function getRotationCoordOffsets( radian, px, py) {
            let coords = [];
            let atan2 = Math.atan2(px, py);
            console.log(atan2);
            for (var i = atan2 * Math.PI; i < 10 * Math.PI; i += 0.01) {
                let x = Math.round(radian * Math.sin(i));
                let y = Math.round(radian * Math.cos(i));
                coords.push({x, y});
                if (i == atan2) {
                    this.rotations[this.rotations.length] = coords.length - 1;
                }
            }
            return coords;
        }

        function getRadian( x1, x2, y1, y2) {
            let radian = Math.round(Math.hypot(x1 - x2, y1 - y2));
            console.log(radian);
            return radian;
        }

        this.render = function(ctx: CanvasRenderingContext2D) {
//            this.alpha = Math.random() * (1 - 0.2) + 0.2; 
            ctx.fillStyle = `rgba(${this.rgb}, ${this.alpha})`;

            this.rotations[0] = this.rotations[0] < this.offsets[0].length - 1 ? this.rotations[0] + 1 : 0;
            this.rotations[1] = this.rotations[1] < this.offsets[1].length - 1 ? this.rotations[1] + 1 : 0;
            this.rotations[2] = this.rotations[2] < this.offsets[2].length - 1 ? this.rotations[2] + 1 : 0;

            ctx.beginPath();
            ctx.moveTo(this.x + this.offsets[0][this.rotations[0]].x, this.y + this.offsets[0][this.rotations[0]].y);
            ctx.lineTo(this.x + this.offsets[1][this.rotations[1]].x, this.y + this.offsets[1][this.rotations[1]].y);
            ctx.lineTo(this.x + this.offsets[2][this.rotations[2]].x, this.y + this.offsets[2][this.rotations[2]].y);
            ctx.fill();
        }
    }
}



