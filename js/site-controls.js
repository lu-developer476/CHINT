(function () {
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const languageToggle = document.querySelector('[data-language-toggle]');
  const savedTheme = localStorage.getItem('chint-theme') || 'dark';
  const savedLanguage = localStorage.getItem('chint-language') || 'es';

  const translations = {
    'Galería': 'Gallery',
    'Fuentes': 'Sources',
    'Opinión': 'Opinion',
    'Contacto': 'Contact',
    'Inicio': 'Home',
    'Modo claro': 'Light mode',
    'Modo oscuro': 'Dark mode',
    'Todos los derechos reservados • Built with HTML5 & CSS3 • Deployed on Netlify ®': 'All rights reserved • Built with HTML5 & CSS3 • Deployed on Netlify ®',
    'Ciencia, IA, Humanidad, Naturaleza y Tecnología biomecánica': 'Science, AI, Humanity, Nature and Biomechanical Technology',
    'Inteligencia Artificial como infraestructura social': 'Artificial Intelligence as Social Infrastructure',
    'Tecnología biomecánica: prótesis e interfaces cerebro-máquina': 'Biomechanical Technology: Prosthetics and Brain-Machine Interfaces',
    'Automatización y redefinición del trabajo': 'Automation and the Redefinition of Work',
    'Ética, naturaleza y decisiones que definen el futuro': 'Ethics, Nature and Decisions that Define the Future',
    'Referencias Utilizadas': 'References Used',
    'Vínculos en la era digital': 'Relationships in the Digital Era',
    'Mi Perspectiva': 'My Perspective',
    'Redes y Contacto': 'Networks and Contact',
    'Gracias por tu visita.': 'Thank you for visiting.',
    '¿Te gustó CHINT?': 'Did you like CHINT?',
    'Seleccionar': 'Select',
    'Sí': 'Yes',
    'No': 'No',
    'Tu nombre': 'Your name',
    'Tu email': 'Your email',
    'Mail:': 'Email:',
    'Nombre y apellido:': 'Full name:',
    'Comentarios:': 'Comments:',
    'Mensaje': 'Message',
    'Enviar': 'Send',
    'En memoria de mis profesores de secundaria 🕊 Alejandro Javier Igartúa y Nilda Irene Caamaño ✝️': 'In memory of my high school teachers 🕊 Alejandro Javier Igartúa and Nilda Irene Caamaño ✝️',
    'La tecnología redefine lo humano. Amplifica nuestras capacidades, pero también tensiona nuestra identidad, nuestra ética y nuestra relación con la naturaleza.': 'Technology redefines what is human. It amplifies our abilities, but also challenges our identity, ethics and relationship with nature.',
    'La integración entre biología y tecnología —implantes, IA, biotecnología— ya no es ficción. La cuestión no es si avanzará, sino bajo qué principios.': 'The integration of biology and technology — implants, AI, biotechnology — is no longer fiction. The question is not whether it will advance, but under which principles.',
    'Surgen preguntas inevitables: ¿quién tendrá acceso? ¿qué límites deben existir? ¿cómo protegemos la autonomía, la privacidad y la equidad?': 'Inevitable questions arise: who will have access? What limits should exist? How do we protect autonomy, privacy and equity?',
    'El progreso sin ética es riesgo. El progreso con conciencia es evolución.': 'Progress without ethics is risk. Progress with awareness is evolution.',
    'El desafío es claro: innovar sin perder humanidad.': 'The challenge is clear: innovate without losing humanity.'
  };

  const reverseTranslations = Object.fromEntries(
    Object.entries(translations).map(([spanish, english]) => [english, spanish])
  );

  const translatableSelector = 'a, h1, h2, h3, h4, h5, h6, p, strong, label, option, button:not([data-language-toggle]):not([data-theme-toggle])';

  function translateTextNode(node, language) {
    const dictionary = language === 'en' ? translations : reverseTranslations;
    const original = node.nodeValue;
    const trimmed = original.trim();

    if (!trimmed || !dictionary[trimmed]) {
      return;
    }

    node.nodeValue = original.replace(trimmed, dictionary[trimmed]);
  }

  function translateElement(element, language) {
    Array.from(element.childNodes).forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        translateTextNode(node, language);
      }
    });
  }

  function applyTheme(theme) {
    const isLight = theme === 'light';
    document.body.classList.toggle('light-theme', isLight);

    if (themeToggle) {
      themeToggle.textContent = isLight
        ? (document.documentElement.lang === 'en' ? 'Dark mode' : 'Modo oscuro')
        : (document.documentElement.lang === 'en' ? 'Light mode' : 'Modo claro');
      themeToggle.setAttribute('aria-label', isLight ? 'Activar modo oscuro' : 'Activar modo claro');
      themeToggle.setAttribute('aria-pressed', String(isLight));
    }
  }

  function applyLanguage(language) {
    document.documentElement.lang = language;
    document.querySelectorAll(translatableSelector).forEach(function (element) {
      translateElement(element, language);
    });

    if (languageToggle) {
      languageToggle.textContent = language === 'es' ? '🇪🇸/🇺🇸' : '🇺🇸/🇪🇸';
      languageToggle.setAttribute(
        'aria-label',
        language === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish'
      );
      languageToggle.setAttribute('aria-pressed', String(language === 'en'));
    }

    applyTheme(localStorage.getItem('chint-theme') || 'dark');
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
