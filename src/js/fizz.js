/*
Particle system adapted from a demo by Andres Pagella
http://www.andrespagella.com/introduction-particle-systems-html5-canvas
*/

(function() {

    var Particle = function(x, y, vx, vy, radius, maxWidth) {

        this.x = x || 0;
        this.y = y || 0;
        this.vx = vx || 0;
        this.vy = vy || 0;
        this.alpha = 1;
        this.radius = radius || 2;
        this.maxWidth = maxWidth;
        
        this.update = function () {

            this.alpha = Math.random() * (1 - 0.2) + 0.2;
            this.radius = Math.random() * (this.maxWidth - 2) + 2;
            this.y += this.vy;
        };

    };

  var ParticleSystem = function(canvas, count, maxWidth) {
    var i = 0,
        ctx = canvas.getContext('2d');

    count = count || 0;
    maxWidth = maxWidth || 6;

    this.particles = [];
    this.canvas = canvas;

    // initialization
    for ( ; i < count ; ++i ) {
      var x = Math.random() * (canvas.width - 1) + 1,
          y = Math.random() * (canvas.height - 1) + 1,
          vx = Math.random() * 3 - 1.5,
          vy = -(Math.random() * (3 - 1.5) + 1),
          radius = Math.random() * (maxWidth - 2) + 2;

      this.particles.push(new Particle(x, y, vx, vy, radius, maxWidth));
    }

    this.update = function() {
      for ( i = 0 ; i < count ; ++i ) {

        var particle = this.particles[i];
        // We don't want to process particles that
        // we can't see anymore
        if (particle.y > 0 &&
            particle.y < canvas.height) {

            particle.update();

            ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
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
        var canvases = document.querySelectorAll('canvas[data-dustup]');

        Array.from(canvases).forEach( (canvas) => {
            var n = parseInt(canvas.getAttribute('data-dustup'), 10);
            var mw = parseInt(canvas.getAttribute('data-dustup-max-width'), 10);
            var system = new ParticleSystem(canvas, n, mw);

            requestAnimFrame(paint);

            function paint() {
                var ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                system.update();
                requestAnimFrame(paint);
            }
        });

    }
})();
