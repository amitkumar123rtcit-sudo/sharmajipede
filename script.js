window.onload = function () {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.style.display = "none";
    }
};
/*=========================================
  Sharma Ji Pede Ki Dukaan
  Premium Script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

  /* Sticky Header */
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (header) {
      header.classList.toggle("sticky", window.scrollY > 60);
    }
  });

  /* Smooth Scroll */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  /* Reveal Animation */
  const revealItems = document.querySelectorAll(
    ".product-card,.gallery-item,.review-card,.feature-card,.about-box"
  );

  function reveal() {
    revealItems.forEach(item => {
      const top = item.getBoundingClientRect().top;

      if (top < window.innerHeight - 100) {
        item.classList.add("show");
      }
    });
  }

  reveal();

  window.addEventListener("scroll", reveal);

  /* Counter */
  const counters = document.querySelectorAll(".counter");

  let started = false;

  function startCounter() {

    counters.forEach(counter => {

      const target = +counter.dataset.target;

      let count = 0;

      const speed = target / 80;

      function update() {

        count += speed;

        if (count < target) {

          counter.innerText = Math.floor(count);

          requestAnimationFrame(update);

        } else {

          counter.innerText = target;

        }

      }

      update();

    });

  }

  window.addEventListener("scroll", () => {

    const section = document.querySelector(".counter-section");

    if (!section) return;

    if (
      section.getBoundingClientRect().top < window.innerHeight - 100 &&
      !started
    ) {

      started = true;

      startCounter();

    }

  });

  /* Back To Top */

  const topBtn = document.querySelector(".top-btn");

  if (topBtn) {

    window.addEventListener("scroll", () => {

      topBtn.classList.toggle("show", window.scrollY > 400);

    });

    topBtn.onclick = () => {

      window.scrollTo({

        top: 0,

        behavior: "smooth"

      });

    };

  }

  /* Gallery Popup */

  const galleryImages = document.querySelectorAll(".gallery-item img");

  const popup = document.createElement("div");

  popup.className = "lightbox";

  document.body.appendChild(popup);

  galleryImages.forEach(img => {

    img.onclick = () => {

      popup.classList.add("active");

      popup.innerHTML = `
      <span class="close">&times;</span>
      <img src="${img.src}">
      `;

      popup.querySelector(".close").onclick = () => {

        popup.classList.remove("active");

      };

    };

  });

  popup.onclick = e => {

    if (e.target === popup) {

      popup.classList.remove("active");

    }

  };

});

console.log("Premium Script Loaded");
