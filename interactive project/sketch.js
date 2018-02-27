let shape;
let sizeOfShape;
let aNumber;
let square;
let triangle;
let circle;
aNumber = 0;
square = rect(mouseX/2, mouseY/2, sizeOfShape, sizeOfShape);
circle = ellipse(mouseX / 2, mouseY / 2, sizeOfShape, sizeOfShape)

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function theShape() {
  if (aNumber === 1) {
    aNumber - 2
  } else if (aNumber === -1) {
    aNumber + 2
  }
}
function changeShape()  {
  if keyPressed(){
    if (keyCode === "UP_ARROW") {
      aNumber + 1;
    }
    else if (keyCode === "DOWN_ARROW")  {
      aNumber - 1
    }
  }
  print(aNumber);
}
function shapes() {
  if (aNumber === 0) {
      square
  }
}
