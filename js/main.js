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

const accordionTitle = document.querySelectorAll(".accordion__title");
accordionTitle.forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentNode;

    if (parent.classList.contains("accordion__item--active")) {
      parent.classList.remove("accordion__item--active");
    } else {
      accordionTitle.forEach((item) =>
        item.parentNode.classList.remove("accordion__item--active")
      );

      parent.classList.add("accordion__item--active");
    }
  });
});
