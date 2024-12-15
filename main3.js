// Créer un personnage
class Personnage {
    constructor(nom, pointsDeVie, attaque, precision) {
        this.nom = nom; // Nom du personnage
        this.pointsDeVie = pointsDeVie; // Points de vie initiaux
        this.attaque = attaque; // Valeur des dégâts infligés
        this.precision = precision; // Probabilité de toucher
    }

    // Fonction pour attaquer un adversaire
    attaquer(adversaire) {
        if (this.touche()) { // Vérifie si l'attaque touche
            console.log(`${this.nom} attaque ${adversaire.nom} et inflige ${this.attaque} points de dégâts.`);
            adversaire.pointsDeVie -= this.attaque; // Réduit les points de vie de l'adversaire
        } else {
            console.log(`${this.nom} attaque ${adversaire.nom} mais rate son coup.`);
        }
    }

    // Fonction pour vérifier si l'attaque touche (en fonction de la précision)
    touche() {
        const chance = Math.random(); // Génère un nombre aléatoire entre 0 et 1
        return chance < this.precision; // Compare la précision au nombre généré
    }
}

// Commencer le combat après le chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    // Création de deux combattants
    const combattant1 = new Personnage("Gladiateur", 100, 15, 0.7);
    const combattant2 = new Personnage("Spartiate", 100, 12, 0.8);

    console.log("--- Début du combat ---");

    // Boucle du combat, continue jusqu'a la fin du combat
    while (combattant1.pointsDeVie > 0 && combattant2.pointsDeVie > 0) {
        console.log(`\n--- Nouvel échange ---`);
        console.log(`${combattant1.nom}: ${combattant1.pointsDeVie} PV, ${combattant2.nom}: ${combattant2.pointsDeVie} PV.`);

        // Le premier combattant attaque
        combattant1.attaquer(combattant2);
        if (combattant2.pointsDeVie <= 0) { // Vérifie si l'adversaire est vaincu
            console.log(`${combattant2.nom} est vaincu ! ${combattant1.nom} remporte le combat.`);
            break; // Fin du combat
        }

        // Le deuxième combattant attaque
        combattant2.attaquer(combattant1);
        if (combattant1.pointsDeVie <= 0) { 
            console.log(`${combattant1.nom} est vaincu ! ${combattant2.nom} remporte le combat.`);
            break;
        }
    }

    console.log("--- Fin du combat ---");
});