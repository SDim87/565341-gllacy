var link = document.querySelector(".contacts__btn ");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-feedback--show");
  overlay.classList.add("modal-overlay--show");
});

