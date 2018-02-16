let yes;
function preload(){
  yes = loadImage("images/yes.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

}


function interactiveBackground() {
  let a;
  let b;
  a = mouseX / 6;
  b = mouseY / 6;
  rect(width / 2 - a, height / 2 - b, 100, 100);
  image("images/yes.jpg", width/2-a, height/2-b, width, height);

}

function draw() {
  background(255);
  interactiveBackground();

}
