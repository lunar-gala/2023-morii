let cnv;
let viewport = document.getElementById('viewport');
let VIEWWIDTH = viewport.clientWidth;
let VIEWHEIGHT = viewport.clientHeight;

let BG = '#C9C8C3';
let bgImg;
let focus;
let lines = [];

let global_alpha = 0;

let experiri;
let active = 0;
let hover = false;
let curr_line = -1;

// line object //
function create_line(limg, lnum) {
  var l = {
    x: 0,
    y: 0,
    img: limg,
    num: lnum,
    name:
      'LINE ' +
      lnum.toString() +
      '  ' +
      'DESIGNERS: JOHN SMITH, LUKE SKYWALKER, MITTENS THE CAT',
    draw: draw_line,
    place: place_line,
    resize: resize_line,
    overlap: overlap_line,
  };

  return l;
}

function draw_line() {
  image(this.img, this.x, this.y);
}

function place_line(lx, ly) {
  this.x = lx;
  this.y = ly;
}

function resize_line(sx, sy) {
  this.img.resize(this.img.width * sx, this.img.height * sy);
}

function overlap_line() {
  let centeredX = width / 2 - mouseX;
  let centeredY = height / 2 - mouseY;

  let lineX_lower = this.x - this.img.width / 2 - width / 2;
  let lineX_upper = this.x + this.img.width / 2 - width / 2;
  let lineY_lower = this.y - this.img.height / 2 - height / 2;
  let lineY_upper = this.y + this.img.height / 2 - height / 2;
  if (
    lineX_lower < centeredX &&
    centeredX < lineX_upper &&
    lineY_lower < centeredY &&
    centeredY < lineY_upper
  ) {
    return true;
  }

  return false;
}

function update_hover(lines_arr) {
  for (var i = 0; i < lines_arr.length; i++) {
    if (lines_arr[i].overlap()) {
      hover = true;

      CURSOR.active = true;
      return i;
    }
  }

  CURSOR.active = false;
  hover = false;
}

// CURSOR //

let IMAGES = [];
let CURSOR;

// API

// corner_t make_corner(cx, cy, cimg)

// void corner_draw()

// cursor_t make_cursor(cx, cy, cr, corner_arr)

// void cursor_move()

// void cursor_draw()

//////////////////

function preload() {
  bgImg = loadImage('assets/lines-bg.png');
  focus = loadImage('icons/focus.png');

  for (var i = 1; i <= 13; i++) {
    let curr_img = loadImage('assets/lines' + i.toString() + '.png');
    lines.push(create_line(curr_img, i));
  }

  print(lines);

  experiri = loadImage('assets/experiri.png');

  // cursor
  let inner = loadImage('cursor/assets/moR_inner.png');
  let outer = loadImage('cursor/assets/moR_outer.png');
  IMAGES = [inner, outer];
}

function setup() {
  cnv = createCanvas(VIEWWIDTH, VIEWHEIGHT);
  background(220, 100);
  imageMode(CENTER);
  rectMode(CENTER);
  angleMode(DEGREES);
  textAlign(RIGHT, BOTTOM);

  for (var i = 0; i < 13; i++) {
    lines[i].resize(0.6, 0);
  }

  let xc = width/2671;
  let yc = height/1728;

  lines[0].place(xc*131, yc*386);
  lines[1].place(xc*386, yc*213);
  lines[2].place(xc*456, yc*586);
  lines[3].place(xc*168, yc*1200);
  lines[4].place(xc*903, yc*70);
  lines[5].place(xc*888, yc*375);
  lines[6].place(xc*833, yc*927);
  lines[7].place(xc*1243, yc*1005);
  lines[8].place(xc*1381, yc*1333);
  lines[9].place(xc*1935, yc*98);
  lines[10].place(xc*1599, yc*277);
  lines[11].place(xc*1739, yc*685);
  lines[12].place(xc*2090, yc*1009);
  // lines[13].place(900, 300);
  // lines[14].place(1000, 580);

  CURSOR = make_cursor(width/2, height/2, IMAGES);
}

function draw() {
  cnv.parent('viewport');
  background(BG);

  noCursor();
  lines_page();

  fill(255, global_alpha);
  noStroke();
  rect(width / 2, height / 2, width, height);

  global_alpha -= 5;
  global_alpha = constrain(global_alpha, 0, 255);
}

function lines_page() {
  push();
  translate(mouseX - width / 2, mouseY - height / 2);
  bgImg.resize(2 * width, 2 * height);
  image(bgImg, width / 2, height / 2);

  image(lines[0].img, lines[0].x, lines[0].y);

  lines[0].draw();
  lines[1].draw();
  lines[2].draw();
  lines[3].draw();
  lines[4].draw();
  lines[5].draw();
  lines[6].draw();
  lines[7].draw();
  lines[8].draw();
  lines[9].draw();
  lines[10].draw();
  lines[11].draw();
  lines[12].draw();
  // lines[13].draw();
  // lines[14].draw();

  pop();

  CURSOR.move();
  CURSOR.draw();

  // // focus
  // push();
  // translate(width/2, height/2);

  // strokeWeight(2);
  // stroke('black');

  curr_line = update_hover(lines);
  // if (hover){
  //   stroke('black');
  //   fill('white');
  //   textSize(18);
  //   textFont('monospace');
  //   text(lines[curr_line].name, width/2 - 5, height/2 - 5);

  //   stroke('red');
  // }

  // line(-40, 0, 40, 0);
  // line(0, -40, 0, 40);

  // stroke('black');
  // for (var i = 0; i < 4; i++){
  //   rotate(90);
  //   line(-140, -140, -140 + 80, -140);
  //   line(-140, -140, -140, -140 + 80);
  // }

  // pop();

}

function single_line_page() {
  if (!curr_line || curr_line <= 0) return;
  var myCustomData = { line: curr_line };
  var event = new CustomEvent('single_line', { detail: myCustomData });
  window.parent.document.dispatchEvent(event);

  // experiri.resize(0.95 * width, 0.95 * height);
  // image(experiri, width / 2, height / 2);
}

function mousePressed() {
  print('pressed');
  single_line_page();
}
