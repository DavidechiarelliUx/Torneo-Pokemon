// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const menuLinks = document.querySelector(".menu-links");

    // Aggiungi un listener per il clic sull'hamburger menu
    hamburgerMenu.addEventListener("click", () => {
        menuLinks.classList.toggle("active"); // Mostra o nasconde il menu
    });
});
