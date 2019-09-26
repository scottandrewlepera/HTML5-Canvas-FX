document.addEventListener('DOMContentLoaded', function() {
    var canvases = document.querySelectorAll('canvas');
    Array.from(canvases).forEach( (canvas) => {
        var pre = document.createElement('pre');
        html = canvas.outerHTML.split(" ").join("\n    ");
        pre.innerText = html;
        document.body.insertBefore(pre, canvas);
    });
});
