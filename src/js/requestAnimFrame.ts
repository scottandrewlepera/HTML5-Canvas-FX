/*
    requestAnimationFrame shim by Paul Irish
*/

export function initRequestAnimFrame (window) {
    if (!window.requestAnimFrame){
        window.requestAnimFrame = (function() {
            return window.requestAnimationFrame  ||
            window.webkitRequestAnimationFrame   ||
            window.mozRequestAnimationFrame      ||
            window.oRequestAnimationFrame        ||
            window.msRequestAnimationFrame       ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        })();
    }
}

export default initRequestAnimFrame;