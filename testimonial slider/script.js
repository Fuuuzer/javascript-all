const slider = document.querySelectorAll('.slider');
let currentSlide = 0;
const slideInterval = 3000;


function nextSlide() {
  slider[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slider.length;

  slider[currentSlide].classList.add('active')

  console.log(currentSlide)

}

function startSlider() {
  setInterval(nextSlide, slideInterval)
}

startSlider()
