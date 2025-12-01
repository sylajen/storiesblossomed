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
