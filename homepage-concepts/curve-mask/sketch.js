let cnv;

let noiseX;
let noiseY;
let param = 0;
let step = 0.05;
let MAX = 50;
let click = false;

let pages = ["home", "about", "people", "lines", "livestream"]
let active_num = 0;
let active = "home";

let img;

// debugging images
let black;
let white;
let cross;
let morii_img;

// unused
let msk;
let outline;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.parent("texture-map");
  angleMode(DEGREES);
  frameRate(60);

  img = loadImage('000049.JPG');
  black = loadImage('black.png');
  white = loadImage('white.png');
  cross = loadImage('cross.png');
  morii_img = loadImage('morii-font.png')
  

  noiseX = random(1000);
  noiseY = random(1000);

  createCrossSection(0);

  print("with z: " + noise(noiseX, 1 * 0.005, 1 * 0.0111, 55));
  print("without z: " + noise(noiseX, 1 * 0.005, 1 * 0.0111, 0));

  // noLoop();
}

function draw() {
  push();
  translate(-width/2, -height/2);
  background(0, 20);

  active = pages[active_num];

  let noiseZ = /*map(mouseY + mouseX, 0, height, 0, 1000 * 0.05) + */ param;
  param += step;
  createCrossSection(noiseZ + 1000, false);
  createCrossSection(noiseZ, true);

  image(morii_img, 1800, 800);

  pop();
}


function createCrossSection(noiseZ, has_texture){

  if (has_texture){
    img.resize(width, 0);
    texture(img);
    textureMode(IMAGE);
  } else {
    strokeWeight(3);
    stroke('white');
    noFill();
  }

  erase(0, 80);

  beginShape();

  let rand = 0;

  for (let k = 0; k < 1000; k++) {

    let x = map(noise(noiseX, k * 0.005, noiseZ * 0.011), 0, 1, -width * 0.75, width * 1.75);
    let y = map(noise(noiseY, k * 0.005, noiseZ * 0.0113), 0, 1, -height * 0.75, height * 1.75);

    // if (has_texture) rand = random(-5, 5);
    
    vertex(x + rand, y + rand, x + rand, y + rand);
    
  }

  if (has_texture){
    endShape(CLOSE);
  } else {
    endShape();
  }
  
  noErase();

}

function mousePressed(){
  // background('white');
  // noiseSeed(random(1000));

  // click = true;
}