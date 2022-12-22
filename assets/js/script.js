let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.nav__collapse');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});
let burger = document.querySelector('.burger');
let bannerMenu = document.querySelector('.banner__nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  bannerMenu.classList.toggle('is-active');
});


var swiper = new Swiper(".mySwiper", {
  effect: "cube",
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });