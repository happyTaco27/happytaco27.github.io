//Donovan
//tic tac Toe

let sizeOfTiles=50;
let grid;
let cellSize;
let loadLevel,lines;
function preload(){
  loadLevel="assets/game.txt";
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width / sizeOfTiles;
  grid = createEmpty2dArray(sizeOfTiles, sizeOfTiles);

}

function draw() {
  background(255);
  displayGrid();
}
function displayGrid() {
  for (let x=0; x<sizeOfTiles; x++) {
    for (let y=0; y<sizeOfTiles; y++) {
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
function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<sizeOfTiles; x++) {
    randomGrid.push([]);
    for (let y=0; y<sizeOfTiles; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}
