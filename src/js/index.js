import { init as ScratchSystemInit } from './systems/Scratch';
import { init as ParticleSystemInit } from './systems/Dust';
import { init as FizzSystemInit } from './systems/Fizz';
import { init as PathSystemInit } from './systems/Path';
import { init as FlickerSystemInit } from './systems/Flicker';
import { initCanvasIntersectionObserver } from './initCanvasIntersectionObserver';
import { handleImageProgress } from './handleImageProgress';

window.fx = {
    paused: false,
    togglePaused: function() {
        window.fx.paused = !window.fx.paused;
    }
};

window.handleImageProgress = handleImageProgress;

initCanvasIntersectionObserver();

ScratchSystemInit(window);
ParticleSystemInit(window);
FizzSystemInit(window);
PathSystemInit(window);
FlickerSystemInit(window);