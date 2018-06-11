var link = document.querySelector(".contacts__btn");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var switchers = document.querySelectorAll(".slider__inner");
var body = document.querySelector("body");
var modalClose = document.querySelector(".modal__close");
var form = popup.querySelector(".modal-form");
var firstName = popup.querySelector("[name=first-name]");
var email = popup.querySelector(".modal-form__email");

link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-feedback--show");
  overlay.classList.add("modal-overlay--show");
});

modalClose.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-feedback--show");
  overlay.classList.remove("modal-overlay--show");
  popup.classList.remove("modal-feedback--error");
});
form.addEventListener("submit", function (evt) {
  if (!firstName.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-feedback--error");
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-feedback--show")) {
      popup.classList.remove("modal-feedback--show");
      overlay.classList.remove("modal-overlay--show");
      popup.classList.remove("modal-feedback--error");
    }
  }
});


/*===== slider ===*/
for(var i = 0; i < switchers.length; i++){
  switchers[i].addEventListener("click", function(evt){
    evt.preventDefault();
    for(var k = 0; k < switchers.length; k++){
      switchers[k].classList.remove("slider__inner--active");
    };
    this.classList.add("slider__inner--active");
    body.className = "";
    var id = this.dataset.id;
    body.classList.add("bg-icecream-" + id);
  });
};



