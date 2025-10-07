// index.js
import "./styles.css";

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  
  const menuIcon = dropdown.querySelector('.fa-bars');
  const overlay = dropdown.querySelector('.overlay');
  const sideMenu = dropdown.querySelector('.items');

  menuIcon.addEventListener('click', () => {
      overlay.classList.toggle('show');
  });

  overlay.addEventListener('click', (event) => {
    // Close only if clicking *outside* the side menu
    if (!sideMenu.contains(event.target)) {
      overlay.classList.remove('show');
    }
  });
})


