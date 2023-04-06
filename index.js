let canvas= document.getElementsByTagName('canvas')[0]
canvas.width= window.innerWidth
canvas.height=window.innerHeight
let c= canvas.getContext('2d')

document.getElementById('reload').addEventListener('click', ()=>{location.reload()})

let relativeVelocity=0

window.addEventListener('keydown', batMovement)
window.addEventListener('keyup',()=>{relativeVelocity=0})

// bat coordinates
let batx=0;
const baty= canvas.height
let batMove=10;
let batWidth= 100;
const batHeight= 10;
let batImage = new Image();
batImage.src = "./glasspaddle2.png";

// ball coordinates
let ballx= Math.random()*canvas.width;
let bally= Math.random()*(canvas.height/10);
let ballWidth=10;
let dx= 3;
let dy=3;
let ballImage= new Image();
ballImage.src= "./ball.png"

c.fillStyle='black';

// ball reflection and motion
function ballReflection(x, y){
    // if the bat is in sight of ball
    var batWinStatus= ballx>batx && ballx< (batx+batWidth)
    if(x+ballWidth>canvas.width || x<0){   //x direction
        dx=-dx;
    }
    if(y<0){
        dy=-dy;
    }
    if(y>(canvas.height-20) && batWinStatus){
        dy=-dy
        let score=document.getElementById('score')
        score.innerHTML=parseInt(score.innerHTML)+1
        // alert('hellow rold')
    }
    // console.log(batWinStatus)
}

function batMovement(e){
    console.log('pressed!')
    if(e.key==='ArrowLeft' && batx>0){
        batx-=batMove;
        relativeVelocity=-0.5;
    }else if(e.key==='ArrowRight' && batx+100<canvas.width){
        batx+=batMove;
        relativeVelocity=0.5;
    }
}
let frameId=0

// c.fillRect(100,615,50,100)


function frame(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    // c.fillRect(batx, canvas.height-2-batHeight, batWidth, batHeight)
    c.drawImage(batImage, batx, canvas.height - 2 - batHeight, batWidth, batHeight);
    // c.fillRect(ballx, bally, ballWidth, ballWidth);
    c.drawImage(ballImage, ballx, bally, ballWidth, ballWidth)
    ballx+=dx;
    bally+=dy;
    batVelocity=
    ballReflection(ballx, bally);
    if (bally>canvas.height) {
        window.cancelAnimationFrame(frameId);
        document.getElementById('gameOver').style.display='block'
        canvas.style.display='none';
        return(0)
        // console.log('done the game baby!')
    }
    if (bally>canvas.height-2-batHeight-10) {
        dx+=relativeVelocity;
    }
    frameId= requestAnimationFrame(frame)
}
frame()