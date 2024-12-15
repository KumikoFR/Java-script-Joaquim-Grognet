// Sélectionner tous les onglets et les divs de contenu
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

// Ajouter un événement de clic à chaque onglet
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Retirer la classe active de tous les onglets
        tabs.forEach(tab => tab.classList.remove('tab-active'));

        // Retirer la classe active de tous les contenus
        contents.forEach(content => content.classList.remove('active'));

        // Ajouter la classe active à l'onglet cliqué
        this.classList.add('tab-active');

        // Ajouter la classe active au contenu correspondant
        if (this.classList.contains('tab-content1')) {
            document.querySelector('.content1').classList.add('active');
        } else if (this.classList.contains('tab-content2')) {
            document.querySelector('.content2').classList.add('active');
        } else if (this.classList.contains('tab-content3')) {
            document.querySelector('.content3').classList.add('active');
        }
    });
});