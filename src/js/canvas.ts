import * as c from './constants';
import { System } from './types/System';

export function getCanvasAttributes(canvas: HTMLCanvasElement) {
    var n = parseInt(canvas.getAttribute(c.FX_PARTICLE_N_ATTR), 10) || c.DEFAULT_SYSTEM_COUNT;
    var rgb = canvas.getAttribute(c.FX_PARTICLE_RGB_ATTR) || c.DEFAULT_SYSTEM_RGB;
    var mw = parseInt(canvas.getAttribute(c.FX_PARTICLE_MAXWIDTH_ATTR), 10) || c.DEFAULT_SYSTEM_MAX_WIDTH;
    var range = parseFloat(canvas.getAttribute(c.FX_SYSTEM_MAX_ALPHA)) || c.DEFAULT_SYSTEM_MAX_ALPHA;
    var particleClassKey = canvas.getAttribute(c.FX_PARTICLE_ATTR);
    var color = canvas.getAttribute(c.FX_PARTICLE_COLOR_ATTR);

    // convert hex color to rgb
    if (color) {
        var newRgb = hexToRgb(color);
        rgb = `${newRgb.r},${newRgb.g},${newRgb.b}`;
    }

    return { n, rgb, mw, particleClassKey, range };
}

export function paintCanvas(canvas, system, isPausedGlobally) {
    if (canvas.getAttribute(c.FX_CANVAS_PAUSED) !== 'true' && !isPausedGlobally) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        system.update();
    }
}

export function getCanvases(system: System) {
    var canvases = document.querySelectorAll(`canvas[${c.FX_SYSTEM_ATTR}="${system}"]`);
    return canvases;
}

// hex-to-rgb from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }