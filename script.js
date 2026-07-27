// =========================
// MENU MOBILE
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");

    const isOpen = mainNav.classList.contains("active");

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );
});


// =========================
// FECHAR MENU AO CLICAR EM UM LINK
// =========================

document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("active");

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menu"
        );
    });
});


// =========================
// ANIMAÇÕES AO ROLAR A PÁGINA
// =========================

const animatedElements = document.querySelectorAll(
    ".section-heading, .text-column, .photo-story, .quote-large, .final-content"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);
            }

        });
    },
    {
        threshold: 0.15
    }
);


// Observa cada elemento que deve aparecer suavemente
animatedElements.forEach((element) => {
    observer.observe(element);
});


// =========================
// EFEITO NO HEADER AO ROLAR
// =========================

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// =========================
// DOCUMENTÁRIO
// =========================

const poster = document.getElementById("videoPoster");
const iframe = document.getElementById("videoDocumentario");

poster.addEventListener("click", () => {

    poster.classList.add("hide");

    iframe.src = iframe.dataset.src;

});