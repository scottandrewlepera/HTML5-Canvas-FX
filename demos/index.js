document.addEventListener('DOMContentLoaded', function() {
    var canvases = document.querySelectorAll('canvas');
    Array.from(canvases).forEach( (canvas) => {
        var pre = document.createElement('pre');
        html = canvas.outerHTML.split(" ").join("\n    ");
        console.log(html);
        pre.innerText = html;
        document.body.insertBefore(pre, canvas);
    });
});