/* --- NAVIGATION & LOVE MODE LOGIC --- */

// Modified: This now opens the password popup instead of the new page
function showPasswordPrompt() {
    const passwordOverlay = document.getElementById('password-overlay');
    if (passwordOverlay) {
        passwordOverlay.classList.remove('hidden');
    } else {
        // Fallback: if the overlay isn't in your HTML yet, just start the game
        window.location.href = "page1.html"; 
    }
}

// Function to handle the actual password check
function handlePlay() {
    const userInput = document.getElementById('password-input').value.toLowerCase();
    
    // 1. Check if the password is correct
    if (userInput.includes("sailor song")) {
        localStorage.setItem('loveUnlocked', 'true');
        alert("💖 Love Mode Activated! 💖");
    } else {
        // 2. If wrong, default to NO love mode
        localStorage.setItem('loveUnlocked', 'false');
        alert("That's not it! Entering normal mode... 🐸");
    }

    // 3. Either way, send them to the next page now
    window.location.href = "page1.html";
}

// Function to skip password and play regular mode
function skipToNormal() {
    localStorage.setItem('loveUnlocked', 'false');
    window.location.href = "page1.html";
}

// Function to close the popup if they hit 'X'
function togglePasswordPopup() {
    const overlay = document.getElementById('password-overlay');
    overlay.classList.add('hidden');
}


/* --- YOUR EXISTING KISS LOGIC --- */

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
    }, 2000);
}

if (kissBtn) {
    kissBtn.addEventListener('click', surpriseKiss);
}


/* --- YOUR EXISTING FROG LOGIC --- */

const frog = document.getElementById('frog-sprite');

if (frog) {
    frog.addEventListener('mouseenter', () => {
        frog.classList.add('jump');
    });

    frog.addEventListener('mouseleave', () => {
        frog.classList.remove('jump');
    });
}