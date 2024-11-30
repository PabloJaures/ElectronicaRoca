const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[currentIndex].classList.add('active');
});

nextButton.addEventListener('click', () => {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add('active');
});