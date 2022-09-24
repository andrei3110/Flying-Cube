class Road {
    constructor(x, height, laneCount = 3) {
      this.x = x;
      this.height = height;
      this.laneCount = laneCount;
  
      this.left = x + height / 2;
      this.right = x - height / 2;
  
      const infinity = 1000000;
      this.top = infinity;
      this.bottom = -infinity;

      const topLeft = { x: this.top, y: this.left };
    const topRight = { x: this.top, y: this.right };
    const bottomLeft = { x: this.bottom, y: this.right };
    const bottomRight = { x: this.bottom, y: this.left };

    this.borders = [
      [topLeft, bottomLeft],
      [topRight, bottomRight],
    ];
    }
    


    draw(ctx) {
      ctx.lineWidth = 5;
      ctx.strokeStyle = "white";
     
      ctx.beginPath();
      ctx.moveTo( topLeft);
      ctx.lineTo(this.bottom,this.left );
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(this.top,this.right );
      ctx.lineTo(this.bottom, this.right);
      ctx.stroke();
    }
  }