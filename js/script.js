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


// Register button
document.querySelector(".register-button").addEventListener('click', () => {
    var modal = new bootstrap.Modal(document.getElementById('registerModal'), {
        keyboard: false
    })
    modal.toggle()
})


