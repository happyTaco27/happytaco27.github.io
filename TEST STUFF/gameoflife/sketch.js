//this is for testing


let rows = 6;
let cols = 6;
let grid;
let cellSize;

function setup() {
  createCanvas(windowWidth,windowHeight);
  cellSize = height / cols;
  //map is inverted
  grid=[
    [0,0,0,0,0,0],
    [0,1,1,1,1,0],
    [0,1,1,1,1,0],
    [2,3,1,1,1,0],
    [4,2,3,1,1,0],
    [4,4,2,0,0,0],
  ];
}

function draw() {
  background(255);
  displayGrid();
}
//Leave this, it's isnt working
// class Map {
//   constructor() {
//     this.rows=6;
//     this.cols=6;
//     this.grid;
//     this.cellSize;
//     this.playSize=width-500;
//   }
//   displayGrid(){
//     for (let x=0; x<cols; x++) {
//       for (let y=0; y<rows; y++) {
//         if (grid[x][y] === 0) {
//           fill(255);
//         }
//         else {
//           fill(0);
//         }
//         rect(x*cellSize, y*cellSize, cellSize, cellSize);
//       }
//     }
//   }
// }




function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
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
