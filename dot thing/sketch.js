

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  dots();
}
function dots(){
  for(let a =20;a<400;a+=20);
    for(let b=20;ab<800;b+=20);
    point(a,b)
  }
}
