class Rubber {
    constructor(x,y,r) {
      var options = {
          'restitution':0.6,
          'friction':3,
          'density':10
      }
      
      this.body = Bodies.circle(x, y, r , options);
      this.r = r;
    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("black");
      fill('darkblue');
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  