Structure Gherkin :
1. Feature : Description de la fonctionnalité testée.
2. Scenario : Cas concret ou test précis.
3. Steps : Actions et résultats attendus dans le scénario.

Mots-clés principaux
Voici les mots-clés couramment utilisés :
a. Feature : Définit la fonctionnalité globale.
b. Scenario : Décrit un cas particulier.
c. Given : Définit le contexte initial.
d. When : Décrit l’action ou l’événement.
e. Then : Énonce les résultats attendus.
f. And : Ajoute une condition supplémentaire.
g. But : Ajoute une exception ou une condition alternative.

Extension installé :
fea - Feature
sc - Scenario heading
sce - Scenario
sco - Scenario Outline
steps- Multiline steps
giv - Given step
whe - When step
the - Then step

Exo :

0. Aller sur AutomationExercise.com
1. Mettre le premier article au panier
2. Accéder au panier puis valider
3. Ensuite cliquer sur créer un compte
4. Renseigner les informations personnelles
5. Valider 

Feature: En tant que client non identifié, je souhaite passer une commande d'un article

    Scenario: Aller sur le site "automationexercise.com"

        Given : Je suis sur l'explorer web
        When : J'accède au site "automationexercise.com"
        Then : Je suis sur la page d'accueil du site
    
    Scenario: Ajouter le premier article au panier

        Given : Je suis sur la page d'accueil du site
        When : Je clique sur le premier article
        And : J'ajoute l'article au panier
        Then : L'article est ajouté au panier

    Scenario: Accéder au panier puis valider

        Given : L'article est ajouté au panier
        When : J'accède au panier
        And : Je valide le panier
        Then : Le panier est validé

    Scenario: Vérifier le panier
    
        Given : Le panier est validé
        When : Je vérifie le contenu du panier
        And : Je clique sur "proceed to checkout"
        Then : la popup checkout s'affiche

    Scenario: S'enregistrer ou se connecter
    
        Given : La popup checkout s'affiche
        When : Je clique sur "register / login"
        Then : Je suis redirigé vers la page de connexion

    Scenario: S'enregistrer
            
        Given Je suis sur la page de connexion
        And Je raisonne mon nom d'utilisateur
        And Je renseigne mon adresse mail
        When Je clique sur "Signup"
        Then Je suis redirigé vers la page de création de compte


    Scenario: Renseigner les informations personnelles
    
        Given Je suis sur la page de création de compte
        When Je renseigne les informations personnelles
        And Je valide les informations
        Then Les informations sont validées

