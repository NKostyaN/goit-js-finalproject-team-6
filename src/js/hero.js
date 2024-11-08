// src/js/hero.js

document.addEventListener("DOMContentLoaded", () => {
    // Анімація заголовка при завантаженні сторінки
    const heroTitle = document.querySelector(".hero-title");
    heroTitle.style.transition = "transform 0.6s ease, opacity 0.6s ease";
    heroTitle.style.transform = "translateY(0)";
    heroTitle.style.opacity = "1";
  
    // Ефект натискання на теги
    document.querySelectorAll(".tag").forEach(tag => {
      tag.addEventListener("click", () => {
        tag.classList.toggle("active");
        alert(`You clicked on ${tag.innerText}`);
      });
    });
  
    // Змінний текст під заголовком
    const heroText = document.querySelector(".hero-text");
    const messages = [
      "Transform your physique with us.",
      "Join our community for a healthier life.",
      "Achieve your fitness goals with ease.",
    ];
  
    let index = 0;
    setInterval(() => {
      heroText.innerText = messages[index];
      index = (index + 1) % messages.length;
    }, 3000);
  
    // Анімація плавної появи всього блоку HERO
    const heroSection = document.querySelector(".HeroSection");
  
    const revealHero = () => {
      const sectionTop = heroSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight - 100) {
        heroSection.style.opacity = "1";
        heroSection.style.transform = "translateY(0)";
        window.removeEventListener("scroll", revealHero);
      }
    };
  
    heroSection.style.opacity = "0";
    heroSection.style.transform = "translateY(50px)";
    window.addEventListener("scroll", revealHero);
  });
  