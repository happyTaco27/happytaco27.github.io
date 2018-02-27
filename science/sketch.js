let check;

function setup(){
  createCanvas(windowWidth, windowHeight);
}
function draw()  {
  let x;
  let y;
  x = random(width);
  y = random(height);
  if (mouseIsPressed && keyIsPressed && (key==="t"||key==="T")){

    triangle(x, y, x+20, y+20, x+20, y);
  }
  if(keyIsPressed && (key==="z"||key==="x")){
    ellipse(x,y,20, 20);
  }
}
