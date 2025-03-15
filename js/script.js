const scriptURL = 'https://script.google.com/macros/s/AKfycby2wJQKELPDoqwEaFRSud-kl-8TArPUHs71WF9U2zZ94objwWUqPW4R7klZIgLDHQTKbA/exec'


// Home
document.querySelector(".home-menu-button").addEventListener('click', () => {
    location.reload();
});

// Contacts
document.querySelector(".contacts-button").addEventListener('click', () => {
    var modal = new bootstrap.Modal(document.getElementById('contactsModal'), {
        keyboard: false
    })
    modal.toggle()
});
document.querySelector(".contact-main-button").addEventListener('click', () => {
    var modal = new bootstrap.Modal(document.getElementById('contactsModal'), {
        keyboard: false
    })
    modal.toggle()
});

// Language
document.querySelector(".language-button").addEventListener('click', () => {
    location.reload();
});