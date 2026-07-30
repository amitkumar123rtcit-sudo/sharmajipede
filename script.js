//==========================
// SHARMA JI PEDE KI DUKAAN
// Premium Script v2.0
//==========================

//========== LOADER ==========//

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";
loader.style.visibility = "hidden";

},1200);

});

//========== MOBILE MENU ==========//

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){

menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

}else{

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

}

});

//========== CLOSE MENU ==========//

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

});

});

//========== STICKY NAVBAR ==========//

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>60){

navbar.style.background="#111";
navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

navbar.style.background="rgba(0,0,0,.45)";
navbar.style.boxShadow="none";

}

});

//========== HERO COUNTER ==========//

const counters=document.querySelectorAll(".hero-stats h2");

counters.forEach(counter=>{

const update=()=>{

const text=counter.innerText;
const number=parseInt(text.replace(/\D/g,""));

let current=+counter.getAttribute("data-count")||0;

const step=Math.max(1,Math.ceil(number/80));

if(current<number){

current+=step;

if(current>number) current=number;

counter.setAttribute("data-count",current);

if(text.includes("+")){

counter.innerText=current+"+";

}else if(text.includes("%")){

counter.innerText=current+"%";

}else{

counter.innerText=current;

}

setTimeout(update,20);

}

};

update();

});

//========== SCROLL ANIMATION ==========//

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(".feature-card,.product-card,.gallery-item,.review-card,.exp-card").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

//========== ACTIVE NAV LINK ==========//

const sections=document.querySelectorAll("section");
const links=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

//========== SCROLL TO TOP ==========//

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>500?"flex":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

//========== IMAGE LIGHTBOX ==========//

const images=document.querySelectorAll(".gallery-item img");

const lightbox=document.createElement("div");

lightbox.className="lightbox";

document.body.appendChild(lightbox);

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

lightbox.innerHTML=`

<img src="${img.src}">

`;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

//========== YEAR ==========//

const year=document.querySelector(".year");

if(year){

year.innerHTML=new Date().getFullYear();

}
