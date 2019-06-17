export function isCanvasSupported(window) {
    return (HTMLCanvasElement && window.requestAnimationFrame && HTMLCanvasElement.prototype.getContext);
}