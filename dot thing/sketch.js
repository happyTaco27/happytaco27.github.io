
function setup(){
  createCanvas(windowWidth,windowHeight);
  let a,b,c;
}

function draw(){
  dots();
  linesConnectingTheDots();
}
function dots(){
  let c=50;
  for(let a=c;a<800;a+=c){
    for(let b=c;b<400;b+=c){
      point(a,b);
    }
  }
}
function linesConnectingTheDots() {
  let c=50;
  for(let a=c;a<800;a+=c){
    for(let b=c;b<400;b+=c){
      line(a,b,800-a,400-b);
      fill(255,0,0,150);
    }
  }
}
