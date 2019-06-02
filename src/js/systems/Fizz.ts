import { initRequestAnimFrame } from '../requestAnimFrame';
import { Particle } from '../types/Particle';
import { PARTICLES } from '../particles';
import { getCanvasAttributes } from '../canvas';
import { FX_SYSTEM_ATTR } from '../constants';

export class FizzSystem {

    particles: any[];
    update: () => void;

    constructor(canvas: HTMLCanvasElement, particleClass: Particle, count: number, rgb: string, maxWidth: number) {
        var ctx = canvas.getContext('2d');

        this.particles = [];

        for (var i = 0; i < count; ++i) {
            let particle = new (particleClass as any)(rgb, maxWidth);
            initParticle(particle, canvas.width, canvas.height);
            this.particles.push(particle);
        }

        this.update = function () {
            for (i = 0; i < count; ++i) {
                var particle = this.particles[i];

                if (particle.y > 0 &&
                    particle.y < canvas.height) {
                    moveParticle(particle);
                    particle.render(ctx);

                } else {
                    initParticle(particle, canvas.width, canvas.height);
                }
            }
        }
        function initParticle (particle: Particle, areaWidth: number, areaHeight: number) {
            particle.x = Math.random() * (areaWidth - 1) + 1;
            particle.y = Math.random() * (areaHeight - 1) + 1;
            particle.vx = Math.random() * 3 - 1.5;
            particle.vy = -(Math.random() * (3 - 1.5) + 1);
        }
        function moveParticle (particle) {
            particle.y += particle.vy;
        }
    }
}

export function init(window, particleClass: Particle) {

    initRequestAnimFrame(window);
    var document = window.document;

    var canvases = document.querySelectorAll(`canvas[${FX_SYSTEM_ATTR}="fizz"]`);

    Array.from(canvases).forEach((canvas: HTMLCanvasElement) => {

        var { n, rgb, mw ,particleClassKey} = getCanvasAttributes(canvas);
        var particleClass = PARTICLES[particleClassKey];
        var system = new FizzSystem(canvas, particleClass, n, rgb, mw);

        window.requestAnimFrame(paint);

        function paint() {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            system.update();
            window.requestAnimFrame(paint);
        }
    });

}
