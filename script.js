/*======================================
Sharma Ji Pede Ki Dukaan
Premium Script v2
Part 1
======================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*==========================
LOADER
==========================*/

const loader=document.querySelector(".loader");

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

setTimeout(()=>{

loader.remove();

},500);

},800);

});

/*==========================
STICKY HEADER
==========================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/*==========================
MOBILE MENU
==========================*/

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

menuBtn.classList.toggle("active");

});

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

menuBtn.classList.remove("active");

});

});

/*==========================
HERO SLIDER
==========================*/

const slides=document.querySelectorAll(".slide");
const dots=document.querySelectorAll(".dot");

let current=0;

function showSlide(index){

slides.forEach(slide=>slide.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

slides[index].classList.add("active");
dots[index].classList.add("active");

}

function autoSlide(){

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

}

setInterval(autoSlide,5000);

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

current=index;

showSlide(current);

});

});

/*==========================
SMOOTH SCROLL
==========================*/

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
  /*======================================
Gallery Lightbox
Reveal Animation
Scroll Progress
Back To Top
======================================*/

/*==========================
GALLERY LIGHTBOX
==========================*/

const gallery=document.querySelectorAll(".gallery-item img");

const lightbox=document.createElement("div");

lightbox.className="lightbox";

document.body.appendChild(lightbox);

gallery.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

lightbox.innerHTML=`

<div class="lightbox-box">

<span class="lightbox-close">&times;</span>

<img src="${img.src}" alt="">

</div>

`;

document.body.style.overflow="hidden";

document.querySelector(".lightbox-close").onclick=()=>{

lightbox.classList.remove("active");

document.body.style.overflow="auto";

};

});

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

document.body.style.overflow="auto";

}

});

/*==========================
REVEAL ANIMATION
==========================*/

const revealItems=document.querySelectorAll(

".feature-card,.product-card,.about-image,.about-content,.gallery-item,.review-card,.contact-info,.contact-image"

);

function reveal(){

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-120){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/*==========================
SCROLL PROGRESS
==========================*/

const progress=document.createElement("div");

progress.className="scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.pageYOffset/total)*100;

progress.style.width=percent+"%";

});

/*==========================
BACK TO TOP
==========================*/

const topBtn=document.createElement("button");

topBtn.className="top-btn";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
  /*======================================
Active Menu
Counter Animation
Premium Effects
Final Finish
======================================*/

/*==========================
ACTIVE NAVIGATION
==========================*/

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll("nav ul li a");

function activeMenu(){

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;
const height=section.offsetHeight;

if(window.scrollY>=top &&
window.scrollY<top+height){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

}

window.addEventListener("scroll",activeMenu);

/*==========================
COUNTER ANIMATION
==========================*/

const counters=document.querySelectorAll(".counter");
let counterStarted=false;

function startCounter(){

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const speed=Math.max(1,Math.ceil(target/120));

function update(){

count+=speed;

if(count>=target){

counter.innerText=target;

}else{

counter.innerText=count;

requestAnimationFrame(update);

}

}

update();

});

}

window.addEventListener("scroll",()=>{

const counterSection=document.querySelector(".counter-section");

if(counterSection &&
!counterStarted &&
counterSection.getBoundingClientRect().top<window.innerHeight-120){

counterStarted=true;

startCounter();

}

});

/*==========================
IMAGE OPTIMIZATION
==========================*/

document.querySelectorAll("img").for
