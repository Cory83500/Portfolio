document.addEventListener("DOMContentLoaded", function() {
    var link = document.querySelector("a[href='#faq-area']");
    
    if (link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            // Récupérez la position de la section FAQ
            var faqSection = document.getElementById("faq-area");
            var faqSectionPosition = faqSection.offsetTop;
            
            // Faites défiler la page jusqu'à la section FAQ
            window.scrollTo({
                top: faqSectionPosition,
                behavior: "smooth" // Cette option permet un défilement en douceur
            });
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var questions = document.querySelectorAll("dt");
    var answers = document.querySelectorAll("dd");

    // Parcourez chaque question et ajoutez un gestionnaire d'événement clic
    questions.forEach(function(question, index) {
        question.addEventListener("click", function(event) {
            event.preventDefault(); // Empêche le comportement par défaut (défilement vers le haut)

            // Réinitialisez toutes les réponses
            answers.forEach(function(answer) {
                answer.style.display = "none";
            });

            // Réinitialisez toutes les questions et leurs couleurs
            questions.forEach(function(q) {
                q.classList.remove("active");
                q.querySelector("a").style.color = "#222222"; // Réinitialisez la couleur
            });

            // Ajoutez la couleur bleue à la question actuelle
            question.querySelector("a").style.color = "#8490ff";

            // Affichez la réponse correspondante
            answers[index].style.display = "block";
            question.classList.add("active");
        });
    });
});




