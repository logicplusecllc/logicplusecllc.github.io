document.addEventListener('DOMContentLoaded', () => {
  const isArabic = document.documentElement.lang === 'ar';
  const successMessage = isArabic ? '<strong>شكراً لتواصلكم مع Logic Plus.</strong><br>تم استلام تفاصيل الاستفسار. يمكنكم الاتصال أو استخدام واتساب للمساعدة العاجلة.' : '<strong>Thank you for contacting Logic Plus.</strong><br>Your enquiry details are ready for review. For immediate assistance, please call or WhatsApp us.';
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
        alert.innerHTML = successMessage;
      }
      form.reset();
    });
  }

  document.querySelectorAll('.globalContactForm').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    const box = form.closest('.modal-body').querySelector('.globalFormAlert');
    box.classList.remove('d-none');
    box.innerHTML = successMessage;
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


document.addEventListener("DOMContentLoaded",function(){
  document.body.classList.add("preloader-active");
  var p=document.getElementById("sitePreloader");
  if(!p)return;
  var started=performance.now(), hidden=false;
  var hide=function(){
    if(hidden)return;
    hidden=true;
    var wait=Math.max(0,1500-(performance.now()-started));
    setTimeout(function(){
      p.classList.add("is-hidden");
      document.body.classList.remove("preloader-active");
      setTimeout(function(){p.remove()},700);
    },wait);
  };
  if(document.readyState==="complete") hide(); else window.addEventListener("load",hide,{once:true});
  setTimeout(hide,5000);
});
