// Donovan
// March 26, 2018 - replace with the date

let rows;
let cols;
let size;
let grid;
function setup(){
  createCanvas(windowWidth,windowHeight);
  size=width/cols;
  rows=width/24;
  cols=height/24;
  grid=create2DArray(cols,rows);
}
function draw() {
  background(255);
  displayGrid();
  create2DArray();
}
function mousePressed(){
  grid=create2DArray(cols,rows);
}
function displayGrid(){
  for(let x=0;x<rows;x++){
    for(let y=0;y<cols;y++){
      if(grid[x][y]===0){
        fill(0);
      }
      else{
        rect(size*x,size*y,size,size);
      }
    }
  }
}
function create2DArray(cols,rows){
  let randomGrid=[];
  for(let x=0;x<rows;x++){
    randomGrid.push([]);
    for(let y=0;y<cols;y++){
      if(random(100)<50){
        randomGrid[x].push(0);
      }
      else{
        randomGrid[x].push(1);
      }
    }
  }
  return randomGrid;
}
