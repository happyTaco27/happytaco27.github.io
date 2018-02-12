


function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  if (mouseX < width/2) {
    fill(random(70, 170));
    rect(random(0, width),random(0, height),100,100);
    }
  else {
    fill(random(0, 255));
    ellipse(random(0, width),random(0, height),100,100);

  }
}
