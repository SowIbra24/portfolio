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

    // Gestion du menu burger
    const menuBurgerButton = document.querySelector('.menu-burger');
    const menuBurgerIcon = document.querySelector('.menu-burger i');
    const afficheMenu = document.querySelector('.nav-menu');
    let isOpen =false;

    function toogleMenu()
    {
        afficheMenu.classList.toggle('open');
        isOpen = afficheMenu.classList.contains('open');
        menuBurgerIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
    menuBurgerButton.addEventListener('click', toogleMenu);

    // Gestion de la fermeture du menu lors du clic sur un lien
    const navLinks = document.querySelectorAll('.nav-lien');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isOpen) {
                toogleMenu();
            }
        });
    });
    

     // Gestion du défilement de la page
     const navigation = document.querySelector('.navigation');

     window.addEventListener('scroll', function () {
         if (window.scrollY > 0) {
             navigation.classList.add('scrolled');
         } else {
             navigation.classList.remove('scrolled');
         }
     });

    //Envoi de l'email via le formulaire
    const form = document.getElementById('contact-form');
    const btn = document.querySelector('.cta');

    emailjs.init("n_HiSOMK7N_KjBU9E");

    function sendMail(event){
        event.preventDefault();

        const params = {
            nom : document.querySelector('#nom').value,
            mail : document.querySelector('#email').value,
            message : document.querySelector('#message').value
        }

        const serviceID = 'default_service';
        const templateID = 'template_i55jpqr';

        btn.value = 'Envoi...';
        btn.disabled = true;

        emailjs.send(serviceID, templateID, params)
            .then(() => {
                btn.value = 'Envoyer';
                btn.disabled = false;
                alert('Votre message a été envoyé avec succès');
                form.reset(); // Réinitialiser le formulaire après envoi
            }, (err) => {
                btn.value = 'Envoyer';
                btn.disabled = false;
                alert('Echec à l\'envoi.\n' + JSON.stringify(err));
            });

    }
    form.addEventListener('submit', sendMail);

    // projets github
    let projects = document.getElementById("projet-card");
        
    function getData() {
    return fetch('https://api.github.com/users/sowibra24/repos')
    .then(response => response.json()) 
    .catch(error => {
    console.error('Erreur lors de la récupération des données:', error);
    return null; 
    });
    }
    getData().then(repos => {
        repos
            .filter(repo => repo["name"] !== "SowIbra24" && repo["name"] !== "portfolio" && repo["name"] !== "calculatrice_php")
            .forEach(repo => {
                const name = repo["name"];
                const description = repo["description"];
                const url = repo["svn_url"];
                appendProjects(projects, name, description,url);
            });
    });

    function appendProjects(projects, name, description,url) {

        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        
        // pour l'image
        const img = document.createElement('img');
        img.src = 'image/cards/'+name+'.png'; 
        img.className = 'card-img-top';
        img.alt = 'Une petite image qui illustre'+name;

        // la carte bootstrap
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.innerHTML = name; 

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerHTML = description;

        const button = document.createElement('a');
        button.target = '_blank'
        button.href = url; 
        button.className = 'btn btn-primary';
        button.innerHTML = 'Aller au repo git';

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(button);
        card.appendChild(img);
        card.appendChild(cardBody);

        projects.appendChild(card);
    }

    // Ecrire de façon dynamique 
    const typed = new Typed('.texte-js', {
        strings : [
            'un developpeur amateur 💻',
            'intéressé par la cybersécurité ',
            'étudiant en Systèmes Réseaux et Sécurité'
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

