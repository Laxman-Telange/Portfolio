//to hide some section
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    const targetId = link.getAttribute("data-section"); // Get target section ID
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.add("hidden"); // Hide all sections
    });
    document.getElementById(targetId).classList.remove("hidden"); // Show the clicked section
  });
});
