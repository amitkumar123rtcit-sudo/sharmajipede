/*=========================================
Sharma Ji Pede Ki Dukaan
Premium Script.js
Part 1
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

/*==============================
PREMIUM LOADER
==============================*/

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {

if(loader){

loader.style.opacity="0";

loader.style.visibility="hidden";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});

/*==============================
STICKY HEADER
==============================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/*==============================
MOBILE MENU
==============================*/

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

menuBtn.classList.toggle("active");

});

}

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

menuBtn.classList.remove("active");

});

});

/*==============================
AUTO HERO SLIDER
==============================*/

const slides=document.querySelectorAll(".slide");

const dots=document.querySelectorAll(".dot");

let current=0;

function showSlide(index){

slides.forEach(slide=>slide.classList.remove("active"));

dots.forEach(dot=>dot.classList.remove("active"));

slides[index].classList.add("active");

dots[index].classList.add("active");

}

function nextSlide(){

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

}

setInterval(nextSlide,5000);

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

current=index;

showSlide(current);

});

});

/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
  /*=========================================
Gallery Lightbox
Reveal Animation
Scroll Progress
Back To Top
=========================================*/

/*==============================
GALLERY LIGHTBOX
==============================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(img => {

img.addEventListener("click", () => {

lightbox.classList.add("active");

lightbox.innerHTML = `
<div class="lightbox-content">
<span class="close-lightbox">&times;</span>
<img src="${img.src}" alt="">
</div>
`;

document.body.style.overflow = "hidden";

document.querySelector(".close-lightbox").onclick = () => {

lightbox.classList.remove("active");

document.body.style.overflow = "auto";

};

});

});

lightbox.onclick = e => {

if (e.target === lightbox) {

lightbox.classList.remove("active");

document.body.style.overflow = "auto";

}

};

/*==============================
REVEAL ANIMATION
==============================*/

const reveals = document.querySelectorAll(
".feature-card,.product-card,.about-image,.about-content,.gallery-grid img,.review-card,.contact-info,.contact-image"
);

function revealElements() {

reveals.forEach(item => {

const top = item.getBoundingClientRect().top;

if (top < window.innerHeight - 100) {

item.classList.add("show");

}

});

}

window.addEventListener("scroll", revealElements);

revealElements();

/*==============================
SCROLL PROGRESS BAR
==============================*/

const progress = document.createElement("div");

progress.className = "scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

const total = document.documentElement.scrollHeight - window.innerHeight;

const percent = (window.pageYOffset / total) * 100;

progress.style.width = percent + "%";

});

/*==============================
BACK TO TOP
==============================*/

const topBtn = document.createElement("button");

topBtn.className = "top-btn";

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

if (window.scrollY > 400) {

topBtn.classList.add("show");

} else {

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});
  /*=========================================
Product Carousel
Counter Animation
Floating Effects
Premium Finish
=========================================*/

/*==============================
PRODUCT CAROUSEL
==============================*/

const productGrid = document.querySelector(".product-grid");

let carouselIndex = 0;

function autoCarousel() {

if (!productGrid) return;

const cards = productGrid.querySelectorAll(".product-card");

if (cards.length <= 1) return;

carouselIndex++;

if (carouselIndex >= cards.length) {

carouselIndex = 0;

}

productGrid.scrollTo({

left: cards[carouselIndex].offsetLeft,

behavior: "smooth"

});

}

setInterval(autoCarousel, 4000);

/*==============================
COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter() {

counters.forEach(counter => {

const target = Number(counter.dataset.target);

let value = 0;

const speed = Math.ceil(target / 100);

function update() {

value += speed;

if (value >= target) {

counter.innerText = target;

} else {

counter.innerText = value;

requestAnimationFrame(update);

}

}

update();

});

}

window.addEventListener("scroll", () => {

const section = document.querySelector(".counter-section");

if (!section || counterStarted) return;

if (section.getBoundingClientRect().top < window.innerHeight - 120) {

counterStarted = true;

startCounter();

}

});

/*==============================
FLOATING EFFECTS
==============================*/

const heroImage = document.querySelector(".hero-content");

if (heroImage) {

window.addEventListener("mousemove", e => {

const x = (window.innerWidth / 2 - e.clientX) / 40;

const y = (window.innerHeight / 2 - e.clientY) / 40;

heroImage.style.transform = `translate(${x}px,${y}px)`;

});

}

/*==============================
IMAGE DRAG OFF
==============================*/

document.querySelectorAll("img").forEach(img => {

img.draggable = false;

img.loading = "lazy";

});

/*==============================
ACTIVE MENU
==============================*/

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(sec => {

const top = sec.offsetTop - 150;

const height = sec.offsetHeight;

if (window.scrollY >= top &&
window.scrollY < top + height) {

current = sec.id;

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});

/*==============================
PREMIUM FINISH
==============================*/

console.clear();

console.log("%cSharma Ji Pede Ki Dukaan",
"color:#7b0f18;font-size:22px;font-weight:bold;");

console.log("%cPremium Website Loaded Successfully",
"color:green;font-size:16px;");

});
