document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');

  if (!burger || !menu) return;

  menu.style.display = 'none';
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-controls', 'header-menu');
  menu.id = 'header-menu';

  const openMenu = () => {
    menu.style.display = 'flex';
    burger.classList.add('is-active');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.style.display = 'none';
    burger.classList.remove('is-active');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    menu.style.display === 'none' ? openMenu() : closeMenu();
  };

  burger.addEventListener('click', toggleMenu);

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.style.display !== 'none') {
      closeMenu();
      burger.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (
      menu.style.display !== 'none' &&
      !menu.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  const mq = window.matchMedia('(min-width: 768px)');
  mq.addEventListener('change', (e) => {
    if (e.matches) {
      closeMenu();
      menu.style.display = '';
      document.body.style.overflow = '';
    } else {
      menu.style.display = 'none';
    }
  });

  if (mq.matches) {
    menu.style.display = '';
    burger.setAttribute('aria-expanded', 'false');
  }
});
