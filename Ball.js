class Ball {
    constructor(x, y,r) {
         var options = { density: 1, frictionAir: 1};
         this.x=x;
         this.y=y;
         this.r=r;
         this.image=loadImage("Superhero-01.png")
         this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
             World.add(world, this.image);
            } 
            display() { 
               // var angle = this.body.angle;
                 //push();
                 //translate(this.body.position.x, this.body.position.y);
                  // rotate(angle);
                    //ellipse(0, 0, this.r, this.r);
                    imageMode(CENTER);
                    image(this.image, 400, 200, this.r,this.r);
                    // pop();
                    } 
                }