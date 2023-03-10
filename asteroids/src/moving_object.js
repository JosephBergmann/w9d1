console.log("Asteroid is working")

function MovingObject(options) {
    this.pos = options["pos"];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
  }

    MovingObject.prototype.draw = function(context){
      context.fillStyle = 'black'
      context.beginPath()
      // console.log(2 * Math.pi)
      context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
      context.fill()
  }
  
  MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  module.exports = MovingObject;

// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// })
