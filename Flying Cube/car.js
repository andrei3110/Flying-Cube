class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.controls = new Controls()
}



move() {
  if (this.controls.forward) {
    this.y -= 2;
  }
  if (this.controls.reverse) {
    this.y += 2;
  }

  
}

  draw(ctx) {
    ctx.rect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    
    ctx.fill();
  }
}
        