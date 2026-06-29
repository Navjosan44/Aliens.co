/*==========================================
            DARK MODE
==========================================*/

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    });

}

/*==========================================
            MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

/*==========================================
            TYPING EFFECT
==========================================*/

const typing = document.getElementById("typing");

if (typing) {

const words = [

"Building Future Websites",

"Artificial Intelligence",

"Modern Web Applications",

"Cloud Computing",

"Software Development",

"Automation Solutions"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const current = words[wordIndex];

if(!deleting){

typing.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1200);

return;

}

}else{

typing.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex = (wordIndex+1)%words.length;

charIndex = 0;

}

}

setTimeout(typeEffect,deleting?50:100);

}

typeEffect();

}

/*==========================================
            COUNTERS
==========================================*/

const counters = document.querySelectorAll(".counter");

function animateCounter(counter){

const target = +counter.dataset.target;

let current = 0;

const increment = Math.ceil(target/100);

function update(){

current += increment;

if(current >= target){

counter.innerText = target + "+";

}else{

counter.innerText = current;

requestAnimationFrame(update);

}

}

update();

}

counters.forEach(animateCounter);

/*==========================================
            SEARCH
==========================================*/

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

document.querySelectorAll("section").forEach(section=>{

const text = section.innerText.toLowerCase();

section.style.display = text.includes(value) ? "" : "none";

});

});

}

/*==========================================
        CONTACT FORM
==========================================*/

const form = document.querySelector(".contact-form form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank you! Your message has been sent.");

form.reset();

});

}

/*==========================================
        NEWSLETTER
==========================================*/

const newsletterBtn = document.querySelector(".newsletter-box button");

if(newsletterBtn){

newsletterBtn.addEventListener("click",()=>{

const email = document.querySelector(".newsletter-box input");

if(email.value.trim()==""){

alert("Please enter your email.");

return;

}

alert("🎉 Successfully Subscribed!");

email.value="";

});

}

/*==========================================
        BACK TO TOP
==========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==========================================
        ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const top = section.offsetTop-150;

if(window.scrollY>=top){

current = section.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==========================================
        SCROLL REVEAL
==========================================*/

const revealItems = document.querySelectorAll(

".highlight-card,.service-card,.tech-card,.project-card,.why-card,.testimonial-card,.faq-item,.stat-box"

);

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s";

});

function reveal(){

const trigger = window.innerHeight-120;

revealItems.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top<trigger){

item.style.opacity="1";

item.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/*==========================================
        BUTTON RIPPLE
==========================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

/*==========================================
        PAGE LOADER EFFECT
==========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

},100);

});

/*==========================================
        PARALLAX HERO
==========================================*/

window.addEventListener("scroll",()=>{

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

heroImage.style.transform =

`translateY(${window.scrollY*0.15}px)`;

}

});

/*==========================================
        FLOATING CARDS
==========================================*/

document.querySelectorAll(".floating-card").forEach((card,index)=>{

card.style.animationDelay = `${index*0.5}s`;

});

/*==========================================
        CONSOLE
==========================================*/

console.log("🚀 Aliens Company Website Loaded Successfully");