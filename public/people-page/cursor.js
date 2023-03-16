function make_cursor(cx, cy, cimgs) {
  let c = {
    x: cx,
    y: cy,
    r_in: 1,
    r_out: 1,
    imgs: cimgs,
    draw: cursor_draw,
    move: cursor_move,
    speed: 0.06,
    active: false,
  };

  return c;
}

function cursor_move() {
  if (this.active) {
    this.r_in -= this.speed;
    this.r_out += this.speed;
  } else {
    this.r_in += this.speed;
    this.r_out -= this.speed;
  }
  this.r_in = constrain(this.r_in, 0.6, 1);
  this.r_out = constrain(this.r_out, 1, 1.4);
}

function cursor_draw() {
  push();
  translate(this.x, this.y);

  push();
  rotate(degrees(3 * (1 - this.r_in)));
  scale(this.r_in);
  image(this.imgs[0], 0, 0);
  pop();

  push();
  rotate(degrees(-3 * (1 - this.r_out)));
  scale(this.r_out);
  image(this.imgs[1], 0, 0);
  pop();

  pop();
}

// document.addEventListener('mousemove', function (event) {
//   var boundingClientRect = document
//     .querySelector('body')
//     .getBoundingClientRect();

//   var evt = new CustomEvent('mousemove', { bubbles: true, cancelable: false });
//   evt.clientX = event.clientX + boundingClientRect.left;
//   evt.clientY = event.clientY + boundingClientRect.top;

//   window.parent.document.dispatchEvent(evt);
// });
