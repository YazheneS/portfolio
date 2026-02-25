// Improved interactions: accessible menu, smooth scroll, reveal on scroll, contact mailto
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.style.display = expanded ? "" : "flex";
    });
  }

  // Set current year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Reveal on scroll (lightweight)
  const observers = [];
  const reveal = (el) => el.classList.add("reveal");
  const opts = { threshold: 0.08 };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        reveal(en.target);
        io.unobserve(en.target);
      }
    });
  }, opts);
  document
    .querySelectorAll(".card, .hero-content, .about, .contact")
    .forEach((el) => io.observe(el));

  // Contact form: default mail client with prefilled message
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "";
      const email = data.get("email") || "";
      const message = data.get("message") || "";
      const subject = encodeURIComponent("Contact from portfolio: " + name);
      const body = encodeURIComponent(
        `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`,
      );
      // default to YAZHENE's email from resume
      window.location.href = `mailto:yazh.yazhene@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
