// Ajoute un gestionnaire d'événement "click" au bouton avec l'ID "darkModeToggle".
document.getElementById('darkModeToggle').addEventListener('click', () => {

    const body = document.body;
    body.classList.toggle('dark-mode');
    const button = document.getElementById('darkModeToggle');

    // Vérifie si le <body> contient la classe "dark-mode".
    if (body.classList.contains('dark-mode')) {
        // Si oui, change le texte du bouton en "Light Mode".
        button.textContent = 'Light Mode';
    } else {
        // Si non, change le texte du bouton en "Dark Mode".
        button.textContent = 'Dark Mode';
    }
});