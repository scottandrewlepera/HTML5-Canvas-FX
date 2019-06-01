import { init as ScratchSystemInit } from './systems/Scratch';
import { init as ParticleSystemInit } from './systems/Dust';
import { init as FizzSystemInit } from './systems/Fizz';
import { DustMote } from './particles/DustMote';

ScratchSystemInit(window);
ParticleSystemInit(window);
FizzSystemInit(window);
