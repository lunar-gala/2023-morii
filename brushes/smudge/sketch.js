const major_diameter = 60;
const minor_diameter = 2;
const repeater = 100.0;
let seed;

function preload(){
  seed = loadImage('Olivia-Luk.jpeg');
}

function setup() {
	createCanvas(600, 720);
	image(seed,0,0, seed.width / 3, seed.height / 3);
}

function draw() {
  for (var i = 0; i < major_diameter / minor_diameter; i++){
    let from = get(pmouseX - major_diameter/2 + i * minor_diameter, pmouseY);
    let to = get(mouseX - major_diameter/2 + i * minor_diameter, mouseY);
    from[3] = 100;
    to[3] = 100;
    if (mouseIsPressed == true) {
      gradiantLine( from, to, pmouseX - major_diameter/2 + i * minor_diameter, pmouseY, 
                    mouseX - major_diameter/2 + i * minor_diameter, mouseY);
  }
  }
	
}

function gradiantLine( f, t, lx, ly, fx, fy ) {
  for ( i = 0; i < repeater; i ++ ) {
    // print(color(f));
    stroke(lerpColor( color(f), color(t), i/repeater));
    strokeWeight(minor_diameter);
    line( ((repeater-i)*lx + i*fx)/repeater,
      ((repeater-i)*ly + i*fy)/repeater,
      ((repeater-i-1)*lx + (i+1)*fx)/repeater,
      ((repeater-i-1)*ly + (i+1)*fy)/repeater
      );
  }
}
