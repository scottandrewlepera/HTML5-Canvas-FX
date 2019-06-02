import * as c from './constants';

export function getCanvasAttributes(canvas: HTMLCanvasElement) {
    var n = parseInt(canvas.getAttribute(c.FX_PARTICLE_N_ATTR), 10) || c.DEFAULT_SYSTEM_COUNT;
    var rgb = canvas.getAttribute(c.FX_PARTICLE_RGB_ATTR) || c.DEFAULT_SYSTEM_RGB;
    var mw = parseInt(canvas.getAttribute(c.FX_PARTICLE_MAXWIDTH_ATTR), 10) || c.DEFAULT_SYSTEM_MAX_WIDTH;
    var particleClassKey = canvas.getAttribute(c.FX_PARTICLE_ATTR);
    return { n, rgb, mw, particleClassKey};
}