document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  const parts = window.location.pathname.split('/');
  let currentPath;
  if (parts.length == 0) {
    currentPath = 'index.html';
  } else {
    currentPath = parts[parts.length - 1];
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
