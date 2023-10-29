document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
    var confirmationMessage = document.getElementById("confirmation-message");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Vous pouvez ajouter ici votre code de traitement du formulaire

        // Affichez le message de confirmation
        confirmationMessage.innerHTML = "Votre message a été envoyé avec succès !";

        // Réinitialisez le formulaire après le traitement
        contactForm.reset();
    });
});

