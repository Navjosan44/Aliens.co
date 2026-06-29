/*=========================================
        DARK MODE TOGGLE
=========================================*/

const themeBtn = document.getElementById("theme-btn");

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


/*=========================================
        ANIMATED COUNTERS
=========================================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


/*=========================================
        SEARCH SUBJECTS
=========================================*/

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const subjects = document.querySelectorAll(".subject-card");

    subjects.forEach(subject => {

        if (subject.innerText.toLowerCase().includes(value)) {

            subject.style.display = "block";

        } else {

            subject.style.display = "none";

        }

    });

});


/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
        CONTACT FORM
=========================================*/

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you! Your message has been submitted.");

    form.reset();

});


/*=========================================
        NEWSLETTER
=========================================*/

const subscribeBtn = document.querySelector(".newsletter-box button");

subscribeBtn.addEventListener("click", ()=>{

    const email = document.querySelector(".newsletter-box input");

    if(email.value.trim()===""){

        alert("Please enter your email.");

        return;

    }

    alert("🎉 Subscription Successful!");

    email.value="";

});


/*=========================================
        SCROLL REVEAL ANIMATION
=========================================*/

const revealElements = document.querySelectorAll(

".timeline-item,.card,.skill,.achievement-card,.certificate-card,.subject-card,.testimonial-card"

);

function reveal(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element=>{

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            element.style.opacity="1";
            element.style.transform="translateY(0)";
        }

    });

}

revealElements.forEach(element=>{

    element.style.opacity="0";
    element.style.transform="translateY(50px)";
    element.style.transition="0.7s ease";

});

window.addEventListener("scroll", reveal);

reveal();


/*=========================================
        SMOOTH NAVIGATION
=========================================*/

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
        ACTIVE NAVIGATION
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


/*=========================================
        CARD HOVER EFFECT
=========================================*/

const cards=document.querySelectorAll(

".card,.achievement-card,.certificate-card,.subject-card,.testimonial-card"

);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


/*=========================================
        LOADING ANIMATION
=========================================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="opacity .8s";

        document.body.style.opacity="1";

    },100);

});


/*=========================================
            END
=========================================*/

console.log("Education Website Loaded Successfully 🚀");