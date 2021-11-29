var currentSpot;
let score = 0;
let timer = 50;

var spot = {
   x: 100,
   y: 50
};

var col = {
   r: 255,
   g: 0,
   b: 0
};

function setup() {
   let spotSize = random(40,100);

   createCanvas(screen.width - 20, screen.height - 165);
   background(0);
   spot.x = random(spotSize, width - spotSize);
   spot.y = random(spotSize, height - spotSize);
   noStroke();
   fill(200, 0, 0);
   currentSpot = ellipse(spot.x, spot.y, spotSize, spotSize);

   textColor();
}

function draw() {
  textAlign(CENTER, screenTop);
  textSize(100);
}

function mouseClicked(){
  correctValue = '200,0,0,255'
  actualValue = currentSpot.get(mouseX, mouseY) + ''
  console.log(actualValue + " vs " + correctValue)
  if (currentSpot.get(mouseX, mouseY) == correctValue){
    score = score + 1;
    setup();
  }
}

function textColor(){
   textSize(32);
   if(score <= 20){
      let value = 100 + (score * 7.75)

      textSize(32);
      fill(value , 100, 100);
      text(score + '', 10, 30);
   }
   else if(score >= 21 && score <= 40){
      let value = 100 + ((score - 20) * 7.75)

      textSize(32);
      fill(255, value, 100);
      text(score + '', 10, 30);
   }
   else if (score >= 41 && score <= 70){
      let preValue = ((score - 40) * 7.75);
      let value = 100 + preValue;

      textSize(32);
      fill(255 - preValue, 255 - preValue, value);
      text(score + '', 10, 30);
   }
   else if (score >= 71){
      let preValue = ((score - 70) * 7.75);
      let value = 100 + preValue;

      textSize(32);
      fill(value, value, 255);
      text(score + '', 10, 30);
   }
   else if (score >= 100){
      textSize(60);
      fill(255, 255, 255);
      text('You Win!!!', 10, 30);
   }
}