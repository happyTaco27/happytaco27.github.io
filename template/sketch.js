let ball=[];
function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
  background(255);
  moveBalls();
  displayBalls();
}
function mouseClicked(){
  let aBall={
    x:mouseX,
    y:mouseY,
    size:random(10,50),
    color:color(random(255),(random(255),(random(255)),
    dx:random(-5,5),
    dy:random(-5,5),
  };
  ball.push(aBall)
}
function displayBalls(){
  for( let i=0;i<balls.length;i++){
    fill(ball[i].color);
    ellipse(ball[i].x,ball[i].y,ball[i].size,ball[i].ball[i].size)
  }
}
function moveBalls(){
  for( let i=0;i<balls.length;i++){
    ball[i].x,ball[i].dx;
    ball[i].y,ball[i].dy;
    if(ball[i].y<0){
      ball[i].y=height;
    if
    }
  }
}
