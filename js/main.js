// Slider functionality
function showSlider(type) {
   // Hide all sliders
   document.querySelectorAll('.slider-content').forEach((slider) => {
      slider.classList.remove('active');
   });

   // Remove active class from all tabs
   document.querySelectorAll('.slider-tab').forEach((tab) => {
      tab.classList.remove('active');
   });

   // Show selected slider
   document.getElementById(type + '-slider').classList.add('active');

   // Activate selected tab
   event.target.classList.add('active');

   // Change background image based on slider
   const backgrounds = document.querySelectorAll('.hero-background img');
   backgrounds.forEach((bg) => (bg.style.display = 'none'));

   if (type === 'ceo') {
      document.getElementById('ceo-bg').style.display = 'block';
   } else if (type === 'pm') {
      document.getElementById('pm-bg').style.display = 'block';
   } else if (type === 'innovation') {
      document.getElementById('innovation-bg').style.display = 'block';
   }

   // Update CEO headline based on location (simplified - you'd use actual geolocation)
   if (type === 'ceo') {
      // This would be replaced with actual geolocation logic
      const isDeveloped = true; // Placeholder
      const headline = isDeveloped
         ? 'CEOs: Save $11,670 Per Worker Annually with Construction Automation'
         : 'CEOs: Achieve 289% ROI and Compete Globally with Smart Automation';
      document.getElementById('ceo-headline').textContent = headline;
   }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
         target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      }
   });
});

// Header scroll effect
window.addEventListener('scroll', function () {
   const header = document.querySelector('header');
   if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
   } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
   }
});

// Animation on scroll
const observerOptions = {
   threshold: 0.1,
   rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add('animate-in');
      }
   });
}, observerOptions);

// Observe elements for animation
document
   .querySelectorAll(
      '.feature-card, .stat-card, .benefit-card, .testimonial-card'
   )
   .forEach((el) => {
      observer.observe(el);
   });

// Initialize geolocation-based CEO message (placeholder)
document.addEventListener('DOMContentLoaded', function () {
   // This would be replaced with actual geolocation API
   // For now, defaulting to developed countries message
   showSlider('ceo');
});
