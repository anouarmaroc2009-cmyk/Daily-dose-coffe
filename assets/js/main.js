document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.mobile-toggle');
  var nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      toggle.classList.toggle('open');
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }
});
