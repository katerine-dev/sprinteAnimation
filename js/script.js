const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.heigth = 600;

const playerImage = new Image();

playerImage.src = "../img/shadow_dog.png"


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
    //ctx.fillRect(100, 50, 100, 100);
    //
    //ctx.drawImage(image, sourcex, sourcey, sourcewidth, sourceheigth, destinationx, destinationy, destinationwidth, destinationheigth);
    ctx.drawImage(playerImage, 0, 0, 500, 500, 0, 0, CANVAS_WIDTH,CANVAS_HEIGHT)
    requestAnimationFrame(animate);
}

animate();