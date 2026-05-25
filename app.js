(function () {
  var saved = localStorage.getItem('ci-theme') || 'dark';
  if (saved === 'light') document.body.classList.add('light');

  var btn      = document.getElementById('themeToggle');
  var iconSun  = document.getElementById('iconSun');
  var iconMoon = document.getElementById('iconMoon');

  function syncIcons() {
    var isLight = document.body.classList.contains('light');
    iconSun.style.display  = isLight ? 'none' : '';
    iconMoon.style.display = isLight ? ''     : 'none';
  }
  syncIcons();

  if (btn) {
    btn.addEventListener('click', function () {
      document.body.classList.toggle('light');
      localStorage.setItem('ci-theme', document.body.classList.contains('light') ? 'light' : 'dark');
      syncIcons();
    });
  }
})();