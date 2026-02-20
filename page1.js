const backBtnLanding = document.getElementById('back-btn-landingPage');
function landingPage(){
    window.location.href = "index.html";
}
backBtnLanding.addEventListener('click',landingPage);

const bug = document.getElementById('bug');
const container = document.getElementById('game-container');

let posX = -100;      
let posY = 100;       
let targetY = 100;    
let speedX = 2;       
let speedY = 0;       

function flutterAcross() {
    const width = container.clientWidth;
    posX += speedX;

    if (Math.random() > 0.97) { 
        targetY = 50 + Math.random() * 150; 
    }

    let distanceToTarget = targetY - posY;
    speedY += distanceToTarget * 0.01; 
    speedY *= 0.85;                    
    posY += speedY;

    
    bug.style.left = posX + "px";
    bug.style.top = posY + "px";
    bug.style.transform = `rotate(${speedY * 8}deg)`;

    if (posX > width + 100) {
        posX = -100;
        posY = 100; 
    }

    requestAnimationFrame(flutterAcross);
}
flutterAcross();