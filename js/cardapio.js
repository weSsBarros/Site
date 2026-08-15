/* =========================================================
   CARDAPIO.JS
   Faz a aba de categoria (no menu fixo do topo) acender
   sozinha conforme a pessoa rola até aquela seção do cardápio.
   Usado só em cardapio.html.
========================================================= */

const sections = document.querySelectorAll('.menu-section');
const chips = document.querySelectorAll('.cat-chip');

// Marca como "ativa" a aba correspondente à seção visível
function setActive(id) {
  chips.forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('href') === '#' + id);
  });

  // Rola a barra de categorias horizontalmente para manter a aba ativa visível
  const active = document.querySelector('.cat-chip.active');
  if (active) {
    active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}

// Observa quando cada seção entra na área central da tela
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, { rootMargin: '-38% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));
