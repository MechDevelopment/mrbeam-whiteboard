export default class Whiteboard {
  constructor() {
    paper.setup(document.getElementById("canvas"));

    this.path = undefined;
    this.drawing = false;
    this.tool = "pen";
  }

  setTool(value) {
    this.tool = value;
  }

  clear() {
    project.clear();
  }

  resize(size, last) {
    view.viewSize = new Size(size, size);

    let scale = size / last;
    
    const picture = project.activeLayer.children;
    for (let i = 0; i < picture.length; i++) {
      picture[i].position.x *= scale;
      picture[i].position.y *= scale;
      picture[i].scale(scale);
    }
  }

  start() {
    this.path = new Path();

    this.path.strokeColor = new Color("#110f0f");
    this.path.strokeCap = "round";
    this.path.strokeJoin = "round";
    this.path.strokeWidth = 3;

    if (this.tool === "eraser") {
      this.path.opacity = 0.2;
    }

    this.drawing = true;
  }

  move(event) {
    if (this.drawing) {
      const canvas = document.getElementById("canvas");
      const bcr = canvas.getBoundingClientRect();

      const point = new Point(
        event.clientX - bcr.x || event.touches[0].clientX - bcr.x,
        event.clientY - bcr.y || event.touches[0].clientY - bcr.y
      );

      this.path.add(point);
    }
  }

  end() {
    this.drawing = false;

    this.path.smooth();
    this.path.simplify();

    if (this.tool === "eraser") {
      const children = project.activeLayer.children;
      for (let i = children.length - 1; i >= 0; i--) {
        if (this.path.getIntersections(children[i]).length) {
          children[i].remove();
        }
      }
      this.path.remove();
    }
  }

  enter(event) {
    console.log("Enter");
  }

  leave(event) {
    console.log("Out");
  }
}
