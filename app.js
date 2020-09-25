var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x, dx, y, dy, r) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.strokeStyle = "blue";
    ctx.stroke();
  };
  this.update = function () {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
var circArr = [];
for (var i = 0; i < 100; i++) {
  var x = 1 + Math.floor(Math.random() * innerWidth);
  var y = 1 + Math.floor(Math.random() * innerHeight);
  var r = 10 + Math.floor(Math.random() * 40);
  var dx = 1 + Math.floor(Math.random() * 8);
  var dy = 1 + Math.floor(Math.random() * 8);
  circArr.push(new Circle(x, dx, y, dy, r));
}
