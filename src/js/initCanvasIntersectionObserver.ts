import { FX_SYSTEM_ATTR, FX_CANVAS_PAUSED } from './constants';

export function initCanvasIntersectionObserver() {
    if( typeof IntersectionObserver !== 'undefined' ) {
        let observer = new IntersectionObserver(function(changes) {
            changes.forEach(function(change) {
                if(!change.isIntersecting) {
                    change.target.setAttribute(FX_CANVAS_PAUSED, 'true');
                } else {
                    change.target.setAttribute(FX_CANVAS_PAUSED, 'false');
                }
            });
        });
        Array.from(document.querySelectorAll(`canvas[${FX_SYSTEM_ATTR}]`)).forEach(function(canvas) {
            observer.observe(canvas);
        });
    }
}