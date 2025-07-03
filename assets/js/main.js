<<<<<<< HEAD
// Reveal animations on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 120; // triggers slightly before visible

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Run on load too
window.addEventListener("load", revealOnScroll);
=======
// Reveal animations on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 120; // triggers slightly before visible

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Run on load too
window.addEventListener("load", revealOnScroll);
>>>>>>> d9ce26b1ad76c3fdf7c18a19adab84d36b80e31e
