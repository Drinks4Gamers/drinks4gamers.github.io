var lastPosX;
var lastPosY;

let backgroundColor = 230;
let penColor = 20;

//Used to tell if the user is drawing or not, if not, then reset that last point so it doesnt draw a line in a random direction
var drawing;

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 200);
  background(backgroundColor);
  
  drawing = false;
}

function draw() {
  if (mouseIsPressed && drawing == true){
    //Is always erasing
    let strokeColor = backgroundColor;
    if (mouseButton === LEFT){
      strokeColor = penColor
    }
    strokeWeight(20);
    stroke(strokeColor);
    line(mouseX, mouseY, lastPosX, lastPosY);

    noStroke();
    fill(strokeColor);
    ellipse(mouseX, mouseY, 20, 20)

    lastPosX = mouseX;
    lastPosY = mouseY;
      
    //Script ends here if you are drawing
      return;
  }
  if (mouseIsPressed && drawing == false){
    drawing = true;
    
    lastPosX = mouseX;
    lastPosY = mouseY;
  }
}


function mouseReleased(){
  drawing = false;
}

function windowResized() {
  resizeCanvas(windowWidth - 10 , windowHeight - 200);
  background(backgroundColor);
}