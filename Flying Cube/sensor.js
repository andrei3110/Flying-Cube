class Sensor {
  constructor(bot) {
    this.bot = bot;
    this.rayCount = 6;
    this.rayLength = 400;
    this.raySpread = Math.PI * 2;

    this.rays = [];
    this.readings = [];
  }

  update(bottom, top) {
    this.rays = [];

    for (let i = 0; i < this.rayCount; i++) {
      const rayAngle = lerp(
        this.raySpread / 2,
        -this.raySpread / 2,
        this.rayCount == 1 ? 0.5 : i / (this.rayCount - 1)
      ) + this.bot.angle;

      const start = { x: this.bot.x, y: this.bot.y };
      const end = {
        x: this.bot.x + Math.sin(rayAngle) * this.rayLength,
        y: this.bot.y - Math.cos(rayAngle) * this.rayLength,
      };

      this.rays.push([start, end]);
    }
    this.readings = [];

    for (let i = 0; i < this.rays.length; i++) {
      this.readings.push(this.getReading(this.rays[i], bottom, top));
    }
  }

  getReading(ray, bottom, top) {
    let touches = [];

    
    for (let i = 0; i < bottom; i++) {
      
      const touchBottom = getIntersection(
        ray[0],
        ray[1],
        bottom[i][0],
        bottom[i][1]
      );

      

      if (touchBottom) {
        touches.push(touchBottom);
      }
    }

    for (let i = 0; i < top; i++) {
      const touchTop = getIntersection(
        ray[0],
        ray[1],
        top[i][0],
        top[i][1]
      );

      if (touchTop) {
        touches.push(touchTop);
      }
    }

    if (touches.length == 0) {
      return null;
    } else {
      const offsets = touches.map((e) => e.offset);
      const minOffset = Math.min(...offsets);

      return touches.find((e) => (e.offset == minOffset));
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.rayCount; i++) {
      let end = this.rays[i][1];
      if (this.readings[i]) {
        end = this.readings[i];
      }

      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "yellow";
      // ctx.moveTo(this.rays[i][0].x, this.rays[i][0].y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "black";
      // ctx.moveTo(this.rays[i][1].x, this.rays[i][1].y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
    }
  }
}