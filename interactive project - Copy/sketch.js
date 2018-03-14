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
  a=slider1.value();
  b=slider2.value();
  c=slider3.value();
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
  //color Preview
  fill(a,b,c);
  rect(840,20,100,buttonHeight);
  //words
  push();
  textSize(45);
  fill(255);
  text("Square",40,75);
  text("Circle",buttonWidth+80,75);
  text("Triangle",buttonWidth*2+75,75);
  text("pen",1130,75);
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
}
function mouseWheel(event){
  changeSize -= event.delta/3;
  print(event.delta);
  return false;
}
function Tools(){
  let color=[[a,b,c]];
  if(state===1){
    if(mouseY>120){
      if(mouseIsPressed){
        push();
        rectMode(CENTER);
        fill(color[0]);
        rect(mouseX,mouseY,changeSize,changeSize);
        pop();
      }
    }
  }
  if(state===2){
    if(mouseY>120){
      if(mouseIsPressed){
        push();
        fill(color[0]);
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
        fill(color[0]);
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
        stroke(color[0]);
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
  //reset size
  if(mouseIsPressed &&
      mouseX >=1020 &&
      mouseX <=1060 &&
      mouseY >=70 &&
      mouseY <=110 ||
      key==="t"){
    changeSize=10;
  }
}
