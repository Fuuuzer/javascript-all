const slider = document.querySelectorAll(".slider");
let currentSlide = 0;

function startSlider() {
  let jorge = Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000;
  slider[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slider.length;

  slider[currentSlide].classList.add("active");

  setTimeout(startSlider, jorge);
}

startSlider();
