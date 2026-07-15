const navLinks = document.querySelectorAll('.nav-links a');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav-links');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('active'));
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(item => observer.observe(item));

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Thanks! Your message has been sent.';
  form.reset();
});
