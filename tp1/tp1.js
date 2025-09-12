//Link del Video: https://www.youtube.com/watch?v=Y1uTF9fC7Pw
let referencia;
function preload(){
  referencia = loadImage("miImagen.jpg");
}
function setup() {
  createCanvas(800, 400);
  background(255);
  line(400, 0, 400, 400);
}

function draw() {
  // Ayuda para posiciones
  // console.log(mouseX, mouseY);
  image(referencia, 420, 0, -420, 0);
  if (miColor() == false) {
    figura();
  } else if (miColor() == true) {
    figuraColor();
  }
}

