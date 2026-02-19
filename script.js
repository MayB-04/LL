function startGame() {
    alert("The game is starting!");
    console.log("Button clicked!");
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
    emoji.style.fontSize = "100px"; 

    kissContainer.appendChild(mwah);
    kissContainer.appendChild(emoji);
    document.body.appendChild(kissContainer);

    setTimeout(() => {
        kissContainer.remove();
    document.body.classList.remove('pink-background');
   },2000);
}
kissBtn.addEventListener('click',surpriseKiss);
