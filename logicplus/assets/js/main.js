
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  const setNav = () => nav && nav.classList.toggle('scrolled', window.scrollY > 20);
  setNav(); window.addEventListener('scroll', setNav);

  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if(href === current || (current === '' && href === 'index.html')) a.classList.add('active');
  });

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const alert = document.querySelector('#formAlert');
      if(alert){ alert.classList.remove('d-none'); alert.textContent = 'Thank you. Your enquiry has been recorded in this demo form. Connect the form to your preferred email/CRM endpoint before publishing.'; }
      form.reset();
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('.globalContactForm').forEach(form => form.addEventListener('submit', e => {
   e.preventDefault();
   const box=form.closest('.modal-body').querySelector('.globalFormAlert');
   box.classList.remove('d-none');
   box.innerHTML='<strong>Thank you for contacting Logic Plus.</strong><br>Your enquiry has been received by this demo form. Connect this form to your email/CRM endpoint before publishing.';
   form.reset();
 }));
});
