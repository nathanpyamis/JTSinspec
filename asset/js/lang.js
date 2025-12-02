    // Year
    document.getElementById('year').textContent = new Date().getFullYear();


  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Tab button active state
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-target');

      // Image slides
      document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
        if (slide.id === target) slide.classList.add('active');
      });

      // Descriptions
      document.querySelectorAll('.slide-desc').forEach(desc => {
        desc.classList.remove('active');
        if (desc.getAttribute('data-for') === target) desc.classList.add('active');
      });
    });
  });
  document.querySelectorAll('.social-icons.animate a').forEach((el) => {
    // Guard: if reduced-motion is preferred, skip animation
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.2 });

    observer.observe(el);
  });
