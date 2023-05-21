// var image = document.getElementById('rocket');
// document.addEventListener('mousemove', function(e) {
//     image.style.left = e.clientX + 'px';
//     image.style.top = e.clientY + 'px';
// });

// document.getElementById("person1").onclick = function() {
//     showBio()
// };

// function showBio() {
//     if (document.getElementById("person1").src == "../assets/team-pics/ritu.png") {
//         document.getElementById("person1").src = "../assets/team-pics/ritu-bio.png"
//     }
//     else {
//         document.getElementById("person1").src = "../assets/team-pics/ritu.png"
//     }
// }
function toggleMenu() {
    var menu = document.getElementById("menu-items");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  // Add this code to your JavaScript file or within <script> tags in HTML

// Adjust the parallax effect according to your needs
window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;
  const layers = document.getElementsByClassName('content');
  for (let i = 0; i < layers.length; i++) {
    const speed = parseFloat(layers[i].getAttribute('data-speed'));
    const yPos = -(scrolled * speed);
    layers[i].style.transform = `translateY(${yPos}px)`;
  }
});




  
  


