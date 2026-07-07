const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    sidebar.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        sidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});



// ── SERVICES TOGGLE ──
(function () {
    const btn  = document.getElementById('servicesToggleBtn');
    const grid = document.querySelector('.services-grid');
    if (!btn || !grid) return;
 
    const hiddenCards = grid.querySelectorAll('.services-hidden');
    let expanded = false;
 
    btn.addEventListener('click', function () {
        expanded = !expanded;
 
        if (window.innerWidth <= 768) {
            // мобайл: показуємо/ховаємо всі картки через клас на grid
            grid.classList.toggle('expanded', expanded);
        } else {
            // десктоп: показуємо/ховаємо тільки .services-hidden
            hiddenCards.forEach(card => {
                card.classList.toggle('visible', expanded);
            });
        }
 
        btn.textContent = expanded ? 'Згорнути ↑' : 'Більше ↓';
    });
})();




document.querySelectorAll('.acc-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.acc-body');
      const isOpen = item.classList.contains('open');
 
      document.querySelectorAll('.acc-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.acc-body').style.maxHeight = '0';
      });
 
      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });




const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.home nav, .home .main .main-text h1, .home .main .main-text h3, .home .main .buttons a, .icons .main-text p, .icons .main-text h1, .icons .box-container .box, .services .main-text p, .services .main-text h1, .services .services-grid .box, .services .services-toggle, .price .main-text p, .price .main-text h1, .price .acc-item, .notice .text, .doctors .main-text p, .doctors .main-text h1, .doctors .content .image, .doctors .content .box-container .box, .doctors .box-container-not-main .box, .about-us .main-text p, .about-us .main-text h1, .about-us .main-text h6, .about-us .main-text .button a, .about-us .image, .blog .main-text p, .blog .main-text h1, .blog .box-container .box, .blog .buttons a, .contacts .content .main-text p, .contacts .content .main-text h1, .contacts .contact-form form, .contacts .content .box-container .box, .footer, .services .box-container .box, .ab-us .main-text p, .ab-us .main-text h1, .ab-us .gallery img, .blog .main-text h3, .blog .text h4').forEach(el => {
  observer.observe(el);
});