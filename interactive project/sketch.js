let shape;
let sizeOfShape;
let aNumber;
let square;
let triangle;
let circle;
aNumber = 0;
square = rect(mouseX, mouseY, sizeOfShape, sizeOfShape);
circle = ellipse(mouseX / 2, mouseY / 2, sizeOfShape, sizeOfShape)

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function theShape() {
  if (aNumber === 3) {
    aNumber - 3
  } else if (aNumber === -1) {
    aNumber + 3
  }
}

function shapes() {
  if (aNumber === 0) {

  }
}
