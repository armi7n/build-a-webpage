const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
const swiper = new Swiper(".mySwiper", {
  loop: true,
  rtl: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  speed: 800,
});
