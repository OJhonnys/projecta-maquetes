// ── script.js ──
// Só faz uma coisa: muda a navbar quando o usuário rola a página.

const navbar = document.getElementById('navbar');
const hero   = document.getElementById('hero');

window.addEventListener('scroll', () => {
  const heroHeight = hero.offsetHeight;

  if (window.scrollY > heroHeight - 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
