document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
    var confirmationMessage = document.getElementById("confirmation-message");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var formData = new FormData(contactForm);

        fetch(contactForm.getAttribute('action'), {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(function(response) {
            confirmationMessage.style.display = 'block';
            confirmationMessage.innerHTML = "Votre message a été envoyé avec succès !";
            contactForm.reset();
        })
        .catch(function(error) {
            console.error('Une erreur s\'est produite :', error);
        });
    });
});
