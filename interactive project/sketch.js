let state,buttonWidth,buttonHeight,changeSize,a,b,c,colorState;
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255);
  state=0;
  changeSize=10;
  colorState=1;
  a=0;
  b=0;
  c=0;
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
  // Square
  push();
  fill(255);
  rect(buttonWidth/2+10,buttonHeight/2,20,20);
  // ellipse
  ellipse(buttonWidth/2+240,buttonHeight/2+10,20,20);
  // triangle
  triangle(buttonWidth/2+430,buttonHeight/2+10,buttonWidth/2+440,buttonHeight-10,buttonWidth/2+450,buttonHeight/2+10);
  pop();
  // Red
  push();
  fill(255,0,0);
  rect(680,20,50,20);
  pop();
  // Green
  push();
  fill(0,255,0);
  rect(680,45,50,20);
  pop();
  // Blue
  push();
  fill(0,0,255);
  rect(680,70,50,20);
  pop();
  Button1();
  Button2();
  Button3();
  //Button4();
  refreshButton();
  theShape();
  changeColor1();
  changeColor2();
  changeColor3();
  cheedo();
  hekOff();
}
function cheedo(){
  if(key==="t"){
    changeSize=10;
  }
}
function hekOff(){
  if(!colorState){
    a=0;
    b=0;
    c=0;
  }
}
function mouseWheel(event){
  changeSize += event.delta/4;
  print(event.delta);
  return false;
}
function theShape(){
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
}
function refreshButton(){
  rect(width-70,20,50,50);
  if(key==="r"){
    window.location.reload();
  }
}
function Button1() {
  if( mouseIsPressed &&
      mouseX >=20 &&
      mouseX <=220 &&
      mouseY >=20 &&
      mouseY <=100 )  {
    fill(120);
    state=1;
    print(state);
  }
}
function Button2() {
  if( mouseIsPressed &&
      mouseX >=240 &&
      mouseX <=440 &&
      mouseY >=20 &&
      mouseY <=100 )  {
    fill(120);
    state=2;
    print(state);
  }
}
function Button3() {
  if( mouseIsPressed &&
      mouseX >=460 &&
      mouseX <=660 &&
      mouseY >=20 &&
      mouseY <=100 )  {
    fill(120);
    state=3;
    print(state);
  }
}
//function Button4(){
//  if( mouseIsPressed &&
//      mouseX >=width-150 &&
//      mouseX <=width-100 &&
//      mouseY >=20 &&
//      mouseY <=70 )  {
    // push();
//    a=random(255);
//    b=random(255);
//    c=random(255);
//    fill(a,b,c);
 //   rect(width-150,20,50,50);
//    return a,b,c;
//    // pop();
//  }

//}

function changeColor1(){
  if( mouseIsPressed &&
      mouseX >=680 &&
      mouseX <=730 &&
      mouseY >=20 &&
      mouseY <=40 )  {
    a=255;
    b=0;
    c=0;
    colorState=!colorState;
  }
}
function changeColor2(){
  if( mouseIsPressed &&
      mouseX >=680 &&
      mouseX <=730 &&
      mouseY >=45 &&
      mouseY <=65 )  {
    a=0;
    b=255;
    c=0;
    colorState=!colorState;
  }
}
function changeColor3(){
  if( mouseIsPressed &&
      mouseX >=680 &&
      mouseX <=730 &&
      mouseY >=70 &&
      mouseY <=90 )  {
    a=0;
    b=0;
    c=255;
    colorState=!colorState;
  }
}
