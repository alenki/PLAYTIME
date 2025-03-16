const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const requiredFields = document.querySelectorAll(".reqField")
const modal_body = document.querySelector(".custom-registration-modal-body");
const scriptURL = 'https://script.google.com/macros/s/AKfycby2wJQKELPDoqwEaFRSud-kl-8TArPUHs71WF9U2zZ94objwWUqPW4R7klZIgLDHQTKbA/exec'

// Проверка при любом инпуте
form.addEventListener('input', function() {
    // Проверка заполнения полей
    const allFilled = Array.from(requiredFields).every(field => field.value.trim() !== '');
    if (allFilled) {
        submitButton.classList.remove('disabled');
        submitButton.setAttribute("aria-disabled", "false");
        submitButton.setAttribute("tabindex", "0");
    } else {
        submitButton.classList.add('disabled');
        submitButton.setAttribute("aria-disabled", "true");
        submitButton.setAttribute("tabindex", "-1");
    }
});

// Обработка подтверждения регистрации
submitButton.onclick = function(e) {
    const formData = new FormData(form);
    submitForm(formData);

    // submit to google sheets
    function submitForm(formData) {
        submitButton.disabled = true
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors'})
        .then(response => {
            submitButton.disabled = false
            modal_body.innerHTML = "<span style=\"font-size: 1.5rem;\" class=\"col-form-label Russian\">Успешно!</span>";
            modal_body.classList.add("successfull_registration");
            submitButton.classList.add("d-none");
        })
        .catch(error => {
            alert('Ошибка! Обратитесь к +7 (928) 691-26-02.', error.message)
            submitButton.disabled = false
        })
    }
}
// End of Обработка подтверждения регистрации