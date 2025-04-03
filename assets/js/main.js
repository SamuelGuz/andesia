(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
      const body = document.body;
      const header = document.querySelector('#header');
      if (!header) return;

      if (window.scrollY > 100) {
          body.classList.add('scrolled');
      } else {
          body.classList.remove('scrolled');
      }
  }

  window.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', function() {
          document.body.classList.toggle('mobile-nav-active');
          this.classList.toggle('bi-list');
          this.classList.toggle('bi-x');
      });
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(link => {
      link.addEventListener('click', () => {
          if (document.body.classList.contains('mobile-nav-active')) {
              document.body.classList.remove('mobile-nav-active');
              mobileNavToggleBtn.classList.toggle('bi-list');
              mobileNavToggleBtn.classList.toggle('bi-x');
          }
      });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
      window.addEventListener('scroll', function() {
          scrollTop.classList.toggle('active', window.scrollY > 100);
      });
      scrollTop.addEventListener('click', function(e) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  /**
   * Animation on scroll function
   */
  function initAOS() {
      AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
  }
  window.addEventListener('load', initAOS);

  /**
   * Benefits section animation
   */
  const benefitsSection = document.querySelector('.benefits-section');
  if (benefitsSection) {
      function checkScroll() {
          if (benefitsSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
              benefitsSection.classList.add('visible');
              window.removeEventListener('scroll', checkScroll);
          }
      }
      window.addEventListener('scroll', checkScroll);
      checkScroll();
  }

  /**
   * Init Swiper sliders
   */
  function initSwiper() {
      document.querySelectorAll('.init-swiper').forEach(swiperElement => {
          let configElement = swiperElement.querySelector('.swiper-config');
          if (!configElement) return;

          let config = JSON.parse(configElement.innerHTML.trim());
          new Swiper(swiperElement, config);
      });
  }
  window.addEventListener('load', initSwiper);
})();