document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  function closeMenu() {
    navLinks.classList.remove("active");
    navLinks.style.display = "none";
  }

  function isMobileView() {
    return window.innerWidth <= 1024; // Adjust breakpoint if needed
  }

  // Toggle menu
  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
      navLinks.style.display = "flex";
    } else {
      navLinks.style.display = "none";
    }
  });

  // Close menu when clicking a nav link (only on mobile)
  navLinks.addEventListener("click", function (e) {
    if (isMobileView() && e.target.tagName === "A") {
      closeMenu();
    }
  });

  // Close menu when clicking outside (only on mobile)
  document.addEventListener("click", function (e) {
    if (
      isMobileView() &&
      navLinks.classList.contains("active") &&
      !navLinks.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Optional: reset styles on resize (e.g., if resizing from mobile to desktop)
  window.addEventListener("resize", function () {
    if (!isMobileView()) {
      navLinks.style.display = "flex";
      navLinks.classList.remove("active");
    } else if (!navLinks.classList.contains("active")) {
      navLinks.style.display = "none";
    }
  });
});

// Copy Right Year Automatic Update
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.querySelector(".menu-toggle");
//   const navLinks = document.querySelector(".nav-links");

//   menuToggle.addEventListener("click", function () {
//     navLinks.classList.toggle("active");
//     if (navLinks.classList.contains("active")) {
//       navLinks.style.display = "flex";
//     } else {
//       navLinks.style.display = "none";
//     }
//   });
// });

// Temp Link Scroll Behavior
// document.addEventListener("DOMContentLoaded", function () {
//   const scrollDisabled = document.querySelectorAll("a");

//   scrollDisabled.forEach((link) => {
//     link.addEventListener("click", function (event) {
//       event.preventDefault(); // Prevent default link behavior
//     });
//   });
// });
