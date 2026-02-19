function startGame() {
   window.location.href = "page1.html";   
}

const kissBtn = document.getElementById('surprise-kiss');
function surpriseKiss(){
    document.body.classList.add('pink-background');

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
    document.body.classList.remove('pink-background');
   },2000);
}
kissBtn.addEventListener('click',surpriseKiss);

const frog = document.getElementById('frog-sprite');

frog.addEventListener('mouseover', () => {
    frog.style.animationDuration = '0.4s'; 
});

frog.addEventListener('mouseout', () => {
    frog.style.animationDuration = '0.8s'; 
});

