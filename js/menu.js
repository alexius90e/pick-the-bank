const burger = document.querySelector('.header__burger');

burger.addEventListener('click', () => {
  const menu = document.querySelector('.header__menu');
  document.body.classList.toggle('fixed');
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});
