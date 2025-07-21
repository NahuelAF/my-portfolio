// Podés usar esto luego para animaciones, scroll suave, o efectos
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
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ANIMACIÓN DE ENTRADA PARA LA SECCIÓN DE PRESENTACIÓN
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
