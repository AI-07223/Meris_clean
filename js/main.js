/* ============================================
   MERIS CLEAN - Premium Product Showcase
   JavaScript Functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initNavbar();
  initSparkles();
  initScrollAnimations();
  initSmoothScroll();
  initCounterAnimations();
});

/* ============================================
   Navbar Scroll Effect
   ============================================ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  
  if (!navbar) return;
  
  const handleScroll = () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial state
}

/* ============================================
   Sparkle Particle Effect
   ============================================ */
function initSparkles() {
  const sparklesContainer = document.querySelector('.sparkles');
  
  if (!sparklesContainer) return;
  
  const sparkleCount = 30;
  
  for (let i = 0; i < sparkleCount; i++) {
    createSparkle(sparklesContainer, i);
  }
}

function createSparkle(container, index) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  
  // Random position
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  
  // Random size
  const size = Math.random() * 15 + 5;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  
  // Random animation delay and duration
  sparkle.style.animationDelay = `${Math.random() * 5}s`;
  sparkle.style.animationDuration = `${Math.random() * 3 + 2}s`;
  
  container.appendChild(sparkle);
}

/* ============================================
   Scroll Animations (Intersection Observer)
   ============================================ */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');
  
  if (animatedElements.length === 0) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

/* ============================================
   Smooth Scrolling for Navigation Links
   ============================================ */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href === '#') return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      
      if (target) {
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============================================
   Counter Animations for Stats
   ============================================ */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.stat-number');
  
  if (counters.length === 0) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target')) || 0;
  const suffix = element.getAttribute('data-suffix') || '';
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  
  const updateCounter = () => {
    current += step;
    
    if (current < target) {
      element.textContent = Math.floor(current) + suffix;
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + suffix;
    }
  };
  
  updateCounter();
}

/* ============================================
   Mobile Menu Toggle
   ============================================ */
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (!mobileMenuBtn || !navLinks) return;
  
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });
}

/* ============================================
   Product Card Hover Effects Enhancement
   ============================================ */
function initProductCards() {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

/* ============================================
   Parallax Effect for Background Elements
   ============================================ */
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-speed') || 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

/* ============================================
   Typing Effect for Hero Tagline
   ============================================ */
function initTypingEffect() {
  const typingElement = document.querySelector('.typing-effect');
  
  if (!typingElement) return;
  
  const text = typingElement.getAttribute('data-text') || '';
  let index = 0;
  
  typingElement.textContent = '';
  
  const type = () => {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  };
  
  // Start typing after a short delay
  setTimeout(type, 500);
}

/* ============================================
   Utility: Debounce Function
   ============================================ */
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/* ============================================
   Utility: Throttle Function
   ============================================ */
function throttle(func, limit = 100) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
