// ======= CONFIGURATION =======
// Change text, image paths here
let storyStep = 0;
const messages = {
    firstPopup: { 
    content: `
    <img src="Mahal.jpeg" width="250">
    <p>Hi love! Here’s a little surprise ❤️</p>
    <br>
    <button onclick="showPopup(messages.valentineAsk)">Continue ❤️</button>
    `
},
    valentineAsk: `<p>Will you be my Valentine?</p><button onclick="valentineChoice('yes')">Yes</button> <button onclick="valentineChoice('no')">No</button>`,
    anotherChance: `<p>Aw, please? 😿</p><img src="Cat.gif" width="200"><button onclick="showPopup(valentineAsk)">Another Chance</button>`,
    bouquet: `<img src="Flowers.jpeg" width="250"><p>I love you 💕</p><button onclick="showGiftOptions()">Continue</button>`,
    giftOptions: `<p>Surprise gift for you 🎁</p>
    <div>
        <button onclick="showFavoritePictures()">Favourite Pictures</button>
        <button onclick="showSong()">Song That Reminds Me of You</button>
        <button onclick="showLongMessage()">To My Valentine</button>
    </div>`,
    favoritePictures: `<p>Favourite Pictures 📸</p>
    <img src="Polaroid1.jpeg" width="120"><img src="Polaroid2.jpeg" width="120"><img src="Polaroid3.jpeg" width="120">
    <br><button onclick="showGiftOptions()">Back</button>`,
    song: `<p>Song That Reminds Me of You 🎵</p>
    <iframe width="100%" height="200" src="https://youtu.be/pSAtptOY7dI?si=r1YGxUfUbJ1iiaA7" frameborder="0" allowfullscreen></iframe>
    <br><button onclick="showGiftOptions()">Back</button>`,
    longMessage: `<h2>To My Valentine ❤️</h2>
    <p>I LOVEEEE YOUUUUUUU SL SL SL SL SO SO SKOOOO MUCHHH</p>
    <button onclick="showGiftOptions()">Back</button>`
};

// ======= CORE FUNCTIONS =======
const envelope = document.getElementById('envelope');
const popup = document.getElementById('popup');
const popupBody = document.getElementById('popup-body');
const popupClose = document.getElementById('popup-close');

envelope.addEventListener('click', () => {
    showPopup(messages.firstPopup.content);
});

popupClose.addEventListener('click', () => {
    nextStep();
});

function nextStep() {
    storyStep++;

    if(storyStep === 1) {
        showPopup(messages.valentineAsk);
    }
    else if(storyStep === 2) {
        showPopup(messages.bouquet);
    }
    else if(storyStep === 3) {
        showGiftOptions();
    }
    else {
        hidePopup();
    }
}

function showPopup(content) {
    popupBody.innerHTML = content;
    popup.style.display = 'block';
}

function hidePopup() {
    popup.style.display = 'none';
}

// Valentine Choice Logic
function valentineChoice(choice) {
    if(choice==='yes') showPopup(messages.bouquet);
    else showPopup(messages.anotherChance);
}

// Gift Options
function showGiftOptions() { showPopup(messages.giftOptions); }
function showFavoritePictures() { showPopup(messages.favoritePictures); }
function showSong() { showPopup(messages.song); }
function showLongMessage() { showPopup(messages.longMessage); }
