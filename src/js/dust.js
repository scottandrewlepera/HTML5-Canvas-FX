/*
Particle system adapted from a demo by Andres Pagella
http://www.andrespagella.com/introduction-particle-systems-html5-canvas
*/

import { initRequestAnimFrame } from './requestAnimFrame';

(function() {

  var Particle = function(x, y, vx, vy) {
    this.x = x || 0;
    this.y = y || 0;
    this.vx = vx || 0;
    this.vy = vy || 0;
    this.alpha = 1;
    
    this.update = function (vx, vy) {

        this.alpha = Math.random() * (1 - 0.2) + 0.2;

      vx = vx || 0,
      vy = vy || 0;

      this.x += this.vx + vx;
      this.y += this.vy + vy;
    };

  };

  var ParticleSystem = function(canvas, count, rgbColor) {
    var i = 0,
        ctx = canvas.getContext('2d');

    count = count || 0;

    rgbColor = rgbColor || '255, 255, 255';

    this.particles = [];
    this.canvas = canvas;

    // initialization
    for ( ; i < count ; ++i ) {
      var x = Math.random() * (canvas.width - 1) + 1,
          y = Math.random() * (canvas.height - 1) + 1,
          vx = Math.random() * 3 - 1.5,
          vy = Math.random() * 3 - 1.5;

      this.particles.push(new Particle(x, y, vx, vy));
    }

    this.update = function() {
      for ( i = 0 ; i < count ; ++i ) {

        var particle = this.particles[i];
        // We don't want to process particles that
        // we can't see anymore
        if (particle.x > 0 &&
            particle.x < canvas.width &&
            particle.y > 0 &&
            particle.y < canvas.height) {

            particle.update();

            ctx.fillStyle = `rgba(${rgbColor}, ${particle.alpha})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, 3, 0, 2 * Math.PI);
            ctx.fill();

        } else {
            particle.x = Math.random() * (canvas.width - 1) + 1;
            particle.y = Math.random() * (canvas.height - 1) + 1;
        }
      }
    };
  };


  // Call the init() function on load
    init();

    function init() {
        // Get a reference to the canvas object in the HTML
        var canvases = document.querySelectorAll('canvas[data-dust]');

        Array.from(canvases).forEach( (canvas) => {
            var n = parseInt(canvas.getAttribute('data-dust'), 10);
            var rgb = canvas.getAttribute('data-dust-rgb');
            var system = new ParticleSystem(canvas, n, rgb);

            window.requestAnimFrame(paint);

            function paint() {
                var ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                system.update();
                window.requestAnimFrame(paint);
            }
        });

    }
})();
