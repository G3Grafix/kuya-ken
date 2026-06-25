const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "#000";
    } else {
        nav.style.background = "transparent";
    }
});

if (window.innerWidth > 768) {
    document.body.innerHTML = `
        <h1 style = "color:white; display: flex;
                    justify-content: center;
                    align-text: center;">This website is only available on mobile.</h1>
    `;
}