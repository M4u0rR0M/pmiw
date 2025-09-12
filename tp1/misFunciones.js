let colorActivo = false;

function miColor() {
  if (keyIsDown(90)) { // 90 es el código de la tecla 'z'
    colorActivo = true;
  }
  if (keyIsDown(88)) { // 88 es el código de la tecla 'x'
    colorActivo = false;
  }
  return colorActivo;
}

function figura() {
  push();
  translate(400, 0);
  noStroke();
  for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
      fill(0);
    } else {
      fill(255);
    }
    if (i >= 8) {
      ellipse(270 - i * 6, 120 + i * 4, 320 - i * 15, 320 - i * 15.1);
    } else {
      ellipse(200 + i * 4, 200 - i * 8.5, 325 - i * 15, 325 - i * 15);
    }
  }
  noFill();
  stroke(255);
  strokeWeight(25);
  ellipse(200, 200, 340, 340);
  pop();
}

function figuraColor() {
  push();
  translate(400, 0);
  noStroke();
  for (let i = 0; i < 20; i++) {
    fill(random(255), random(255), random(255));
    if (i >= 8) {
      ellipse(270 - i * 6, 120 + i * 4, 320 - i * 15, 320 - i * 15.1);
    } else {
      ellipse(200 + i * 4, 200 - i * 8.5, 325 - i * 15, 325 - i * 15);
    }
  }
  noFill();
  stroke(255);
  strokeWeight(25);
  ellipse(200, 200, 340, 340);
  pop();
}
