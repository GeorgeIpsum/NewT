declare class Tree {
    seed: string;
    stage: any;
    canvas: HTMLCanvasElement;
    board: CanvasRenderingContext2D | null;
    interval: number;
    container: HTMLDivElement;
    constructor(canvasID: string, seed: string, stage: any, containerID: string);
    init: () => void;
    resize: () => void;
    update: () => void;
    draw: () => void;
    reset: () => void;
}
