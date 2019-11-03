function Tree(canvasID, seed, stage) {
  if(!(this instanceof Tree)) return new Tree();

  this.seed = seed;
  this.stage = stage;

  this.canvas = document.getElementById(canvasID ? canvasID : "tree");
  this.board = this.canvas.getContext("2d");
  this.width = this.canvas.width;
  this.height = this.canvas.height;

  this.interval = null;

  const init = () => {
    resize();
    window.addEventListener("resize", resize, true);

    growUandD();

    update();
    draw();

    this.interval = setInterval(() => {
      update();
      draw();
    }, 5000);
  }

  const growUandD = () => {
    if(this.canvas && this.board) {
      
      window.requestAnimationFrame(startAnim);
    }
  }

  const resize = () => {
    if(this.canvas) {
      this.canvas.width = window.innerWidth*.80;
      this.canvas.height = window.innerHeight-250;
    }
  }

  const update = () => {

  }

  const draw = () => {

  }

  const reset = () => {
    if(this.interval) clearInterval(this.interval);
    window.removeEventListener("resize", resize, true);

    init();
  }

  return {
    canvas: () => this.canvas,
    init,
    reset
  };
}
