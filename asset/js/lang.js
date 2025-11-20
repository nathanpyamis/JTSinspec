    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme toggle
    const themeBtn = document.querySelector('.theme-toggle');
    themeBtn.addEventListener('click', () => {
      const html = document.documentElement;
      const isDark = html.getAttribute('data-theme') === 'dark';
      html.setAttribute('data-theme', isDark ? 'light' : 'dark');
      themeBtn.querySelector('i').className = isDark ? 'fa-regular fa-moon' : 'fa-regular fa-sun';
      themeBtn.querySelector('span').textContent = isDark ? 'Dark' : 'Light';
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      themeBtn.querySelector('i').className = savedTheme === 'dark' ? 'fa-regular fa-sun' : 'fa-regular fa-moon';
      themeBtn.querySelector('span').textContent = savedTheme === 'dark' ? 'Light' : 'Dark';
    }

    // Language toggle (English / Tok Pisin)
    const langBtn = document.querySelector('.lang-toggle');
    const setLang = (lang) => {
      document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = lang === 'tp' ? (el.getAttribute('data-tp') || el.getAttribute('data-en')) : el.getAttribute('data-en');
      });
      langBtn.querySelector('span').textContent = lang === 'tp' ? 'TP' : 'EN';
      localStorage.setItem('lang', lang);
    };
    langBtn.addEventListener('click', () => {
      const current = localStorage.getItem('lang') || 'en';
      setLang(current === 'en' ? 'tp' : 'en');
    });
    setLang(localStorage.getItem('lang') || 'en');