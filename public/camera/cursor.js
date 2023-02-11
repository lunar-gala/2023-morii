function make_corner(cx, cy, cimg) {
    let co = {
      x: cx, y: cy,
      img: cimg,
      draw: corner_draw
    }
    return co;
  }
  
  function corner_draw(){
    // ellipse(this.x, this.y, 10); // debugging 
    image(this.img, this.x, this.y);
  }
  
  function make_cursor(cx, cy, cr, cs, cactive_r, cpassive_r, corner_arr) {
    let c = {
      x: cx, y: cy, r: cr,
      corners: corner_arr,
      active_r: cactive_r, passive_r: cpassive_r,
      draw: cursor_draw,
      move: cursor_move,
      speed: cs,
      active: false
    }
  
    return c;
  }
  
  function cursor_move(){
    if (this.active){
      this.r -= this.speed;
    } else {
      this.r += this.speed;
    }
    this.r = constrain(this.r, this.active_r, this.passive_r);
  
    for (var i = 0; i < 4; i++){
      let theta = 45 + i*90;
      this.corners[i].x = this.r*cos(theta);
      this.corners[i].y = this.r*sin(theta);
    }
  
  }
  
  function cursor_draw(){
    push();
    translate(this.x, this.y);
  
    for (var i = 0; i < 4; i++){
      this.corners[i].draw();
    }
  
    pop();
  }