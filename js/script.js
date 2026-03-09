document.addEventListener("DOMContentLoaded", function () {

  /* Load header */

  const header = document.getElementById("header");

  if (header) {
    fetch("includes/header.html")
      .then(res => res.text())
      .then(data => {
        header.innerHTML = data;
        initMenu(); // initialize menu after header loads
      });
  }

  /* Load footer */

  const footer = document.getElementById("footer");

  if (footer) {
    fetch("includes/footer.html")
      .then(res => res.text())
      .then(data => {
        footer.innerHTML = data;
      });
  }

});

/* Mobile menu */

function initMenu() {

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

}