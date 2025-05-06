const swiper = new Swiper(".swiper", {
  grid: {
    rows: 2,
    fill: "row",
  },
  slidesPerView: 1,
  spaceBetween: 22,
  navigation: {
    nextEl: ".reviews__arrow-next",
    prevEl: ".reviews__arrow-prev",
  },
  breakpoints: {
    640: {
      grid: {
        rows: 1,
      },
      slidesPerView: 2,
    },
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
  const parent = title.parentNode;
  const content = parent.querySelector(".accordion__text");

  title.addEventListener("click", toggleAccordion);
  title.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordion.call(title);
    }
  });

  function toggleAccordion() {
    const isActive = parent.classList.contains("accordion__item--active");

    document.querySelectorAll(".accordion__item").forEach((item) => {
      item.classList.remove("accordion__item--active");
      item
        .querySelector(".accordion__title")
        .setAttribute("aria-expanded", "false");
      const openContent = item.querySelector(".accordion__text");
      openContent.style.maxHeight = "0";
    });

    if (!isActive) {
      parent.classList.add("accordion__item--active");
      title.setAttribute("aria-expanded", "true");
      content.style.maxHeight = content.scrollHeight + "px";

      content.addEventListener("transitionend", function handler() {
        if (parent.classList.contains("accordion__item--active")) {
          content.style.maxHeight = "none"; // Allow natural resizing
        }
        content.removeEventListener("transitionend", handler);
      });
    }
  }
});
