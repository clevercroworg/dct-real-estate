/* =====================================================
   STICKY HEADER
===================================================== */

const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('is-sticky');
  } else {
    header.classList.remove('is-sticky');
  }
});

/* =====================================================
   SCROLL REVEAL (ONCE)
===================================================== */

const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

reveals.forEach(el => revealObserver.observe(el));

/* =====================================================
   NUMBER COUNTER (ABOUT SECTION)
===================================================== */

const statNumbers = document.querySelectorAll('.about-stat-number');

const statsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const duration = 1200; // ms
      const startTime = performance.now();

      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = value.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          el.textContent = target.toLocaleString();
        }
      };

      requestAnimationFrame(animate);
      observer.unobserve(el);
    });
  },
  { threshold: 0.4 }
);

statNumbers.forEach(el => statsObserver.observe(el));

/* =====================================================
   NEW LAUNCHES – LUXURY AUTO SCROLL
===================================================== */

const launchSlider = document.querySelector('.launch-slider');

if (launchSlider) {
  let autoScroll;
  let isPaused = false;
  let userInteracted = false;

  const startAutoScroll = () => {
    if (userInteracted) return;

    autoScroll = setInterval(() => {
      launchSlider.scrollBy({
        left: 1, // VERY slow movement
        behavior: 'smooth'
      });

      // Reset gently at end (no jump)
      if (
        launchSlider.scrollLeft + launchSlider.clientWidth >=
        launchSlider.scrollWidth - 5
      ) {
        launchSlider.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      }
    }, 30); // speed control (lower = slower)
  };

  const stopAutoScroll = () => {
    clearInterval(autoScroll);
  };

  // Start scrolling
  startAutoScroll();

  /* Pause on hover (desktop) */
  launchSlider.addEventListener('mouseenter', () => {
    isPaused = true;
    stopAutoScroll();
  });

  launchSlider.addEventListener('mouseleave', () => {
    if (!userInteracted) {
      isPaused = false;
      startAutoScroll();
    }
  });

  /* Pause on touch (mobile) */
  launchSlider.addEventListener('touchstart', () => {
    userInteracted = true;
    stopAutoScroll();
  });

  /* Pause on manual scroll / arrows */
  launchSlider.addEventListener('wheel', () => {
    userInteracted = true;
    stopAutoScroll();
  });

  document.querySelectorAll('.launch-next, .launch-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      userInteracted = true;
      stopAutoScroll();
    });
  });
}
