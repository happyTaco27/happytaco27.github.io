function setup()  {
  createCanvas(windowWidth,windowHeight);
}
function draw()   {

}
function deviceShaken() {
textFont("Times New Roman")
textSize(32)
}

function mousePressed()  {
  fill(random(255), random(255), random(255))
  ellipse(mouseX,mouseY,100,100);

}
