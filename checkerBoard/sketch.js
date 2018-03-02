let state;
function setup(){
  createCanvas(400,400);
}
function draw(){
  for(let a=50;a<width;a+=50) {
    for(let b=50;b<height;b+=50){
      noStroke();
      if(state){
        fill(255);
      }
      else{
        fill(0);
      }
      rect(a,b,50,50);
      state = !state;
    }
    state = !state;
  }
}
