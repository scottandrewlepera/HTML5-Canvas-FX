  // shim layer with setTimeout fallback by Paul Irish
  // Used as an efficient and browser-friendly
  // replacement for setTimeout or setInterval
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame   ||
    window.mozRequestAnimationFrame      ||
    window.oRequestAnimationFrame        ||
    window.msRequestAnimationFrame       ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();
  