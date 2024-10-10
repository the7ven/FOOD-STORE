  // Initialize ScrollReveal
  ScrollReveal({ reset: true, distance: '60px', duration: 2500, delay: 400 });

  // Reveal elements
  
  ScrollReveal().reveal('.hero h1, .hero p, .hero .btn2', { delay: 500, origin: 'left', interval: 200 });
  ScrollReveal().reveal('.hero .hero-pic, .hero h3, .hero .btn1', { delay: 500, origin: 'rigth', interval: 200 });
  ScrollReveal().reveal('.day-offer-title, .about-text', { delay: 200, origin: 'bottom' });
  ScrollReveal().reveal('.about .about-pic,', { delay: 600, origin: 'right', interval: 200 });
  ScrollReveal().reveal('.services-container h2', { delay: 500, origin: 'top' });
  ScrollReveal().reveal('.menu', { delay: 500, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.offer1', { delay: 500, origin: 'left' });
  ScrollReveal().reveal('.menu-title', { delay: 600, origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.container', { delay: 500, origin: 'top' });
  ScrollReveal().reveal('footer', { delay: 500, origin: 'bottom' });