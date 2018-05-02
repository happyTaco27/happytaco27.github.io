// 2D array assignment(ultimate Tic-Tac-Toe0)
// Donovan
// March 29,2018 -

// global variables
let posX,posY,aiX,aiY,cols,rows,grid,size;
rows=9;
cols=9;
size=50;
posX=mouseX;
posY=mouseY;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  theBoard();
  player();
  ai();
}
//used the GameOfLive demo for this part
function emptyGrid(cols,rows){
  let theGrid = [];
  for (let x=0; x<cols; x++) {
    theGrid.push([]);
    for (let y=0; y<rows; y++) {
      theGrid[x].push(0);
    }
    return theGrid;
  }
}
//I also pulled this from the gameoflive
function theBoard(){
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      // if (grid[x][y] === 0) {
      rect(x*size, y*size, size, size);
      // }
    }
  }
}
function player(){
  //for testing cords
  // console.log(mouseX);
  // console.log(mouseY);
}
function ai(){

}
//player's move
function mousePressed(){
  let xcoord = floor(posX / size);
  let ycoord = floor(posY / size);
  if (grid[xcoord][ycoord] === 0) {
    grid[xcoord][ycoord]===1;
  }
}
