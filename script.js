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
            afficheMenu.classList.remove('open')
            menuBurgerIcon.classList = 'fa-solid fa-bars';
        } else {
            navigation.classList.remove('scrolled');
        }
    });
});

//menu burger
const menuBurgerButton = document.querySelector('.menu-burger');
const menuBurgerIcon = document.querySelector('.menu-burger i');
const afficheMenu = document.querySelector('.nav-menu');

menuBurgerButton.onclick = function() {
    afficheMenu.classList.toggle('open');
    const isOpen = afficheMenu.classList.contains('open');
    menuBurgerIcon.classList = isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars';
}