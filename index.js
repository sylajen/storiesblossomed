function toggleMenu() {
    var menu = document.getElementById("menu-items");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  // Add this code to your JavaScript file or within <script> tags in HTML

  const container = document.getElementById('parallax-container');
  const video = document.getElementById('parallax-video');
  
  function handleScroll() {
    const scrollPosition = window.scrollY;
    const translateValue = scrollPosition * 50; // Adjust the value to control the parallax effect
  
    video.style.transform = `translateY(${translateValue}px)`;
  }
  
  window.addEventListener('scroll', handleScroll);
