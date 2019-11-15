import { init as ScratchSystemInit } from './systems/Scratch';
import { init as ParticleSystemInit } from './systems/Dust';
import { init as FizzSystemInit } from './systems/Fizz';
import { init as PathSystemInit } from './systems/Path';
import { init as FlickerSystemInit } from './systems/Flicker';
import { init as JitterSystemInit } from './systems/Jitter';
import { init as BloomSystemInit } from './systems/Bloom';
import { initCanvasIntersectionObserver } from './initCanvasIntersectionObserver';
import { handleImageProgress } from './handleImageProgress';

window.fx = {
    paused: false,
    togglePaused: function() {
        window.fx.paused = !window.fx.paused;
    }
};

window.handleImageProgress = handleImageProgress;

initCanvasIntersectionObserver(window);

ScratchSystemInit(window);
ParticleSystemInit(window);
FizzSystemInit(window);
PathSystemInit(window);
FlickerSystemInit(window);
JitterSystemInit(window);
BloomSystemInit(window);