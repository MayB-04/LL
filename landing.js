function startGame() {
   window.location.href = "page1.html";   
}

const kissBtn = document.getElementById('surprise-kiss');
function surpriseKiss(){
    const blurOverlay = document.createElement('div');
    blurOverlay.classList.add('blur-overlay');
    document.body.appendChild(blurOverlay);

    const kissContainer = document.createElement('div');
    kissContainer.classList.add('kiss-overlay');

    const mwah = document.createElement('span');
    mwah.innerText = "Mwah!";
    mwah.classList.add('mwah-text');

    const emoji = document.createElement('span');
    emoji.innerText = "💋";
    emoji.style.fontSize = "200px"; 

    kissContainer.appendChild(mwah);
    kissContainer.appendChild(emoji);
    document.body.appendChild(kissContainer);

    setTimeout(() => {
        kissContainer.remove();
        blurOverlay.remove();
   },2000);
}
kissBtn.addEventListener('click',surpriseKiss);

const frog = document.getElementById('frog-sprite');

if (frog) {
    frog.addEventListener('mouseenter', () => {
        frog.classList.add('jump');
    });

    frog.addEventListener('mouseleave', () => {
        frog.classList.remove('jump');
    });
}

