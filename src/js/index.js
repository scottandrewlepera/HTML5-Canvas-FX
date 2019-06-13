import { init as ScratchSystemInit } from './systems/Scratch';
import { init as ParticleSystemInit } from './systems/Dust';
import { init as FizzSystemInit } from './systems/Fizz';
import { init as PathSystemInit } from './systems/Path';
import { init as FlickerSystemInit } from './systems/Flicker';

ScratchSystemInit(window);
ParticleSystemInit(window);
FizzSystemInit(window);
PathSystemInit(window);
FlickerSystemInit(window);