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

const animateCounter = (counter) => {

    const target = Number(counter.dataset.target);
    let current = 0;

    const increment = Math.ceil(target / 100);

    const update = () => {

        current += increment;

        if (current >= target) {

            counter.textContent = target;

        } else {

            counter.textContent = current;

            requestAnimationFrame(update);

        }

    };

    update();

};

counters.forEach(animateCounter);

/*==========================================
        LIVE SEARCH
==========================================*/

const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".project-card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/*==========================================
        CATEGORY FILTER
==========================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            }

            else if (card.classList.contains(filter)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});

/*==========================================
        PROJECT MODAL
==========================================*/

const modal = document.getElementById("projectModal");

const modalText = document.getElementById("modalText");

const closeBtn = document.getElementById("closeBtn");

const closeIcon = document.querySelector(".close");

const detailButtons = document.querySelectorAll(".project-info button");

detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".project-card");

        const title = card.querySelector("h3").textContent;

        const description = card.querySelector("p").textContent;

        const tech = card.querySelector("span").textContent;

        modalText.innerHTML = `
            <strong>${title}</strong><br><br>
            ${description}<br><br>
            Technology Used:
            <strong>${tech}</strong>
        `;

        modal.style.display = "flex";

    });

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

closeIcon.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

/*==========================================
        CONTACT FORM
==========================================*/

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been sent successfully.");

        form.reset();

    });

}

/*==========================================
        NEWSLETTER
==========================================*/

const subscribeButton = document.querySelector(".newsletter-box button");

if (subscribeButton) {

    subscribeButton.addEventListener("click", () => {

        const email = document.querySelector(".newsletter-box input");

        if (email.value.trim() === "") {

            alert("Please enter your email.");

            return;

        }

        alert("🎉 Subscription Successful!");

        email.value = "";

    });

}

/*==========================================
        BACK TO TOP
==========================================*/

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

        top: 0,

        behavior: "smooth"

    });

});

/*==========================================
        SCROLL REVEAL
==========================================*/

const revealItems = document.querySelectorAll(

".project-card,.tech-card,.timeline-item,.review-card,.card"

);

function reveal() {

    const windowHeight = window.innerHeight;

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = ".7s ease";

});

window.addEventListener("scroll", reveal);

reveal();

/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==========================================
        ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==========================================
        CARD HOVER EFFECT
==========================================*/

document.querySelectorAll(

".project-card,.tech-card,.review-card"

).forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/*==========================================
        PAGE LOAD EFFECT
==========================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s";

        document.body.style.opacity = "1";

    }, 100);

});

/*==========================================
        CONSOLE
==========================================*/

console.log("🚀 Projects Website Loaded Successfully");