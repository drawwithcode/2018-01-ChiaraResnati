function setup() {
	// define artboard size
	createCanvas(800,600);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
background(250);

//ground
rectMode(CORNER);
fill(230, 240, 220);
noStroke();
rect(0, height/2, 800, 300);

fill(0, 0, 0, 10);
ellipse(width/2, 460, 300, 80)    //shadow

//wheel
fill(110, 90, 120);
ellipse(width/2, 455, 25);
ellipse(width/2, 430, 110, 50)

//waves
noFill();
strokeWeight(1);
stroke(200);
ellipse(width/2, 65, 27);     //head aerial
ellipse(width/2, 65, 42);
ellipse(width/2, 65, 57);

ellipse(251, 322, 27);    //left hand
ellipse(251, 322, 42);
ellipse(251, 322, 57);

ellipse(539, 239, 27);    //right hand
ellipse(539, 239, 42);
ellipse(539, 239, 57);

//aerial and neck
strokeWeight(3);
stroke(190, 220, 100);
line(width/2, 65, width/2, 400);

//arms
line(345, 350, 292, 387);
line(292, 387, 251, 322);
line(453, 350, 509, 314);
line(509, 314, 539, 239);

fill(110, 90, 120);       //joints
noStroke();
ellipse(width/2, 65, 12);
ellipse(292, 387, 12);
ellipse(251, 322, 12);
ellipse(509, 314, 12);
ellipse(539, 239, 12);

//ears
fill(110, 90, 120);
noStroke();
rect(295, 190, 10, 40)    //left ear
rect(290, 195, 5, 30)
rect(495, 190, 10, 40)    //right ear
rect(505, 195, 5, 30)

//head
ellipseMode(CENTER);      //face
fill(210, 140, 210);
noStroke();
ellipse(width/2, 210, 195);

rectMode(CENTER)
fill(110, 90, 120);       //eye
rect(width/2, 205, 160, 30);
fill(0, 255, 0);
rect(width/2, 205, 150, 20);
fill(255);
rect(430, 205, 15, 20);
fill(0, 200, 0);
rect(445, 205, 15, 20);

strokeWeight(3);          //mouth
stroke(110, 90, 120);
line(380, 250, 380, 265);
line(385, 250, 385, 265);
line(390, 250, 390, 265);
line(395, 250, 395, 265);
line(400, 250, 400, 265);
line(405, 250, 405, 265);
line(410, 250, 410, 265);
line(415, 250, 415, 265);
line(420, 250, 420, 265);

//body
rectMode(CENTER)
noStroke();
fill(210, 140, 210);
rect(width/2, 380, 110, 100);

fill(255, 255, 255, 80);    //light
rect(430, 380, 20, 100);
}
