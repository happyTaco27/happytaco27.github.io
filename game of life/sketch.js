// grid demo
// Dan Schellenberg
// Mar 26, 2018

let rows = 5;
let cols = 5;
let grid;
let cellSize;

function setup() {
  // createCanvas(600, 600);
  if(windowWidth>windowHeight){
    createCanvas(windowHeight,windowHeight);
  }
  else{
    createCanvas(windowWidth,windowWidth);
  }
  cellSize = width / cols;
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      if (grid[x][y] === 0) {
        fill(0);
      }
      else {
        fill(255);
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

function keyPressed() {
  if(key==="r"||key==="R"){
    grid=createRandom2dArray;
  }
  else if(key===" "){
    nextTurn();
  }
  grid = createRandom2dArray(cols, rows);
}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(0);
      }
      else {
        randomGrid[x].push(1);
      }
    }
  }
  return randomGrid;
}
function nextTurn(){
  let next=createEmpty2dArray(cols,rows);
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      let neighbours=0;
      for(let i=-1;i<1;i++){
        for(let j=-1;j<1;j++){
          //fix edge stuff
          if(x+i>=0&&y+j>=0&&x+i<cols&&y+i<rows){
            neighbours+=grid[x+i],[y+j];
          }
        }
      }
      neighbours-=grid[x][y];
      //rules
      if(grid[x][y]===1){
        if(neighbours===2||neighbours===3){
          next[x][y]=1;
        }
        else{
          if(neighbours===3){
          next[x][y]=1;
          }
          else{
            next[x][y]=0;
        }
      }
    }
  }
  grid=next;
}
function createEmpty2dArray(cols, rows){
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++) {
        randomGrid[x].push(0);
      }
    }
  return randomGrid;
}
