import { initRequestAnimFrame } from '../requestAnimFrame';
import { Particle } from '../types/Particle';
import { PARTICLES } from '../particles';
import { PATHS } from '../paths';
import { DEFAULT_SYSTEM_MAX_WIDTH, DEFAULT_SYSTEM_COUNT, DEFAULT_SYSTEM_RGB }  from '../constants';

export class ParticleSystem {

    particles: any[];
    update: () => void;
    initParticle: (particle: any, areaWidth: any, areaHeight: any) => void;
    moveParticle: (particle: any) => void;

    constructor(canvas: HTMLCanvasElement, particleClass: Particle, path: any, count: number = DEFAULT_SYSTEM_COUNT, rgb: string = DEFAULT_SYSTEM_RGB, maxWidth: number = DEFAULT_SYSTEM_MAX_WIDTH) {

        let ctx = canvas.getContext('2d');

        this.particles = [];

        // generate particles and assign to random path location
        var occupied = [];
        for (let i = 0; i < count; ++i) {
            let particle = new (particleClass as any)(rgb, maxWidth);
            initParticle(particle);
            var coordinate = 0;
            // while (occupied.includes(coordinate)) {
                 coordinate = Math.ceil(Math.random() * path.length);
            // }
            // occupied.push(coordinate);
            console.log(coordinate, path.length);
            this.particles.push({ particle, coordinate } );
        }

        this.update = function () {
            for (let i = 0; i < count; ++i) {

                var particle = this.particles[i];
                // move particles from the end of the path back to the start
                if (particle.coordinate < path.length) {
                    moveParticle(particle);
                    particle.particle.render(ctx);

                } else {
                    particle.coordinate = 0;
                    initParticle(particle);
                }
            }
        }
        function initParticle (particle) {
            // assign random velocity
            particle.vx = Math.ceil(Math.random() * 3 - 1);
        }
        function moveParticle (particle) {
            particle.particle.x = path[particle.coordinate].x;
            particle.particle.y = path[particle.coordinate].y;
            // particle.coordinate += particle.particle.vx;
            particle.coordinate++;
        }
    }
}

export function init(window) {

    initRequestAnimFrame(window);
    var document = window.document;

    var canvases = document.querySelectorAll('canvas[data-fx="path"]');

    Array.from(canvases).forEach( (canvas: HTMLCanvasElement) => {

        var particleClassKey = canvas.getAttribute('data-fx-particle');
        var particleClass = PARTICLES[particleClassKey];

        var pathKey = canvas.getAttribute('data-fx-path');
        var path = PATHS[pathKey];

        var n = parseInt(canvas.getAttribute('data-n'), 10) || DEFAULT_SYSTEM_COUNT;
        var rgb = canvas.getAttribute('data-rgb') || DEFAULT_SYSTEM_RGB;
        var mw = parseInt(canvas.getAttribute(`data-max-width`), 10) || DEFAULT_SYSTEM_MAX_WIDTH;
        var system = new ParticleSystem(canvas, particleClass, path, n, rgb, mw);

        window.requestAnimFrame(paint);

        function paint() {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            system.update();
            window.requestAnimFrame(paint);
        }
    });
}