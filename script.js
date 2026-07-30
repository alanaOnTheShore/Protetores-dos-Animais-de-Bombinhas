let menuHamburger = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

menuHamburger.addEventListener("click", function () {
  menu.classList.toggle("ativa");
});
