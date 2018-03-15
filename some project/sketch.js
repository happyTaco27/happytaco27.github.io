let clockSize;
function setup() {
  createCanvas(windowWidth, windowHeight);
  if(width>height){
    clockSize=height;
  }
  else{
    clockSize=width;
  }
}
angleMode(DEGREES);
function draw() {
  //circles
  background(255);
  angleMode(DEGREES);
  translate(width/2,height/2);
  ellipseMode(CENTER);
  noFill();
  ellipse(0,0,10,10);
  ellipse(0,0,clockSize,clockSize);
  strokeWeight(5);
  //minutes
  for (let i = 0; i < 60; i++) {
    strokeWeight(2);
    line(0,-clockSize/2*0.95,0,-clockSize/2*0.80);
    rotate(360/60);
  }
  //Hour
  strokeWeight(7);
  strokeCap(SQUARE);
  for (let i = 0; i < 12; i++) {
    line(0,-clockSize/2*0.95,0,-clockSize/2*0.75);
    rotate(360/12);

  }


}
