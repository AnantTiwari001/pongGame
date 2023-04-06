let canvas= document.getElementsByTagName('canvas')[0]
canvas.width= window.innerWidth
canvas.height=window.innerHeight
let c= canvas.getContext('2d')

window.addEventListener('keydown', batMovement)

// bat y-cordinate
let baty=0;
let batMove=10;
let batWidth= 100;
// ball x and y coordinates
let ballx= Math.random()*window.innerWidth;
let bally= Math.random()*window.innerHeight;
let ballWidth=10;
let dx= 3;
let dy=3;


// drawing a rectangle
c.fillStyle='black'
// c.fillRect(0,0,100, 50)
// c.ellipse(10,10,10,10)

// ball reflection and motion
function ballReflection(x, y){
    // if the bat is in sight of ball
    // let batWinStatus= bally+ballWidth> baty && bally >baty;
    let batWinStatus= bally>baty && bally< (baty+100);
    if(x+ballWidth>window.innerWidth){   //x direction
        dx=-dx;
    }
    if(y>window.innerHeight || y-ballWidth<0){
        dy=-dy;
    }
    if(x<10 && batWinStatus){
        dx=-dx
    }
    console.log(batWinStatus)
}

function batMovement(e){
    console.log(e.key)
    if(e.key==='ArrowUp' && baty>0){
        baty-=batMove
    }else if(e.key==='ArrowDown' && baty+100<window.innerHeight){
        baty+=batMove
    }
}


function frame(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillRect(2, baty, 10, batWidth)
    c.fillRect(ballx, bally, ballWidth, ballWidth);
    ballx+=dx;
    bally+=dy;
    ballReflection(ballx, bally);
    if (ballx<0) {
        window.cancelAnimationFrame()
        console.log('done the game baby!')
    }
    requestAnimationFrame(frame)
}

frame()