// Get elements
const backHomeBtn = document.getElementById("back-home");
const illustration = document.getElementById("illustration");

// Fade in the page
document.body.classList.add("fade-in");

// Handle button click
backHomeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Redirect to homepage (change "/" if needed)
  window.location.href = "/";
});

// Add a fun hover effect (in addition to CSS)
illustration.addEventListener("mouseover", () => {
  illustration.style.filter = "brightness(1.2)";
});
illustration.addEventListener("mouseout", () => {
  illustration.style.filter = "brightness(1)";
});

// Press "H" key to go home
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "h") {
    window.location.href = "/";
  }
});
