const hero = document.querySelector('.hero');
const slider = document.querySelector('.hero__list');
const slides = slider.querySelectorAll('.hero__item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const steps = document.querySelectorAll('.hero__slide-button');

const COLORS = ['#F3EBE1', '#EAE6FC', '#E5E6E8'];

let position = 0;
let stepIndex = 0;

const { width } = slider.getBoundingClientRect();

const currentSlide = (index) => {
  for (const step of steps) {
    step.classList.remove('hero__slide-button--active');
  }

  steps[index].classList.add('hero__slide-button--active');
};

const nextSlide = () => {
  if (position < ((slides.length - 1) * width)) {
    position += width;
    stepIndex++;
  } else {
    return false;
  }

  slider.style.transform = `translateX(${-position}px)`;
  hero.style.backgroundColor = `${COLORS[stepIndex]}`;
  currentSlide(stepIndex);
};

const prevSlide = () => {
  if (position > 0) {
    position -= width;
    stepIndex--;
  } else {
    return false;
  }

  slider.style.transform = `translateX(${-position}px)`;
  hero.style.backgroundColor = `${COLORS[stepIndex]}`;
  currentSlide(stepIndex);
};

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

steps.forEach((step, index) => {
  step.addEventListener('click', () => {
    position = width * index;
    slider.style.transform = `translateX(${-position}px)`;
    stepIndex = index;
    currentSlide(stepIndex);
  });
});
