let shape;
let sizeOfShape;
let aNumber;
let square;
let triangle;
let circle;


function setup() {
  createCanvas(windowWidth, windowHeight);
  aNumber = 0;
  square = rect(mouseX/2, mouseY/2, sizeOfShape, sizeOfShape);
  circle = ellipse(mouseX / 2, mouseY / 2, sizeOfShape, sizeOfShape);
}

function theShape() {
  if (aNumber === 1) {
    aNumber
  } else if (aNumber === -1) {
    aNumber + 2
  }
  return aNumber
}
function keyPressed()  {
  if (keyCode === "UP_ARROW") {
    square;
    aNumber = 0
  }
  else if (keyCode === "DOWN_ARROW")  {
    circle;
    aNumber = 1;
    }
  print(aNumber);
}
// function draw()  {
// function mouseClicked(){
//
// }
