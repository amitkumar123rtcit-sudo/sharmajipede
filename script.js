/*========================================================
Sharma Ji Pede Ki Dukaan
Premium script.js
========================================================*/

/*========== LOADER ==========*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

},1200);

}

});

/*========== STICKY HEADER ==========*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/*========== ACTIVE MENU ==========*/

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll("nav a");

function activeMenu(){

let current="";

sections.forEach(sec=>{

const top=sec.offsetTop-150;
const height=sec.offsetHeight;

if(scrollY>=top && scrollY<top+height){

current=sec.getAttribute("id");

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

/*========== COUNTER ==========*/

const counters=document.querySelectorAll(".trust-box h2");

let started=false;

function counterRun(){

counters.forEach(counter=>{

const target=parseInt(counter.innerText.replace(/\D/g,""));

const symbol=counter.innerText.replace(/[0-9]/g,"");

let count=0;

const speed=Math.ceil(target/100);

function update(){

count+=speed;

if(count>target) count=target;

counter.innerText=count+symbol;

if(count<target){

requestAnimationFrame(update);

}

}

update();

});

}

window.addEventListener("scroll",()=>{

const trust=document.querySelector(".trust");

if(!trust) return;

if(trust.getBoundingClientRect().top<window.innerHeight-100 && !started){

started=true;

counterRun();

}

});

/*========== REVEAL ==========*/

const reveals=document.querySelectorAll(".product-card,.why-card,.review-card,.trust-box,.about-content,.about-image");

reveals.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";
el.style.transition=".8s";

});

function reveal(){

reveals.forEach(el=>{

if(el.getBoundingClientRect().top<window.innerHeight-80){

el.style.opacity="1";
el.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/*========== LIGHTBOX ==========*/

const gallery=document.querySelectorAll(".gallery-grid img");

const lightbox=document.createElement("div");

lightbox.className="lightbox";

document.body.appendChild(lightbox);

gallery.forEach(img=>{

img.onclick=()=>{

lightbox.classList.add("active");

lightbox.innerHTML=`
<span class="close">&times;</span>
<img src="${img.src}">
`;

document.body.style.overflow="hidden";

document.querySelector(".close").onclick=()=>{

lightbox.classList.remove("active");

document.body.style.overflow="auto";

};

};

});

lightbox.onclick=e=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

document.body.style.overflow="auto";

}

};

/*========== PARALLAX ==========*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero-bg");

if(hero){

hero.style.transform=`translateY(${window.scrollY*0.25}px)`;

}

});

/*========== BACK TO TOP ==========*/

const topBtn=document.createElement("button");

topBtn.className="top-btn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.classList.toggle("show",window.scrollY>500);

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*========== SCROLL PROGRESS ==========*/

const progress=document.createElement("div");

progress.className="scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.pageYOffset/total)*100;

progress.style.width=percent+"%";

});

/*========== SMOOTH SCROLL ==========*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.onclick=function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

};

});

/*========== IMAGE DRAG OFF ==========*/

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});

console.log("Premium Website Loaded Successfully");
/*========================================================
Sharma Ji Pede Ki Dukaan
Premium script.js
========================================================*/

/*========== LOADER ==========*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

},1200);

}

});

/*========== STICKY HEADER ==========*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/*========== ACTIVE MENU ==========*/

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll("nav a");

function activeMenu(){

let current="";

sections.forEach(sec=>{

const top=sec.offsetTop-150;
const height=sec.offsetHeight;

if(scrollY>=top && scrollY<top+height){

current=sec.getAttribute("id");

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

/*========== COUNTER ==========*/

const counters=document.querySelectorAll(".trust-box h2");

let started=false;

function counterRun(){

counters.forEach(counter=>{

const target=parseInt(counter.innerText.replace(/\D/g,""));

const symbol=counter.innerText.replace(/[0-9]/g,"");

let count=0;

const speed=Math.ceil(target/100);

function update(){

count+=speed;

if(count>target) count=target;

counter.innerText=count+symbol;

if(count<target){

requestAnimationFrame(update);

}

}

update();

});

}

window.addEventListener("scroll",()=>{

const trust=document.querySelector(".trust");

if(!trust) return;

if(trust.getBoundingClientRect().top<window.innerHeight-100 && !started){

started=true;

counterRun();

}

});

/*========== REVEAL ==========*/

const reveals=document.querySelectorAll(".product-card,.why-card,.review-card,.trust-box,.about-content,.about-image");

reveals.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";
el.style.transition=".8s";

});

function reveal(){

reveals.forEach(el=>{

if(el.getBoundingClientRect().top<window.innerHeight-80){

el.style.opacity="1";
el.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/*========== LIGHTBOX ==========*/

const gallery=document.querySelectorAll(".gallery-grid img");

const lightbox=document.createElement("div");

lightbox.className="lightbox";

document.body.appendChild(lightbox);

gallery.forEach(img=>{

img.onclick=()=>{

lightbox.classList.add("active");

lightbox.innerHTML=`
<span class="close">&times;</span>
<img src="${img.src}">
`;

document.body.style.overflow="hidden";

document.querySelector(".close").onclick=()=>{

lightbox.classList.remove("active");

document.body.style.overflow="auto";

};

};

});

lightbox.onclick=e=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

document.body.style.overflow="auto";

}

};

/*========== PARALLAX ==========*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero-bg");

if(hero){

hero.style.transform=`translateY(${window.scrollY*0.25}px)`;

}

});

/*========== BACK TO TOP ==========*/

const topBtn=document.createElement("button");

topBtn.className="top-btn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.classList.toggle("show",window.scrollY>500);

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*========== SCROLL PROGRESS ==========*/

const progress=document.createElement("div");

progress.className="scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.pageYOffset/total)*100;

progress.style.width=percent+"%";

});

/*========== SMOOTH SCROLL ==========*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.onclick=function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

};

});

/*========== IMAGE DRAG OFF ==========*/

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});

console.log("Premium Website Loaded Successfully");
