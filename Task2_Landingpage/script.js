// =============================
// Mobile Navbar
// =============================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar nav");
const navLinks = document.querySelectorAll(".navbar nav a");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// =============================
// Contact Form
// =============================

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector(".form-message");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.textContent = "Message sent successfully!";

    contactForm.reset();
});


// =============================
// Active Navbar Link on Scroll
// =============================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});