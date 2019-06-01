import { initRequestAnimFrame } from '../requestAnimFrame';
import { Particle } from '../types/Particle';
import { PARTICLES } from '../particles';
import {DEFAULT_SYSTEM_MAX_WIDTH,  DEFAULT_SYSTEM_RGB, DEFAULT_SYSTEM_COUNT }  from '../constants';

export class FizzSystem {

    particles: any[];
    update: () => void;

    constructor(canvas: HTMLCanvasElement, particleClass: Particle, count: number = DEFAULT_SYSTEM_COUNT, rgb: string = DEFAULT_SYSTEM_RGB, maxWidth: number = DEFAULT_SYSTEM_MAX_WIDTH) {
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
                // We don't want to process particles that
                // we can't see anymore
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

    var canvases = document.querySelectorAll('canvas[data-fx="fizz"]');

    Array.from(canvases).forEach((canvas: HTMLCanvasElement) => {

        var particleClassKey = canvas.getAttribute('data-fx-particle');
        var particleClass = PARTICLES[particleClassKey];

        var n = parseInt(canvas.getAttribute('data-n'), 10) || DEFAULT_SYSTEM_COUNT;
        var mw = parseInt(canvas.getAttribute(`data-max-width`), 10) || DEFAULT_SYSTEM_MAX_WIDTH;
        var rgb = canvas.getAttribute(`data-rgb`) || DEFAULT_SYSTEM_RGB;
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
