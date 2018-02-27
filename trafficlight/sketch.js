//Traffic Light Starter Code
//Dan Schellenberg
//Feb 23, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.
let lights;
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  if (second(0,19)){
    fill(0,255,0);//GREEN
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  else if(second(20,39)){
    fill(255, 126, 0);//AMBER
    ellipse(width/2, height/2, 50, 50); //middle
  }
  else if(second(40,59)){
    fill(255,0,0);//RED
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }


}
