const scriptURL = 'https://script.google.com/macros/s/AKfycby2wJQKELPDoqwEaFRSud-kl-8TArPUHs71WF9U2zZ94objwWUqPW4R7klZIgLDHQTKbA/exec'


// navbar
const navbar = document.querySelector('.custom-navbar');
const navbar_default = navbar.innerHTML;
let navbar_hovered = false;
navbar.addEventListener("transitionend", () => {
  if(navbar_hovered){
    navbar.innerHTML = navbar_default;
    navbar_hovered = false;
  }
}); 
navbar.addEventListener("mouseover", () => {
  if(!navbar_hovered) {
    navbar.innerHTML+=`
      <div class="contacts-button ms-3 text-center" id="contacts-button"><span class="">Контакты</span></div>
      <div class="language-button ms-3 text-center" id="language-button"><span class="">English</span></div>
    `
    navbar_hovered = true;
  }
});