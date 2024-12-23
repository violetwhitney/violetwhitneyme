// Select the cursor circle element
const cursorCircle = document.querySelector('.cursor-circle');

// Position variables for the cursor circle
let cursorX = 0;
let cursorY = 0;

// Position variables for the mouse
let mouseX = 0;
let mouseY = 0;

// Delay factor for smooth following
const delay = 0.05;

// Update mouse position on mousemove
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smoothly move the cursor circle toward the mouse position
function animateCursor() {
  // Calculate the interpolated position
  cursorX += (mouseX - cursorX) * delay;
  cursorY += (mouseY - cursorY) * delay;

  // Apply the new position to the cursor circle
  cursorCircle.style.transform = `translate(${cursorX - 75}px, ${cursorY - 75}px)`; // Offset by half the circle size (150px / 2)

  // Request the next animation frame
  requestAnimationFrame(animateCursor);
}

// Start the animation
animateCursor();
