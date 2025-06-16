const swiper = new Swiper(".reviews__swiper", {
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
const swiperTeam = new Swiper(".team__inner", {
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".team__arrow-next",
        prevEl: ".team__arrow-prev",
      },
      loop: true,
    },
  },
  361: {
    slidesPerView: 0,
  },
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

// scroll reveal
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 600,
  reset: true,
});

// custom configurations for specific elements
const revealFromTop = {
  origin: "top",
};

const revealWithInterval = {
  distance: "100px",
  interval: 100,
};

const revealFromLeft = {
  origin: "left",
  distance: "100px",
};

const revealFromRight = {
  origin: "right",
  distance: "100px",
};

const revealWithShortDistance = {
  distance: "60px",
};

const revealWithDelay = {
  distance: "100px",
  delay: 400,
};

// hero
sr.reveal(".header-content__box", revealFromTop);
sr.reveal(".header-content__img");
sr.reveal(".header__text", revealWithShortDistance);

// titles
sr.reveal(".title", revealWithDelay);
// subtitles
sr.reveal(".subtitle", revealFromTop);

// about
sr.reveal(".about-inner__img", revealFromLeft);
sr.reveal(".about-inner__box", revealFromRight);

// why
sr.reveal(".why__img", revealFromLeft);
sr.reveal(".why__list", revealFromRight);
sr.reveal(".why__item", revealWithInterval);

// projects
sr.reveal(".gallery-projects__item", revealWithInterval);
