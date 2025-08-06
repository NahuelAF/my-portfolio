
console.log("¡Portafolio cargado!");

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);

        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            navLinks.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const presentacion = document.querySelector(".presentacion-container");

    function mostrarPresentacion() {
        const top = presentacion.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            presentacion.classList.add("visible");
            window.removeEventListener("scroll", mostrarPresentacion);
        }
    }

    window.addEventListener("scroll", mostrarPresentacion);
    mostrarPresentacion();
});
