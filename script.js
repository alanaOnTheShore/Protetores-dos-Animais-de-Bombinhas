// MENU HAMBURGUER
let menuHamburger = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

menuHamburger.addEventListener("click", function () {
  menu.classList.toggle("ativa");
});

//BOTAO VOLTAR AO TOPO
const btn = document.getElementById("btn-voltar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});
