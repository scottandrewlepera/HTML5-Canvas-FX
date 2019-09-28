import { initRequestAnimFrame } from '../requestAnimFrame';
import { FX_SYSTEM_ATTR } from '../constants';

const CLUSTER_CLASS = 'fx-bloom-cluster';

export function init(window) {

    initRequestAnimFrame(window);

    const clusterElements = window.document.querySelectorAll(`[${FX_SYSTEM_ATTR}='bloom']`);

    const clusters: BloomCluster[] = [];
    let isPaused: boolean = false;

    Array.from(clusterElements).forEach( (element: HTMLElement) => {
        const bloomCluster = new BloomCluster(element, window);
        clusters.push(bloomCluster);
    });

    const pauseMonitor = () => {
        if (window.fx.paused && !isPaused) {
            clusters.forEach( cluster => {
                cluster.pause();
            });
            isPaused = true;
        }
        if (!window.fx.paused && isPaused ) {
            clusters.forEach( cluster => {
                cluster.resume();
            });
            isPaused = false;
        }
        window.requestAnimFrame(pauseMonitor);
    }

    window.requestAnimFrame(pauseMonitor);
};

export class BloomCluster {

    blooms: any[];

    constructor(element: HTMLElement, window: any) {

        // grab all the attributes
        const n = parseInt(element.getAttribute('data-fx-bloom-n'), 10);
        const maxBloomWidth = parseInt(element.getAttribute('data-fx-bloom-maxWidth'), 10);
        const maxDuration = parseInt(element.getAttribute('data-fx-bloom-maxDuration'), 10);
        const maxDelay = parseInt(element.getAttribute('data-fx-bloom-maxDelay'), 10);
        const colors = element.getAttribute('data-fx-bloom-colors') || 'transparent';

        // split colors into array
        const colorChoices: string[] = colors.replace(' ','').split(',');

        // get area of cluster element
        const styles = getComputedStyle(element);
        const areaWidth = parseInt(styles.getPropertyValue('width'), 10);
        const areaHeight = parseInt(styles.getPropertyValue('height'), 10);

        this.blooms = [];

        for (let i = 0; i < n; i++) {

            const props = generateBloomProperties(maxBloomWidth, areaWidth, areaHeight, colorChoices, maxDelay);
            const bloom = new Bloom(props.bloomWidth, props.x, props.y, props.color, maxDuration, props.delay, window.document);

            this.blooms.push(bloom);

            const updateBloomProps = function() {
                if (!window.fx.paused) {
                    const props = generateBloomProperties(maxBloomWidth, areaWidth, areaHeight, colorChoices, maxDelay);
                    bloom.initialize(props.bloomWidth, props.x, props.y, props.color, maxDuration, props.delay);
                    window.setTimeout(updateBloomProps, props.delay + maxDuration);
                } else {
                    window.setTimeout(updateBloomProps, 500);
                }
            }
            element.appendChild(bloom.getElement());
            window.setTimeout( updateBloomProps, props.delay + (maxDuration / 1000));
        }
    }

    public pause() {
        this.blooms.forEach( bloom => {
            bloom.pause();
        })
    }
    public resume() {
        this.blooms.forEach( bloom => {
            bloom.resume();
        })
    }
};

// standalone function to generate random bloom
// properties based on the give constraints.
export function generateBloomProperties(maxBloomWidth: number,
                                 areaWidth: number,
                                 areaHeight: number,
                                 colorChoices: string[],
                                 maxDelay: number) {

    const bloomWidth = Math.max(Math.round(Math.random() * maxBloomWidth), 50);
    const x = Math.round(Math.random() * areaWidth) - (bloomWidth / 2);
    const y = Math.round(Math.random() * areaHeight) - (bloomWidth / 2);
    const delay = Math.round(Math.random() * maxDelay);
    const colorIndex = Math.round(Math.random() * (colorChoices.length - 1));
    const color = colorChoices[colorIndex];
    return { bloomWidth, x, y, color, delay };
}

export class Bloom {

    private element: HTMLDivElement;

    constructor(width: number,
                x: number,
                y: number,
                color: string,
                duration: number,
                delay: number,
                document: HTMLDocument) {
    

        this.element= document.createElement('div');
        this.element.classList.add('fx-bloom');
        this.initialize(width, x, y, color, duration, delay);     
    }

    public initialize(width: number,
        x: number,
        y: number,
        color: string,
        duration: number,
        delay: number) {

        this.element.style.width = `${width}px`;
        this.element.style.height = `${width}px`;
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
        this.element.style.backgroundColor = color;
        this.element.style.animationDelay = `${delay}ms`;
        this.element.style.animationDuration = `${(duration / 1000)}s`;
    }

    public getElement() {
        return this.element;
    }

    public pause() {
        this.element.style.animationPlayState = 'paused';
    }
    public resume() {
        this.element.style.animationPlayState = 'running';
    }
}