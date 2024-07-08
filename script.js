document.addEventListener('DOMContentLoaded', function () {
    // Gestion des liens de navigation
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function () {
            // Supprime la classe 'selected' de tous les liens
            links.forEach(link => link.classList.remove('selected'));
            
            // Ajoute la classe 'selected' au lien cliqué
            this.classList.add('selected');
        });
    });

    // Gestion du défilement de la page
    const navigation = document.querySelector('.navigation');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navigation.classList.add('scrolled');
            afficheMenu.classList.remove('open');
            menuBurgerIcon.classList = 'fa-solid fa-bars';
        } else {
            navigation.classList.remove('scrolled');
        }
    });

    // Gestion du menu burger
    const menuBurgerButton = document.querySelector('.menu-burger');
    const menuBurgerIcon = document.querySelector('.menu-burger i');
    const afficheMenu = document.querySelector('.nav-menu');

    menuBurgerButton.addEventListener('click', function () {
        afficheMenu.classList.toggle('open');
        const isOpen = afficheMenu.classList.contains('open');
        menuBurgerIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });
});