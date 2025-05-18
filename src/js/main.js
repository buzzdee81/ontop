import AOS from 'aos';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 50
});

// Initialize Swiper for testimonials
const swiper = new Swiper('.swiper-container', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[data-scroll]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Close mobile menu if open
      mobileMenu.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});

// Header scroll effect
const header = document.querySelector('.header');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Form submission
const bookingForm = document.getElementById('booking-form');

bookingForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(bookingForm);
  const data = Object.fromEntries(formData.entries());
  
  try {
    // Replace with your actual form submission endpoint
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen.');
      bookingForm.reset();
    } else {
      throw new Error('Fehler beim Senden der Anfrage');
    }
  } catch (error) {
    alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
    console.error('Form submission error:', error);
  }
}); 