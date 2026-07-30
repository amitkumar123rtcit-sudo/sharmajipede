
// Smooth animation on page load
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Sticky header shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "0 3px 15px rgba(0,0,0,0.2)";
    }
});

// Gallery image click
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        window.open(img.src, "_blank");
    });
});
