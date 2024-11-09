document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    if (
      currentPage.includes('index.html') &&
      link.getAttribute('href').includes('index.html')
    ) {
      link.classList.add('active');
    } else if (
      currentPage.includes('favorites.html') &&
      link.getAttribute('href').includes('favorites.html')
    ) {
      link.classList.add('active');
    }
  });
});
