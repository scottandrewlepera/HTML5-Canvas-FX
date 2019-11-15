import { FX_SYSTEM_ATTR, FX_SYSTEM_JITTER_ATTR, FX_CANVAS_PAUSED } from './constants';
import { initRequestAnimFrame } from './requestAnimFrame';

export function initCanvasIntersectionObserver(window) {
    if( typeof IntersectionObserver !== 'undefined' ) {
        initRequestAnimFrame(window);
        let observer = new IntersectionObserver(function(changes) {
            changes.forEach(function(change: any) {
                if(!change.isIntersecting) {
                    window.requestAnimFrame(() => {
                        change.target.setAttribute(FX_CANVAS_PAUSED, 'true');
                    });
                } else {
                    window.requestAnimFrame(() => {
                        change.target.setAttribute(FX_CANVAS_PAUSED, 'false');
                    });
                }
            });
        });
        Array.from(document.querySelectorAll(`[${FX_SYSTEM_ATTR}]`)).forEach(function(canvas) {
            observer.observe(canvas);
        });
        Array.from(document.querySelectorAll(`[${FX_SYSTEM_JITTER_ATTR}]`)).forEach(function(canvas) {
            observer.observe(canvas);
        });
    }
}