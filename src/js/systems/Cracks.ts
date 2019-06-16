export class Crack {

    alpha: number;
    rgb: string;
    render: (ctx: CanvasRenderingContext2D) => void;
    areaWidth: number;
    areaHeight: number;
    maxLines: number;
    init: () => void;
    coords: any[];
    crack: () => void;

    constructor(rgb: string, areaWidth: number, areaHeight: number) {

        this.alpha = 1;
        this.rgb = rgb;
        this.areaWidth = areaWidth;
        this.areaHeight = areaHeight;
        this.coords = [];

        this.init = function() {
            // roll a d4
            let startingSide = Math.round(Math.random() * (4 - 1) + 1);
            let startX = 0, startY = 0;
            switch (startingSide) {
                // top
                case 1:
                    startX = Math.round(Math.random() * (areaWidth - 1) + 1);
                    startY = 0;
                    break;
                // bottom
                case 2:
                    startX = Math.round(Math.random() * (areaWidth - 1) + 1);
                    startY = areaHeight;
                    break;
                // left
                case 3:
                    startX = 0;
                    startY = Math.round(Math.random() * (areaHeight - 1) + 1);
                    break;
                // right
                case 3:
                    startX = areaWidth;
                    startY = Math.round(Math.random() * (areaHeight - 1) + 1);
                    break;
            }
            this.coords.push({x: startX, y: startY});

        }

        this.crack = function() {
            
        }
        

        this.render = function(ctx: CanvasRenderingContext2D) {
            
        }
    }
}



