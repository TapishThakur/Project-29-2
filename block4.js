class Block4 {
    constructor(x, y, width, height){
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0,
        isStatic: false
      
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.visibility = 255;
    this.width = width;
    this.height = height;
    World.add(world, this.body);
   
  }
  display(){
       
    if (this.body.speed < 5) {
      var pos =this.body.position;
      rectMode(CENTER);
      fill("#4de838");
      rect(pos.x, pos.y, this.width, this.height);
    }
    else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      pop();
    }

    
  
    
  }
}

  
