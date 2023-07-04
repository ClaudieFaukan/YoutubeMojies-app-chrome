// content.js

// Fonction pour injecter les emojis dans la barre de lecture de YouTube
function injectEmojis() {
    const videoBar = document.querySelector('.ytp-left-controls');

    if (!videoBar) {
        // La barre de lecture n'est pas disponible
        return;
    }

    const emojisContainer = document.createElement('div');
    emojisContainer.className = 'youtube-mojies-container';

    const emojis = ['🔥', '😂', '😢', '❤️', '😄'];

    emojis.forEach(emoji => {
        const emojiButton = document.createElement('button');
        emojiButton.className = 'youtube-mojies-button';
        emojiButton.innerText = emoji;

        emojiButton.addEventListener('click', () => {
            const videoUrl = window.location.href;
            const currentTime = document.querySelector('.ytp-time-current').textContent;
            const emojiClicked = emoji;

            // Envoi des informations à l'API
            sendEmojiData(videoUrl, currentTime, emojiClicked);
        });

        emojisContainer.appendChild(emojiButton);
    });

    videoBar.appendChild(emojisContainer);
}

// Fonction pour envoyer les données de l'emoji à l'API
function sendEmojiData(videoUrl, currentTime, emojiClicked) {


    // Remplacez 'URL_API' par l'URL réelle de votre API
    const apiUrl = 'URL_API';

    const data = {
        videoUrl,
        currentTime,
        emojiClicked
    };

    console.log(data);
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            // Traitez la réponse de l'API si nécessaire
            console.log('Données envoyées à l\'API avec succès');
        })
        .catch(error => {
            // Gérez les erreurs d'envoi à l'API
            console.error('Erreur lors de l\'envoi des données à l\'API:', error);
        });
}

// Injection des emojis lorsque la page YouTube est chargée
window.addEventListener('load', () => {
    injectEmojis();
});
