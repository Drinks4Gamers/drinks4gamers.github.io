//Variables
let backgroundColor = 230;
let getColor = 20;
let penSize = 20;

//Canvas
const s = (sketch) => {

  //Used to draw lines between dots
  var lastPosX;
  var lastPosY;

  //Used to tell if the user is drawing or not, if not, then reset that last point so it doesnt draw a line in a random direction
  var drawing;

  sketch.setup = () => {
    let canv = sketch.createCanvas(sketch.windowWidth - 20, sketch.windowHeight - 200);
    sketch.background(backgroundColor);

    drawing = false;
  };

  sketch.draw = () => {
    if (sketch.mouseIsPressed && drawing == true) {
      //using backgroundColor makes it look like its erasing
      if (sketch.mouseButton === sketch.LEFT) {
        strokeColor = getColor;
      }
      else {
        strokeColor = backgroundColor;
        
        sketch.strokeWeight(penSize);
        sketch.stroke(backgrounColor);
        sketch.line(sketch.mouseX, sketch.mouseY, lastPosX, lastPosY);

        sketch.noStroke();
        sketch.fill(strokeColor[0], strokeColor[1], strokeColor[2]);
        sketch.ellipse(sketch.mouseX, sketch.mouseY, penSize, penSize)

        lastPosX = sketch.mouseX;
        lastPosY = sketch.mouseY;

        //Script ends here if you are drawing
        return;
      }
      sketch.strokeWeight(penSize);
      sketch.stroke(strokeColor[0], strokeColor[1], strokeColor[2]);
      sketch.line(sketch.mouseX, sketch.mouseY, lastPosX, lastPosY);

      sketch.noStroke();
      sketch.fill(strokeColor[0], strokeColor[1], strokeColor[2]);
      sketch.ellipse(sketch.mouseX, sketch.mouseY, penSize, penSize)

      lastPosX = sketch.mouseX;
      lastPosY = sketch.mouseY;

      //Script ends here if you are drawing
      return;
    }
    if (sketch.mouseIsPressed && drawing == false) {
      drawing = true;

      lastPosX = sketch.mouseX;
      lastPosY = sketch.mouseY;
    }
  };

  sketch.mouseReleased = () => {
    drawing = false
  }

  sketch.windowResized = () => {
    sketch.resizeCanvas(sketch.windowWidth - 10, sketch.windowHeight - 200);
    sketch.background(backgroundColor);
  }
};
let myp5 = new p5(s);

//Toolbar
const t = (sketch) => {
  let colorWheel;

  let toolbarHeight = sketch.windowHeight - (sketch.windowHeight - 190)
  sketch.preload = () => {
    colorWheel = sketch.loadImage("colorwheel.png");
  }

  sketch.setup = () => {
    let tlb = sketch.createCanvas(sketch.windowWidth - 20, toolbarHeight);

    tlb.position(8, sketch.windowHeight - 190)
    sketch.background(120);

    sketch.push();
    sketch.image(colorWheel, 0, 0, toolbarHeight, toolbarHeight);
  };

  sketch.draw = () => {
    sketch.push();
    sketch.stroke(getColor[0], getColor[1], getColor[2]);
    sketch.fill(getColor[0], getColor[1], getColor[2], 100);
    sketch.ellipse(sketch.width * 0.5, sketch.height * 0.5, 133, 133);
    sketch.pop();
  }
  
  sketch.mouseClicked = () => {
    sketch.push();
    sketch.image(colorWheel, 0, 0, toolbarHeight, toolbarHeight);
    getColor = colorWheel.get(sketch.mouseX, sketch.mouseY);
  }
}
let toolbar = new p5(t);