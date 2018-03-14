
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  angleMode(DEGREES);
  push();
  translate(width/2,height/2);
  rotate(frameCount*150);
  fill(random(255),random(255),random(255));
  rectMode(CENTER);
  // for(let a=1;a<300;a+=1){
  let a=1
    if(a<300){
      
    }
    rect(0,0,a,a);
  }

  pop();
  rect(100,100,200,200);
}
