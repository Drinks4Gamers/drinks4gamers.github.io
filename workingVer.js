//Variables
let backgroundColor = 230;
let getColor = [1,1,1]
let penSize = 200;

//Canvas
const s = (sketch) => {

  //Used to draw lines between dots
  var lastPosX;
  var lastPosY;

  //Used to tell if the user is drawing or not, if not, then reset that last point so it doesnt draw a line in a random direction
  var drawing;

  sketch.setup = () => {
    let canv = sketch.createCanvas(sketch.windowWidth - 20, sketch.windowHeight - penSize);
    sketch.background(backgroundColor);

    drawing = false;
  };

  sketch.draw = () => {
    if (sketch.mouseIsPressed && drawing == true) {
      //using backgroundColor makes it look like its erasing
      if (sketch.mouseButton === sketch.LEFT) {
        
      //Line
      sketch.strokeWeight(penSize);
      sketch.print(getColor[0], getColor[1], getColor[2])
      sketch.stroke(getColor[0], getColor[1], getColor[2]);
      sketch.line(sketch.mouseX, sketch.mouseY, lastPosX, lastPosY);
      
      //Circle
      sketch.noStroke();
      sketch.print(getColor[0], getColor[1], getColor[2])
      sketch.fill(getColor[0], getColor[1], getColor[2]);
      sketch.ellipse(sketch.mouseX, sketch.mouseY, penSize, penSize)

      lastPosX = sketch.mouseX;
      lastPosY = sketch.mouseY;

      //Script ends here if you are drawing
      return;
      }
      else {
        sketch.strokeWeight(penSize);
        sketch.stroke(backgroundColor);
        sketch.line(sketch.mouseX, sketch.mouseY, lastPosX, lastPosY);
      
        //Circle
        sketch.noStroke();
        sketch.fill(backgroundColor);
        sketch.ellipse(sketch.mouseX, sketch.mouseY, penSize, penSize)

        lastPosX = sketch.mouseX;
        lastPosY = sketch.mouseY;

        //Script ends here if you are drawing
      return;
      }
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
  let c1,c2;
  
  let toolbarHeight = sketch.windowHeight - (sketch.windowHeight - 190)
  sketch.preload = () => {
    colorWheel = sketch.loadImage("resources/wheel.png");
  }

  sketch.setup = () => {
    let tlb = sketch.createCanvas(sketch.windowWidth - 20, toolbarHeight);

    tlb.position(8, sketch.windowHeight - 190)
    sketch.background(120);

    sketch.push();
    sketch.image(colorWheel, 0, 0, toolbarHeight, toolbarHeight);
    
    // Define colors
    c1 = sketch.color("black");
    c2 = sketch.color("black");
  };

  sketch.draw = () => {
    sketch.push();
    sketch.stroke(getColor[0], getColor[1], getColor[2]);
    sketch.fill(getColor[0], getColor[1], getColor[2], 100);
    sketch.ellipse(sketch.width * 0.5, sketch.height * 0.5, 133, 133);
    sketch.pop();
    
    c1 = sketch.color(getColor)
    setGradient(sketch.width * .25, sketch.height * .01, 50, 250, c1, c2);
  }
  
  function setGradient(x, y, w, h, c1, c2) {
  sketch.noFill();

    for (let i = y; i <= y + h; i++) {
      let inter = sketch.map(i, y, y + h, 0, 1);
      let c = sketch.lerpColor(c1, c2, inter);
      sketch.stroke(c);
      mainLine = sketch.line(x, i, x + w, i);
    }
}
  
  sketch.mouseClicked = () => {
    if (sketch.mouseY < toolbarHeight){
      sketch.push();
      sketch.image(colorWheel, 0, 0, toolbarHeight, toolbarHeight);
      var oldColor = getColor;
      getColor = mainLine.get(sketch.mouseX, sketch.mouseY);
      if (getColor[0] + getColor[1] + getColor[2] == 0 || getColor[0] + getColor[1] + getColor[2] == 360){
        getColor = oldColor;
      }
    }
  }
}
let toolbar = new p5(t);