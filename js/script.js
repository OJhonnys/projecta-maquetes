// ── script.js ──

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
const hero   = document.getElementById('hero');

if (hero) {
  window.addEventListener('scroll', () => {
    const heroHeight = hero.offsetHeight;
    if (window.scrollY > heroHeight - 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ── Menu mobile ──
const menuToggle = document.getElementById('menu-toggle');
const navMobile  = document.getElementById('nav-mobile');

if (menuToggle && navMobile) {
  menuToggle.addEventListener('click', () => {
    navMobile.classList.toggle('aberto');
  });

  // Fecha ao clicar em um link
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('aberto');
    });
  });
}
