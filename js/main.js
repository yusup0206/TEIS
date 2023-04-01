// SLIDER

const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  autoplay: {
    delay: 3000,
    disableOnInterraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,

  autoplay: {
    delay: 3000,
    disableOnInterraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
    100: {
      slidesPerView: 1,
    },
  },
});

// active nav
const navEl = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 178) {
    navEl.classList.add("nav-scrolled");
  } else if (window.scrollY < 178) {
    navEl.classList.remove("nav-scrolled");
  }
});

// Burger
const toggleBtn = document.querySelector(".toggle-btn");
const navBurger = document.querySelector(".nav-burger");

toggleBtn.addEventListener("click", () => {
  if (navBurger.classList.contains("active")) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  toggleBtn.classList.toggle("active");
  navBurger.classList.toggle("active");
});

const burgerDropdownBtn = document.querySelector(".nav-burger-dropdown-btn");
const burgerDropdown = document.querySelector(".nav-burger-dropdown");

burgerDropdownBtn.addEventListener("click", () => {
  burgerDropdownBtn.classList.toggle("active");
  burgerDropdown.classList.toggle("active");
});

// footer modal
const footerBtn = document.querySelector(".footer-modal-btn");
const footerModal = document.querySelector(".footer-modal");

footerBtn.addEventListener("click", () => {
  footerModal.classList.toggle("active");
});
