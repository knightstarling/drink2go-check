const mainNav = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-navigation__button');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('main-navigation--closed');
  mainNav.classList.toggle('main-navigation--opened');
});
