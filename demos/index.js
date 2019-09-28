document.addEventListener('DOMContentLoaded', function() {
    var canvases = document.querySelectorAll('[data-show-code]');
    Array.from(canvases).forEach( (canvas) => {
        var pre = document.createElement('pre');
        canvas.removeAttribute('data-show-code');
        // clone so we only get the outer HTML (no children!)
        var clone = canvas.cloneNode(false);
        // remove whitespace that's not in quotes
        var html = clone.outerHTML.replace(/\s(?=("[^"]*"|[^"])*$)/g, '\n    ');
        // add line break to closing tag
        html = html.replace(/></, '>\n<');
        pre.innerText = html;
        document.body.insertBefore(pre, canvas);
    });
});
