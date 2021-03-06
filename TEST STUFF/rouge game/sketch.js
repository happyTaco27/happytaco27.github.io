//this is for testing
let grid;
let rows=8;
let cols=8;
let cellSize;
let xcoord=[];
let ycoord=[];
let dX,dY;
function setup(){
  createCanvas(windowWidth,windowHeight);
  cellSize = height / cols;
  grid=[
    [2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,2],
    [2,1,5,1,1,1,1,2],
    [2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2]
  ];
}
function draw() {
  background(255);
  displayGrid();
}
function displayGrid() {
  for(let x=0; x<cols; x++) {
    for(let y=0; y<rows; y++) {
      if(grid[x][y]===2) {
        fill(255);
      }
      else if(grid[x][y]===1) {
        fill(175);
      }
      else if(grid[x][y]===5){
        fill(0,255,0);
      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}
function mousePressed() {
//testing position
  xcoord = floor(mouseX / cellSize);
  ycoord = floor(mouseY / cellSize);
  if(grid[xcoord][ycoord]===2){
    grid[xcoord][ycoord];
    print("that's a wall!");
  }
  else{
    //Prior player pos removal from grid
    for(let i=0;i<rows;i++){
      for(let j=0;j<cols;j++){
        if(grid[i][j]===0||grid[i][j]==="0"||
          grid[i][j]===2||grid[i][j]==="2"||
          grid[i][j]===3||grid[i][j]==="3"||
          grid[i][j]===4||grid[i][j]==="4"){
          grid[i][j];
        }
        //reseting players prior pos
        else if(grid[i][j]===5||grid[i][j]==="5"){
          grid[i][j]=1;
        }
        //changing players pos
        else if(mouseIsPressed&&grid[xcoord][ycoord]===1||grid[xcoord][ycoord]==="1"){
          print("x:",xcoord+1," y:",ycoord+1," and state: ",grid[xcoord][ycoord]);
          grid[xcoord][ycoord]=5;
        }
      }
    }
  }
}
