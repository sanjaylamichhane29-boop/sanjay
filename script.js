// Highlights the current section in the sidebar menu and sets the footer year.
(function () {
  var sections = [].slice.call(document.querySelectorAll('main section[id]'));
  var links = [].slice.call(document.querySelectorAll('nav a'));

  document.getElementById('yr').textContent = new Date().getFullYear();

  function update() {
    var line = window.innerHeight * 0.4;
    var current = sections[0];
    sections.forEach(function (s) {
      if (s.getBoundingClientRect().top <= line) current = s;
    });
    links.forEach(function (a) {
      a.classList.toggle('on', a.getAttribute('href') === '#' + current.id);
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();