let cnv;

let noiseX;
let noiseY;
let param = 0;
let step = 0.05;
let MAX = 50;
let click = false;

let mesh;

let morii_img;

function preload() {
  mesh = loadModel('mesh/mesh_1/mesh_1.obj', true, foo, foo, '.obj');
  morii_img = loadImage('morii-font.png');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.parent("texture-map");
  angleMode(DEGREES);
  frameRate(60);

  morii_img.resize(50, 50 * (morii_img.height / morii_img.width));

  // noLoop();
}

function draw() {
  push();
  background(0, 20);

  // if (clicked){
  //   curr_x = frameCount * 0.1;
  //   curr_y = frameCount * 0.1;

  //   clicked = false;
  // }

  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);

  scale(-10);

  // orbitControl();

  // if (!mouseIsPressed){
  //   rotateX(curr_x);
  //   rotateY(curr_y);
  // } else {
  //   rotateX(frameCount * 0.1);
  //   rotateY(frameCount * 0.1);
  // }

  normalMaterial();
  model(mesh);

  // translate(-width/2, -height/2);


  // image(morii_img, 0, 0, -500);

  // box(100);

  pop();
}

function mousePressed(){
  // click = true;
}

function foo(a){
  return;
}