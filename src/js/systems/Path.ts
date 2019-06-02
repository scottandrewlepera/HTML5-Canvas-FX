import { initRequestAnimFrame } from '../requestAnimFrame';
import { Particle } from '../types/Particle';
import { PARTICLES } from '../particles';
import { PATHS } from '../paths';
import { getCanvasAttributes } from '../canvas';
import { FX_SYSTEM_ATTR, FX_PATH_ATTR } from '../constants';

export class PathSystem {

    particles: any[];
    update: () => void;
    initParticle: (particle: any, areaWidth: any, areaHeight: any) => void;
    moveParticle: (particle: any) => void;

    constructor(canvas: HTMLCanvasElement, particleClass: Particle, path: any, count: number, rgb: string, maxWidth: number) {

        let ctx = canvas.getContext('2d');
        this.particles = [];

        // generate particles and assign to random path location
        for (let i = 0; i < count; ++i) {
            let particle = new (particleClass as any)(rgb, maxWidth);
            var coordinate = Math.ceil(Math.random() * path.length);
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
                }
            }
        }
        function moveParticle (particle) {
            particle.particle.x = path[particle.coordinate].x;
            particle.particle.y = path[particle.coordinate].y;
            particle.coordinate++;
        }
    }
}

export function init(window) {

    initRequestAnimFrame(window);
    var document = window.document;

    var canvases = document.querySelectorAll(`canvas[${FX_SYSTEM_ATTR}="path"]`);

    Array.from(canvases).forEach( (canvas: HTMLCanvasElement) => {

        var pathKey = canvas.getAttribute(FX_PATH_ATTR);
        var path = PATHS[pathKey];

        var { n, rgb, mw ,particleClassKey} = getCanvasAttributes(canvas);
        var particleClass = PARTICLES[particleClassKey];
        var system = new PathSystem(canvas, particleClass, path, n, rgb, mw);

        window.requestAnimFrame(paint);

        function paint() {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            system.update();
            window.requestAnimFrame(paint);
        }
    });
}