document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  const setNav = () => nav && nav.classList.toggle('scrolled', window.scrollY > 20);
  setNav();
  window.addEventListener('scroll', setNav, {passive:true});

  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) a.classList.add('active');
  });
  if (current.startsWith('service-') || current === 'services.html') {
    const servicesLink = document.querySelector('.navbar .dropdown-toggle');
    if (servicesLink) servicesLink.classList.add('active');
  }

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const alert = document.querySelector('#formAlert');
      if (alert) {
        alert.classList.remove('d-none');
        alert.innerHTML = '<strong>Thank you for contacting Logic Plus.</strong><br>Your enquiry has been captured by this demo form. Connect the form to your email or CRM endpoint before publishing.';
      }
      form.reset();
    });
  }

  document.querySelectorAll('.globalContactForm').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    const box = form.closest('.modal-body').querySelector('.globalFormAlert');
    box.classList.remove('d-none');
    box.innerHTML = '<strong>Thank you for contacting Logic Plus.</strong><br>Your enquiry has been captured by this demo form. Connect the form to your email or CRM endpoint before publishing.';
    form.reset();
  }));

  const backTop = document.querySelector('#backToTop');
  if (backTop) {
    const toggleBackTop = () => backTop.classList.toggle('show', window.scrollY > 450);
    toggleBackTop();
    window.addEventListener('scroll', toggleBackTop, {passive:true});
    backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }
});
