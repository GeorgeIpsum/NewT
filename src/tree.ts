export default class Tree {
  seed: string;
  stage: any;
  canvas: HTMLCanvasElement;
  board: CanvasRenderingContext2D | null;
  interval: number;
  container: HTMLDivElement;

  constructor(canvasID: string, seed: string, stage: any, containerID: string) {
    this.canvas = <HTMLCanvasElement>document.getElementById(canvasID);
    if(this.canvas) {
      this.board = this.canvas.getContext("2d");
    } else {
      this.board = null;
    }

    this.container = <HTMLDivElement>document.getElementById(containerID);
    if(!this.container) {
      this.container = new HTMLDivElement;
    }

    this.interval = 0;

    this.seed = seed;
    this.stage = stage;
  }

  init = () => {
    this.resize();
    window.addEventListener("resize", this.resize, true);
  }

  resize = () => {
    if(this.canvas && this.container) {
      this.canvas.width = parseFloat(window.getComputedStyle(this.container).width);
      this.canvas.height = parseFloat(window.getComputedStyle(this.container).height);
    }
  }

  update = () => {

  }

  draw = () => {

  }

  reset = () => {
    if(this.interval) clearInterval(this.interval);
    window.removeEventListener("resize", this.resize, true);

    this.init();
  }
}
