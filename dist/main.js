/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _systems_Scratch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _systems_Scratch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_systems_Scratch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _systems_Dust__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _systems_Dust__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_systems_Dust__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _systems_Fizz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _systems_Fizz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_systems_Fizz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _systems_Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _systems_Path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_systems_Path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _systems_Flicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _systems_Flicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_systems_Flicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _systems_Bloom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _systems_Bloom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_systems_Bloom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _initCanvasIntersectionObserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _initCanvasIntersectionObserver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_initCanvasIntersectionObserver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _handleImageProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _handleImageProgress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_handleImageProgress__WEBPACK_IMPORTED_MODULE_7__);









window.fx = {
    paused: false,
    togglePaused: function() {
        window.fx.paused = !window.fx.paused;
    }
};

window.handleImageProgress = _handleImageProgress__WEBPACK_IMPORTED_MODULE_7__["handleImageProgress"];

Object(_initCanvasIntersectionObserver__WEBPACK_IMPORTED_MODULE_6__["initCanvasIntersectionObserver"])(window);

Object(_systems_Scratch__WEBPACK_IMPORTED_MODULE_0__["init"])(window);
Object(_systems_Dust__WEBPACK_IMPORTED_MODULE_1__["init"])(window);
Object(_systems_Fizz__WEBPACK_IMPORTED_MODULE_2__["init"])(window);
Object(_systems_Path__WEBPACK_IMPORTED_MODULE_3__["init"])(window);
Object(_systems_Flicker__WEBPACK_IMPORTED_MODULE_4__["init"])(window);
Object(_systems_Bloom__WEBPACK_IMPORTED_MODULE_5__["init"])(window);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var requestAnimFrame_1 = __webpack_require__(2);
var canvas_1 = __webpack_require__(3);
var Scratch = (function () {
    function Scratch(maxWidth) {
        this.x = 0;
        this.vx = 0;
        this.lifespan = 1000;
        this.timer = 0;
        this.width = 1;
        this.alpha = 1;
        this.maxWidth = maxWidth;
        this.update = function () {
            if ((Math.random() * (100 - 1) + 1) > 95) {
                this.vx = -this.vx;
            }
            if ((Math.random() * (100 - 1) + 1) > 50) {
                this.width = Math.random() * (this.maxWidth - 1) + 1;
                this.alpha = Math.random() * (1 - 0.5) + 0.5;
            }
            this.x += this.vx;
            this.timer++;
        };
        this.reset = function (areaWidth) {
            this.x = Math.random() * (areaWidth - 1) + 1;
            this.vx = Math.random() * 3 - 3 / 2;
            this.lifespan = Math.random() * ((4 - 1) + 1) * 100;
            this.timer = 0;
            this.width = Math.random() * (this.maxWidth - 1) + 1;
            this.alpha = Math.random() * (1 - 0.5) + 0.5;
        };
    }
    return Scratch;
}());
exports.Scratch = Scratch;
var ScratchSystem = (function () {
    function ScratchSystem(canvas, count, maxWidth, rgbColor) {
        var ctx = canvas.getContext('2d');
        count = count || 1;
        maxWidth = maxWidth || 3;
        rgbColor = rgbColor || '255,255,255';
        this.scratches = [];
        for (var i = 0; i < count; ++i) {
            var line = new Scratch(maxWidth);
            line.reset(canvas.width);
            this.scratches.push(line);
        }
        this.update = function () {
            this.scratches.forEach(function (scratch) {
                if (scratch.x > 0 &&
                    scratch.x < canvas.width &&
                    scratch.timer < scratch.lifespan) {
                    scratch.update();
                    ctx.fillStyle = "rgba(" + rgbColor + ", " + scratch.alpha + ")";
                    ctx.fillRect(scratch.x, 0, scratch.width, canvas.height);
                }
                else {
                    scratch.reset(canvas.width);
                }
            });
        };
    }
    return ScratchSystem;
}());
exports.ScratchSystem = ScratchSystem;
function init(window) {
    requestAnimFrame_1.initRequestAnimFrame(window);
    var canvases = canvas_1.getCanvases('scratches');
    Array.from(canvases).forEach(function (canvas) {
        var _a = canvas_1.getCanvasAttributes(canvas), n = _a.n, rgb = _a.rgb, mw = _a.mw;
        var system = new ScratchSystem(canvas, n, mw, rgb);
        function paint() {
            canvas_1.paintCanvas(canvas, system, window.fx.paused);
            window.requestAnimFrame(paint);
        }
        window.requestAnimFrame(paint);
    });
}
exports.init = init;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function initRequestAnimFrame(window) {
    if (!window.requestAnimFrame) {
        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();
    }
}
exports.initRequestAnimFrame = initRequestAnimFrame;
exports["default"] = initRequestAnimFrame;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var c = __webpack_require__(4);
function getCanvasAttributes(canvas) {
    var n = parseInt(canvas.getAttribute(c.FX_PARTICLE_N_ATTR), 10) || c.DEFAULT_SYSTEM_COUNT;
    var rgb = canvas.getAttribute(c.FX_PARTICLE_RGB_ATTR) || c.DEFAULT_SYSTEM_RGB;
    var mw = parseInt(canvas.getAttribute(c.FX_PARTICLE_MAXWIDTH_ATTR), 10) || c.DEFAULT_SYSTEM_MAX_WIDTH;
    var range = parseFloat(canvas.getAttribute(c.FX_SYSTEM_MAX_ALPHA)) || c.DEFAULT_SYSTEM_MAX_ALPHA;
    var particleClassKey = canvas.getAttribute(c.FX_PARTICLE_ATTR);
    var color = canvas.getAttribute(c.FX_PARTICLE_COLOR_ATTR);
    if (color) {
        var newRgb = hexToRgb(color);
        rgb = newRgb.r + "," + newRgb.g + "," + newRgb.b;
    }
    return { n: n, rgb: rgb, mw: mw, particleClassKey: particleClassKey, range: range };
}
exports.getCanvasAttributes = getCanvasAttributes;
function paintCanvas(canvas, system, isPausedGlobally) {
    if (canvas.getAttribute(c.FX_CANVAS_PAUSED) !== 'true' && !isPausedGlobally) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        system.update();
    }
}
exports.paintCanvas = paintCanvas;
function getCanvases(system) {
    var canvases = document.querySelectorAll("canvas[" + c.FX_SYSTEM_ATTR + "=\"" + system + "\"]");
    return canvases;
}
exports.getCanvases = getCanvases;
function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.DEFAULT_SYSTEM_RGB = '0,0,0';
exports.DEFAULT_SYSTEM_COLOR = '#ffffff';
exports.DEFAULT_SYSTEM_COUNT = 10;
exports.DEFAULT_SYSTEM_MAX_WIDTH = 6;
exports.DEFAULT_SYSTEM_MAX_ALPHA = 0.2;
var FX_PREFIX = 'data-fx';
exports.FX_SYSTEM_ATTR = FX_PREFIX + "-system";
exports.FX_PATH_ATTR = FX_PREFIX + "-path";
exports.FX_PARTICLE_ATTR = FX_PREFIX + "-particle";
exports.FX_PARTICLE_N_ATTR = FX_PREFIX + "-n";
exports.FX_PARTICLE_MAXWIDTH_ATTR = FX_PREFIX + "-width";
exports.FX_PARTICLE_RGB_ATTR = FX_PREFIX + "-rgb";
exports.FX_PARTICLE_COLOR_ATTR = FX_PREFIX + "-color";
exports.FX_CANVAS_PAUSED = FX_PREFIX + "-paused";
exports.FX_SYSTEM_MAX_ALPHA = FX_PREFIX + "-alpha";
exports.FX_SYSTEM_JITTER_ATTR = FX_PREFIX + "-jitter";


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var requestAnimFrame_1 = __webpack_require__(2);
var particles_1 = __webpack_require__(6);
var canvas_1 = __webpack_require__(3);
var ParticleSystem = (function () {
    function ParticleSystem(canvas, particleClass, count, rgb, maxWidth) {
        var ctx = canvas.getContext('2d');
        this.particles = [];
        for (var i = 0; i < count; ++i) {
            var particle = new particleClass(rgb, maxWidth);
            initParticle(particle, canvas.width, canvas.height);
            this.particles.push(particle);
        }
        this.update = function () {
            for (var i = 0; i < count; ++i) {
                var particle = this.particles[i];
                if (particle.x > 0 &&
                    particle.x < canvas.width &&
                    particle.y > 0 &&
                    particle.y < canvas.height) {
                    moveParticle(particle);
                    particle.render(ctx);
                }
                else {
                    initParticle(particle, canvas.width, canvas.height);
                }
            }
        };
        function initParticle(particle, areaWidth, areaHeight) {
            particle.x = Math.random() * (areaWidth - 1) + 1;
            particle.y = Math.random() * (areaHeight - 1) + 1;
            particle.vx = Math.random() * 3 - 1.5;
            particle.vy = Math.random() * 3 - 1.5;
        }
        function moveParticle(particle) {
            particle.x += particle.vx;
            particle.y += particle.vy;
        }
    }
    return ParticleSystem;
}());
exports.ParticleSystem = ParticleSystem;
function init(window) {
    requestAnimFrame_1.initRequestAnimFrame(window);
    var canvases = canvas_1.getCanvases('dust');
    Array.from(canvases).forEach(function (canvas) {
        var _a = canvas_1.getCanvasAttributes(canvas), n = _a.n, rgb = _a.rgb, mw = _a.mw, particleClassKey = _a.particleClassKey;
        var particleClass = particles_1.PARTICLES[particleClassKey];
        var system = new ParticleSystem(canvas, particleClass, n, rgb, mw);
        function paint() {
            canvas_1.paintCanvas(canvas, system, window.fx.paused);
            window.requestAnimFrame(paint);
        }
        window.requestAnimFrame(paint);
    });
}
exports.init = init;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var DustMote_1 = __webpack_require__(7);
var Globe_1 = __webpack_require__(8);
exports.PARTICLES = {
    dust: DustMote_1.DustMote,
    globes: Globe_1.Globe
};
exports["default"] = exports.PARTICLES;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var DustMote = (function () {
    function DustMote(rgb, maxWidth) {
        this.alpha = 1;
        this.rgb = rgb;
        this.maxWidth = maxWidth;
        this.render = function (ctx) {
            this.alpha = Math.random() * (1 - 0.2) + 0.2;
            ctx.fillStyle = "rgba(" + this.rgb + ", " + this.alpha + ")";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.maxWidth, 0, 2 * Math.PI);
            ctx.fill();
        };
    }
    return DustMote;
}());
exports.DustMote = DustMote;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Globe = (function () {
    function Globe(rgb, maxWidth) {
        this.alpha = 1;
        this.maxDiameter = maxWidth;
        this.rgb = rgb;
        this.render = function (ctx) {
            this.alpha = Math.random() * (1 - 0.2) + 0.2;
            var radius = Math.random() * (this.maxDiameter - 2) + 2;
            ctx.fillStyle = "rgba(" + this.rgb + ", " + this.alpha + ")";
            ctx.beginPath();
            ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
            ctx.fill();
        };
    }
    return Globe;
}());
exports.Globe = Globe;
;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var requestAnimFrame_1 = __webpack_require__(2);
var particles_1 = __webpack_require__(6);
var canvas_1 = __webpack_require__(3);
var FizzSystem = (function () {
    function FizzSystem(canvas, particleClass, count, rgb, maxWidth) {
        var ctx = canvas.getContext('2d');
        this.particles = [];
        for (var i = 0; i < count; ++i) {
            var particle = new particleClass(rgb, maxWidth);
            initParticle(particle, canvas.width, canvas.height);
            this.particles.push(particle);
        }
        this.update = function () {
            for (i = 0; i < count; ++i) {
                var particle = this.particles[i];
                if (particle.y > 0 &&
                    particle.y < canvas.height) {
                    moveParticle(particle);
                    particle.render(ctx);
                }
                else {
                    initParticle(particle, canvas.width, canvas.height);
                }
            }
        };
        function initParticle(particle, areaWidth, areaHeight) {
            particle.x = Math.random() * (areaWidth - 1) + 1;
            particle.y = Math.random() * (areaHeight - 1) + 1;
            particle.vx = Math.random() * 3 - 1.5;
            particle.vy = -(Math.random() * (3 - 1.5) + 1);
        }
        function moveParticle(particle) {
            particle.y += particle.vy;
        }
    }
    return FizzSystem;
}());
exports.FizzSystem = FizzSystem;
function init(window, particleClass) {
    requestAnimFrame_1.initRequestAnimFrame(window);
    var canvases = canvas_1.getCanvases('fizz');
    Array.from(canvases).forEach(function (canvas) {
        var _a = canvas_1.getCanvasAttributes(canvas), n = _a.n, rgb = _a.rgb, mw = _a.mw, particleClassKey = _a.particleClassKey;
        var particleClass = particles_1.PARTICLES[particleClassKey];
        var system = new FizzSystem(canvas, particleClass, n, rgb, mw);
        function paint() {
            canvas_1.paintCanvas(canvas, system, window.fx.paused);
            window.requestAnimFrame(paint);
        }
        window.requestAnimFrame(paint);
    });
}
exports.init = init;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var requestAnimFrame_1 = __webpack_require__(2);
var particles_1 = __webpack_require__(6);
var paths_1 = __webpack_require__(11);
var canvas_1 = __webpack_require__(3);
var constants_1 = __webpack_require__(4);
var PathSystem = (function () {
    function PathSystem(canvas, particleClass, path, count, rgb, maxWidth) {
        var ctx = canvas.getContext('2d');
        this.particles = [];
        for (var i = 0; i < count; ++i) {
            var particle = new particleClass(rgb, maxWidth);
            var coordinate = Math.ceil(Math.random() * path.length);
            this.particles.push({ particle: particle, coordinate: coordinate });
        }
        this.update = function () {
            for (var i = 0; i < count; ++i) {
                var particle = this.particles[i];
                if (particle.coordinate < path.length) {
                    moveParticle(particle);
                    particle.particle.render(ctx);
                }
                else {
                    particle.coordinate = 0;
                }
            }
        };
        function moveParticle(particle) {
            particle.particle.x = path[particle.coordinate].x;
            particle.particle.y = path[particle.coordinate].y;
            particle.coordinate++;
        }
    }
    return PathSystem;
}());
exports.PathSystem = PathSystem;
function init(window) {
    requestAnimFrame_1.initRequestAnimFrame(window);
    var canvases = canvas_1.getCanvases('path');
    Array.from(canvases).forEach(function (canvas) {
        var pathKey = canvas.getAttribute(constants_1.FX_PATH_ATTR);
        var path = paths_1.PATHS[pathKey];
        if (!path) {
            path = window.fx.paths[pathKey];
        }
        var _a = canvas_1.getCanvasAttributes(canvas), n = _a.n, rgb = _a.rgb, mw = _a.mw, particleClassKey = _a.particleClassKey;
        var particleClass = particles_1.PARTICLES[particleClassKey];
        var system = new PathSystem(canvas, particleClass, path, n, rgb, mw);
        function paint() {
            canvas_1.paintCanvas(canvas, system, window.fx.paused);
            window.requestAnimFrame(paint);
        }
        window.requestAnimFrame(paint);
    });
}
exports.init = init;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ellipse_1 = __webpack_require__(12);
exports.PATHS = {
    'ellipse-1': ellipse_1.Ellipse1,
    'ellipse-1-fine': ellipse_1.Ellipse1Fine,
    'path1': ellipse_1.path1,
    'path2': ellipse_1.path2,
    'path3': ellipse_1.path3
};
exports["default"] = exports.PATHS;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.Ellipse1 = [{ "x": 560, "y": 200 }, { "x": 559, "y": 204 }, { "x": 558, "y": 208 }, { "x": 557, "y": 213 }, { "x": 554, "y": 217 }, { "x": 551, "y": 222 }, { "x": 548, "y": 226 }, { "x": 544, "y": 230 }, { "x": 539, "y": 235 }, { "x": 534, "y": 239 }, { "x": 528, "y": 243 }, { "x": 521, "y": 247 }, { "x": 514, "y": 250 }, { "x": 506, "y": 254 }, { "x": 498, "y": 257 }, { "x": 490, "y": 261 }, { "x": 481, "y": 264 }, { "x": 471, "y": 267 }, { "x": 461, "y": 270 }, { "x": 451, "y": 273 }, { "x": 440, "y": 275 }, { "x": 429, "y": 278 }, { "x": 417, "y": 280 }, { "x": 406, "y": 282 }, { "x": 394, "y": 283 }, { "x": 381, "y": 285 }, { "x": 369, "y": 286 }, { "x": 356, "y": 287 }, { "x": 344, "y": 288 }, { "x": 331, "y": 289 }, { "x": 318, "y": 289 }, { "x": 305, "y": 289 }, { "x": 292, "y": 289 }, { "x": 279, "y": 289 }, { "x": 266, "y": 289 }, { "x": 253, "y": 288 }, { "x": 240, "y": 287 }, { "x": 228, "y": 286 }, { "x": 215, "y": 285 }, { "x": 203, "y": 283 }, { "x": 191, "y": 281 }, { "x": 180, "y": 279 }, { "x": 168, "y": 277 }, { "x": 157, "y": 275 }, { "x": 146, "y": 272 }, { "x": 136, "y": 270 }, { "x": 126, "y": 267 }, { "x": 117, "y": 264 }, { "x": 108, "y": 260 }, { "x": 99, "y": 257 }, { "x": 91, "y": 253 }, { "x": 84, "y": 250 }, { "x": 77, "y": 246 }, { "x": 70, "y": 242 }, { "x": 64, "y": 238 }, { "x": 59, "y": 234 }, { "x": 55, "y": 230 }, { "x": 50, "y": 225 }, { "x": 47, "y": 221 }, { "x": 44, "y": 217 }, { "x": 42, "y": 212 }, { "x": 41, "y": 208 }, { "x": 40, "y": 203 }, { "x": 40, "y": 199 }, { "x": 40, "y": 194 }, { "x": 41, "y": 190 }, { "x": 43, "y": 185 }, { "x": 45, "y": 181 }, { "x": 48, "y": 177 }, { "x": 52, "y": 172 }, { "x": 56, "y": 168 }, { "x": 61, "y": 164 }, { "x": 66, "y": 160 }, { "x": 72, "y": 156 }, { "x": 79, "y": 152 }, { "x": 86, "y": 148 }, { "x": 94, "y": 144 }, { "x": 102, "y": 141 }, { "x": 111, "y": 138 }, { "x": 120, "y": 134 }, { "x": 130, "y": 131 }, { "x": 140, "y": 129 }, { "x": 150, "y": 126 }, { "x": 161, "y": 123 }, { "x": 172, "y": 121 }, { "x": 184, "y": 119 }, { "x": 195, "y": 117 }, { "x": 207, "y": 115 }, { "x": 220, "y": 114 }, { "x": 232, "y": 113 }, { "x": 245, "y": 112 }, { "x": 257, "y": 111 }, { "x": 270, "y": 110 }, { "x": 283, "y": 110 }, { "x": 296, "y": 110 }, { "x": 309, "y": 110 }, { "x": 322, "y": 110 }, { "x": 335, "y": 110 }, { "x": 348, "y": 111 }, { "x": 361, "y": 112 }, { "x": 373, "y": 113 }, { "x": 386, "y": 115 }, { "x": 398, "y": 116 }, { "x": 410, "y": 118 }, { "x": 421, "y": 120 }, { "x": 433, "y": 122 }, { "x": 444, "y": 125 }, { "x": 454, "y": 127 }, { "x": 465, "y": 130 }, { "x": 474, "y": 133 }, { "x": 484, "y": 136 }, { "x": 493, "y": 139 }, { "x": 501, "y": 143 }, { "x": 509, "y": 146 }, { "x": 517, "y": 150 }, { "x": 523, "y": 154 }, { "x": 530, "y": 158 }, { "x": 535, "y": 162 }, { "x": 541, "y": 166 }, { "x": 545, "y": 170 }, { "x": 549, "y": 174 }, { "x": 552, "y": 179 }, { "x": 555, "y": 183 }, { "x": 557, "y": 188 }, { "x": 559, "y": 192 }, { "x": 559, "y": 197 }];
exports.Ellipse1Fine = [{ "x": 560, "y": 200 }, { "x": 559, "y": 201 }, { "x": 559, "y": 203 }, { "x": 559, "y": 205 }, { "x": 559, "y": 207 }, { "x": 558, "y": 208 }, { "x": 558, "y": 210 }, { "x": 557, "y": 212 }, { "x": 556, "y": 214 }, { "x": 555, "y": 216 }, { "x": 554, "y": 217 }, { "x": 553, "y": 219 }, { "x": 552, "y": 221 }, { "x": 551, "y": 223 }, { "x": 549, "y": 224 }, { "x": 548, "y": 226 }, { "x": 546, "y": 228 }, { "x": 545, "y": 230 }, { "x": 543, "y": 231 }, { "x": 541, "y": 233 }, { "x": 539, "y": 235 }, { "x": 537, "y": 236 }, { "x": 535, "y": 238 }, { "x": 532, "y": 239 }, { "x": 530, "y": 241 }, { "x": 528, "y": 243 }, { "x": 525, "y": 244 }, { "x": 523, "y": 246 }, { "x": 520, "y": 247 }, { "x": 517, "y": 249 }, { "x": 514, "y": 250 }, { "x": 511, "y": 252 }, { "x": 508, "y": 253 }, { "x": 505, "y": 255 }, { "x": 502, "y": 256 }, { "x": 498, "y": 257 }, { "x": 495, "y": 259 }, { "x": 492, "y": 260 }, { "x": 488, "y": 262 }, { "x": 484, "y": 263 }, { "x": 481, "y": 264 }, { "x": 477, "y": 265 }, { "x": 473, "y": 267 }, { "x": 469, "y": 268 }, { "x": 465, "y": 269 }, { "x": 461, "y": 270 }, { "x": 457, "y": 271 }, { "x": 453, "y": 272 }, { "x": 449, "y": 273 }, { "x": 444, "y": 274 }, { "x": 440, "y": 275 }, { "x": 436, "y": 276 }, { "x": 431, "y": 277 }, { "x": 427, "y": 278 }, { "x": 422, "y": 279 }, { "x": 417, "y": 280 }, { "x": 413, "y": 281 }, { "x": 408, "y": 281 }, { "x": 403, "y": 282 }, { "x": 399, "y": 283 }, { "x": 394, "y": 283 }, { "x": 389, "y": 284 }, { "x": 384, "y": 285 }, { "x": 379, "y": 285 }, { "x": 374, "y": 286 }, { "x": 369, "y": 286 }, { "x": 364, "y": 287 }, { "x": 359, "y": 287 }, { "x": 354, "y": 288 }, { "x": 349, "y": 288 }, { "x": 344, "y": 288 }, { "x": 339, "y": 288 }, { "x": 333, "y": 289 }, { "x": 328, "y": 289 }, { "x": 323, "y": 289 }, { "x": 318, "y": 289 }, { "x": 313, "y": 289 }, { "x": 308, "y": 289 }, { "x": 302, "y": 289 }, { "x": 297, "y": 289 }, { "x": 292, "y": 289 }, { "x": 287, "y": 289 }, { "x": 282, "y": 289 }, { "x": 276, "y": 289 }, { "x": 271, "y": 289 }, { "x": 266, "y": 289 }, { "x": 261, "y": 289 }, { "x": 256, "y": 288 }, { "x": 251, "y": 288 }, { "x": 246, "y": 288 }, { "x": 240, "y": 287 }, { "x": 235, "y": 287 }, { "x": 230, "y": 286 }, { "x": 225, "y": 286 }, { "x": 220, "y": 285 }, { "x": 215, "y": 285 }, { "x": 211, "y": 284 }, { "x": 206, "y": 283 }, { "x": 201, "y": 283 }, { "x": 196, "y": 282 }, { "x": 191, "y": 281 }, { "x": 187, "y": 281 }, { "x": 182, "y": 280 }, { "x": 177, "y": 279 }, { "x": 173, "y": 278 }, { "x": 168, "y": 277 }, { "x": 164, "y": 276 }, { "x": 159, "y": 275 }, { "x": 155, "y": 274 }, { "x": 151, "y": 273 }, { "x": 146, "y": 272 }, { "x": 142, "y": 271 }, { "x": 138, "y": 270 }, { "x": 134, "y": 269 }, { "x": 130, "y": 268 }, { "x": 126, "y": 267 }, { "x": 122, "y": 265 }, { "x": 119, "y": 264 }, { "x": 115, "y": 263 }, { "x": 111, "y": 262 }, { "x": 108, "y": 260 }, { "x": 104, "y": 259 }, { "x": 101, "y": 258 }, { "x": 98, "y": 256 }, { "x": 94, "y": 255 }, { "x": 91, "y": 253 }, { "x": 88, "y": 252 }, { "x": 85, "y": 250 }, { "x": 82, "y": 249 }, { "x": 79, "y": 247 }, { "x": 77, "y": 246 }, { "x": 74, "y": 244 }, { "x": 72, "y": 243 }, { "x": 69, "y": 241 }, { "x": 67, "y": 240 }, { "x": 64, "y": 238 }, { "x": 62, "y": 236 }, { "x": 60, "y": 235 }, { "x": 58, "y": 233 }, { "x": 56, "y": 231 }, { "x": 55, "y": 230 }, { "x": 53, "y": 228 }, { "x": 51, "y": 226 }, { "x": 50, "y": 225 }, { "x": 48, "y": 223 }, { "x": 47, "y": 221 }, { "x": 46, "y": 219 }, { "x": 45, "y": 218 }, { "x": 44, "y": 216 }, { "x": 43, "y": 214 }, { "x": 42, "y": 212 }, { "x": 41, "y": 210 }, { "x": 41, "y": 209 }, { "x": 40, "y": 207 }, { "x": 40, "y": 205 }, { "x": 40, "y": 203 }, { "x": 40, "y": 201 }, { "x": 40, "y": 200 }, { "x": 40, "y": 198 }, { "x": 40, "y": 196 }, { "x": 40, "y": 194 }, { "x": 40, "y": 192 }, { "x": 41, "y": 191 }, { "x": 41, "y": 189 }, { "x": 42, "y": 187 }, { "x": 43, "y": 185 }, { "x": 44, "y": 184 }, { "x": 45, "y": 182 }, { "x": 46, "y": 180 }, { "x": 47, "y": 178 }, { "x": 48, "y": 177 }, { "x": 50, "y": 175 }, { "x": 51, "y": 173 }, { "x": 53, "y": 171 }, { "x": 54, "y": 170 }, { "x": 56, "y": 168 }, { "x": 58, "y": 166 }, { "x": 60, "y": 165 }, { "x": 62, "y": 163 }, { "x": 64, "y": 161 }, { "x": 66, "y": 160 }, { "x": 69, "y": 158 }, { "x": 71, "y": 156 }, { "x": 74, "y": 155 }, { "x": 76, "y": 153 }, { "x": 79, "y": 152 }, { "x": 82, "y": 150 }, { "x": 85, "y": 149 }, { "x": 88, "y": 147 }, { "x": 91, "y": 146 }, { "x": 94, "y": 144 }, { "x": 97, "y": 143 }, { "x": 100, "y": 142 }, { "x": 104, "y": 140 }, { "x": 107, "y": 139 }, { "x": 111, "y": 138 }, { "x": 114, "y": 136 }, { "x": 118, "y": 135 }, { "x": 122, "y": 134 }, { "x": 126, "y": 133 }, { "x": 130, "y": 131 }, { "x": 134, "y": 130 }, { "x": 138, "y": 129 }, { "x": 142, "y": 128 }, { "x": 146, "y": 127 }, { "x": 150, "y": 126 }, { "x": 154, "y": 125 }, { "x": 159, "y": 124 }, { "x": 163, "y": 123 }, { "x": 168, "y": 122 }, { "x": 172, "y": 121 }, { "x": 177, "y": 120 }, { "x": 181, "y": 119 }, { "x": 186, "y": 119 }, { "x": 191, "y": 118 }, { "x": 195, "y": 117 }, { "x": 200, "y": 116 }, { "x": 205, "y": 116 }, { "x": 210, "y": 115 }, { "x": 215, "y": 114 }, { "x": 220, "y": 114 }, { "x": 225, "y": 113 }, { "x": 230, "y": 113 }, { "x": 235, "y": 112 }, { "x": 240, "y": 112 }, { "x": 245, "y": 112 }, { "x": 250, "y": 111 }, { "x": 255, "y": 111 }, { "x": 260, "y": 111 }, { "x": 265, "y": 110 }, { "x": 270, "y": 110 }, { "x": 276, "y": 110 }, { "x": 281, "y": 110 }, { "x": 286, "y": 110 }, { "x": 291, "y": 110 }, { "x": 296, "y": 110 }, { "x": 301, "y": 110 }, { "x": 307, "y": 110 }, { "x": 312, "y": 110 }, { "x": 317, "y": 110 }, { "x": 322, "y": 110 }, { "x": 327, "y": 110 }, { "x": 333, "y": 110 }, { "x": 338, "y": 110 }, { "x": 343, "y": 111 }, { "x": 348, "y": 111 }, { "x": 353, "y": 111 }, { "x": 358, "y": 112 }, { "x": 363, "y": 112 }, { "x": 368, "y": 113 }, { "x": 373, "y": 113 }, { "x": 378, "y": 114 }, { "x": 383, "y": 114 }, { "x": 388, "y": 115 }, { "x": 393, "y": 116 }, { "x": 398, "y": 116 }, { "x": 403, "y": 117 }, { "x": 407, "y": 118 }, { "x": 412, "y": 118 }, { "x": 417, "y": 119 }, { "x": 421, "y": 120 }, { "x": 426, "y": 121 }, { "x": 430, "y": 122 }, { "x": 435, "y": 123 }, { "x": 439, "y": 124 }, { "x": 444, "y": 125 }, { "x": 448, "y": 126 }, { "x": 452, "y": 127 }, { "x": 456, "y": 128 }, { "x": 460, "y": 129 }, { "x": 465, "y": 130 }, { "x": 469, "y": 131 }, { "x": 472, "y": 132 }, { "x": 476, "y": 134 }, { "x": 480, "y": 135 }, { "x": 484, "y": 136 }, { "x": 487, "y": 137 }, { "x": 491, "y": 139 }, { "x": 494, "y": 140 }, { "x": 498, "y": 141 }, { "x": 501, "y": 143 }, { "x": 504, "y": 144 }, { "x": 508, "y": 146 }, { "x": 511, "y": 147 }, { "x": 514, "y": 148 }, { "x": 517, "y": 150 }, { "x": 519, "y": 151 }, { "x": 522, "y": 153 }, { "x": 525, "y": 155 }, { "x": 527, "y": 156 }, { "x": 530, "y": 158 }, { "x": 532, "y": 159 }, { "x": 534, "y": 161 }, { "x": 537, "y": 163 }, { "x": 539, "y": 164 }, { "x": 541, "y": 166 }, { "x": 543, "y": 168 }, { "x": 544, "y": 169 }, { "x": 546, "y": 171 }, { "x": 548, "y": 173 }, { "x": 549, "y": 174 }, { "x": 551, "y": 176 }, { "x": 552, "y": 178 }, { "x": 553, "y": 180 }, { "x": 554, "y": 181 }, { "x": 555, "y": 183 }, { "x": 556, "y": 185 }, { "x": 557, "y": 187 }, { "x": 558, "y": 188 }, { "x": 558, "y": 190 }, { "x": 559, "y": 192 }, { "x": 559, "y": 194 }, { "x": 559, "y": 196 }, { "x": 559, "y": 197 }, { "x": 559, "y": 199 }];
exports.path1 = [{ "x": 140, "y": 308 }, { "x": 141, "y": 306 }, { "x": 143, "y": 304 }, { "x": 144, "y": 302 }, { "x": 146, "y": 300 }, { "x": 147, "y": 298 }, { "x": 149, "y": 296 }, { "x": 151, "y": 293 }, { "x": 152, "y": 291 }, { "x": 154, "y": 289 }, { "x": 156, "y": 287 }, { "x": 157, "y": 285 }, { "x": 159, "y": 283 }, { "x": 161, "y": 281 }, { "x": 163, "y": 278 }, { "x": 165, "y": 276 }, { "x": 167, "y": 274 }, { "x": 168, "y": 272 }, { "x": 170, "y": 270 }, { "x": 172, "y": 268 }, { "x": 174, "y": 266 }, { "x": 176, "y": 264 }, { "x": 178, "y": 262 }, { "x": 181, "y": 259 }, { "x": 183, "y": 257 }, { "x": 185, "y": 255 }, { "x": 187, "y": 253 }, { "x": 189, "y": 251 }, { "x": 191, "y": 249 }, { "x": 194, "y": 247 }, { "x": 196, "y": 245 }, { "x": 198, "y": 243 }, { "x": 201, "y": 241 }, { "x": 203, "y": 239 }, { "x": 205, "y": 237 }, { "x": 208, "y": 235 }, { "x": 210, "y": 233 }, { "x": 212, "y": 231 }, { "x": 215, "y": 229 }, { "x": 217, "y": 227 }, { "x": 220, "y": 225 }, { "x": 222, "y": 223 }, { "x": 225, "y": 221 }, { "x": 228, "y": 219 }, { "x": 230, "y": 217 }, { "x": 233, "y": 215 }, { "x": 235, "y": 213 }, { "x": 238, "y": 211 }, { "x": 241, "y": 209 }, { "x": 244, "y": 207 }, { "x": 246, "y": 205 }, { "x": 249, "y": 203 }, { "x": 252, "y": 201 }, { "x": 255, "y": 199 }, { "x": 257, "y": 197 }, { "x": 260, "y": 196 }, { "x": 263, "y": 194 }, { "x": 266, "y": 192 }, { "x": 269, "y": 190 }, { "x": 272, "y": 188 }, { "x": 275, "y": 186 }, { "x": 278, "y": 185 }, { "x": 281, "y": 183 }, { "x": 284, "y": 181 }, { "x": 287, "y": 179 }, { "x": 290, "y": 177 }, { "x": 293, "y": 176 }, { "x": 296, "y": 174 }, { "x": 299, "y": 172 }, { "x": 302, "y": 171 }, { "x": 305, "y": 169 }, { "x": 308, "y": 167 }, { "x": 311, "y": 166 }, { "x": 314, "y": 164 }, { "x": 317, "y": 162 }, { "x": 320, "y": 161 }, { "x": 324, "y": 159 }, { "x": 327, "y": 157 }, { "x": 330, "y": 156 }, { "x": 333, "y": 154 }, { "x": 336, "y": 153 }, { "x": 340, "y": 151 }, { "x": 343, "y": 150 }, { "x": 346, "y": 148 }, { "x": 349, "y": 147 }, { "x": 353, "y": 145 }, { "x": 356, "y": 144 }, { "x": 359, "y": 142 }, { "x": 362, "y": 141 }, { "x": 366, "y": 139 }, { "x": 369, "y": 138 }, { "x": 372, "y": 137 }, { "x": 376, "y": 135 }, { "x": 379, "y": 134 }, { "x": 382, "y": 132 }, { "x": 386, "y": 131 }, { "x": 389, "y": 130 }, { "x": 392, "y": 129 }, { "x": 396, "y": 127 }, { "x": 399, "y": 126 }, { "x": 403, "y": 125 }, { "x": 406, "y": 124 }, { "x": 409, "y": 122 }, { "x": 413, "y": 121 }, { "x": 416, "y": 120 }, { "x": 420, "y": 119 }, { "x": 423, "y": 118 }, { "x": 426, "y": 117 }, { "x": 430, "y": 116 }, { "x": 433, "y": 114 }, { "x": 437, "y": 113 }, { "x": 440, "y": 112 }, { "x": 443, "y": 111 }, { "x": 447, "y": 110 }, { "x": 450, "y": 109 }, { "x": 454, "y": 108 }, { "x": 457, "y": 107 }, { "x": 460, "y": 107 }, { "x": 464, "y": 106 }, { "x": 467, "y": 105 }, { "x": 471, "y": 104 }, { "x": 474, "y": 103 }, { "x": 477, "y": 102 }, { "x": 481, "y": 101 }, { "x": 484, "y": 101 }, { "x": 488, "y": 100 }, { "x": 491, "y": 99 }, { "x": 494, "y": 98 }, { "x": 498, "y": 98 }, { "x": 501, "y": 97 }, { "x": 505, "y": 96 }, { "x": 508, "y": 96 }, { "x": 511, "y": 95 }, { "x": 515, "y": 94 }, { "x": 518, "y": 94 }, { "x": 521, "y": 93 }, { "x": 525, "y": 93 }, { "x": 528, "y": 92 }, { "x": 531, "y": 92 }, { "x": 535, "y": 91 }, { "x": 538, "y": 91 }, { "x": 541, "y": 90 }, { "x": 544, "y": 90 }, { "x": 548, "y": 90 }, { "x": 551, "y": 89 }, { "x": 554, "y": 89 }, { "x": 558, "y": 88 }, { "x": 561, "y": 88 }, { "x": 564, "y": 88 }, { "x": 567, "y": 88 }, { "x": 570, "y": 87 }, { "x": 574, "y": 87 }, { "x": 577, "y": 87 }, { "x": 580, "y": 87 }, { "x": 583, "y": 87 }, { "x": 586, "y": 86 }, { "x": 589, "y": 86 }, { "x": 592, "y": 86 }, { "x": 595, "y": 86 }, { "x": 599, "y": 86 }, { "x": 602, "y": 86 }, { "x": 605, "y": 86 }, { "x": 608, "y": 86 }, { "x": 611, "y": 86 }, { "x": 614, "y": 86 }, { "x": 617, "y": 86 }, { "x": 620, "y": 86 }, { "x": 623, "y": 86 }, { "x": 626, "y": 87 }, { "x": 628, "y": 87 }, { "x": 631, "y": 87 }, { "x": 634, "y": 87 }, { "x": 637, "y": 87 }, { "x": 640, "y": 88 }, { "x": 643, "y": 88 }, { "x": 646, "y": 88 }, { "x": 648, "y": 88 }, { "x": 651, "y": 89 }, { "x": 654, "y": 89 }, { "x": 657, "y": 89 }, { "x": 659, "y": 90 }, { "x": 662, "y": 90 }, { "x": 665, "y": 91 }, { "x": 667, "y": 91 }, { "x": 670, "y": 92 }, { "x": 672, "y": 92 }, { "x": 675, "y": 93 }, { "x": 678, "y": 93 }, { "x": 680, "y": 94 }, { "x": 683, "y": 94 }, { "x": 685, "y": 95 }, { "x": 688, "y": 95 }, { "x": 690, "y": 96 }, { "x": 692, "y": 97 }, { "x": 695, "y": 97 }, { "x": 697, "y": 98 }, { "x": 699, "y": 99 }, { "x": 702, "y": 100 }, { "x": 704, "y": 100 }, { "x": 706, "y": 101 }, { "x": 709, "y": 102 }, { "x": 711, "y": 103 }, { "x": 713, "y": 104 }, { "x": 715, "y": 104 }, { "x": 717, "y": 105 }, { "x": 719, "y": 106 }, { "x": 721, "y": 107 }, { "x": 723, "y": 108 }, { "x": 725, "y": 109 }, { "x": 727, "y": 110 }, { "x": 729, "y": 111 }, { "x": 731, "y": 112 }, { "x": 733, "y": 113 }, { "x": 735, "y": 114 }, { "x": 737, "y": 115 }, { "x": 739, "y": 116 }, { "x": 741, "y": 117 }, { "x": 742, "y": 118 }, { "x": 744, "y": 120 }, { "x": 746, "y": 121 }, { "x": 748, "y": 122 }, { "x": 749, "y": 123 }, { "x": 751, "y": 124 }, { "x": 752, "y": 125 }, { "x": 754, "y": 127 }, { "x": 755, "y": 128 }, { "x": 757, "y": 129 }, { "x": 758, "y": 131 }, { "x": 760, "y": 132 }, { "x": 761, "y": 133 }, { "x": 763, "y": 135 }, { "x": 764, "y": 136 }, { "x": 765, "y": 137 }, { "x": 767, "y": 139 }, { "x": 768, "y": 140 }, { "x": 769, "y": 142 }, { "x": 770, "y": 143 }, { "x": 771, "y": 144 }, { "x": 772, "y": 146 }, { "x": 774, "y": 147 }, { "x": 775, "y": 149 }, { "x": 776, "y": 150 }, { "x": 777, "y": 152 }, { "x": 778, "y": 154 }, { "x": 778, "y": 155 }, { "x": 779, "y": 157 }, { "x": 780, "y": 158 }, { "x": 781, "y": 160 }, { "x": 782, "y": 161 }, { "x": 783, "y": 163 }, { "x": 783, "y": 165 }, { "x": 784, "y": 166 }, { "x": 785, "y": 168 }, { "x": 785, "y": 170 }, { "x": 786, "y": 171 }, { "x": 786, "y": 173 }, { "x": 787, "y": 175 }, { "x": 787, "y": 177 }, { "x": 788, "y": 178 }, { "x": 788, "y": 180 }, { "x": 789, "y": 182 }, { "x": 789, "y": 184 }, { "x": 789, "y": 186 }, { "x": 790, "y": 187 }, { "x": 790, "y": 189 }, { "x": 790, "y": 191 }, { "x": 790, "y": 193 }, { "x": 790, "y": 195 }, { "x": 791, "y": 197 }, { "x": 791, "y": 198 }, { "x": 791, "y": 200 }, { "x": 791, "y": 202 }, { "x": 791, "y": 204 }, { "x": 791, "y": 206 }, { "x": 791, "y": 208 }, { "x": 790, "y": 210 }, { "x": 790, "y": 212 }, { "x": 790, "y": 214 }, { "x": 790, "y": 216 }, { "x": 790, "y": 218 }, { "x": 789, "y": 220 }, { "x": 789, "y": 222 }, { "x": 789, "y": 224 }, { "x": 788, "y": 226 }, { "x": 788, "y": 228 }, { "x": 787, "y": 230 }, { "x": 787, "y": 232 }, { "x": 786, "y": 234 }, { "x": 786, "y": 236 }, { "x": 785, "y": 238 }, { "x": 784, "y": 240 }, { "x": 784, "y": 242 }, { "x": 783, "y": 244 }, { "x": 782, "y": 246 }, { "x": 782, "y": 248 }, { "x": 781, "y": 250 }, { "x": 780, "y": 252 }, { "x": 779, "y": 254 }, { "x": 778, "y": 256 }, { "x": 777, "y": 259 }, { "x": 776, "y": 261 }, { "x": 775, "y": 263 }, { "x": 774, "y": 265 }, { "x": 773, "y": 267 }, { "x": 772, "y": 269 }, { "x": 771, "y": 271 }, { "x": 770, "y": 273 }, { "x": 769, "y": 275 }, { "x": 767, "y": 278 }, { "x": 766, "y": 280 }, { "x": 765, "y": 282 }, { "x": 764, "y": 284 }, { "x": 762, "y": 286 }, { "x": 761, "y": 288 }, { "x": 759, "y": 290 }, { "x": 758, "y": 292 }, { "x": 757, "y": 295 }, { "x": 755, "y": 297 }, { "x": 754, "y": 299 }, { "x": 752, "y": 301 }, { "x": 750, "y": 303 }, { "x": 749, "y": 305 }, { "x": 747, "y": 307 }, { "x": 745, "y": 310 }, { "x": 744, "y": 312 }, { "x": 742, "y": 314 }, { "x": 740, "y": 316 }, { "x": 738, "y": 318 }, { "x": 737, "y": 320 }, { "x": 735, "y": 322 }, { "x": 733, "y": 324 }, { "x": 731, "y": 327 }, { "x": 729, "y": 329 }, { "x": 727, "y": 331 }, { "x": 725, "y": 333 }, { "x": 723, "y": 335 }, { "x": 721, "y": 337 }, { "x": 719, "y": 339 }, { "x": 717, "y": 341 }, { "x": 715, "y": 343 }, { "x": 712, "y": 345 }, { "x": 710, "y": 348 }, { "x": 708, "y": 350 }, { "x": 706, "y": 352 }, { "x": 703, "y": 354 }, { "x": 701, "y": 356 }, { "x": 699, "y": 358 }, { "x": 697, "y": 360 }, { "x": 694, "y": 362 }, { "x": 692, "y": 364 }, { "x": 689, "y": 366 }, { "x": 687, "y": 368 }, { "x": 684, "y": 370 }, { "x": 682, "y": 372 }, { "x": 679, "y": 374 }, { "x": 677, "y": 376 }, { "x": 674, "y": 378 }, { "x": 672, "y": 380 }, { "x": 669, "y": 382 }, { "x": 667, "y": 384 }, { "x": 664, "y": 386 }, { "x": 661, "y": 388 }, { "x": 659, "y": 390 }, { "x": 656, "y": 392 }, { "x": 653, "y": 394 }, { "x": 650, "y": 396 }, { "x": 648, "y": 398 }, { "x": 645, "y": 399 }, { "x": 642, "y": 401 }, { "x": 639, "y": 403 }, { "x": 636, "y": 405 }, { "x": 633, "y": 407 }, { "x": 631, "y": 409 }, { "x": 628, "y": 411 }, { "x": 625, "y": 412 }, { "x": 622, "y": 414 }, { "x": 619, "y": 416 }, { "x": 616, "y": 418 }, { "x": 613, "y": 420 }, { "x": 610, "y": 421 }, { "x": 607, "y": 423 }, { "x": 604, "y": 425 }, { "x": 601, "y": 426 }, { "x": 598, "y": 428 }, { "x": 595, "y": 430 }, { "x": 592, "y": 432 }, { "x": 588, "y": 433 }, { "x": 585, "y": 435 }, { "x": 582, "y": 437 }, { "x": 579, "y": 438 }, { "x": 576, "y": 440 }, { "x": 573, "y": 441 }, { "x": 570, "y": 443 }, { "x": 566, "y": 445 }, { "x": 563, "y": 446 }, { "x": 560, "y": 448 }, { "x": 557, "y": 449 }, { "x": 553, "y": 451 }, { "x": 550, "y": 452 }, { "x": 547, "y": 454 }, { "x": 544, "y": 455 }, { "x": 540, "y": 457 }, { "x": 537, "y": 458 }, { "x": 534, "y": 459 }, { "x": 530, "y": 461 }, { "x": 527, "y": 462 }, { "x": 524, "y": 464 }, { "x": 520, "y": 465 }, { "x": 517, "y": 466 }, { "x": 514, "y": 468 }, { "x": 510, "y": 469 }, { "x": 507, "y": 470 }, { "x": 504, "y": 472 }, { "x": 500, "y": 473 }, { "x": 497, "y": 474 }, { "x": 494, "y": 475 }, { "x": 490, "y": 476 }, { "x": 487, "y": 478 }, { "x": 483, "y": 479 }, { "x": 480, "y": 480 }, { "x": 477, "y": 481 }, { "x": 473, "y": 482 }, { "x": 470, "y": 483 }, { "x": 466, "y": 484 }, { "x": 463, "y": 485 }, { "x": 460, "y": 486 }, { "x": 456, "y": 487 }, { "x": 453, "y": 488 }, { "x": 449, "y": 489 }, { "x": 446, "y": 490 }, { "x": 443, "y": 491 }, { "x": 439, "y": 492 }, { "x": 436, "y": 493 }, { "x": 432, "y": 494 }, { "x": 429, "y": 495 }, { "x": 425, "y": 496 }, { "x": 422, "y": 497 }, { "x": 419, "y": 497 }, { "x": 415, "y": 498 }, { "x": 412, "y": 499 }, { "x": 408, "y": 500 }, { "x": 405, "y": 500 }, { "x": 402, "y": 501 }, { "x": 398, "y": 502 }, { "x": 395, "y": 503 }, { "x": 392, "y": 503 }, { "x": 388, "y": 504 }, { "x": 385, "y": 504 }, { "x": 382, "y": 505 }, { "x": 378, "y": 506 }, { "x": 375, "y": 506 }, { "x": 372, "y": 507 }, { "x": 368, "y": 507 }, { "x": 365, "y": 508 }, { "x": 362, "y": 508 }, { "x": 358, "y": 509 }, { "x": 355, "y": 509 }, { "x": 352, "y": 509 }, { "x": 349, "y": 510 }, { "x": 345, "y": 510 }, { "x": 342, "y": 510 }, { "x": 339, "y": 511 }, { "x": 336, "y": 511 }, { "x": 332, "y": 511 }, { "x": 329, "y": 512 }, { "x": 326, "y": 512 }, { "x": 323, "y": 512 }, { "x": 320, "y": 512 }, { "x": 316, "y": 512 }, { "x": 313, "y": 513 }, { "x": 310, "y": 513 }, { "x": 307, "y": 513 }, { "x": 304, "y": 513 }, { "x": 301, "y": 513 }, { "x": 298, "y": 513 }, { "x": 295, "y": 513 }, { "x": 292, "y": 513 }, { "x": 289, "y": 513 }, { "x": 286, "y": 513 }, { "x": 283, "y": 513 }, { "x": 280, "y": 513 }, { "x": 277, "y": 513 }, { "x": 274, "y": 513 }, { "x": 271, "y": 512 }, { "x": 268, "y": 512 }, { "x": 265, "y": 512 }, { "x": 262, "y": 512 }, { "x": 260, "y": 512 }, { "x": 257, "y": 511 }, { "x": 254, "y": 511 }, { "x": 251, "y": 511 }];
exports.path2 = [{ "x": 849, "y": -13 }, { "x": 849, "y": -12 }, { "x": 849, "y": -11 }, { "x": 849, "y": -10 }, { "x": 849, "y": -9 }, { "x": 849, "y": -8 }, { "x": 849, "y": -7 }, { "x": 849, "y": -6 }, { "x": 848, "y": -5 }, { "x": 848, "y": -4 }, { "x": 848, "y": -3 }, { "x": 847, "y": -2 }, { "x": 847, "y": -1 }, { "x": 846, "y": 0 }, { "x": 846, "y": 1 }, { "x": 845, "y": 2 }, { "x": 845, "y": 3 }, { "x": 844, "y": 4 }, { "x": 843, "y": 5 }, { "x": 843, "y": 6 }, { "x": 842, "y": 7 }, { "x": 841, "y": 8 }, { "x": 840, "y": 9 }, { "x": 839, "y": 10 }, { "x": 839, "y": 11 }, { "x": 838, "y": 12 }, { "x": 837, "y": 13 }, { "x": 836, "y": 14 }, { "x": 835, "y": 15 }, { "x": 834, "y": 16 }, { "x": 832, "y": 17 }, { "x": 831, "y": 18 }, { "x": 830, "y": 19 }, { "x": 829, "y": 20 }, { "x": 827, "y": 21 }, { "x": 826, "y": 22 }, { "x": 825, "y": 23 }, { "x": 823, "y": 24 }, { "x": 822, "y": 25 }, { "x": 820, "y": 26 }, { "x": 819, "y": 27 }, { "x": 817, "y": 28 }, { "x": 816, "y": 29 }, { "x": 814, "y": 30 }, { "x": 813, "y": 31 }, { "x": 811, "y": 32 }, { "x": 809, "y": 33 }, { "x": 807, "y": 34 }, { "x": 806, "y": 35 }, { "x": 804, "y": 35 }, { "x": 802, "y": 36 }, { "x": 800, "y": 37 }, { "x": 798, "y": 38 }, { "x": 796, "y": 39 }, { "x": 794, "y": 40 }, { "x": 792, "y": 41 }, { "x": 790, "y": 42 }, { "x": 788, "y": 43 }, { "x": 786, "y": 44 }, { "x": 783, "y": 45 }, { "x": 781, "y": 46 }, { "x": 779, "y": 46 }, { "x": 777, "y": 47 }, { "x": 774, "y": 48 }, { "x": 772, "y": 49 }, { "x": 770, "y": 50 }, { "x": 767, "y": 51 }, { "x": 765, "y": 52 }, { "x": 762, "y": 53 }, { "x": 760, "y": 53 }, { "x": 757, "y": 54 }, { "x": 755, "y": 55 }, { "x": 752, "y": 56 }, { "x": 750, "y": 57 }, { "x": 747, "y": 58 }, { "x": 744, "y": 58 }, { "x": 741, "y": 59 }, { "x": 739, "y": 60 }, { "x": 736, "y": 61 }, { "x": 733, "y": 62 }, { "x": 730, "y": 62 }, { "x": 727, "y": 63 }, { "x": 725, "y": 64 }, { "x": 722, "y": 65 }, { "x": 719, "y": 66 }, { "x": 716, "y": 66 }, { "x": 713, "y": 67 }, { "x": 710, "y": 68 }, { "x": 707, "y": 69 }, { "x": 704, "y": 69 }, { "x": 700, "y": 70 }, { "x": 697, "y": 71 }, { "x": 694, "y": 71 }, { "x": 691, "y": 72 }, { "x": 688, "y": 73 }, { "x": 685, "y": 73 }, { "x": 681, "y": 74 }, { "x": 678, "y": 75 }, { "x": 675, "y": 76 }, { "x": 671, "y": 76 }, { "x": 668, "y": 77 }, { "x": 665, "y": 77 }, { "x": 661, "y": 78 }, { "x": 658, "y": 79 }, { "x": 655, "y": 79 }, { "x": 651, "y": 80 }, { "x": 648, "y": 81 }, { "x": 644, "y": 81 }, { "x": 641, "y": 82 }, { "x": 637, "y": 82 }, { "x": 634, "y": 83 }, { "x": 630, "y": 83 }, { "x": 627, "y": 84 }, { "x": 623, "y": 85 }, { "x": 619, "y": 85 }, { "x": 616, "y": 86 }, { "x": 612, "y": 86 }, { "x": 608, "y": 87 }, { "x": 605, "y": 87 }, { "x": 601, "y": 88 }, { "x": 597, "y": 88 }, { "x": 594, "y": 89 }, { "x": 590, "y": 89 }, { "x": 586, "y": 90 }, { "x": 582, "y": 90 }, { "x": 579, "y": 90 }, { "x": 575, "y": 91 }, { "x": 571, "y": 91 }, { "x": 567, "y": 92 }, { "x": 563, "y": 92 }, { "x": 559, "y": 92 }, { "x": 556, "y": 93 }, { "x": 552, "y": 93 }, { "x": 548, "y": 94 }, { "x": 544, "y": 94 }, { "x": 540, "y": 94 }, { "x": 536, "y": 95 }, { "x": 532, "y": 95 }, { "x": 528, "y": 95 }, { "x": 524, "y": 96 }, { "x": 521, "y": 96 }, { "x": 517, "y": 96 }, { "x": 513, "y": 96 }, { "x": 509, "y": 97 }, { "x": 505, "y": 97 }, { "x": 501, "y": 97 }, { "x": 497, "y": 97 }, { "x": 493, "y": 98 }, { "x": 489, "y": 98 }, { "x": 485, "y": 98 }, { "x": 481, "y": 98 }, { "x": 477, "y": 99 }, { "x": 473, "y": 99 }, { "x": 469, "y": 99 }, { "x": 465, "y": 99 }, { "x": 461, "y": 99 }, { "x": 457, "y": 99 }, { "x": 453, "y": 99 }, { "x": 449, "y": 100 }, { "x": 445, "y": 100 }, { "x": 441, "y": 100 }, { "x": 437, "y": 100 }, { "x": 433, "y": 100 }, { "x": 429, "y": 100 }, { "x": 425, "y": 100 }, { "x": 421, "y": 100 }, { "x": 417, "y": 100 }, { "x": 413, "y": 100 }, { "x": 409, "y": 100 }, { "x": 405, "y": 100 }, { "x": 401, "y": 100 }, { "x": 397, "y": 100 }, { "x": 393, "y": 100 }, { "x": 389, "y": 100 }, { "x": 385, "y": 100 }, { "x": 381, "y": 100 }, { "x": 377, "y": 100 }, { "x": 373, "y": 100 }, { "x": 370, "y": 100 }, { "x": 366, "y": 100 }, { "x": 362, "y": 100 }, { "x": 358, "y": 100 }, { "x": 354, "y": 99 }, { "x": 350, "y": 99 }, { "x": 346, "y": 99 }, { "x": 342, "y": 99 }, { "x": 338, "y": 99 }, { "x": 335, "y": 99 }, { "x": 331, "y": 99 }, { "x": 327, "y": 98 }, { "x": 323, "y": 98 }, { "x": 319, "y": 98 }, { "x": 316, "y": 98 }, { "x": 312, "y": 97 }, { "x": 308, "y": 97 }, { "x": 304, "y": 97 }, { "x": 301, "y": 97 }, { "x": 297, "y": 96 }, { "x": 293, "y": 96 }, { "x": 290, "y": 96 }, { "x": 286, "y": 96 }, { "x": 282, "y": 95 }, { "x": 279, "y": 95 }, { "x": 275, "y": 95 }, { "x": 272, "y": 94 }, { "x": 268, "y": 94 }, { "x": 264, "y": 94 }, { "x": 261, "y": 93 }, { "x": 257, "y": 93 }, { "x": 254, "y": 93 }, { "x": 250, "y": 92 }, { "x": 247, "y": 92 }, { "x": 243, "y": 91 }, { "x": 240, "y": 91 }, { "x": 237, "y": 90 }, { "x": 233, "y": 90 }, { "x": 230, "y": 90 }, { "x": 227, "y": 89 }, { "x": 223, "y": 89 }, { "x": 220, "y": 88 }, { "x": 217, "y": 88 }, { "x": 214, "y": 87 }, { "x": 210, "y": 87 }, { "x": 207, "y": 86 }, { "x": 204, "y": 86 }, { "x": 201, "y": 85 }, { "x": 198, "y": 85 }, { "x": 195, "y": 84 }, { "x": 192, "y": 84 }, { "x": 188, "y": 83 }, { "x": 185, "y": 82 }, { "x": 182, "y": 82 }, { "x": 180, "y": 81 }, { "x": 177, "y": 81 }, { "x": 174, "y": 80 }, { "x": 171, "y": 79 }, { "x": 168, "y": 79 }, { "x": 165, "y": 78 }, { "x": 162, "y": 78 }, { "x": 160, "y": 77 }, { "x": 157, "y": 76 }, { "x": 154, "y": 76 }, { "x": 151, "y": 75 }, { "x": 149, "y": 74 }, { "x": 146, "y": 74 }, { "x": 144, "y": 73 }, { "x": 141, "y": 72 }, { "x": 138, "y": 72 }, { "x": 136, "y": 71 }, { "x": 134, "y": 70 }, { "x": 131, "y": 69 }, { "x": 129, "y": 69 }, { "x": 126, "y": 68 }, { "x": 124, "y": 67 }, { "x": 122, "y": 66 }, { "x": 119, "y": 66 }, { "x": 117, "y": 65 }, { "x": 115, "y": 64 }, { "x": 113, "y": 63 }, { "x": 111, "y": 63 }, { "x": 109, "y": 62 }, { "x": 106, "y": 61 }, { "x": 104, "y": 60 }, { "x": 102, "y": 59 }, { "x": 100, "y": 59 }, { "x": 99, "y": 58 }, { "x": 97, "y": 57 }, { "x": 95, "y": 56 }, { "x": 93, "y": 55 }, { "x": 91, "y": 54 }, { "x": 89, "y": 54 }, { "x": 88, "y": 53 }, { "x": 86, "y": 52 }, { "x": 84, "y": 51 }, { "x": 83, "y": 50 }, { "x": 81, "y": 49 }, { "x": 80, "y": 48 }, { "x": 78, "y": 47 }, { "x": 77, "y": 47 }, { "x": 75, "y": 46 }, { "x": 74, "y": 45 }, { "x": 72, "y": 44 }, { "x": 71, "y": 43 }, { "x": 70, "y": 42 }, { "x": 69, "y": 41 }, { "x": 67, "y": 40 }, { "x": 66, "y": 39 }, { "x": 65, "y": 38 }, { "x": 64, "y": 37 }, { "x": 63, "y": 37 }, { "x": 62, "y": 36 }, { "x": 61, "y": 35 }, { "x": 60, "y": 34 }, { "x": 59, "y": 33 }, { "x": 58, "y": 32 }, { "x": 58, "y": 31 }, { "x": 57, "y": 30 }, { "x": 56, "y": 29 }, { "x": 55, "y": 28 }, { "x": 55, "y": 27 }, { "x": 54, "y": 26 }, { "x": 54, "y": 25 }, { "x": 53, "y": 24 }, { "x": 53, "y": 23 }, { "x": 52, "y": 22 }, { "x": 52, "y": 21 }, { "x": 51, "y": 20 }, { "x": 51, "y": 19 }, { "x": 51, "y": 18 }, { "x": 50, "y": 17 }, { "x": 50, "y": 16 }, { "x": 50, "y": 15 }];
exports.path3 = [{ "x": 804, "y": 693 }, { "x": 803, "y": 694 }, { "x": 803, "y": 695 }, { "x": 802, "y": 696 }, { "x": 801, "y": 696 }, { "x": 801, "y": 697 }, { "x": 800, "y": 698 }, { "x": 799, "y": 698 }, { "x": 798, "y": 699 }, { "x": 797, "y": 699 }, { "x": 796, "y": 700 }, { "x": 795, "y": 700 }, { "x": 794, "y": 701 }, { "x": 793, "y": 701 }, { "x": 792, "y": 702 }, { "x": 791, "y": 702 }, { "x": 789, "y": 703 }, { "x": 788, "y": 703 }, { "x": 787, "y": 703 }, { "x": 786, "y": 703 }, { "x": 784, "y": 704 }, { "x": 783, "y": 704 }, { "x": 781, "y": 704 }, { "x": 780, "y": 704 }, { "x": 778, "y": 704 }, { "x": 777, "y": 704 }, { "x": 775, "y": 704 }, { "x": 774, "y": 704 }, { "x": 772, "y": 704 }, { "x": 770, "y": 704 }, { "x": 769, "y": 704 }, { "x": 767, "y": 704 }, { "x": 765, "y": 704 }, { "x": 763, "y": 704 }, { "x": 761, "y": 704 }, { "x": 759, "y": 703 }, { "x": 757, "y": 703 }, { "x": 755, "y": 703 }, { "x": 753, "y": 702 }, { "x": 751, "y": 702 }, { "x": 749, "y": 702 }, { "x": 747, "y": 701 }, { "x": 745, "y": 701 }, { "x": 743, "y": 700 }, { "x": 740, "y": 700 }, { "x": 738, "y": 699 }, { "x": 736, "y": 699 }, { "x": 734, "y": 698 }, { "x": 731, "y": 698 }, { "x": 729, "y": 697 }, { "x": 726, "y": 696 }, { "x": 724, "y": 695 }, { "x": 721, "y": 695 }, { "x": 719, "y": 694 }, { "x": 716, "y": 693 }, { "x": 714, "y": 692 }, { "x": 711, "y": 691 }, { "x": 708, "y": 691 }, { "x": 706, "y": 690 }, { "x": 703, "y": 689 }, { "x": 700, "y": 688 }, { "x": 697, "y": 687 }, { "x": 695, "y": 686 }, { "x": 692, "y": 685 }, { "x": 689, "y": 684 }, { "x": 686, "y": 682 }, { "x": 683, "y": 681 }, { "x": 680, "y": 680 }, { "x": 677, "y": 679 }, { "x": 674, "y": 678 }, { "x": 671, "y": 676 }, { "x": 668, "y": 675 }, { "x": 665, "y": 674 }, { "x": 662, "y": 672 }, { "x": 659, "y": 671 }, { "x": 655, "y": 670 }, { "x": 652, "y": 668 }, { "x": 649, "y": 667 }, { "x": 646, "y": 665 }, { "x": 642, "y": 664 }, { "x": 639, "y": 662 }, { "x": 636, "y": 661 }, { "x": 632, "y": 659 }, { "x": 629, "y": 658 }, { "x": 626, "y": 656 }, { "x": 622, "y": 654 }, { "x": 619, "y": 653 }, { "x": 615, "y": 651 }, { "x": 612, "y": 649 }, { "x": 608, "y": 647 }, { "x": 605, "y": 646 }, { "x": 601, "y": 644 }, { "x": 598, "y": 642 }, { "x": 594, "y": 640 }, { "x": 591, "y": 638 }, { "x": 587, "y": 636 }, { "x": 583, "y": 634 }, { "x": 580, "y": 632 }, { "x": 576, "y": 630 }, { "x": 572, "y": 628 }, { "x": 569, "y": 626 }, { "x": 565, "y": 624 }, { "x": 561, "y": 622 }, { "x": 557, "y": 620 }, { "x": 554, "y": 618 }, { "x": 550, "y": 616 }, { "x": 546, "y": 614 }, { "x": 542, "y": 612 }, { "x": 538, "y": 609 }, { "x": 534, "y": 607 }, { "x": 531, "y": 605 }, { "x": 527, "y": 603 }, { "x": 523, "y": 600 }, { "x": 519, "y": 598 }, { "x": 515, "y": 596 }, { "x": 511, "y": 593 }, { "x": 507, "y": 591 }, { "x": 503, "y": 589 }, { "x": 499, "y": 586 }, { "x": 495, "y": 584 }, { "x": 491, "y": 581 }, { "x": 487, "y": 579 }, { "x": 483, "y": 576 }, { "x": 479, "y": 574 }, { "x": 475, "y": 571 }, { "x": 471, "y": 569 }, { "x": 467, "y": 566 }, { "x": 463, "y": 564 }, { "x": 459, "y": 561 }, { "x": 455, "y": 559 }, { "x": 451, "y": 556 }, { "x": 447, "y": 553 }, { "x": 443, "y": 551 }, { "x": 439, "y": 548 }, { "x": 435, "y": 545 }, { "x": 431, "y": 543 }, { "x": 427, "y": 540 }, { "x": 423, "y": 537 }, { "x": 418, "y": 535 }, { "x": 414, "y": 532 }, { "x": 410, "y": 529 }, { "x": 406, "y": 526 }, { "x": 402, "y": 524 }, { "x": 398, "y": 521 }, { "x": 394, "y": 518 }, { "x": 390, "y": 515 }, { "x": 386, "y": 512 }, { "x": 382, "y": 510 }, { "x": 378, "y": 507 }, { "x": 374, "y": 504 }, { "x": 369, "y": 501 }, { "x": 365, "y": 498 }, { "x": 361, "y": 495 }, { "x": 357, "y": 492 }, { "x": 353, "y": 489 }, { "x": 349, "y": 486 }, { "x": 345, "y": 484 }, { "x": 341, "y": 481 }, { "x": 337, "y": 478 }, { "x": 333, "y": 475 }, { "x": 329, "y": 472 }, { "x": 325, "y": 469 }, { "x": 321, "y": 466 }, { "x": 317, "y": 463 }, { "x": 313, "y": 460 }, { "x": 309, "y": 457 }, { "x": 305, "y": 454 }, { "x": 301, "y": 451 }, { "x": 297, "y": 448 }, { "x": 293, "y": 445 }, { "x": 289, "y": 442 }, { "x": 285, "y": 439 }, { "x": 281, "y": 436 }, { "x": 277, "y": 433 }, { "x": 273, "y": 430 }, { "x": 270, "y": 427 }, { "x": 266, "y": 424 }, { "x": 262, "y": 421 }, { "x": 258, "y": 418 }, { "x": 254, "y": 415 }, { "x": 250, "y": 412 }, { "x": 247, "y": 408 }, { "x": 243, "y": 405 }, { "x": 239, "y": 402 }, { "x": 235, "y": 399 }, { "x": 232, "y": 396 }, { "x": 228, "y": 393 }, { "x": 224, "y": 390 }, { "x": 220, "y": 387 }, { "x": 217, "y": 384 }, { "x": 213, "y": 381 }, { "x": 209, "y": 378 }, { "x": 206, "y": 375 }, { "x": 202, "y": 372 }, { "x": 199, "y": 369 }, { "x": 195, "y": 366 }, { "x": 192, "y": 363 }, { "x": 188, "y": 360 }, { "x": 185, "y": 357 }, { "x": 181, "y": 354 }, { "x": 178, "y": 351 }, { "x": 174, "y": 348 }, { "x": 171, "y": 345 }, { "x": 168, "y": 342 }, { "x": 164, "y": 339 }, { "x": 161, "y": 336 }, { "x": 158, "y": 333 }, { "x": 154, "y": 330 }, { "x": 151, "y": 327 }, { "x": 148, "y": 324 }, { "x": 145, "y": 321 }, { "x": 141, "y": 318 }, { "x": 138, "y": 315 }, { "x": 135, "y": 312 }, { "x": 132, "y": 309 }, { "x": 129, "y": 306 }, { "x": 126, "y": 303 }, { "x": 123, "y": 301 }, { "x": 120, "y": 298 }, { "x": 117, "y": 295 }, { "x": 114, "y": 292 }, { "x": 111, "y": 289 }, { "x": 108, "y": 286 }, { "x": 105, "y": 283 }, { "x": 102, "y": 281 }, { "x": 100, "y": 278 }, { "x": 97, "y": 275 }, { "x": 94, "y": 272 }, { "x": 91, "y": 270 }, { "x": 89, "y": 267 }, { "x": 86, "y": 264 }, { "x": 84, "y": 261 }, { "x": 81, "y": 259 }, { "x": 78, "y": 256 }, { "x": 76, "y": 253 }, { "x": 73, "y": 251 }, { "x": 71, "y": 248 }, { "x": 69, "y": 245 }, { "x": 66, "y": 243 }, { "x": 64, "y": 240 }, { "x": 62, "y": 237 }, { "x": 59, "y": 235 }, { "x": 57, "y": 232 }, { "x": 55, "y": 230 }, { "x": 53, "y": 227 }, { "x": 50, "y": 225 }, { "x": 48, "y": 222 }, { "x": 46, "y": 220 }, { "x": 44, "y": 217 }, { "x": 42, "y": 215 }, { "x": 40, "y": 212 }, { "x": 38, "y": 210 }, { "x": 36, "y": 208 }, { "x": 35, "y": 205 }, { "x": 33, "y": 203 }, { "x": 31, "y": 201 }, { "x": 29, "y": 198 }, { "x": 27, "y": 196 }, { "x": 26, "y": 194 }, { "x": 24, "y": 192 }, { "x": 23, "y": 189 }, { "x": 21, "y": 187 }, { "x": 19, "y": 185 }, { "x": 18, "y": 183 }];


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var requestAnimFrame_1 = __webpack_require__(2);
var canvas_1 = __webpack_require__(3);
var FlickerSystem = (function () {
    function FlickerSystem(canvas, rgb, range) {
        if (range === void 0) { range = 0.3; }
        var ctx = canvas.getContext('2d');
        this.rgb = rgb;
        this.range = range;
        this.update = function () {
            var alpha = Math.random() * this.range;
            ctx.fillStyle = "rgba(" + this.rgb + ", " + alpha + ")";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };
    }
    return FlickerSystem;
}());
exports.FlickerSystem = FlickerSystem;
function init(window) {
    requestAnimFrame_1.initRequestAnimFrame(window);
    var canvases = canvas_1.getCanvases('flicker');
    Array.from(canvases).forEach(function (canvas) {
        var _a = canvas_1.getCanvasAttributes(canvas), rgb = _a.rgb, range = _a.range;
        var system = new FlickerSystem(canvas, rgb, range);
        function paint() {
            canvas_1.paintCanvas(canvas, system, window.fx.paused);
            window.requestAnimFrame(paint);
        }
        window.requestAnimFrame(paint);
    });
}
exports.init = init;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var requestAnimFrame_1 = __webpack_require__(2);
var constants_1 = __webpack_require__(4);
var CLUSTER_CLASS = 'fx-bloom-cluster';
function init(window) {
    requestAnimFrame_1.initRequestAnimFrame(window);
    var clusterElements = window.document.querySelectorAll("[" + constants_1.FX_SYSTEM_ATTR + "='bloom']");
    var clusters = [];
    var isPaused = false;
    Array.from(clusterElements).forEach(function (element) {
        var bloomCluster = new BloomCluster(element, window);
        clusters.push(bloomCluster);
    });
    var pauseMonitor = function () {
        if (window.fx.paused && !isPaused) {
            clusters.forEach(function (cluster) {
                cluster.pause();
            });
            isPaused = true;
        }
        if (!window.fx.paused && isPaused) {
            clusters.forEach(function (cluster) {
                cluster.resume();
            });
            isPaused = false;
        }
        window.requestAnimFrame(pauseMonitor);
    };
    window.requestAnimFrame(pauseMonitor);
}
exports.init = init;
;
var BloomCluster = (function () {
    function BloomCluster(element, window) {
        var n = parseInt(element.getAttribute('data-fx-bloom-n'), 10);
        var maxBloomWidth = parseInt(element.getAttribute('data-fx-bloom-maxWidth'), 10);
        var maxDuration = parseInt(element.getAttribute('data-fx-bloom-maxDuration'), 10);
        var maxDelay = parseInt(element.getAttribute('data-fx-bloom-maxDelay'), 10);
        var colors = element.getAttribute('data-fx-bloom-colors') || 'transparent';
        var colorChoices = colors.replace(' ', '').split(',');
        var styles = getComputedStyle(element);
        var areaWidth = parseInt(styles.getPropertyValue('width'), 10);
        var areaHeight = parseInt(styles.getPropertyValue('height'), 10);
        this.blooms = [];
        var _loop_1 = function (i) {
            var props = generateBloomProperties(maxBloomWidth, areaWidth, areaHeight, colorChoices, maxDelay);
            var bloom = new Bloom(props.bloomWidth, props.x, props.y, props.color, maxDuration, props.delay, window.document);
            this_1.blooms.push(bloom);
            var max = props.delay + maxDuration;
            var timer = Date.now();
            var updateBloomProps = function (max, timer) {
                if (Date.now() - timer >= max &&
                    !window.fx.paused &&
                    element.getAttribute(constants_1.FX_CANVAS_PAUSED) !== 'true') {
                    var props_1 = generateBloomProperties(maxBloomWidth, areaWidth, areaHeight, colorChoices, maxDelay);
                    bloom.initialize(props_1.bloomWidth, props_1.x, props_1.y, props_1.color, maxDuration, props_1.delay);
                    var newMax_1 = props_1.delay + maxDuration;
                    var newTimer_1 = Date.now();
                    window.requestAnimFrame(function () { updateBloomProps(newMax_1, newTimer_1); });
                }
                else {
                    window.requestAnimFrame(function () { updateBloomProps(max, timer); });
                }
            };
            element.appendChild(bloom.getElement());
            window.requestAnimFrame(function () { updateBloomProps(max, timer); });
        };
        var this_1 = this;
        for (var i = 0; i < n; i++) {
            _loop_1(i);
        }
    }
    BloomCluster.prototype.pause = function () {
        this.blooms.forEach(function (bloom) {
            bloom.pause();
        });
        this.isPaused = true;
    };
    BloomCluster.prototype.resume = function () {
        this.blooms.forEach(function (bloom) {
            bloom.resume();
        });
        this.isPaused = false;
    };
    return BloomCluster;
}());
exports.BloomCluster = BloomCluster;
;
function generateBloomProperties(maxBloomWidth, areaWidth, areaHeight, colorChoices, maxDelay) {
    var bloomWidth = Math.max(Math.round(Math.random() * maxBloomWidth), 50);
    var x = Math.round(Math.random() * areaWidth) - (bloomWidth / 2);
    var y = Math.round(Math.random() * areaHeight) - (bloomWidth / 2);
    var delay = Math.round(Math.random() * maxDelay);
    var colorIndex = Math.round(Math.random() * (colorChoices.length - 1));
    var color = colorChoices[colorIndex];
    return { bloomWidth: bloomWidth, x: x, y: y, color: color, delay: delay };
}
exports.generateBloomProperties = generateBloomProperties;
var Bloom = (function () {
    function Bloom(width, x, y, color, duration, delay, document) {
        this.element = document.createElement('div');
        this.element.classList.add('fx-bloom');
        this.initialize(width, x, y, color, duration, delay);
    }
    Bloom.prototype.initialize = function (width, x, y, color, duration, delay) {
        this.element.style.width = width + "px";
        this.element.style.height = width + "px";
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
        this.element.style.backgroundColor = color;
        this.element.style.animationDelay = delay + "ms";
        this.element.style.animationDuration = (duration / 1000) + "s";
    };
    Bloom.prototype.getElement = function () {
        return this.element;
    };
    Bloom.prototype.pause = function () {
        this.element.style.animationPlayState = 'paused';
    };
    Bloom.prototype.resume = function () {
        this.element.style.animationPlayState = 'running';
    };
    return Bloom;
}());
exports.Bloom = Bloom;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var constants_1 = __webpack_require__(4);
var requestAnimFrame_1 = __webpack_require__(2);
function initCanvasIntersectionObserver(window) {
    if (typeof IntersectionObserver !== 'undefined') {
        requestAnimFrame_1.initRequestAnimFrame(window);
        var observer_1 = new IntersectionObserver(function (changes) {
            changes.forEach(function (change) {
                if (!change.isIntersecting) {
                    window.requestAnimFrame(function () {
                        change.target.setAttribute(constants_1.FX_CANVAS_PAUSED, 'true');
                    });
                }
                else {
                    window.requestAnimFrame(function () {
                        change.target.setAttribute(constants_1.FX_CANVAS_PAUSED, 'false');
                    });
                }
            });
        });
        Array.from(document.querySelectorAll("[" + constants_1.FX_SYSTEM_ATTR + "]")).forEach(function (canvas) {
            observer_1.observe(canvas);
        });
        Array.from(document.querySelectorAll("[" + constants_1.FX_SYSTEM_JITTER_ATTR + "]")).forEach(function (canvas) {
            observer_1.observe(canvas);
        });
    }
}
exports.initCanvasIntersectionObserver = initCanvasIntersectionObserver;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var counter = 0;
function handleImageProgress(document, selector, callback) {
    if (selector === void 0) { selector = 'img'; }
    var allImages = Array.from(document.querySelectorAll(selector));
    allImages.forEach(function (image) {
        if (image.complete) {
            update(allImages.length, callback);
        }
        else {
            image.onload = function () {
                update(allImages.length, callback);
            };
        }
    });
}
exports.handleImageProgress = handleImageProgress;
function update(totalImages, callback) {
    counter++;
    if (callback) {
        callback({
            loaded: counter,
            percent: Math.round(counter / totalImages)
        });
    }
}


/***/ })
/******/ ]);