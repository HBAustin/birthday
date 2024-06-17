document.getElementById('confettiButton').addEventListener('click', function() {
    createConfetti();
    hidePushMe();
});

function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const confettiColors = ['#FFC107', '#FF5722', '#8BC34A', '#03A9F4', '#E91E63', '#9C27B0'];
    const emojis = ['🖕', '🐐', '🐮'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random()}s`;
        confettiContainer.appendChild(confetti);

        if (Math.random() < 0.1) {
            const emoji = document.createElement('div');
            emoji.classList.add('emoji');
            emoji.style.left = `${Math.random() * 100}%`;
            emoji.style.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.fontSize = '2rem';
            emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
            emoji.style.animationDelay = `${Math.random()}s`;
            confettiContainer.appendChild(emoji);

            emoji.addEventListener('animationend', () => {
                confettiContainer.removeChild(emoji);
            });
        }

        confetti.addEventListener('animationend', () => {
            confettiContainer.removeChild(confetti);
        });
    }
}

function hidePushMe() {
    const pushMeDiv = document.querySelector('.pushMe');
    if (pushMeDiv) {
        pushMeDiv.style.display = 'none';
    }
}