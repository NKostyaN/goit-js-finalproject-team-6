const toggleMenu = (state = '') => {
  const backdropEl = document.querySelector('.menu-backdrop');
  const modalEl = document.querySelector('.menu-backdrop>.menu');

  if (!modalEl.classList.contains('is-open') || 'open' === state) {
    modalEl.classList.add('is-open');
    backdropEl.addEventListener('click', parseClick);
    document.addEventListener('keydown', parseKeydown);
  } else {
    modalEl.classList.remove('is-open');
    backdropEl.removeEventListener('click', parseClick);
    document.removeEventListener('keydown', parseKeydown);
  }
};

const parseKeydown = event => {
  if (event.code === 'Escape') toggleMenu('close');
};

const parseClick = event => {
  if (event.target === document.querySelector('.menu-backdrop'))
    toggleMenu('close');

  const closestLink = event.target.closest('a');

  if (closestLink?.classList.contains('nav-link')) toggleMenu('close');
  if (closestLink?.classList.contains('soc-link')) toggleMenu('close');
};
