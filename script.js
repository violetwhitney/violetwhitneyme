// script.js

const focusArea = document.querySelector('.focus-area');
const mainContent = document.querySelector('main');

document.addEventListener('mousemove', (e) => {
  // Position the focus area around the mouse
  const x = e.pageX - focusArea.offsetWidth / 2;
  const y = e.pageY - focusArea.offsetHeight / 2;
  focusArea.style.transform = `translate(${x}px, ${y}px)`;
  
  // Adjust blur dynamically
  mainContent.style.filter = `blur(8px)`;
});
