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
        ANIMATED COUNTERS
==========================================*/

const counters = document.querySelectorAll(".counter");

function animateCounter(counter){

    const target = +counter.dataset.target;

    let count = 0;

    const step = Math.ceil(target / 100);

    function update(){

        count += step;

        if(count >= target){

            counter.innerText = target;

        }else{

            counter.innerText = count;

            requestAnimationFrame(update);

        }

    }

    update();

}

counters.forEach(animateCounter);

/*==========================================
            LIVE SEARCH
==========================================*/

const searchBox = document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

document.querySelectorAll(".experience-card").forEach(card=>{

const text = card.innerText.toLowerCase();

card.style.display = text.includes(value) ? "block" : "none";

});

});

}

/*==========================================
            FILTER
==========================================*/

const filterButtons=document.querySelectorAll(".filter-btn");

const cards=document.querySelectorAll(".experience-card");

filterButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

filterButtons.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

const filter=btn.dataset.filter;

cards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}

else if(card.classList.contains(filter)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

});

/*==========================================
            EXPERIENCE MODAL
==========================================*/

const modal=document.getElementById("experienceModal");

const modalText=document.getElementById("modalText");

const closeBtn=document.getElementById("closeBtn");

const closeIcon=document.querySelector(".close");

document.querySelectorAll(".experience-info button").forEach(button=>{

button.addEventListener("click",()=>{

const card=button.closest(".experience-card");

const role=card.querySelector("h3").innerText;

const company=card.querySelector("h4").innerText;

const desc=card.querySelector("p").innerText;

const year=card.querySelector("span").innerText;

modalText.innerHTML=`

<h3>${role}</h3>

<p><strong>Company:</strong> ${company}</p>

<p><strong>Duration:</strong> ${year}</p>

<p>${desc}</p>

`;

modal.style.display="flex";

});

});

closeBtn.onclick=()=>modal.style.display="none";

closeIcon.onclick=()=>modal.style.display="none";

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

};

/*==========================================
            CONTACT FORM
==========================================*/

const contactForm=document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Message Sent Successfully!");

contactForm.reset();

});

}

/*==========================================
            NEWSLETTER
==========================================*/

const subscribeBtn=document.querySelector(".newsletter-box button");

if(subscribeBtn){

subscribeBtn.addEventListener("click",()=>{

const input=document.querySelector(".newsletter-box input");

if(input.value.trim()===""){

alert("Please enter your email.");

return;

}

alert("🎉 Thank you for subscribing!");

input.value="";

});

}

/*==========================================
            BACK TO TOP
==========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==========================================
            SCROLL REVEAL
==========================================*/

const revealItems=document.querySelectorAll(

".experience-card,.skill-card,.company-card,.timeline-item,.achievement-card,.testimonial-card,.card"

);

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition=".7s";

});

function reveal(){

const windowHeight=window.innerHeight;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<windowHeight-120){

item.style.opacity="1";

item.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/*==========================================
            SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==========================================
        ACTIVE NAVIGATION
==========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==========================================
            HOVER EFFECT
==========================================*/

document.querySelectorAll(

".experience-card,.skill-card,.company-card,.achievement-card,.testimonial-card"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

/*==========================================
        RESUME BUTTON DEMO
==========================================*/

const resumeBtn=document.querySelector(".btn-download");

if(resumeBtn){

resumeBtn.addEventListener("click",(e)=>{

e.preventDefault();

alert("Resume download feature coming soon!");

});

}

/*==========================================
        PAGE LOAD EFFECT
==========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

},100);

});

/*==========================================
            CONSOLE
==========================================*/

console.log("🚀 Experience Website Loaded Successfully");