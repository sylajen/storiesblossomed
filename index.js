function toggleMenu() {
  var menu = document.getElementById("menu-items");
  var menuIcon = document.querySelector(".menu-icon");

  if (!menu || !menuIcon) return;
  
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    menuIcon.classList.remove("active");
    menuIcon.setAttribute("aria-expanded", "false");
    menuIcon.setAttribute("aria-label", "Open menu");
  } else {
    menu.classList.add("show-menu");
    menuIcon.classList.add("active");
    menuIcon.setAttribute("aria-expanded", "true");
    menuIcon.setAttribute("aria-label", "Close menu");
  }
}

// Close menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.js-year').forEach(function(year) {
    year.textContent = new Date().getFullYear();
  });

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
        menuIcon.setAttribute("aria-expanded", "false");
        menuIcon.setAttribute("aria-label", "Open menu");
      }
    });
  });

  if (menuIcon) {
    menuIcon.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleMenu();
      }
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu && menu.contains(event.target);
    const isClickOnMenuIcon = menuIcon && menuIcon.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnMenuIcon && menu && menu.classList.contains("show-menu")) {
      menu.classList.remove("show-menu");
      if (menuIcon) {
        menuIcon.classList.remove("active");
        menuIcon.setAttribute("aria-expanded", "false");
        menuIcon.setAttribute("aria-label", "Open menu");
      }
    }
  });
});

  // Add this code to your JavaScript file or within <script> tags in HTML

  const container = document.getElementById('parallax-container');
  const video = document.getElementById('parallax-video');
  
  function handleScroll() {
    if (!video) return;
    const scrollPosition = window.scrollY;
    const translateValue = scrollPosition * 50; // Adjust the value to control the parallax effect
  
    video.style.transform = `translateY(${translateValue}px)`;
  }
  
  window.addEventListener('scroll', handleScroll);

