//this is for testing
let rows = 6;
let cols = 6;
let grid;
let cellSize;
let xcoord=[];
let ycoord=[];
<<<<<<< HEAD
let player;
let gridState;
let startPoint;
let startfloor;
function preload(){
  startPoint="Assets/floor_1.txt";
  startfloor= loadStrings(startPoint);
}
function setup(){
=======
function setup() {
>>>>>>> parent of 1e2bdae... player pos is almost done
  createCanvas(windowWidth,windowHeight);
  cellSize = height / cols;
  gridState=1;
  //map is inverted
  grid=[
    [0,0,0,0,0,0],
    [0,1,1,1,1,0],
    [0,1,5,1,1,0],
<<<<<<< HEAD
    [0,1,1,1,1,0],
    [0,1,1,1,1,0],
    [0,0,0,0,0,0],
=======
    [2,3,1,1,1,0],
    [4,2,3,1,1,0],
    [4,4,2,0,0,0],
>>>>>>> parent of 1e2bdae... player pos is almost done
  ];
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
<<<<<<< HEAD
  if(grid[xcoord][ycoord]===0){
    grid[xcoord][ycoord];
  }
  else{
    //Prior player pos removal from grid
    for(let i=0;i<rows;i++){
      for(let j=0;j<cols;j++){
        if(grid[i][j]===0||grid[i][j]===2||grid[i][j]===3||grid[i][j]===4){
          grid[i][j];
        }
        else if(grid[i][j]===5){
          grid[i][j]=1;
=======
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
>>>>>>> parent of 1e2bdae... player pos is almost done
        }
        //changing players pos
        else if(mouseIsPressed&&grid[xcoord][ycoord]===1){
          print("x:",xcoord+1," y:",ycoord+1," and state: ",grid[xcoord][ycoord]);
          grid[xcoord][ycoord]=5;
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
