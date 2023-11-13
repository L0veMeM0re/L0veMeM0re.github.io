document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("image-slider");
  const slider1 = document.getElementById("image-slider1");


  let currentSlide = 0;
  const totalSlides = slider.querySelectorAll("img").length;

  slider.addEventListener("click", function (e) {
    const { clientX } = e;

    if (clientX < slider.offsetWidth / 2) {
      // Нажатие на левую часть слайдера
      goToSlide(currentSlide - 1);
    } else {
      // Нажатие на правую часть слайдера
      goToSlide(currentSlide + 1);
    }
  });

  function goToSlide(slideIndex) {
    if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }

    slider.style.scrollLeft = slideIndex * slider.offsetWidth;
    currentSlide = slideIndex;
  }
});
