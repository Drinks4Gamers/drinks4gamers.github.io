//Variables
let backgroundColor = 230;
let penColor = 20;
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
      let strokeColor = backgroundColor;
      if (sketch.mouseButton === sketch.LEFT) {
        strokeColor = penColor
      }
      sketch.strokeWeight(penSize);
      sketch.stroke(strokeColor);
      sketch.line(sketch.mouseX, sketch.mouseY, lastPosX, lastPosY);

      sketch.noStroke();
      sketch.fill(strokeColor);
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
    drawing = false;
  }

  sketch.windowResized = () => {
    sketch.resizeCanvas(sketch.windowWidth - 10, sketch.windowHeight - 200);
    sketch.background(backgroundColor);
  }
};
let myp5 = new p5(s);

//Toolbar
const t = (sketch) => {
  sketch.setup = () => {
    let tlb = sketch.createCanvas(sketch.windowWidth - 20, sketch.windowHeight - (sketch.windowHeight - 190));

    tlb.position(8, sketch.windowHeight - 190)
    sketch.background(120);
  };
}
let toolbar = new p5(t);