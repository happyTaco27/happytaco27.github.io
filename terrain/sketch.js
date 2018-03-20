// Terrain Generation
// Dan Schellenberg - replace with your name
// Mar 19, 2018

let heights = [];
let numberOfRectangles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
  generateInitialTerrain(numberOfRectangles);
}

function draw() {
  background(255);
  displayTerrain();
  // plantFlag();
  mousePressed();
}

function generateInitialTerrain(numberOfRectangles) {
  let time=0;
  let dt=0.005;
  for (let i=0; i<numberOfRectangles; i++) {
    let currentHeight=noise(time)*500;
    heights.push(currentHeight);
    time+=dt;
  }
}

function displayTerrain() {
  let rectWidth = width / numberOfRectangles;
  rectMode(CORNERS);
  fill(0);
  for (let i=0; i<numberOfRectangles; i++) {
    rect(i*rectWidth, height, (i+1)*rectWidth, height - heights[i]);
  }
}
function mousePressed(){
  if(mouseButton){
    window.location.reload();
  }
}
// function plantFlag(){
//   let tallest=height;
//   let i;
//   for(i=0;i<heights.length;i++){
//     if(heights[i]>tallest){
//       tallest=heights[i];
//       let tallY=tallest-
//     }
//   }
//   stroke(0);
//   line(0,heights[i],width,heights[i]);
// }
