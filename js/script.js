document.addEventListener("DOMContentLoaded", function () {

  /* Load header include */

  const header = document.getElementById("header");

  if (header) {
    fetch("includes/header.html")
      .then(res => res.text())
      .then(data => {
        header.innerHTML = data;

        initMenu(); // initialize menu AFTER header loads
      });
  }

  /* Load footer include */

  const footer = document.getElementById("footer");

  if (footer) {
    fetch("includes/footer.html")
      .then(res => res.text())
      .then(data => {
        footer.innerHTML = data;
      });
  }

  /* Menu logic */

  function initMenu() {

    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');

    if (toggle && nav) {

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

  }

});