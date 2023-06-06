function setup() {
    createCanvas(512, 512);
  
  
  
    background(0);}
    function draw() {
    frameRate(5);
    noFill();
    if (mouseIsPressed)
      if (mouseButton == LEFT)
        stroke(255);
      else if (mouseButton == RIGHT)
      fill(0);
      else stroke(180);
    strokeWeight(1);
    rect(mouseX, mouseY, pmouseX, pmouseY);
     //ellipse(mouseX, mouseY, pmouseX, pmouseY);
    
  
  }