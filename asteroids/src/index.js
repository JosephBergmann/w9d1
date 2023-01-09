console.log("Webpack is working!");

const MovingObject = require('./moving_object.js')

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: 'black'
    // "#00FF00"
})

window.mo = mo

document.addEventListener("DOMContentLoaded", function() {
    const canvasE1 = document.getElementById("game-canvas");

    canvasE1.width = 500;
    canvasE1.height = 500;

    const context = canvasE1.getContext("2d")
    console.log(context)
    // context.fillStyle = 'black';
    // context.fillRect(0,0, 400, 400);

    context.fillStyle = 'black'
    //   context.beginPath()
    //   context.lineWidth = 15;
    //   context.arc(250, 250, 50, 0, (2 * Math.PI));
    //   context.fill()

    mo.draw(context);
})

