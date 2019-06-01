import { initRequestAnimFrame } from '../requestAnimFrame';

export class Scratch {

    x: number;
    vx: number;
    lifespan: number;
    timer: number;
    width: number;
    alpha: number;
    maxWidth: any;
    update: () => void;
    reset: (areaWidth: any) => void;

    constructor(maxWidth) {

        this.x = 0;
        this.vx = 0;
        this.lifespan = 1000;
        this.timer = 0;
        this.width = 1;
        this.alpha = 1;
        this.maxWidth = maxWidth;

        this.update = function () {
            // 95% chance to reverse course
            if ((Math.random() * (100 - 1) + 1) > 95) {
                this.vx = -this.vx;
            }
            if ((Math.random() * (100 - 1) + 1) > 50) {
                this.width = Math.random() * (this.maxWidth - 1) + 1;
                this.alpha = Math.random() * (1 - 0.5) + 0.5;
            }
            this.x += this.vx;
            this.timer++;
        };

        this.reset = function (areaWidth) {
            this.x = Math.random() * (areaWidth - 1) + 1;
            this.vx = Math.random() * 3 - 3 / 2;
            this.lifespan = Math.random() * ((4 - 1) + 1) * 100;
            this.timer = 0;
            this.width = Math.random() * (this.maxWidth - 1) + 1;
            this.alpha = Math.random() * (1 - 0.5) + 0.5;
        };
    }
}

export class ScratchSystem {
    scratches: any[];
    update: () => void;

    constructor(canvas, count, maxWidth, rgbColor) {
        var ctx = canvas.getContext('2d');
        count = count || 1;
        maxWidth = maxWidth || 3;
        rgbColor = rgbColor || '255,255,255';
        this.scratches = [];

        for (var i = 0; i < count; ++i) {
            var line = new Scratch(maxWidth);
            line.reset(canvas.width);
            this.scratches.push(line);
        }

        this.update = function () {
            this.scratches.forEach((scratch) => {
                /* reset the scratch if it expires or it moves off the canvas edge */
                if (scratch.x > 0 &&
                    scratch.x < canvas.width &&
                    scratch.timer < scratch.lifespan) {
                    scratch.update();
                    ctx.fillStyle = `rgba(${rgbColor}, ${scratch.alpha})`;
                    ctx.fillRect(scratch.x, 0, scratch.width, canvas.height);
                } else {
                    scratch.reset(canvas.width);
                }
            });
        };
    }
}

export function init(window) {

    initRequestAnimFrame(window);
    var document = window.document;

    var canvases = document.querySelectorAll('canvas[data-fx="scratches"]');

    Array.from(canvases).forEach( (canvas: HTMLCanvasElement) => {

        var n = parseInt(canvas.getAttribute('data-n'), 10) || 1;
        var mw = parseInt(canvas.getAttribute('data-max-width'), 10) || 3;
        var rgb = canvas.getAttribute('data-rgb');

        var system = new ScratchSystem(canvas, n, mw, rgb);

        window.requestAnimFrame(paint);

        function paint() {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            system.update();
            window.requestAnimFrame(paint);
        }
    });
}
