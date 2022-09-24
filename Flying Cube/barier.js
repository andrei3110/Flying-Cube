class Barier {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;
        this.angle = 0;

        const point1 = { x: this.x - this.width / 2, y: this.y - this.height / 2 };
        const point2 = { x: this.x - this.width / 2, y: this.y + this.height / 2 };
        const point3 = { x: this.x + this.width / 2, y: this.y + this.height / 2 };
        const point4 = { x: this.x + this.width / 2, y: this.y - this.height / 2 };

        const Tpoint1 = { x: this.x - this.width / 2, y: this.y - this.height / 2 };
        const Tpoint2 = { x: this.x - this.width / 2, y: this.y + this.height / 2 };
        const Tpoint3 = { x: this.x + this.width / 2, y: this.y + this.height / 2 };
        const Tpoint4 = { x: this.x + this.width / 2, y: this.y - this.height / 2 };




        this.bordersBott = [
            [point1, point3],
            [point2, point4],
        ];

        this.bordersTop = [
            [Tpoint1, Tpoint3],
            [Tpoint2, Tpoint4],
        ];

    }


    createPolygon() {
        const points = [];

        const radius = Math.hypot(this.width, this.height) / 2;
        const alpha = Math.atan2(this.width, this.height);

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
            if (polysIntersect(this.polygon, bottom[i])) {

                return true;

            }
        }


        for (let j = 0; j < top.length; j++) {
            if (polysIntersect(this.polygon, top[i].polygon)) {
                return true;
            }
        }


        return false;
    }

    draw(ctx) {
        this.polygon = this.createPolygon();
        ctx.beginPath()  
        
            ctx.moveTo(this.polygon[0].x, this.polygon[0].y);
        for (let i = 0; i < this.polygon.length - 1; i++) {
            
            ctx.lineTo(this.polygon[i + 1].x, this.polygon[i + 1].y)
            
           
        
        }

        // ctx.fillStyle = ctx.createPattern(document.querySelector('#img'), 'repeat')

        ctx.fill();
        
        
       
    }

    points() {


    }
}
