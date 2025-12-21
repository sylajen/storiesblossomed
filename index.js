function toggleMenu() {
  var menu = document.getElementById("menu-items");
  var menuIcon = document.querySelector(".menu-icon");
  
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    menuIcon.classList.remove("active");
  } else {
    menu.classList.add("show-menu");
    menuIcon.classList.add("active");
  }
}

// Close menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.menu-items a');
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.getElementById("menu-items");
  
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (menu) {
        menu.classList.remove("show-menu");
      }
      if (menuIcon) {
        menuIcon.classList.remove("active");
      }
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu && menu.contains(event.target);
    const isClickOnMenuIcon = menuIcon && menuIcon.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnMenuIcon && menu && menu.classList.contains("show-menu")) {
      menu.classList.remove("show-menu");
      if (menuIcon) menuIcon.classList.remove("active");
    }
  });
});

  // Add this code to your JavaScript file or within <script> tags in HTML

  const container = document.getElementById('parallax-container');
  const video = document.getElementById('parallax-video');
  
  function handleScroll() {
    const scrollPosition = window.scrollY;
    const translateValue = scrollPosition * 50; // Adjust the value to control the parallax effect
  
    video.style.transform = `translateY(${translateValue}px)`;
  }
  
  window.addEventListener('scroll', handleScroll);

  // Rotating words animation
  document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.rotating-word');
    if (words.length === 0) return;
    
    let currentIndex = 0;
    
    function rotateWords() {
      // Remove active class from current word
      words[currentIndex].classList.remove('active');
      
      // Move to next word
      currentIndex = (currentIndex + 1) % words.length;
      
      // Add active class to next word
      words[currentIndex].classList.add('active');
    }
    
    // Rotate every 3 seconds
    setInterval(rotateWords, 3000);
  });

// Theme toggle
document.addEventListener('DOMContentLoaded', function() {
  const root = document.documentElement; // <html>
  const toggleBtn = document.querySelector('.theme-toggle');
  const iconEl = document.querySelector('.theme-toggle .theme-icon');

  // Initialize from saved preference
  const saved = localStorage.getItem('sb-theme');
  if (saved === 'dark') {
    root.setAttribute('data-theme', 'dark');
    if (iconEl) iconEl.textContent = iconEl.getAttribute('data-icon-dark') || '☀';
  } else {
    root.setAttribute('data-theme', 'light');
    if (iconEl) iconEl.textContent = iconEl.getAttribute('data-icon-light') || '☾';
  }

  // Toggle handler
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      const isDark = root.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('sb-theme', next);
      if (iconEl) {
        iconEl.textContent = next === 'dark'
          ? (iconEl.getAttribute('data-icon-dark') || '☀')
          : (iconEl.getAttribute('data-icon-light') || '☾');
      }
    });
  }
});
