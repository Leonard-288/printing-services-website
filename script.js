document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      nav.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const submitButton = contactForm.querySelector("button[type='submit']");
      if (submitButton) {
        const originalText = submitButton.textContent;
        submitButton.textContent = "Request Sent";
        submitButton.disabled = true;
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
          contactForm.reset();
        }, 2000);
      }
    });
  }
});

