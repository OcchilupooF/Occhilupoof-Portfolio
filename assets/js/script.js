document.getElementById('menuToggle').addEventListener('click', function(event) {
  const navLinks = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');

  // Toggle della classe 'active' per aprire/chiudere il menu
  navLinks.classList.toggle('active');

  // Controlla lo stato attuale del menu
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

  // Aggiorna gli attributi ARIA
  menuToggle.setAttribute("aria-expanded", !isExpanded);
  menuToggle.setAttribute("aria-label", isExpanded ? "Apri menu" : "Chiudi menu");

  event.stopPropagation(); // Impedisce la chiusura immediata cliccando sul bottone
});

// evento al clic fuori dalla navbar per chiuderla
document.addEventListener('click', function(event) {
  const navLinks = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');

  // Verifica se il clic è avvenuto fuori dal menu e dal pulsante
  if (!navLinks.contains(event.target) && event.target !== menuToggle) {
      navLinks.classList.remove('active');

      // Ripristina gli attributi ARIA quando il menu si chiude
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Apri menu");
  }
});





document.addEventListener("DOMContentLoaded", function () {
    const detailsElements = document.querySelectorAll(".accordion details");

    detailsElements.forEach((details) => {
      details.addEventListener("toggle", function () {
        if (this.open) {
          // Chiude gli altri <details> aperti
          detailsElements.forEach((other) => {
            if (other !== this) {
              other.removeAttribute("open");
            }
          });
        }
      });
    });

    // Chiude l'accordion se clicchi fuori
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".accordion")) {
        detailsElements.forEach((details) => details.removeAttribute("open"));
      }
    });
  });






document.getElementById("form").addEventListener("submit", function(event) {
// Prevenire l'invio del form se uno dei campi è vuoto
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

if (!name || !email || !message) {
alert("Per favore, compila tutti i campi 🙏");
event.preventDefault();
} else {
alert("Messaggio inviato! Ti risponderò a breve 😊");
}
});
