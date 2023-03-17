let cnv;
let viewport = document.getElementById('viewport');
let VIEWWIDTH = viewport.clientWidth;
let VIEWHEIGHT = viewport.clientHeight;

let BG = '#F4F3EF';
let bgImg;
let focus;
let LINES = [];

let global_alpha = 0;

let HOVER = false;
let CURR_LINE = null;

function abs_constrain(val, min, max) {
  if (min < max) {
    return constrain(val, min, max);
  } else {
    return constrain(val, max, min);
  }
}

// line object //
function create_line(limg, lnum, lname) {
  var l = {
    x_target: 0,
    y_target: 0,
    x_actual: 0,
    x_actual: 0,
    img: limg,
    num: lnum,
    name: lname,
    rpx: null,
    rpy: null,
    draw: draw_line,
    move: move_line,
    place: place_line,
    resize: resize_line,
    overlap: overlap_line,
  };

  return l;
}

function draw_line() {
  image(this.img, this.x_actual, this.y_actual);
}

function move_line(rpx, rpy) {
  let rpc = 5000; // repulsion force

  if (rpx == null && this.wait <= 20) {
    //groups are moving back to normal positions
    this.wait++;

    let dp = dist(this.x_actual, this.y_actual, this.rpx, this.rpy);

    if (dp != 0) {
      let f = rpc / dp;
      let dirx = (this.x_actual - this.rpx) / dp;
      let diry = (this.y_actual - this.rpy) / dp;
      this.x_actual -= dirx * f;
      this.y_actual -= diry * f;

      this.x_actual = abs_constrain(
        this.x_actual,
        this.x_target,
        this.x_target + (rpc / 500) * dirx * f
      );
      this.y_actual = abs_constrain(
        this.y_actual,
        this.y_target,
        this.y_target + (rpc / 500) * diry * f
      );
    }
  } else if (rpx != null) {
    //groups are in / moving to repelled positions
    this.wait = 0;

    this.rpx = rpx;
    this.rpy = rpy;

    let dp = dist(this.x_actual, this.y_actual, rpx, rpy);

    if (dp != 0) {
      let f = rpc / dp;
      let dirx = (this.x_actual - rpx) / dp;
      let diry = (this.y_actual - rpy) / dp;
      this.x_actual += dirx * f;
      this.y_actual += diry * f;

      this.x_actual = abs_constrain(
        this.x_actual,
        this.x_target,
        this.x_target + (rpc / 500) * dirx * f
      );
      this.y_actual = abs_constrain(
        this.y_actual,
        this.y_target,
        this.y_target + (rpc / 500) * diry * f
      );
    }
  }
}

function place_line(lx, ly) {
  this.x_target = lx;
  this.y_target = ly;
  this.x_actual = lx;
  this.y_actual = ly;
}

function display_line(line_key) {
  console.log('hi');
  var myCustomData = { line: line_key };
  var event = new CustomEvent('single_line', { detail: myCustomData });
  window.parent.document.dispatchEvent(event);
}

function resize_line(sx, sy) {
  this.img.resize(this.img.width * sx, this.img.height * sy);
}

function overlap_line() {
  let centeredX = width / 2 - mouseX;
  let centeredY = height / 2 - mouseY;

  let lineX_lower = this.x_actual - this.img.width / 2 - width / 2;
  let lineX_upper = this.x_actual + this.img.width / 2 - width / 2;
  let lineY_lower = this.y_actual - this.img.height / 2 - height / 2;
  let lineY_upper = this.y_actual + this.img.height / 2 - height / 2;
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
  for (let i = 0; i < lines_arr.length; i++) {
    if (lines_arr[i].overlap()) {
      HOVER = true;

      CURSOR.active = true;
      return i;
    }
  }

  CURSOR.active = false;
  HOVER = false;
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
  bgImg = loadImage('assets/lines-bg-new.png');
  focus = loadImage('icons/focus.png');

  let line_names = [
    'arriba',
    'atrophy',
    'delicacy',
    'doodles',
    'kalopsia',
    'lapinata',
    'limbic',
    'noxmemoria',
    'paperdolls',
    'rewind',
    'selcouth',
    'weilai',
    'xiaoshi',
  ];

  for (var i = 0; i < line_names.length; i++) {
    // print(line_names[i]);
    let curr_img = loadImage('assets/' + line_names[i] + '.png');
    LINES.push(create_line(curr_img, i, line_names[i]));
  }

  // print(LINES);

  // experiri = loadImage('assets/experiri.png');

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
    LINES[i].resize(0.8, 0);
  }

  let xc = width / 2671;
  let yc = height / 1728;

  LINES[0].place(xc * 590, yc * 1300);
  LINES[1].place(xc * 386, yc * 213);
  LINES[2].place(xc * 456, yc * 586);
  LINES[3].place(xc * 380, yc * 1100);
  LINES[4].place(xc * 903, yc * 70);
  LINES[5].place(xc * 888, yc * 375);
  LINES[6].place(xc * 833, yc * 927);
  LINES[7].place(xc * 1243, yc * 1005);
  LINES[8].place(xc * 1381, yc * 1333);
  LINES[9].place(xc * 1935, yc * 98);
  LINES[10].place(xc * 1599, yc * 277);
  LINES[11].place(xc * 1739, yc * 685);
  LINES[12].place(xc * 2090, yc * 1009);
  // LINES[13].place(900, 300);
  // LINES[14].place(1000, 580);

  CURSOR = make_cursor(width / 2, height / 2, IMAGES);
}

function draw() {
  cnv.parent('viewport');
  background(BG);

  let rpx = null;
  let rpy = null;

  if (CURR_LINE != null) {
    rpx = CURR_LINE.x_actual;
    rpy = CURR_LINE.y_actual;
  }

  noCursor();

  push();
  translate(mouseX - width / 2, mouseY - height / 2);
  bgImg.resize(2 * width, 2 * height);
  image(bgImg, width / 2, height / 2);

  for (let i = 0; i < LINES.length; i++) {
    LINES[i].draw();
    LINES[i].move(rpx, rpy);
  }

  pop();

  CURSOR.move();
  CURSOR.draw();

  CURR_LINE = LINES[update_hover(LINES)];
}

function mousePressed() {
  if (CURSOR.active) {
    // window.open(CURR_LINE.link, "_self");
    display_line(CURR_LINE.name);
  }
}
