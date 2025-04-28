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

const accordionTitles = document.querySelectorAll(".accordion__title");

accordionTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const parent = title.parentNode;
    const content = parent.querySelector(".accordion__text");

    if (parent.classList.contains("accordion__item--active")) {
      // Closing
      content.style.maxHeight = content.scrollHeight + "px"; // Set to current height
      requestAnimationFrame(() => {
        content.style.maxHeight = "0"; // Then collapse
      });
      parent.classList.remove("accordion__item--active");
    } else {
      // Closing all others
      document.querySelectorAll(".accordion__item").forEach((item) => {
        if (item !== parent) {
          item.classList.remove("accordion__item--active");
          const openContent = item.querySelector(".accordion__text");
          openContent.style.maxHeight = openContent.scrollHeight + "px"; // Set to current height first
          requestAnimationFrame(() => {
            openContent.style.maxHeight = "0";
          });
        }
      });

      // Opening clicked one
      parent.classList.add("accordion__item--active");
      content.style.maxHeight = content.scrollHeight + "px";

      // After transition finishes, remove the max-height so it becomes flexible
      content.addEventListener("transitionend", function handler() {
        if (parent.classList.contains("accordion__item--active")) {
          content.style.maxHeight = "none";
        }
        content.removeEventListener("transitionend", handler); // Remove listener after firing once
      });
    }
  });
});
