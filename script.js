// ================= TYPING ANIMATION =================

var typed = new Typed(".typing", {
    strings: [
        "Frontend Developer",
        "React Developer",
        "Full Stack Learner"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// ================= HAMBURGER MENU =================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ================= CLOSE MENU AFTER CLICK =================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ================= ACTIVE NAV LINK =================

window.addEventListener("scroll", () => {

    let sections = document.querySelectorAll("section");
    let navItems = document.querySelectorAll(".nav-links a");

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});

// ================= SCROLL REVEAL =================

ScrollReveal({
    distance: "60px",
    duration: 1500,
    delay: 200,
    reset: false
});

ScrollReveal().reveal(".hero-text", {
    origin: "left"
});

ScrollReveal().reveal(".hero-image", {
    origin: "right"
});

ScrollReveal().reveal(".about-container", {
    origin: "bottom"
});

ScrollReveal().reveal(".skill-card", {
    interval: 150
});

ScrollReveal().reveal(".project-card", {
    interval: 150
});

ScrollReveal().reveal(".contact-container", {
    origin: "bottom"
});

// ================= STICKY NAVBAR =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

});

// ================= BACK TO TOP BUTTON =================

const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});