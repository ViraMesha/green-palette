const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 22,
  navigation: {
    nextEl: ".reviews__arrow-next",
    prevEl: ".reviews__arrow-prev",
  },
  loop: true,
});

const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu--open");
});
