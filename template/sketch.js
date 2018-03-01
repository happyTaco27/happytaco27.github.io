let state;
let rectHeight;
let rectWidth;
let rightSide;
let leftSide;
let topSide;
let bottomSide;

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
  rectHeight = 200;
  rectWidth = 400;
  rightSide = width + rectWidth/2;
  leftSide = width - rectWidth/2;
  topSide = height - rectHeight/2;
  bottomSide = height + rectHeight/2;

}

function draw() {
  fill(0);
  rect(width / 2 - 200, height / 2 - 100, rectWidth, rectHeight);
  ifTheButtonIsClicked();
  print(state);

}
function ifTheButtonIsClicked() {
  if( mouseIsPressed() &&
      mouseX >= leftSide &&
      mouseX <= rightSide &&
      mouseY >= topSide &&
      mouseY <= bottomSide )  {
    state += 1;
  }
}
