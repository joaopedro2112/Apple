const imagens = document.querySelectorAll(".Photos img");
const circles = document.querySelectorAll(".square div");

// container
document.querySelector(".Photos").style.position = "relative";

// setup
imagens.forEach((img, i) => {
    img.style.position = "absolute";
    img.style.top = "0";
    img.style.left = "0";
    img.style.width = "100%";

    img.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    img.style.opacity = i === 0 ? "1" : "0";
    img.style.transform = i === 0 ? "scale(1)" : "scale(1.05)";
});

// clique
circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {

        imagens.forEach((img, i) => {
            if (i === index) {
                img.style.opacity = "1";
                img.style.transform = "scale(1)";
            } else {
                img.style.opacity = "0";
                img.style.transform = "scale(1.05)";
            }
        });

    });
});

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        "h1, h2, h3, h4, p, a, img:not(.Photos img)"
    );

    elements.forEach(el => {
        el.classList.add("reveal");
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
    });

});