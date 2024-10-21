const hero = document.querySelector('.hero');
const slider = document.querySelector('.hero__list');
const slides = slider.querySelectorAll('.hero__item');
const prevButton = document.querySelector('.hero__button--prev');
const nextButton = document.querySelector('.hero__button--next');
const steps = document.querySelectorAll('.hero__slide-button');

const TABLET_WIDTH = 768;
const { width } = slider.getBoundingClientRect();

let Colors;
let position = 0;
let stepIndex = 0;

prevButton.disabled = true;

const setBackgroundColors = () => {
  if (width === TABLET_WIDTH) {
    Colors = [
      'linear-gradient(to bottom, #F3EBE1 640px, #FFFFFF 640px)',
      'linear-gradient(to bottom, #EAE6FC 640px, #FFFFFF 640px)',
      'linear-gradient(to bottom, #E5E6E8 640px, #FFFFFF 640px)',
    ];
  } else {
    Colors = ['#F3EBE1', '#EAE6FC', '#E5E6E8'];
  }
};

setBackgroundColors();

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

  if (width === TABLET_WIDTH) {
    hero.style.backgroundImage = `${Colors[stepIndex]}`;
  } else {
    hero.style.backgroundColor = `${Colors[stepIndex]}`;
  }

  if (stepIndex === slides.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
    prevButton.disabled = false;
  }

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

  if (width === TABLET_WIDTH) {
    hero.style.backgroundImage = `${Colors[stepIndex]}`;
  } else {
    hero.style.backgroundColor = `${Colors[stepIndex]}`;
  }

  if (stepIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }

  currentSlide(stepIndex);
};

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

steps.forEach((step, index) => {
  step.addEventListener('click', () => {
    position = width * index;
    slider.style.transform = `translateX(${-position}px)`;
    stepIndex = index;
    hero.style.backgroundColor = `${Colors[stepIndex]}`;
    currentSlide(stepIndex);
  });
});
