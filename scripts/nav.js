document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.querySelector('.main-nav ul');
  const navLinks = document.querySelectorAll('.main-nav ul li a');
  const navbar = document.querySelector('.main-header');

  navToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    navMenu.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        e.stopImmediatePropagation(); // <-- fuerza detener otros listeners
        if (window.innerWidth <= 900) {
          navMenu.classList.remove('open');
        }
        const target = document.querySelector(href);
        if (target) {
          let navHeight = navbar.offsetHeight || 70;
          if (navHeight < 60 || navHeight > 120) navHeight = 80;
          const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
          // Forzar el scroll después de un pequeño delay para asegurar el cierre del menú
          setTimeout(() => {
            window.scrollTo({
              top: targetTop,
              behavior: 'smooth'
            });
          }, 10);
        }
      }
    });
  });
});