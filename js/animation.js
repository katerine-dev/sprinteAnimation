let playerState = "idle";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "../img/shadow_dog.png"
// Dog dimension:
const spriteWidth = 575;
const spriteHeight = 523;

let gameFrame = 0;
const staggerFrames = 5; // Dog speed - the bigger the number the slower
const spriteAnimations = [];
const animationStates = [
    {
        name:'idle',
        frames: 7,
    },
    {
        name:'jump',
        frames: 7,
    },
    {
        name:'fall',
        frames: 7,
    },
    {
        name:'run',
        frames: 9,
    },
    {
        name:'dizzy',
        frames: 11,
    },
    {
        name:'sit',
        frames: 5,
    },
    {
        name:'roll',
        frames: 7,
    },
    {
        name:'bite',
        frames: 7,
    },
    {
        name:'ko',
        frames: 12,
    },
    {
        name:'gethit',
        frames: 4,
    }
];

animationStates.forEach((state, index) => {
    let frames = {
        location: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.location.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].location.length; // only integers without decimal points
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].location[position].y;
 
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    //Explication: ctx.drawImage(image, sourcex, sourcey, sourcewidth, sourceheigth, destinationx, destinationy, destinationwidth, destinationheigth);

    gameFrame++
    requestAnimationFrame(animate);
}

animate();