var p = new Player();
var ps = new playerSelection();
var s1 = new startScreen();
var h = new heathBar();
var c = new Cloud();
var hairRed = 0;
var hairGreen = 0;
var hairBlue = 0;
var mode = -1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0, 255, 0);
  
  if (mouseIsPressed) {
    mode++;
    mode++;
  }
  
  if (mode < 0) {
    ps.update();
    ps.show();
  }
  
  if (mode > 1) {
    p.update();
    p.show();
    c.update();
    c.show();
  }
}

function keyPressed(event) {
  var x = event.keyCode;
  if (x == 32) {
    p.dir(0, -1);
    if (p.y = 400) {
      p.dir(0, 5);
    }
  } else if (x == 83) {
    p.dir(-1, 0);
  } else if (x == 68) {
    p.dir(1, 0);
  } else if (x == 65) {
    p.dir(-1, 0);
  } else if(x == 87) {
    p.dir(1, 0);
  } else if (x == 82) {
    ps.hairchangered();
  } else if (x == 71) {
    ps.hairchangegreen();
  } else if (x == 66) {
    ps.hairchangeblue();
  } else if (x == 49) {
      ps.hairreset();
  }
}

function startScreen() {
  this.x = 0;
  this.y = 0;
  this.scl = 600;
  
  this.show = function() {
    fill(255, 255, 50);
    rect(this.x, this.y, this.scl, this.scl);
  }
}

function playerSelection() {
  this.x = 225;
  this.y = 250;
  this.xspeed = 0;
  this.yspeed = 0;
  this.scl = 150;
  this.sclh = 130;
  this.scla = 130;
  this.scll = 140;
  this.scllw = 50;
  this.scle = 30;
  this.sclh = 130;
  
  this.hairchangered = function() {
    hairRed = hairRed + 50;
  }
  
  this.hairchangegreen = function() {
    hairGreen = hairGreen + 50;
  }
  
  this.hairchangeblue = function() {
    hairBlue = hairBlue + 50;
  }

  this.hairreset = function() {
      hairRed = 0;
      hairGreen = 0;
      hairBlue = 0;
  }
  
  this.update = function() {
    
  }
  
  this.show = function() {
    fill(255);
    //body
    rect(this.x, this.y, this.scl, this.scl);
    //arm
    rect(this.x - 130, this.y, this.scla, this.scllw);
    rect(this.x + 150, this.y, this.scla, this.scllw);
    //leg
    rect(this.x , this.y + 150, this.scllw, this.scll);
    rect(this.x + 100, this.y + 150, this.scllw, this.scll);
    //head
    rect(this.x + 10, this.y - 130, this.sclh, this.sclh);
    //eyes
    fill(0);
    rect(this.x + 30, this.y - 100, this.scle, this.scle);
    rect(this.x + 95, this.y - 100, this.scle, this.scle);
    //hair
    fill(hairRed, hairGreen, hairBlue);
    rect(this.x + 10, this.y - 175, this.sclh, this.scllw);
  }
}

function heathBar() {
  
}

function Player() {
  this.x = 30;
  this.y = 510;
  this.xspeed = 0;
  this.yspeed = 0;
  this.scl = 50;
  this.sclh = 30;
  this.scla = 30;
  this.scll = 40;
  this.scllw = 10;
  this.scle = 5;
  this.sclh = 30;
  
  this.update = function() {
    this.x = this.x + this.xspeed * 5;
    this.y = this.y + this.yspeed * 5;
    
    this.x = constrain(this.x, 0, width - this.scl - this.scla);
    this.y = constrain(this.y, 0, height - this.scl - this.scll);
  }
  
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.show = function() {
    fill(255);
    rect(this.x, this.y, this.scl, this.scl);
    rect(this.x - 30, this.y, this.scla, this.scllw);
    rect(this.x + 50, this.y, this.scla, this.scllw);
    rect(this.x, this.y + 50, this.scllw, this.scll);
    rect(this.x + 40, this.y + 50, this.scllw, this.scll);
    rect(this.x + 10, this.y - 30, this.sclh, this.sclh);
    fill(0);
    rect(this.x + 15, this.y - 20, this.scle, this.scle);
    rect(this.x + 30, this.y - 20, this.scle, this.scle);
    fill(hairRed, hairGreen, hairBlue);
    rect(this.x + 10, this.y - 40, this.sclh, this.scllw);
  }
  
  this.damage = function(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y)
    if(mouseIsPressed) {
      return true;
    } else {
      return false;
    }
  }
}

function Cloud() {
  this.x = 0;
  this.y = 100;
  this.xspeed = 1;
  this.scl = 50;
  
  this.update = function() {
    this.x = this.x + this.xspeed;
  }
  
  this.show = function() {
    fill(255) 
    ellipse(this.x, this.y, this.scl, this.scl);
    ellipse(this.x + 25, this.y + 25, this.scl, this.scl);
    ellipse(this.x + 50, this.y + 25, this.scl, this.scl);
    ellipse(this.x + 25, this.y - 25, this.scl, this.scl);
    ellipse(this.x + 50, this.y - 25, this.scl, this.scl);
    ellipse(this.x + 25, this.y, this.scl, this.scl);
    ellipse(this.x + 50, this.y, this.scl, this.scl);
    ellipse(this.x + 75, this.y, this.scl, this.scl);
  }
}