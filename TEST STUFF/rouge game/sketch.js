//this is for testing
let grid;
let rows=8;
let cols=8;
let cellSize;
let xcoord=[];
let ycoord=[];
let w,q;
function preload(){
  q="Assets/Floor_1.txt";
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  cellSize = height / cols;
  //inverts map and Flips the map 90* to the right
  grid=createEmpty2dArray(rows,cols);
//   grid=[
//     [0,0,0,0,0,0,0],
//     [0,1,1,1,1,1,0],
//     [0,1,5,1,1,1,0],
//     [0,1,1,1,1,1,0],
//     [0,1,1,1,1,1,0],
//     [0,0,0,0,0,1,0],
//     [0,1,1,1,1,1,0],
//     [0,0,0,0,0,0,0]
//   ];
}
function draw() {
  background(255);
  displayGrid();
}
function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      let tileType=grid[x][y];
      grid[x][y]=tileType;
      blockType(grid[x][y],x,y);
    }
  }
}
function blockType(type,x,y){
  if(type===0||type==="0") {
    fill(255);
    rect(x,y,cellSize,cellSize);
  }
  else if(type===1||type==="1") {
    fill(175);
    rect(x,y,cellSize,cellSize);
  }
  else if(type===2||type==="2") {
    fill(255);
    rect(x,y,cellSize,cellSize);
  }
  else if(type===3||type==="3") {
    fill(255);
    rect(x,y,cellSize,cellSize);
  }
  else if(type===4||type==="4") {
    fill(255);
    rect(x,y,cellSize,cellSize);
  }
  else if(type===5||type==="5"){
    fill(0,255,0);
    rect(x,y,cellSize,cellSize);
  }
  else {
    fill(255);
  }
}
function mousePressed() {
//testing position
  xcoord = floor(mouseX / cellSize);
  ycoord = floor(mouseY / cellSize);
  if(grid[xcoord][ycoord]===0||grid[xcoord][ycoord]==="0"){
    grid[xcoord][ycoord];
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
          grid[i][j]="1";
        }
        //changing players pos
        else if(mouseIsPressed&&grid[xcoord][ycoord]===1||grid[xcoord][ycoord]==="1"){
          print("x:",xcoord+1," y:",ycoord+1," and state: ",grid[xcoord][ycoord]);
          grid[xcoord][ycoord]="5";
        }
      }
    }
  }
}
function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}
