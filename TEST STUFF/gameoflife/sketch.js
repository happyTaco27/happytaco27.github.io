//this is for testing
let rows = 6;
let cols = 6;
let grid;
let cellSize;
let xcoord=[];
let ycoord=[];
function setup() {
  createCanvas(windowWidth,windowHeight);
  cellSize = height / cols;
  //map is inverted
  grid=[
    [0,0,0,0,0,0],
    [0,1,1,1,1,0],
    [0,1,5,1,1,0],
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
      else if(grid[x][y] ===1) {
        fill(175);
      }
      else if (grid[x][y] === 2) {
        fill(255);
      }
      else if (grid[x][y] === 3) {
        fill(255);
      }
      else if (grid[x][y] === 4) {
        fill(255);
      }
      else if (grid[x][y]===5){

        fill(0,255,0);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function mousePressed() {
//testing position
  xcoord = floor(mouseX / cellSize);
  ycoord = floor(mouseY / cellSize);
  let currentPos=[];
  let priorPos=[];
  if (mouseIsPressed){
    // if(grid[xcoord][ycoord]===){
    //
    // }
    print("x:",xcoord," y:",ycoord," and state: ",grid[xcoord][ycoord]);

    // }
    //checking if neighbour tiles are a player, doesnt work yet(WIP)
    // for(let i=0;i<2;i++){
    //   for(let j=0;j<2;j++){
    //     if(grid[i][j]!==grid[xcoord][ycoord]&&grid[i][j]===5){
    //       priorPos=grid[i][j];
    //       grid[i][j]=1;
    // }
    // }
    // }
  }
}
class PlayerCheck {
  constructor() {
    this.playPos;
    this.currentpos=[];
    this.priorPos;
    this.xcoord=xcoord;
    this.ycoord=ycoord;
  }
  checkIfPlayerIsOnMap()  {
    for(let i=0;i<cols;i++){
      for(let j=0;j<rows;j++){
        if(grid[i][j]===5){
          this.currentPos=grid[i][j];
        }
      }
    }
  }
  move(){
    if(this.currentPos!==grid[this.xcoord][this.ycoord]){
      this.currentPos=this.priorPos;

    }
  }
}
