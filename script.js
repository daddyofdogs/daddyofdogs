// Scroll-Indikator
window.addEventListener('scroll', () => {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;
  const scrollPercent = docHeight ? (scrollTop / docHeight) * 100 : 0;
  document.getElementById('scroll-indicator').style.width = scrollPercent + '%';
});

// Scroll-Animation
function animateOnScroll(selector) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// Beim Laden aktivieren
document.addEventListener('DOMContentLoaded', function () {
  animateOnScroll('.service-card');
  animateOnScroll('.about-text');
  animateOnScroll('.about-image');
  animateOnScroll('.contact-form');
  animateOnScroll('.stat-item');

  // Cookie-Funktion aufrufen nach 2 Sekunden
  setTimeout(showCookieBanner, 2000);

  // Kontaktformular-Handling
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Vielen Dank! Wir melden uns bald.');
      this.reset();
    });
  }
});

// Cookie-Banner Funktionen
function showCookieBanner() {
  if (!localStorage.getItem("cookieConsent")) {
    document.getElementById("cookieBanner").style.display = "block";
  }
}
function acceptCookies() {
  localStorage.setItem("cookieConsent", "true");
  document.getElementById("cookieBanner").style.display = "none";
}
function declineCookies() {
  localStorage.setItem("cookieConsent", "false");
  document.getElementById("cookieBanner").style.display = "none";
}
