const burgerBtn = document.querySelector('.burger-menu');
const closeMenuBtn = document.querySelector('.close-btn');
const backdropEl = document.querySelector('.menu-backdrop');
const modalEl = document.querySelector('.menu-backdrop>.menu');

function toggleMenu() {
  if (!modalEl.classList.contains('is-open')) {
    modalEl.classList.add('is-open');
    backdropEl.addEventListener('click', parseClick);
    document.addEventListener('keydown', parseKeydown);
    closeMenuBtn.addEventListener('click', toggleMenu);
  } else {
    modalEl.classList.remove('is-open');
    backdropEl.removeEventListener('click', parseClick);
    document.removeEventListener('keydown', parseKeydown);
    closeMenuBtn.removeEventListener('click', toggleMenu);
  }
}

burgerBtn.addEventListener('click', toggleMenu);

const parseKeydown = event => {
  if (event.code === 'Escape') toggleMenu();
};

const parseClick = event => {
  if (event.target === document.querySelector('.menu-backdrop')) toggleMenu();

  const closestLink = event.target.closest('a');

  if (closestLink?.classList.contains('nav-link')) toggleMenu();
  if (closestLink?.classList.contains('soc-link')) toggleMenu();
};
