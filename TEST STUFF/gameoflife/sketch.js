//this is for testing
let rows = 6;
let cols = 6;
let grid;
let cellSize;
let xcoord=[];
let ycoord=[];
let player;
let gridState;
let startPoint;
let startfloor;

function preload(){
  startPoint="Assets/floor_1.txt";
  startfloor= loadStrings(startPoint);
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  cellSize = height / cols;
  gridState=1;
  //map is inverted
  grid=[
    [0,0,0,0,0,0],
    [0,1,1,1,1,0],
    [0,1,5,1,1,0],
    [0,1,1,1,1,0],
    [0,1,1,1,1,0],
    [0,0,0,0,0,0],
  ];
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      //wall
      if (grid[x][y] === 0) {
        fill(255);
      }
      //floor
      else if(grid[x][y] ===1) {
        fill(175);
      }
      //wall
      else if (grid[x][y] === 2) {
        fill(255);
      }
      //wall
      else if (grid[x][y] === 3) {
        fill(255);
      }
      //wall
      else if (grid[x][y] === 4) {
        fill(255);
      }
      //player
      else if (grid[x][y]===5){
        player=true;
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
  let currentPos=[];
  let priorPos=[];
  if(grid[xcoord][ycoord]===0){
    grid[xcoord][ycoord];
  }
  else{
    //Prior player pos removal from grid
    for(let i=0;i<rows;i++){
      for(let j=0;j<cols;j++){
        //checking if neighbour tiles are walls (leaving it as the same)
        if(grid[i][j]===0||grid[i][j]===2||grid[i][j]===3||grid[i][j]===4){
          grid[i][j];
        }
        //checking if a neighbour tile is a player (changing it to a floor/empty tile)
        else if(grid[i][j]===5){
          grid[i][j]=1;
        }
        //changing players pos
        else if(mouseIsPressed&&grid[xcoord][ycoord]===1){
          print("x:",xcoord+1," y:",ycoord+1," and state: ",grid[xcoord][ycoord]);
          grid[xcoord][ycoord]=5;
        }
      }
    }
  }
}
