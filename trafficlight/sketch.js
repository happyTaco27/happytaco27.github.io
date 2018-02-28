//Traffic Light Starter Code
//Dan Schellenberg
//Feb 23, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.
let lights;
let timeDuration;
let amber;
let green;
let red;
function setup() {
  createCanvas(600, 600);
  lights = 1;
  red=2000;
  amber=2000;
  green=2000;
  timeDuration = millis();
}
function draw() {
  background(255);
  drawOutlineOfLights();
  correctLight();
  checkLight();
}
function greenLight(){
  fill(0,255,0);//GREEN
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
function amberLight(){
  fill(255, 126, 0);//AMBER
  ellipse(width/2, height/2, 50, 50); //middle
}
function redLight(){
  fill(255,0,0);//RED
  ellipse(width/2, height/2 - 65, 50, 50); //top
}
function checkLight() {
  if(lights === 1){//green
    if(millis() > timeDuration + green){
      lights = 2;
      timeDuration = millis();
    }
  }
  if(lights === 2){
    if(millis() > timeDuration + amber){
      lights = 3;
      timeDuration = millis();
    }
  }
  if(lights === 3){
    if(millis()> timeDuration + red){
      lights = 1;
      timeDuration = millis();
    }
  }
}
function correctLight() {
  if(lights === 1){
    greenLight();
  }
  if(lights === 2){
    amberLight();
  }
  if(lights === 3){
    redLight();
  }
}
function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(1);
  rect(width/2, height/2, 75, 200, 10);
  fill(255);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 - 65, 50, 50); //top
  //lights
}
