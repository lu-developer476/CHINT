(function () {
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const languageToggle = document.querySelector('[data-language-toggle]');
  const siteControls = document.querySelector('[data-site-controls]');
  const controlsMenuToggle = document.querySelector('[data-controls-menu-toggle]');
  const savedTheme = localStorage.getItem('chint-theme') || 'dark';
  const savedLanguage = localStorage.getItem('chint-language') || 'es';

  const translations = {
    // Navegación, controles y metadatos visibles
    'Galería': 'Gallery',
    'Fuentes': 'Sources',
    'Opinión': 'Opinion',
    'Contacto': 'Contact',
    'Inicio': 'Home',
    'Modo claro': 'Light mode',
    'Modo oscuro': 'Dark mode',
    'Idiomas': 'Languages',
    'Modo': 'Mode',
    'Todos los derechos reservados • Hecho con HTML5 y CSS3 • Desplegado en Netlify ®': 'All rights reserved • Built with HTML5 and CSS3 • Deployed on Netlify ®',

    // Inicio
    'Ciencia, IA, Humanidad, Naturaleza y Tecnología biomecánica': 'Science, AI, Humanity, Nature and Biomechanical Technology',
    'CHINT es un espacio de análisis sobre la convergencia entre varias aristas y la vida humana actual. La tecnología dejó de ser una herramienta externa: hoy es entorno. Modela decisiones, procesos y relaciones humanas a escala global.': 'CHINT is a space for analyzing the convergence between multiple dimensions and contemporary human life. Technology is no longer an external tool: today it is an environment. It shapes decisions, processes and human relationships on a global scale.',
    'Vivimos una transición histórica. La frontera entre lo biológico y lo tecnológico comienza a desdibujarse. La integración entre algoritmos, datos, cuerpos y sistemas naturales redefine lo que entendemos por progreso. Ya no se trata únicamente de innovación técnica, sino de transformación estructural. La inteligencia artificial actual ya no se limita a ejecutar instrucciones predefinidas. Los modelos fundacionales entrenados con volúmenes masivos de datos son capaces de generar texto, imágenes, código, diagnósticos preliminares y simulaciones complejas. La automatización dejó de ser mecánica: ahora es cognitiva. Sistemas capaces de aprender patrones, anticipar comportamientos y optimizar decisiones operan en segundo plano en sectores financieros, sanitarios, energéticos y gubernamentales.': 'We are living through a historic transition. The boundary between the biological and the technological is beginning to blur. The integration of algorithms, data, bodies and natural systems redefines what we understand as progress. It is no longer only about technical innovation, but structural transformation. Today\'s artificial intelligence is no longer limited to executing predefined instructions. Foundation models trained on massive volumes of data can generate text, images, code, preliminary diagnoses and complex simulations. Automation is no longer mechanical: it is cognitive. Systems capable of learning patterns, anticipating behavior and optimizing decisions operate in the background across financial, healthcare, energy and government sectors.',
    'Paralelamente, la biomecánica y la neurotecnología avanzan hacia la integración directa entre sistemas biológicos y digitales. Prótesis controladas por señales mioeléctricas, exoesqueletos inteligentes, sensores implantables e interfaces cerebro-computadora están redefiniendo el concepto de límite corporal. La tecnología ya no solo asiste: amplifica. Y esa amplificación plantea una cuestión inevitable: ¿hasta dónde queremos expandir lo humano? Desde una dimensión filosófica, este escenario nos obliga a revisar categorías clásicas. ¿Qué significa identidad cuando nuestros procesos cognitivos pueden ser asistidos por algoritmos? ¿Qué implica autonomía cuando delegamos decisiones en sistemas predictivos? ¿Dónde comienza y termina la responsabilidad humana en entornos automatizados?': 'At the same time, biomechanics and neurotechnology are moving toward direct integration between biological and digital systems. Prostheses controlled by myoelectric signals, intelligent exoskeletons, implantable sensors and brain-computer interfaces are redefining the concept of bodily limits. Technology no longer only assists: it amplifies. And that amplification raises an unavoidable question: how far do we want to expand the human? From a philosophical dimension, this scenario forces us to revisit classic categories. What does identity mean when our cognitive processes can be assisted by algorithms? What does autonomy imply when we delegate decisions to predictive systems? Where does human responsibility begin and end in automated environments?',
    'La historia muestra que cada revolución tecnológica reconfigura la estructura social. La imprenta transformó el conocimiento; la máquina de vapor, la producción; Internet, la comunicación. La inteligencia artificial y la convergencia biotecnológica están alterando simultáneamente cognición, economía y biología. Es un cambio más profundo porque atraviesa la base misma de la experiencia humana.': 'History shows that every technological revolution reconfigures social structure. The printing press transformed knowledge; the steam engine transformed production; the Internet transformed communication. Artificial intelligence and biotechnological convergence are simultaneously altering cognition, the economy and biology. It is a deeper change because it crosses the very foundation of human experience.',
    'Sin embargo, el avance tecnológico no es neutro. Los sistemas reflejan las prioridades, los sesgos y las estructuras de poder de quienes los diseñan. La ética deja de ser un complemento y se convierte en arquitectura. Diseñar modelos más eficientes sin diseñar marcos de responsabilidad es construir velocidad sin dirección. La naturaleza también entra en la ecuación. Sensores ambientales, modelos climáticos impulsados por IA y optimización energética muestran que la tecnología puede convertirse en herramienta de restauración ecológica. Pero esa misma capacidad puede intensificar explotación si no existe regulación y visión sistémica. La pregunta no es solo qué podemos hacer, sino qué debemos hacer.': 'However, technological progress is not neutral. Systems reflect the priorities, biases and power structures of those who design them. Ethics stops being an add-on and becomes architecture. Designing more efficient models without designing accountability frameworks is building speed without direction. Nature also enters the equation. Environmental sensors, AI-driven climate models and energy optimization show that technology can become a tool for ecological restoration. But that same capacity can intensify exploitation if regulation and systemic vision do not exist. The question is not only what we can do, but what we should do.',
    'CHINT se posiciona en esa intersección: comprender el funcionamiento técnico de los sistemas emergentes y, al mismo tiempo, analizar sus implicancias humanas, sociales y ambientales. La convergencia entre ciencia, inteligencia artificial y tecnología biomecánica no es un fenómeno aislado; es un proceso continuo que definirá la próxima etapa evolutiva de nuestra especie.': 'CHINT positions itself at that intersection: understanding the technical operation of emerging systems while analyzing their human, social and environmental implications. The convergence between science, artificial intelligence and biomechanical technology is not an isolated phenomenon; it is an ongoing process that will define the next evolutionary stage of our species.',
    'El desafío no es frenar el progreso ni aceptarlo sin crítica. Es integrarlo con conciencia, establecer límites inteligentes y preservar aquello que nos hace profundamente humanos: la capacidad de reflexionar, elegir y asumir responsabilidad sobre nuestras decisiones. En 2026, la inteligencia artificial generativa, la automatización cognitiva, la biotecnología y la computación avanzada ya no son hipótesis futuras: son infraestructura activa. Están modificando el trabajo, la educación, la cultura, la política y hasta la percepción que tenemos de nosotros mismos.': 'The challenge is not to stop progress or accept it without criticism. It is to integrate it consciously, establish intelligent limits and preserve what makes us deeply human: the ability to reflect, choose and take responsibility for our decisions. In 2026, generative artificial intelligence, cognitive automation, biotechnology and advanced computing are no longer future hypotheses: they are active infrastructure. They are changing work, education, culture, politics and even the perception we have of ourselves.',
    'La pregunta central no es si la tecnología avanzará —porque lo hará— sino bajo qué principios, con qué límites y con qué conciencia colectiva. CHINT propone pensar esa convergencia desde una mirada crítica y humanista: comprender el cambio para no ser simplemente arrastrados por él.': 'The central question is not whether technology will advance —because it will— but under which principles, with which limits and with what collective awareness. CHINT proposes thinking about that convergence from a critical and humanistic perspective: understanding change so we are not simply swept along by it.',
    '"La deshumanización es distorsión de la vocación de SER MÁS." — Paulo Freire': '"Dehumanization is a distortion of the vocation to BECOME MORE FULLY HUMAN." — Paulo Freire',
    'Inteligencia Artificial como infraestructura social': 'Artificial Intelligence as Social Infrastructure',
    'La inteligencia artificial dejó de ser una herramienta puntual para convertirse en una capa estructural que atraviesa industrias completas. Modelos fundacionales, sistemas multimodales y agentes autónomos reorganizan procesos productivos, educación personalizada, diagnóstico médico y generación de conocimiento.': 'Artificial intelligence has stopped being a one-off tool and has become a structural layer that cuts across entire industries. Foundation models, multimodal systems and autonomous agents reorganize production processes, personalized education, medical diagnosis and knowledge generation.',
    'La discusión no gira en torno a si la IA reemplazará tareas, sino a cómo rediseñará los sistemas humanos. Delegamos decisiones, automatizamos análisis y optimizamos procesos a una escala inédita. La eficiencia aumenta, pero también lo hace la dependencia.': 'The discussion is not about whether AI will replace tasks, but how it will redesign human systems. We delegate decisions, automate analysis and optimize processes at an unprecedented scale. Efficiency increases, but so does dependence.',
    '"La tecnología no es nada. Lo importante es la gente." — Steve Jobs': '"Technology is nothing. What\'s important is people." — Steve Jobs',
    'Tecnología biomecánica: prótesis e interfaces cerebro-máquina': 'Biomechanical Technology: Prosthetics and Brain-Machine Interfaces',
    'La tecnología biomecánica actual integra sensores mioeléctricos, aprendizaje automático e interfaces neuronales que permiten controlar prótesis con señales musculares o impulsos cerebrales.': 'Current biomechanical technology integrates myoelectric sensors, machine learning and neural interfaces that make it possible to control prostheses with muscle signals or brain impulses.',
    'Brazos robóticos controlados por pensamiento, exoesqueletos para rehabilitación y prótesis impresas en 3D redefinen la relación entre cuerpo y tecnología. Ya no hablamos solo de reemplazar funciones, sino de expandir capacidades.': 'Thought-controlled robotic arms, rehabilitation exoskeletons and 3D-printed prostheses redefine the relationship between body and technology. We are no longer only talking about replacing functions, but expanding capabilities.',
    '"El futuro pertenece a quienes creen en sus sueños." — Eleanor Roosevelt': '"The future belongs to those who believe in their dreams." — Eleanor Roosevelt',
    'Automatización y redefinición del trabajo': 'Automation and the Redefinition of Work',
    'Desde asistentes inteligentes hasta procesos completamente automatizados, el trabajo está mutando. Las tareas repetitivas se delegan a sistemas autónomos mientras que las habilidades humanas migran hacia la supervisión estratégica, la creatividad, el pensamiento crítico y la toma de decisiones complejas.': 'From intelligent assistants to fully automated processes, work is changing. Repetitive tasks are delegated to autonomous systems while human skills shift toward strategic supervision, creativity, critical thinking and complex decision-making.',
    'Paralelamente, los avances en genómica, neurotecnología, biología sintética y computación avanzada expanden las fronteras del conocimiento. Cada avance abre posibilidades inéditas, pero también exige responsabilidad proporcional.': 'At the same time, advances in genomics, neurotechnology, synthetic biology and advanced computing expand the frontiers of knowledge. Each advance opens unprecedented possibilities, but also demands proportional responsibility.',
    '"El problema no es que las máquinas piensen, sino que los humanos dejen de hacerlo." — B. F. Skinner': '"The problem is not that machines think, but that humans stop doing so." — B. F. Skinner',
    'Ética, naturaleza y decisiones que definen el futuro': 'Ethics, Nature and Decisions that Define the Future',
    'Las relaciones humanas están mediadas por plataformas, algoritmos y sistemas de recomendación que modelan lo que vemos, lo que pensamos y, en muchos casos, lo que sentimos. La conectividad es total, pero la profundidad no siempre acompaña. Privacidad, identidad digital, manipulación informativa y polarización no son efectos secundarios: son tensiones estructurales de una sociedad hiperconectada. La tecnología amplifica, pero también filtra.': 'Human relationships are mediated by platforms, algorithms and recommendation systems that shape what we see, what we think and, in many cases, what we feel. Connectivity is total, but depth does not always keep pace. Privacy, digital identity, information manipulation and polarization are not side effects: they are structural tensions of a hyperconnected society. Technology amplifies, but it also filters.',
    'Energías renovables gestionadas por IA, monitoreo ambiental en tiempo real y modelos climáticos avanzados muestran que la innovación puede ser aliada del planeta. El futuro no será utópico ni distópico por defecto. Será el resultado directo de nuestras decisiones presentes.': 'AI-managed renewable energy, real-time environmental monitoring and advanced climate models show that innovation can be an ally of the planet. The future will not be utopian or dystopian by default. It will be the direct result of our present decisions.',
    '"La ciencia sin conciencia no es más que ruina del alma." — François Rabelais': '"Science without conscience is nothing but the ruin of the soul." — François Rabelais',

    // Fuentes y galería
    'Referencias Utilizadas': 'References Used',
    'Vínculos en la era digital': 'Relationships in the Digital Era',
    'Horizon Series': 'Horizon Series',
    'Inspiración Visual': 'Visual Inspiration',

    // Opinión
    'Mi Perspectiva': 'My Perspective',
    'La tecnología redefine lo humano. Amplifica nuestras capacidades, pero también tensiona nuestra identidad, nuestra ética y nuestra relación con la naturaleza.': 'Technology redefines what is human. It amplifies our abilities, but also challenges our identity, ethics and relationship with nature.',
    'La integración entre biología y tecnología —implantes, IA, biotecnología— ya no es ficción. La cuestión no es si avanzará, sino bajo qué principios.': 'The integration of biology and technology —implants, AI, biotechnology— is no longer fiction. The question is not whether it will advance, but under which principles.',
    'Surgen preguntas inevitables: ¿quién tendrá acceso? ¿qué límites deben existir? ¿cómo protegemos la autonomía, la privacidad y la equidad?': 'Inevitable questions arise: who will have access? What limits should exist? How do we protect autonomy, privacy and equity?',
    'El progreso sin ética es riesgo. El progreso con conciencia es evolución.': 'Progress without ethics is risk. Progress with awareness is evolution.',
    'El transhumanismo propone superar límites biológicos mediante ciencia y tecnología. Puede significar salud, longevidad y mejora cognitiva; pero también desigualdad y pérdida de identidad si no se regula con responsabilidad.': 'Transhumanism proposes overcoming biological limits through science and technology. It can mean health, longevity and cognitive improvement; but also inequality and loss of identity if it is not responsibly regulated.',
    'El desafío es claro: innovar sin perder humanidad.': 'The challenge is clear: innovate without losing humanity.',
    'En memoria de mis profesores de secundaria 🕊 Alejandro Javier Igartúa y Nilda Irene Caamaño ✝️': 'In memory of my high school teachers 🕊 Alejandro Javier Igartúa and Nilda Irene Caamaño ✝️',

    // Contacto
    'Redes y Contacto': 'Networks and Contact',
    'Email': 'Email',
    'Gracias por tu visita.': 'Thank you for visiting.',
    '¿Te gustó CHINT?': 'Did you like CHINT?',
    'Seleccionar': 'Select',
    'Sí': 'Yes',
    'No': 'No',
    'Mail:': 'Email:',
    'Nombre y apellido:': 'Full name:',
    'Comentarios:': 'Comments:',
    'Enviar': 'Send'
  };

  const reverseTranslations = Object.fromEntries(
    Object.entries(translations).map(([spanish, english]) => [english, spanish])
  );


  const attributeTranslations = {
    'Abrir controles': 'Open controls',
    'Cerrar controles': 'Close controls',
    'Controles del sitio': 'Site controls',
    'Idiomas': 'Languages',
    'Tema': 'Theme',
    'Activar modo oscuro': 'Activate dark mode',
    'Activar modo claro': 'Activate light mode',
    'Cambiar idioma a inglés': 'Switch language to English',
    'Cambiar idioma a español': 'Switch language to Spanish',
    'El futuro de la IA - Documental': 'The Future of AI - Documentary',
    'Cómo la IA está cambiando el mundo': 'How AI is Changing the World',
    'Brazo protésico controlado por la mente': 'Mind Controlled Prosthetic Arm',
    'Automatización y futuro del trabajo': 'Automation and the Future of Work',
    'Tecnología y futuro de la humanidad': 'Technology and the Future of Humanity',
    'Homenaje': 'Tribute',
    'Ciberpunk': 'Cyberpunk',
    'Horizon': 'Horizon',
    'Metal Gear': 'Metal Gear',
    'Syndicate': 'Syndicate',
    'Watch Dogs': 'Watch Dogs',
    'Braindance': 'Danza cerebral',
    'Escaneo Kiroshi': 'Kiroshi scan',
    'Iluminación tecnológica': 'Technological lighting',
    'Arte digital': 'Digital art',
    'Escaneo tecnológico': 'Technological scan',
    'Ciberpunk urbano': 'Urban cyberpunk',
    'Entorno futurista': 'Futuristic environment',
    'Naturaleza y tecnología': 'Nature and technology',
    'Personaje explorador': 'Explorer character',
    'Ciudad futurista': 'Futuristic city',
    'Vigilancia digital': 'Digital surveillance',
    'Interfaz aumentada': 'Augmented interface',
    'Hackeo urbano': 'Urban hacking',
    'IA y conciencia': 'AI and consciousness',
    'Hackeo': 'Hacking',
    'Conexión humana': 'Human connection',
    'Interacción tecnológica': 'Technological interaction'
  };

  const reverseAttributeTranslations = Object.fromEntries(
    Object.entries(attributeTranslations).map(([spanish, english]) => [english, spanish])
  );

  const translatableSelector = 'a, h1, h2, h3, h4, h5, h6, p, strong, label, option, span, button:not([data-language-toggle]):not([data-theme-toggle]):not([data-controls-menu-toggle])';

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
      themeToggle.setAttribute(
        'aria-label',
        isLight
          ? (document.documentElement.lang === 'en' ? 'Activate dark mode' : 'Activar modo oscuro')
          : (document.documentElement.lang === 'en' ? 'Activate light mode' : 'Activar modo claro')
      );
      themeToggle.setAttribute('aria-pressed', String(isLight));
    }
  }

  function setControlsMenu(open) {
    if (!siteControls || !controlsMenuToggle) {
      return;
    }

    siteControls.classList.toggle('menu-open', open);
    controlsMenuToggle.setAttribute('aria-expanded', String(open));
    controlsMenuToggle.setAttribute(
      'aria-label',
      open
        ? (document.documentElement.lang === 'en' ? 'Close controls' : 'Cerrar controles')
        : (document.documentElement.lang === 'en' ? 'Open controls' : 'Abrir controles')
    );
  }

  function translateAttribute(element, attribute, language) {
    const dictionary = language === 'en' ? attributeTranslations : reverseAttributeTranslations;
    const currentValue = element.getAttribute(attribute);

    if (currentValue && dictionary[currentValue]) {
      element.setAttribute(attribute, dictionary[currentValue]);
    }
  }

  function translateAttributes(language) {
    document.querySelectorAll('[aria-label], [title], [alt]').forEach(function (element) {
      ['aria-label', 'title', 'alt'].forEach(function (attribute) {
        translateAttribute(element, attribute, language);
      });
    });
  }

  function applyLanguage(language) {
    document.documentElement.lang = language;
    document.querySelectorAll(translatableSelector).forEach(function (element) {
      translateElement(element, language);
    });
    translateAttributes(language);

    if (languageToggle) {
      languageToggle.textContent = language === 'es' ? '🇪🇸/🇺🇸' : '🇺🇸/🇪🇸';
      languageToggle.setAttribute(
        'aria-label',
        language === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish'
      );
      languageToggle.setAttribute('aria-pressed', String(language === 'en'));
    }

    applyTheme(localStorage.getItem('chint-theme') || 'dark');

    if (controlsMenuToggle) {
      setControlsMenu(siteControls.classList.contains('menu-open'));
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

  if (controlsMenuToggle) {
    controlsMenuToggle.addEventListener('click', function () {
      setControlsMenu(!siteControls.classList.contains('menu-open'));
    });
  }

  document.addEventListener('click', function (event) {
    if (siteControls && !siteControls.contains(event.target)) {
      setControlsMenu(false);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setControlsMenu(false);
    }
  });
})();
