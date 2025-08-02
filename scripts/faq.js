// scripts/faq.js
document.addEventListener('DOMContentLoaded', function () {
  // FAQ accordion logic
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.parentElement;
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
      if (!open) {
        item.classList.add('open');
        this.classList.add('active');
      }
    });
  });

  // Show accordion when clicking "Ver preguntas frecuentes"
  const faqBtn = document.querySelector('.btn-primary');
  const faqAccordion = document.querySelector('.faq-accordion');
  if (faqBtn && faqAccordion) {
    faqAccordion.style.display = 'none';
    faqBtn.addEventListener('click', function (e) {
      e.preventDefault();
      faqAccordion.style.display = 'block';
      faqBtn.style.display = 'none';
      // Optionally scroll to the accordion
      faqAccordion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});