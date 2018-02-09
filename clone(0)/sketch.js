function setup() {
  createCanvas(windowWidth, windowHeight);
  document: addEventListener("contextmenu", event => event.preventDefault())

}

function draw() {
  //background(255);

}

function mousePressed() {
  if (mouseButton === LEFT) {
    noStroke();
    fill(random(255), random(255), random(255));
    rect(mouseX, mouseY, 50, 50);
  }
  if (mouseButton === RIGHT) {
    noStroke();
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 50, 50);
  }


}

function keyPressed() {
  if (key === "w" || key === "W") {
    background(255);
  }
  if (key === "v" || key === "V") {
    background(0);
  }
}

function deviceShaken() {
  textFont("Times New Roman");
  textSize(32);
  text("Yes",random(width),random(height));
}
