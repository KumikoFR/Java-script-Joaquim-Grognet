function validateForm() {
    // Récupération des éléments du formulaire
    const pseudo = document.getElementById('pseudo');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const message = document.getElementById('message');
    const gender = document.querySelector('input[name="gender"]:checked');

    let isValid = true;  // Variable pour déterminer si le formulaire est valide
    message.style.display = 'none';  // Masquer le message au début

    // Réinitialisation le texte
    pseudo.className = '';
    email.className = '';
    password.className = '';
    confirmPassword.className = '';

    // Validation du pseudo
    if (pseudo.value.length < 6) {
        pseudo.classList.add('error');  // Ajout d'une classe d'erreur si le pseudo est trop court
        isValid = false;
    } else {
        pseudo.classList.add('success');  // Ajout d'une Classe de succès si le pseudo est valide
    }

    // Validation de l'email
    if (!email.value) {
        email.classList.add('error');
        isValid = false;
    } else {
        email.classList.add('success');
    }

    // Validation du mot de passe
    if (password.value.length < 8) {
        password.classList.add('error');
        isValid = false;
    } else {
        password.classList.add('success');
    }

    // Validation de la vérification du mot de passe
    if (confirmPassword.value !== password.value || !confirmPassword.value) {
        confirmPassword.classList.add('error');
        isValid = false;
    } else {
        confirmPassword.classList.add('success');
    }

    // Validation du choix de genre
    if (!gender) {
        isValid = false;
        message.textContent = 'Veuillez choisir votre genre.';  // Message d'erreur si aucun genre n'est sélectionné
        message.className = 'message error';
        message.style.display = 'block';
        return;
    }

    // Affichage du message final en fonction de la validité du formulaire
    if (isValid) {
        message.textContent = 'Formulaire envoyé avec succès !';
        message.className = 'message success';
        message.style.display = 'block';
    } else {
        if (!message.style.display) {
            message.style.display = 'none';
        }
        message.textContent = 'Veuillez corriger les erreurs dans le formulaire.';
        message.className = 'message error';
        message.style.display = 'block';
    }
}
