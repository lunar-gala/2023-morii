var brush;

function setup() {
  print("setup");

  createCanvas(windowWidth, windowHeight);

  var br = 40;
  var bp = [];
  
  for (var r = 0; br < 40; r++){
    var curr_circle = []
    for (var theta = 0; theta < 360; theta++){
      var c = color(random(0, 255), random(200, 255), random(200,255));
      curr_circle[theta] = c;
    }
    bp[r] = curr_circle;
  }

  brush = make_brush(0, 0, br, bp, 200, false);
}

function draw() {
  background(0);

  brush.x = mouseX;
  brush.y = mouseY;
  
  if (mouseIsPressed) brush.brush_down = true;
  else brush.brush_down = false;
  
  brush.draw();

  print("hi");

}

function make_brush(bx, by, br, bp, ba, initially_down){
  var b = {
    x: bx, y: by,
    r: br, // brush radius
    pixels: bp, // 2d array of pixel colors (1d arrays) in the brush circle
    alpha: ba, // alpha transparency of brush
    brush_down: initially_down, // is the brush drawing
    draw: brush_draw
  };

  return b;
}

function brush_draw(){
  push();
  translate(this.x, this.y);

  if (!this.brush_down) return;
  
  for (var r = 0; r < this.r; r++){
    for (var theta = 0; theta < 360; theta++){
      var c = this.pixels[r][theta];
      c[3] = this.alpha;
      fill(c);
      rect(r * cos(theta), r * sin(theta), 1, 1);
    }
  }

  pop();
}

const diameter = 30;
const repeater = 100.0;
let seed;

function preload(){
  seed = loadImage('model.jpg');
}

function setup() {
	createCanvas(600, 720);
	image(seed,0,0, width,height);
}

function draw() {
	let from = seed.get(pmouseX, pmouseY);
  let to = seed.get(mouseX, mouseY);
	if (mouseIsPressed == true) {
    gradiantLine( from, to, pmouseX, pmouseY, mouseX, mouseY);
  }
}

function gradiantLine( f, t, lx, ly, fx, fy ) {
  for ( i = 0; i < repeater; i ++ ) {
    stroke(lerpColor( color(f), color(t), i/repeater));
    strokeWeight(diameter);
    line( ((repeater-i)*lx + i*fx)/repeater,
      ((repeater-i)*ly + i*fy)/repeater,
      ((repeater-i-1)*lx + (i+1)*fx)/repeater,
      ((repeater-i-1)*ly + (i+1)*fy)/repeater
      );
  }
}
