 // fonction et ecoute de si le lien de navigation a changé
    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('.nav-link');

        links.forEach(link => {
            link.addEventListener('click', function () {
                // Supprime la classe 'selected' de tous les liens
                links.forEach(link => link.classList.remove('selected'));
                
                // Ajoute la classe 'selected' au lien cliqué
                this.classList.add('selected');
            });
        });
    });

// fonction qui fait gere le scroll de la page
document.addEventListener('DOMContentLoaded', function() {
    const navigation = document.querySelector('.navigation');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
    });
});
