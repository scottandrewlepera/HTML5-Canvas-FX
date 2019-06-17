/*
    Given a document and CSS selector, this function will 
    select all elements that match and wait for them to load, 
    firing the specified callback for each when loaded.

    The callback function will be supplied with an object that
    contains the number of items and percentage of items loaded.
*/

let counter: number = 0;

export function handleImageProgress (document: HTMLDocument, selector: string ='img', callback?: Function) {
    let allImages: HTMLImageElement[] = Array.from(document.querySelectorAll(selector));
    allImages.forEach( (image: HTMLImageElement) => {
        if (image.complete) {
            update(allImages.length, callback);
        } else {
            image.onload = () => {
                update(allImages.length, callback);
            };
        }
    });
}

function update(totalImages: number, callback?: Function) {
    counter++;
    if (callback) {
        callback(
            {
                loaded: counter,
                percent: Math.round(counter / totalImages)
            }
        );
    }
}