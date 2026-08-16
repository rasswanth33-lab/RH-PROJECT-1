// ==================== SMOOTH ANCHOR SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ==================== PARALLAX HERO IMAGE ====================
window.addEventListener('scroll', () => {
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    const scrollY = window.scrollY;
    heroImage.style.transform = `translateY(${scrollY * 0.5}px)`;
  }
});

// ==================== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ====================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'revealInView 0.8s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe section titles and grids
document.querySelectorAll(
  '.section-title, .about-grid, .services-grid, .locations-grid, ' +
  '.gallery-grid, .principles-grid, .contact-methods'
).forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// ==================== CONTACT FORM HANDLER ====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;
    
    const mailtoLink = `mailto:info@seeablehoardings.com?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoLink;
    
    // Optional: Reset form
    this.reset();
  });
}

// ==================== SCROLL TO EXPLORE INDICATOR ====================
const scrollIndicator = document.getElementById('scrollIndicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// Ensure body is visible on load
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// ==================== HERO CONTENT STAGGER ANIMATION ====================
const heroText = document.querySelector('.hero-text');
const heroStats = document.querySelector('.hero-stats');
const heroScroll = document.querySelector('.hero-scroll');

if (heroText) {
  heroText.style.animation = 'fadeInUp 0.8s ease 0.2s both';
}

if (heroStats) {
  heroStats.style.animation = 'slideInUp 0.8s ease 0.9s both';
}

if (heroScroll) {
  heroScroll.style.animation = 'slideInUp 0.8s ease 1.1s both';
}

console.log('SEEABLE HOARDINGS landing page loaded');
