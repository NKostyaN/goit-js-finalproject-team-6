document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    if (link.getAttribute('href') === '.' + currentPath) {
      link.classList.add('active');
    }
  });

  if (!document.querySelector('.nav-link.active')) {
    navLinks[0].classList.add('active');
  }
});
