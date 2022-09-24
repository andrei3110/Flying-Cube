const canvas = document.querySelector('canvas');
canvas.height = 500;
var start = document.getElementById('strt');
const ctx = canvas.getContext("2d");
let speed = 5;
let countX = 0
const maxSpeed = 9;
const bot = new Bot(100, 200, 20, 20);
const movex = new Barier(0, 0, 100, 100)
const bariersTop = [];
const replase = document.getElementById('Replase')
const gameOver = document.getElementById('gameOver')
const stop1 = document.getElementById('stop')
const start1 = document.getElementById('start')
const context = document.getElementById('context')
let countn = 0;
const menu = document.getElementById("menu")
// const road = new Road(canvas.height / 2, canvas.height * 0.9);
for (let i = 0; i < 1000; i++) {
    bariersTop.push(new Barier(0, 0, 100, Math.random() * 400));

}

const bariersBottom = [];
for (let i = 0; i < 1000; i++) {
    bariersBottom.push(new Barier(0, 500, 100, - Math.random() * 560));

}

let check = false
// menu.addEventListener('mousedown', function () {
//     if (check) {
//         context.style.display = "flex"
//         stop1.style.display = "flex"
//         start1.style.display = "flex"
//     } else {
//         context.style.display = "none"
//         stop1.style.display = "none"
//         start1.style.display = "none"
//     }

//     console.log(check)
//     check = !check

// })
let run = true
stop1.addEventListener('click', function () {
    run = !run;
})

animate();

function animate() {
    canvas.width = window.innerWidth;
    countX++;

    for (let i = 0; i < bariersTop.length; i++) {
        bariersTop[i].x = i * 100 + movex.x;
        bariersTop[i].draw(ctx);
    }
    for (let i = 0; i < bariersBottom.length; i++) {
        bariersBottom[i].x = i * 100 + movex.x;

        bariersBottom[i].draw(ctx);
    }

    speed += countX * 0.001;
    if (speed >= maxSpeed) {
        speed = maxSpeed
    }

    if (!bot.damaged && run) {
        movex.x -= speed;
        bot.move(bariersBottom, bariersTop)
    } 
    if(bot.damaged) {
        gameOver.style.display = 'flex'
        replase.style.display = 'flex'
        countn = 0
        sec = 0
        sec = countn
    }
    // drawingBariers()
    bot.draw(ctx);
    // road.draw(ctx)
    movex.points()

    requestAnimationFrame(animate)

}