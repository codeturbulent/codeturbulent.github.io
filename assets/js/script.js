/* ==========================================
   CODE TURBULENT - CLEAN & MINIMAL PORTFOLIO
   Core Logic & Interactivity
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Initialize Typed.js
  if (typeof Typed !== "undefined" && document.getElementById("changing")) {
    new Typed("#changing", {
      strings: [
        "Full-Stack Developer",
        "Sole Startup Engineer @ Jiva",
        "Vulnerability Researcher",
        "AI Integrator",
        "CS Student @ BBAU Lucknow"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loop: true
    });
  }

  // 2. Navigation Scroll & Active Link
  const header = document.getElementById("header");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // 3. Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      mobileToggle.textContent = mobileNav.classList.contains("open") ? "✕" : "☰";
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        mobileToggle.textContent = "☰";
      });
    });
  }

  // 4. Project Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (filterVal === "all" || cardCategory === filterVal) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 5. Avatar Flipper / Random Avatar Generator
  let currentAvatarIdx = 1;
  const totalAvatars = 7;
  const avatarImg = document.getElementById("avatar-img");
  const shuffleBtn = document.getElementById("btn-shuffle-avatar");

  if (avatarImg && shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
      currentAvatarIdx = Math.floor(Math.random() * totalAvatars) + 1;
      avatarImg.style.opacity = "0.5";
      setTimeout(() => {
        avatarImg.src = `assets/images/me/me${currentAvatarIdx}.png`;
        avatarImg.style.opacity = "1";
      }, 120);
    });
  }

  // 6. Dynamic Year Update
  const copyrightYear = document.getElementById("copyright-year");
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
});
