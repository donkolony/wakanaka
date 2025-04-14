document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
      navLinks.style.display = "flex";
    } else {
      navLinks.style.display = "none";
    }
  });
});

// Temp Link Scroll Behavior
document.addEventListener("DOMContentLoaded", function () {
  const scrollDisabled = document.querySelectorAll("a");

  scrollDisabled.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
    });
  });
});
