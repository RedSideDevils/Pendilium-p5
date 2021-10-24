let angle;
let bob;

let angleV = 0;
let angleA = 0.01;

let len;
let origin;

let gravity = 1;

let width = 800, height = 800;

function setup() {
  createCanvas(width, height);
  origin = createVector(width / 2, 0);
  angle = PI / 4;

  bob = createVector();
  len = 500;
}

function draw() {
  background(0);
  let force = -gravity * sin(angle) / len;
  angleA = force;
  angleV += angleA;
  angle += angleV;
  
  angleV *= 0.99;
  
  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;
  
  stroke(255);
  strokeWeight(8);
  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 64);
}
