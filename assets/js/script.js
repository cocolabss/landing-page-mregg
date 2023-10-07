'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

  });

}



/**
 * header sticky functionality
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 20 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 800 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});

// Obtener elementos del DOM y almacenarlos en un arreglo
var openModalBtns = [
  document.getElementById('openModalBtn'),
  document.getElementById('openModalBtn2'),
  document.getElementById('openModalBtn3'),
  document.getElementById('openModalBtn4')
];

var closeModalBtns = [
  document.getElementById('closeModalBtn'),
  document.getElementById('closeModalBtn2'),
  document.getElementById('closeModalBtn3'),
  document.getElementById('closeModalBtn4')
];

var modals = [
  document.getElementById('myModal'),
  document.getElementById('myModal2'),
  document.getElementById('myModal3'),
  document.getElementById('myModal4')
];

// Agregar evento a los botones para abrir las modales correspondientes
openModalBtns.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
      modals[index].style.display = 'block';
  });
});

// Agregar evento a los botones para cerrar las modales correspondientes
closeModalBtns.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
      modals[index].style.display = 'none';
  });
});

// Cerrar las modales si se hace clic fuera de ellas
window.addEventListener('click', function (event) {
  modals.forEach(function (modal) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });
});

