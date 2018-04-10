let rows = 9;
let cols = 9;
let grid=
[
  1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,1,0,0,0,1,0,0,0,1,
  1,0,0,0,1,0,0,0,1,0,0,0,1,
  1,0,0,0,1,0,0,0,1,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,1,0,0,0,1,0,0,0,1,
  1,0,0,0,1,0,0,0,1,0,0,0,1,
  1,0,0,0,1,0,0,0,1,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,1,0,0,0,1,0,0,0,1,
  1,0,0,0,1,0,0,0,1,0,0,0,1,
  1,0,0,0,1,0,0,0,1,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1
];
let cellSize=50;
function setup() {
  createCanvas(windowWidth,windowHeight);
}
function draw() {
  background(255);
  displayGrid();
}

function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
    }
  }
  // for (let i=0;i<3;i++) {
  //   for (let j=0;j<3;j++) {
  //     strokeWeight(3);
  //     // line(i*300,900,j+300,900);
  //   }
  // }
}
function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (grid[xcoord][ycoord] === 1) {
    grid[xcoord][ycoord] = 0;
  }
  else {
    grid[xcoord][ycoord] = 1;
  }
}
