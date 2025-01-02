const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let current = "";

  // Find current section
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  // Highlight the active link
  navLinks.forEach((link) => {
    link.classList.remove("active"); // Remove active class
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active"); // Add active class
    }

    console.log(link.classList);

  });
});