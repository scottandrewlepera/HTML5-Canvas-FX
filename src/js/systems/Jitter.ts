import { initRequestAnimFrame } from '../requestAnimFrame';
import { FX_SYSTEM_JITTER_ATTR } from '../constants';

export class FilterSystem {

    update: () => void;
    blur: number;
    jitter: number;

    constructor(element: HTMLElement, blur: number, jitter: number = 0) {

        this.blur = blur;
        this.jitter = jitter;

        this.update = function () {
            const blurAmount = Math.round(Math.random() * this.blur);

            const x = Math.round(Math.random() * this.jitter);
            const y = Math.round(Math.random() * this.jitter);

            element.style.filter = `blur(${blurAmount}px)`;
            element.style.transform = `translate(${x}px,${y}px)`;
        }
    }
}

export function init(window) {

    initRequestAnimFrame(window);

    var jitterElements = document.querySelectorAll(`[${FX_SYSTEM_JITTER_ATTR}]`);

    Array.from(jitterElements).forEach((element: HTMLElement) => {

        let jitterAttr = element.getAttribute(FX_SYSTEM_JITTER_ATTR);

        // filter value is like "5px, 100ms, 10jt"
        const jitterData = jitterAttr.split(',');
        
        const blur = jitterData.find((elm: string) => {
            return elm.includes('px');
        });

        const delay = jitterData.find((elm: string) => {
            return elm.includes('ms');
        });

        const jitter = jitterData.find((elm: string) => {
            return elm.includes('jt');
        });

        const system = new FilterSystem(element, parseInt(blur, 10), parseInt(jitter, 10));

        const max = parseInt(delay, 10) || 0;  
        let timer = Date.now();
        
        function paint() {
            if (!window.fx.paused) {
                if (Date.now() - timer >= max) {
                    timer = Date.now();
                    system.update();
                }
            }
            window.requestAnimFrame(paint);
        }
        
        window.requestAnimFrame(paint);
    });
}
