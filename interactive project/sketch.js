let state,buttonWidth,buttonHeight,changeSize,a,b,c,slider1,slider2,slider3,refresh;
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255);
  state=0;
  changeSize=10;
  //red
  slider1=createSlider(0,255,0,1);
  slider1.position(678, 17);
  slider1.style(10, 100);
  //green
  slider2=createSlider(0,255,0,1);
  slider2.position(678, 43);
  slider2.style(10, 100);
  //blue
  slider3=createSlider(0,255,0,1);
  slider3.position(678, 67);
  slider3.style(10, 100);

}
function draw(){
  let buttonWidth=200;
  let buttonHeight=80;
  noStroke();
  fill(180);
  rect(0,0,width,120);
  fill(0);
  // button 1
  rect(20,20,buttonWidth,buttonHeight);
  // button 2
  rect(240,20,buttonWidth,buttonHeight);
  // button 3
  rect(460,20,buttonWidth,buttonHeight);
  //Pen Tool
  rect(1070,20,buttonWidth,buttonHeight);
  //refreshButton
  rect(1020,20,40,40);
  //resetSize
  rect(1020,70,40,40);
  // Square
  push();
  fill(255);
  rect(buttonWidth/2+10,buttonHeight/2,20,20);
  // ellipse
  ellipse(buttonWidth/2+240,buttonHeight/2+10,20,20);
  // triangle
  triangle(buttonWidth/2+430,buttonHeight/2+5,buttonWidth/2+440,buttonHeight-10,buttonWidth/2+450,buttonHeight/2+5);
  pop();
  // Red
  push();
  fill(255,0,0);
  rect(680,20,140,20);
  pop();
  // Green
  push();
  fill(0,255,0);
  rect(680,45,140,20);
  pop();
  // Blue
  push();
  fill(0,0,255);
  rect(680,70,140,20);
  //functions
  pop();
  Buttons();
  Tools();
  resetSize();
}
function resetSize(){
}
function mouseWheel(event){
  changeSize -= event.delta/3;
  print(event.delta);
  return false;
}
function Tools(){
  let a=slider1.value();
  let b=slider2.value();
  let c=slider3.value();
  if(state===1){
    if(mouseY>120){
      if(mouseIsPressed){
        push();
        rectMode(CENTER);
        fill(a,b,c);
        rect(mouseX,mouseY,changeSize,changeSize);
        pop();
      }
    }
  }
  if(state===2){
    if(mouseY>120){
      if(mouseIsPressed){
        push();
        fill(a,b,c);
        ellipseMode(CENTER);
        ellipse(mouseX,mouseY,changeSize,changeSize);
        pop();
      }
    }
  }
  if(state===3){
    if(mouseY>120){
      if(mouseIsPressed){
        push();
        fill(a,b,c);
        //fix triangle so it's not sideways :)
        triangle(mouseX+changeSize/2,mouseY-changeSize/2,mouseX-changeSize/2,mouseY,mouseX+changeSize/2,mouseY+changeSize/2);
        pop();
      }
    }
  }
  if(state===4){
    if(mouseY>120){
      if(mouseIsPressed){
        push();
        stroke(a,b,c);
        line(mouseX,mouseY,pmouseX,pmouseY);
        pop();
      }
    }
  }
}
function Buttons() {
  //button 1
  if( mouseIsPressed &&
      mouseX >=20 &&
      mouseX <=220 &&
      mouseY >=20 &&
      mouseY <=100 )  {
    state=1;
    print(state);
  }
  //button 2
  if( mouseIsPressed &&
      mouseX >=240 &&
      mouseX <=440 &&
      mouseY >=20 &&
      mouseY <=100 )  {
    state=2;
    print(state);
  }
  //button 3
  if( mouseIsPressed &&
      mouseX >=460 &&
      mouseX <=660 &&
      mouseY >=20 &&
      mouseY <=100 )  {
    state=3;
    print(state);
  }
  //Pen tool
  if( mouseIsPressed &&
      mouseX >=1070 &&
      mouseX <=1270 &&
      mouseY >=20 &&
      mouseY <=100 )  {
    state=4;
    print(state);
  }
  //refreshButton
  if( mouseIsPressed &&
      mouseX >=1020 &&
      mouseX <=1060 &&
      mouseY >=20 &&
      mouseY <=60 ||
      key==="r"){
    // window.location.reload();
    background(255);
  }
  if(mouseIsPressed &&
      mouseX >=1020 &&
      mouseX <=1060 &&
      mouseY >=70 &&
      mouseY <=110 ||
      key==="t"){
    changeSize=10;
  }
}
