document.addEventListener("DOMContentLoaded", function() {
    var link = document.querySelector("a[href='#projet']");
    
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        // Récupérez la position de la section FAQ
        var faqSection = document.getElementById("project");
        var faqSectionPosition = faqSection.offsetTop;
        
        // Faites défiler la page jusqu'à la section FAQ
        window.scrollTo({
            top: faqSectionPosition,
            behavior: "smooth" // Cette option permet un défilement en douceur
        });
    });
});