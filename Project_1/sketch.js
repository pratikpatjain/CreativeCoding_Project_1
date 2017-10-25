/*Project 1
Pick an adjective and make a program that illustrates
that adjective interactively.You may not use images.

Use only the drawing functions - stuff found in the 
Shape, Color, Events and Math sections. Create custom
functions that are triggered on some event, and make
those functions vary. The focus of this project is 
procedural intensity. How expressive can you be with 
only line, shapes, color and movement?
*/

/*Adjective - Warm 
Potray the adjective using a beachscape with elments 
like sky, moon, sun, objects, clouds, birds and more.
*/

// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;
var x1 = 100;
var y1 = 100;
var x2 = 100;
var y2 = 25;
var cloudW = 60;
var cloudH = 60;

function setup() { 
  createCanvas(1080, 720);
  // Define colors
  b1 = color(255);
  b2 = color(0);
  c1 = color(255,209,148);
  c2 = color(112,225,245);
} 

function draw() { 
	setGradient(0, 0, width, height-220, c1, c2, Y_AXIS);
  beach();
  clouds();
  sun();
}

function setGradient(x, y, w, h, c1, c2, axis) {
  
  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  } 
}

function sun() {
	
  stroke(244, 164, 81);
  fill (253, 184, 19, 150);
  ellipse (540,180,120,120);
}

function beach() {
  
	fill (250, 231, 173);
  rect (0, 500, 1080, 720);
}

function clouds() {
  
  stroke(112,225,245);
  fill(255);
  rect(x1,y1,x2,y2);
  ellipse(x1-5,y1-5,cloudW,cloudH);
  ellipse(x1+100, y1-20,cloudW+35,cloudH+35);
  ellipse(x1+50,y1-30,cloudW+15,cloudH+15);

}