(function () {
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const languageToggle = document.querySelector('[data-language-toggle]');
  const savedTheme = localStorage.getItem('chint-theme') || 'dark';
  const savedLanguage = localStorage.getItem('chint-language') || 'es';

  function applyTheme(theme) {
    const isLight = theme === 'light';
    document.body.classList.toggle('light-theme', isLight);

    if (themeToggle) {
      themeToggle.textContent = isLight ? 'Modo oscuro' : 'Modo claro';
      themeToggle.setAttribute('aria-label', isLight ? 'Activar modo oscuro' : 'Activar modo claro');
      themeToggle.setAttribute('aria-pressed', String(isLight));
    }
  }

  function applyLanguage(language) {
    document.documentElement.lang = language;

    if (languageToggle) {
      languageToggle.textContent = language === 'es' ? '🇪🇸/🇺🇸' : '🇺🇸/🇪🇸';
      languageToggle.setAttribute(
        'aria-label',
        language === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish'
      );
      languageToggle.setAttribute('aria-pressed', String(language === 'en'));
    }
  }

  applyTheme(savedTheme);
  applyLanguage(savedLanguage);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
      localStorage.setItem('chint-theme', nextTheme);
      applyTheme(nextTheme);
    });
  }

  if (languageToggle) {
    languageToggle.addEventListener('click', function () {
      const nextLanguage = document.documentElement.lang === 'es' ? 'en' : 'es';
      localStorage.setItem('chint-language', nextLanguage);
      applyLanguage(nextLanguage);
    });
  }
})();
