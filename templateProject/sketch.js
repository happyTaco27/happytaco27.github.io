let yes;
function preload(){
  yes = loadImage("images/yes.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

}


function interactiveBackground() {
  let a;
  let b;
  a = mouseX / 12;
  b = mouseY / 12;
  // rect(width / 2 - a, height / 2 - b, 100, 100);
  image(yes, width-a, height-b);

}

function draw() {
  background(255);
  interactiveBackground();

}
