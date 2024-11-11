document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  let currentPath = window.location.pathname;
  if (currentPath == '/') {
    currentPath = '/index.html';
  }
  navLinks.forEach(link => {
    if (link.getAttribute('href').endsWith(currentPath)) {
      link.classList.add('active');
    }
  });

  if (!document.querySelector('.nav-link.active')) {
    navLinks[0].classList.add('active');
  }
});
