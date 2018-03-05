
function setup(){
  createCanvas(windowWidth,windowHeight);
  let a,b,c;
}

function draw(){
  background(0);
  dots();
  linesConnectingTheDots();
}
function dots(){
  let c=50;
  for(let a=c;a<width;a+=c){
    for(let b=c;b<height;b+=c){
      fill(255);
      ellipse(a,b,3,3);
    }
  }
}
function linesConnectingTheDots() {
  let c=50;
  for(let a=c;a<width;a+=c){
    for(let b=c;b<height;b+=c){
      line(a,b,random(0,width),random(0,height));//,height-b);
      stroke(random(255),random(255),random(255));
    }
  }
}
