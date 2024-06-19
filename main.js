function replaceWithText() {
    var heart = document.getElementById('heart');

    if (heart.innerHTML === '❤') {
        heart.innerHTML = 'J4nas';
    } else {
        heart.innerHTML = '❤';
    }
}

function copyToClipboard() {
    var ipText = 'Arasia.net';
    var tempInput = document.createElement('input');
    tempInput.value = ipText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

function showPopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');

    popup.classList.add('show');
    overlay.classList.add('show');
}

function closePopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');

    popup.classList.remove('show');
    overlay.classList.remove('show');
}

function redirectToLink(url) {
    window.location.href = url;
}

function webdiscordjs() { 
    window.open('https://discord.gg/UJ9WhWJ7gp');
}

document.addEventListener("DOMContentLoaded", function() {
    const voteLink = document.querySelector(".votenv a");
    voteLink.addEventListener("click", function(event) {
        event.preventDefault();
        const voteDiv = document.querySelector("#vote-div");
        voteDiv.scrollIntoView({ behavior: "smooth" });
    });
});

