class Bot {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = 0;

    this.speed = 1;
    this.controls = new Controls();
    this.sensor = new Sensor(this);
    this.damaged = false;

    this.angle = 0
  }

  points = []

  createPolygon() {
    const points = [];

    points.push({
      x: this.x - this.width / 2,
      y: this.y - this.height / 2,
    });
    points.push({
      x: this.x - this.width / 2,
      y: this.y + this.height / 2,
    });
    points.push({
      x: this.x + this.width / 2,
      y: this.y + this.height / 2,
    });
    points.push({
      x: this.x + this.width / 2,
      y: this.y - this.height / 2,
    });


    return points;
  }

  assessDamage(bottom, top) {
    for (let i = 0; i < bottom.length; i++) {
      if (polysIntersect(this.polygon, bottom[i].polygon)) {
        return true;
      }
    }

    for (let i = 0; i < top.length; i++) {
      if (polysIntersect(this.polygon, top[i].polygon)) {
        return true;
      }
    }

    return false;
  }

  move(bottom, top) {
    this.y += 0.1
    this.sensor.update(bottom, top);

    if (this.controls.forward) {
      this.y -= 4;
    }
    if (this.controls.reverse) {
      this.y += 4;
    }


    this.polygon = this.createPolygon();
    this.damaged = this.assessDamage(bottom, top);
  }

  draw(ctx) {
    ctx.save();

    ctx.translate(this.x, this.y);
    ctx.beginPath();
    ctx.fillStyle = "Red";
    ctx.rect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    ctx.fill();

    ctx.restore();

    this.sensor.draw(ctx);
  }
}