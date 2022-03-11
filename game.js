let canvas= document.getElementById('canvas');
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;
let c= canvas.getContext('2d');

// Ping pong bat
let batPosX=5;
let batPosY= 200; 
let batWidth= 130;
let batD= 12;

// Ping pong ball
let ballPosX= 300;
let ballPosY= 250;
let ballWidth= 10;
let dx= 5;
let dy= 5;

window.addEventListener('keydown', (e)=>{
    console.log(e.keyCode)
    if(e.keyCode==38){
        console.log('up key is pressed here');
        batPosY= batPosY -batD;
    }
    else if(e.keyCode== 40){
        console.log('down key is pressed here');
        batPosY= batPosY+batD;
    }
})

function draw() {
    c.fillStyle= 'rgb(12,12,12)';
    c.fillRect(0, 0, window.innerWidth, window.innerHeight);
    console.log('hello world');
    c.fillStyle='white';
    c.fillRect(batPosX, batPosY, 10, batWidth);

    //Ping Pong Ball
    c.fillRect(ballPosX, ballPosY, ballWidth, ballWidth);
    ballPosX= ballPosX+ dx;
    ballPosY= ballPosY+dy;

    //ball motion and reflection
    if (ballPosX+ ballWidth>window.innerWidth || (ballPosX-ballWidth< 0 && (ballPosY >batPosY && ballPosY< batPosY+batWidth))) {
        dx= -dx;
    }
    else if(ballPosY+ ballWidth> window.innerHeight || ballPosY- ballWidth<0){
        dy= - dy;
    }


    requestAnimationFrame(draw);
}
draw();

// ballPosY >batPosY && ballPosY< batPosY+100