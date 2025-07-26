// scripts/animaciones.js
document.addEventListener('DOMContentLoaded', () => {
  const animated = document.querySelectorAll(
    '.section-animate, .servicio-card, .contact-card, .mv-card'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animated.forEach(el => {
    observer.observe(el);
  });
});