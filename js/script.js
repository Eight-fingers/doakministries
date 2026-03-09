document.addEventListener("DOMContentLoaded", function () {

  /* Load footer include */

  const footer = document.getElementById("footer");

  if (footer) {
    fetch("includes/footer.html")
      .then(res => res.text())
      .then(data => {
        footer.innerHTML = data;
      });
  }

  /* Mobile menu toggle */

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

});