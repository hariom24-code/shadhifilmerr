// Constants
const PHONE_NUMBER = "917798200639";

// Photo Gallery Data
const PHOTOS = [
  { id: '1', url: './images/Bright hues, joyous vibes, and endless smiles! 🌼✨ We had the pleasure of capturing the vibrant  (1).jpg', alt: 'Wedding Photography - Bride and Groom', category: 'Wedding' },
  { id: '2', url: './images/I CARRY YOU WITH ME 🤍Inframe @anupreet.choudhary & @manjiri The truth is - genuine connection i (1).jpg', alt: 'Pre-Wedding Photography - Couple Portrait', category: 'Pre-Wedding' },
  { id: '3', url: './images/get.jfif', alt: 'Wedding Photography - Ceremony Moment', category: 'Wedding' },
  { id: '4', url: './images/Bright hues, joyous vibes, and endless smiles! 🌼✨ We had the pleasure of capturing the vibrant .jpg', alt: 'Wedding Photography - Reception', category: 'Wedding' },
  { id: '5', url: './images/I CARRY YOU WITH ME 🤍Inframe @anupreet.choudhary & @manjiri The truth is - genuine connection i.jpg', alt: 'Candid Wedding Photography', category: 'Candid' },
  { id: '6', url: './images/I love you just the way you are✨Aditya -- Snehaswipe left for more with @adiiic11 @sneha_v_j 📸S (1).jpg', alt: 'Wedding Photography Portraits', category: 'Portraits' },
  { id: '7', url: './images/Nikita+Lobas@destructive.mind @_hope_d2_Shot by @umi.chavanCheers,@cinematic__oxg._Shot on - @s.webp', alt: 'Wedding Day Photography', category: 'Pre-Wedding' },
  { id: '8', url: './images/The dawn of love finds peace in the fulfilment of promises. 🕊Kumudini x Rajat@rajat_murade@kum (1).webp', alt: 'Wedding Reception Photography', category: 'Wedding' },
  { id: '9', url: './images/Two hearts entwined, adorned in the elegance of nauvari sarees and peshwai charm. A celebration .jpg', alt: 'Wedding Portraits Photography', category: 'Wedding' },
  { id: '10', url: './images/I love you just the way you are✨Aditya -- Snehaswipe left for more with @adiiic11 @sneha_v_j 📸S.jpg', alt: 'Wedding Photography - Bride Details', category: 'Pre-Wedding' },
  { id: '11', url: './images/15.jpg', alt: 'Pre-Wedding Shoot Photography', category: 'Mehndi' },
  { id: '12', url: './images/13.jpg', alt: 'Candid Wedding Moments', category: 'Wedding' },
  { id: '13', url: './images/14.webp', alt: 'Wedding Ceremony Photography', category: 'Wedding' },
  { id: '14', url: './images/16.jpg', alt: 'Pre-Wedding Photography Session', category: 'Wedding' },
  { id: '15', url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=500', alt: 'Wedding Reception Details', category: 'Pre-Wedding' },
  { id: '16', url: './images/17.jpg', alt: 'Professional Wedding Portraits', category: 'Portraits' },
  { id: '17', url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=500', alt: 'Wedding Day Photography', category: 'Palace' },
  { id: '18', url: './images/18.jpg', alt: 'Wedding Ceremony Moments', category: 'Candid' },
  { id: '19', url: './images/WhatsApp Image 2026-01-20 at 3.10.17 PM.jpeg', alt: 'Destination Wedding Photography', category: 'Pre-Wedding' },
  { id: '20', url: './images/19.jpg', alt: 'Candid Wedding Photography', category: 'Candid' }
];

// Films Data
const FILMS = [
  { 
    id: 'f1', 
    thumbnail: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80', 
    videoUrl: './images/BOMABAY PRE WEDDING.mp4', 
    title: 'The Eternal Vow' 
  },
  { 
    id: 'f2', 
    thumbnail: 'https://images.unsplash.com/photo-1470338745628-1fdb73251f11?auto=format&fit=crop&q=80', 
    videoUrl: './images/SHADHIFILMER FILMS.mp4', 
    title: 'Love in Udaipur' 
  },
  { 
    id: 'f3', 
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80', 
    videoUrl: './images/Shindechattri pune luxelove pre wedding.mp4', 
    title: 'A Royal Affair' 
  },
  { 
    id: 'f4', 
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80', 
    videoUrl: './images/BOMABAY PRE WEDDING.mp4', 
    title: 'Pre Wedding' 
  }
];

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initNavbar();
  initMobileMenu();
  initHeroAnimations();
  initGallery();
  initFilms();
  initBookingForm();
  initScrollAnimations();
  initScrollProgress();
  initLazyLoading();
  
  // Log performance metrics
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log('Page Load Time:', pageLoadTime + 'ms');
    });
  }
});

// Navbar Scroll Effect
function initNavbar() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('navbar-scrolled', 'bg-black/80', 'backdrop-blur-md', 'py-4');
      navbar.classList.remove('bg-transparent', 'py-8');
    } else {
      navbar.classList.remove('navbar-scrolled', 'bg-black/80', 'backdrop-blur-md', 'py-4');
      navbar.classList.add('bg-transparent', 'py-8');
    }
  });
}

// Mobile Menu Functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
  
  // Toggle menu
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  });
  
  // Close menu when clicking on links
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });
}

// Hero Section Animations
function initHeroAnimations() {
  const overlay = document.getElementById('hero-overlay');
  const content = document.getElementById('hero-content');
  
  const tl = gsap.timeline();
  tl.to(overlay, { 
    opacity: 0.6, 
    duration: 2, 
    ease: "power2.inOut" 
  });
  tl.from(content, { 
    y: 50, 
    opacity: 0, 
    duration: 1.5, 
    ease: "power3.out" 
  }, "-=1");
}

// Initialize Photo Gallery
function initGallery() {
  const galleryContainer = document.getElementById('gallery-container');
  
  if (!galleryContainer) {
    console.error('Gallery container not found');
    return;
  }
  
  PHOTOS.forEach((photo) => {
    const item = document.createElement('div');
    item.className = 'masonry-item group relative cursor-pointer';
    
    item.innerHTML = `
      <img 
        src="${photo.url}" 
        alt="${photo.alt}" 
        class="w-full h-full object-cover loaded"
        loading="lazy"
        decoding="async"
        onerror="this.src='https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80'"
      />
      <div class="overlay">
        <span class="text-xs sm:text-sm tracking-[0.3em] uppercase border-b border-white pb-2">${photo.category}</span>
      </div>
    `;
    
    galleryContainer.appendChild(item);
  });
  
  // Gallery scroll animations
  const items = galleryContainer.querySelectorAll('.masonry-item');
  items.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      y: 40,
      opacity: 0,
      duration: 1,
      delay: (index % 3) * 0.1,
      ease: "power2.out"
    });
  });
}

// Initialize Films Section
function initFilms() {
  const filmsContainer = document.getElementById('films-container');
  
  if (!filmsContainer) {
    console.error('Films container not found');
    return;
  }
  
  FILMS.forEach((film, index) => {
    const item = document.createElement('div');
    item.className = 'video-item relative group overflow-hidden bg-black shadow-2xl';
    
    item.innerHTML = `
      <div class="relative w-full pt-[56.25%] bg-black">
        <video 
          class="absolute inset-0 w-full h-full object-cover"
          id="video-${film.id}"
          poster="${film.thumbnail}"
          controls
          controlsList="nodownload"
          loading="lazy"
          title="${film.title}"
        >
          <source src="${film.videoUrl}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
    
    filmsContainer.appendChild(item);
  });
  
  // Add scroll animations for video items
  const videoItems = filmsContainer.querySelectorAll('.video-item');
  videoItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 40,
      opacity: 0,
      duration: 1,
      delay: (index % 2) * 0.1,
      ease: "power2.out"
    });
  });
}

// Booking Form Handler
function initBookingForm() {
  const form = document.getElementById('booking-form');
  
  if (!form) {
    console.error('Booking form not found');
    return;
  }
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate form
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    
    const formData = {
      name: form.name.value.trim(),
      whatsapp: form.whatsapp.value.trim(),
      eventType: form.eventType.value,
      date: form.date.value,
      city: form.city.value.trim(),
      message: form.message.value.trim()
    };
    
    const text = `Hi Shadhi Filmer, I'd like to enquire about:
Name: ${formData.name}
Event: ${formData.eventType}
Date: ${formData.date}
City: ${formData.city}
Message: ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedText}`, '_blank');
  });
}

// Scroll Animations for Sections
function initScrollAnimations() {
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 20,
      duration: 1.2,
      ease: "power2.out"
    });
  });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Scroll Progress Bar
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.insertBefore(progressBar, document.body.firstChild);
  
  window.addEventListener('scroll', function() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = scrolled + '%';
  }, { passive: true });
}

// Lazy load images with loading class
function initLazyLoading() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function() {
        this.classList.add('loaded');
      });
      img.addEventListener('error', function() {
        this.classList.add('loaded');
      });
    }
  });
  
  // Intersection Observer for lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
}

// Add error handling for GSAP
window.addEventListener('error', function(e) {
  console.error('Error:', e.message);
});

// Performance monitoring
if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 50) {
        console.warn('Slow operation detected:', entry.name, entry.duration + 'ms');
      }
    }
  });
  observer.observe({ entryTypes: ['measure'] });
}
