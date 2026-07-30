// ================================
// Sharma Ji Pede Ki Dukan
// Premium Website Script
// ================================

// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = "rgba(90,0,0,0.95)";
  } else {
    header.style.background = "rgba(90,0,0,0.75)";
  }
});

// Fade animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

console.log("Sharma Ji Pede Website Loaded Successfully");
