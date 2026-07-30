
/*====================================
  Sharma Ji Pede Ki Dukaan
  script.js
====================================*/

document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     Loader
  =============================== */

  const loader = document.querySelector(".loader");

  window.addEventListener("load", function () {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }
  });

  /* ===============================
     Sticky Header
  =============================== */

  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (!header) return;

    if (window.scrollY > 80) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  /* ===============================
     Smooth Scroll
  =============================== */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {

        target.scrollInto
