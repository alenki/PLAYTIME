// Contacts
document.querySelector(".contacts-button").addEventListener('click', () => {
    var modal = new bootstrap.Modal(document.getElementById('contactsModal'), {
        keyboard: false
    })
    modal.toggle()
});
document.querySelector(".contacts-mobile-button").addEventListener('click', () => {
    var modal = new bootstrap.Modal(document.getElementById('contactsModal'), {
        keyboard: false
    })
    modal.toggle()
});
document.querySelector(".contacts-mobile3-button").addEventListener('click', () => {
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
document.querySelector(".language-mobile-button").addEventListener('click', () => {
    location.reload();
});
document.querySelector(".language-mobile3-button").addEventListener('click', () => {
    location.reload();
});

// Register button
document.querySelector(".register-button").addEventListener('click', () => {
    var modal = new bootstrap.Modal(document.getElementById('registerModal'), {
        keyboard: false
    })
    modal.toggle()
})


