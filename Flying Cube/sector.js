class Sector{
    constructor(width,height,side = 2){
        this.width = width;
        this.height = height;
        this.side = side
    }

    draw(ctx) {
        
        
          
        ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(300, 50); // линия вправо
ctx.lineTo(300, 600); // линия вниз
ctx.lineTo(50, 600); // линия влево
ctx.closePath(); // смыкание начала и конца рисунка (левая стена)
ctx.strokeStyle = 'gray'; // тёмно-синий цвет
ctx.lineWidth = 5; // толщина линии в 5px
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(550, 50); // линия вправо
ctx.lineTo(550, 600); // линия вниз
ctx.lineTo(300, 600); 
ctx.lineTo(300, 50);// линия влево
ctx.closePath(); // смыкание начала и конца рисунка (левая стена)
ctx.strokeStyle = 'gray'; // тёмно-синий цвет
ctx.lineWidth = 5; 
ctx.fill()
ctx.stroke();
           
      
          

        }
}