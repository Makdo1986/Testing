# Exo 01

# Avec des variables de type dictionnaire dans une liste, vous réaliserez un logiciel pour stocker une série d'adresses avec :
# - désignation
# - numéro de voie
# - complément
# - intitulé de voie
# - commune
# - code postal
# Pour ce faire, vous utiliserez des clés de type string qui représenteront les différentes lignes de l'adresse dans le dictionnaire.
# Le logiciel devra permettre l'ajout, l'édition, la suppression et la visualisation des données par l'utilisateur.

# liste_categorie contient toutes les catégories nécessaire pour saisir une adresse
liste_categorie = [
    "Numéro", 
    "Complément", 
    "Intitulé", 
    "Commune", 
    "Code postal"
]

# annuaire_adresse_demo est un dictionnaire :
### Clé => Désignation de l'adresse
### Valeur => Dictionnaire "données_adresse"
############### Clé => chaque élément de [liste_categorie]
############### Valeur => donnée associé
annuaire_adresse_demo = {
    "Matthieu" :
        {    
        "Numéro" : "37", 
        "Complément" : "",
        "Intitulé" : "rue coppens",
        "Commune" : "Hondschoote",
        "Code postal" : "59122",
        },
    "Dominique" :
        {    
        "Numéro" : "11", 
        "Complément" : "",
        "Intitulé" : "rue notre damde",
        "Commune" : "Hazebrouck",
        "Code postal" : "59190",
        },
    "Elodie" :
        {    
        "Numéro" : "666", 
        "Complément" : "Grange",
        "Intitulé" : "rue sébastopol",
        "Commune" : "Boeschepe",
        "Code postal" : "59299",
        }
}

# annuaire_vide => permet de partir de zéro
annuaire_adresse = {}

# permet d'ajouter une adresse dans l'annuaire
def ajouter_adresse(annuaire):

    print("Ajout d'une adresse, veuillez saisir :")

    annuaire[input("- sa désignation : ")] = { 
        "Numéro" : input("- son numéro : "), 
        "Complément" : input("- son complément : "),
        "Intitulé" : input("- son intitulé de voie : "),
        "Commune" : input("- sa commune : "),
        "Code postal" : input("- son code postal : "),
    }
    
    print("")

# Permet d'intégrer une donnée d'une adresse de l'annuaire
def integration_donnee(adresse, categorie):

    donnee = input(f"- {categorie} existant(e) = {adresse[categorie]} | Saisissez la modification souhaitée : ")
    
    if donnee == "vide":
        donnee = ""
    elif donnee == "": 
        donnee = None

    if donnee != None:
        adresse[categorie] = donnee

# Permet d'éditer les données des catégories d'une adresse (à saisir ou non) de l'annuaire
def edition_adresse(annuaire, designation = None):
    
    if designation == None: # Si la désignation n'est pas renseignée alors 
        while True:
            designation = input("Modification d'une adresse, veuillez sa désignation : (NB: taper \"liste\" pour afficher les adresses déjà enregistrées). => ") # On demande à l'utilisateur de la saisir
            if designation.lower() == "liste":
                recuperer_liste(annuaire)
            else:
                break
    else:
        print(f"Modification de l'adresse : {designation}")

    if designation in annuaire: # Si la désignation {clé} existe dans l'annuraire
        
        print("------------------------------------------------")
        print(f"L'adresse {designation} existante.")
        print("Infos :")
        print("- Si le champs ne doit pas être modifié, laissez le champ vide et tapez dans la touche \"Entrée\".")
        print("- Si le champs doit être vidé, saisissez \"vide\"")
        print("------------------------------------------------")

        for categorie_courante in liste_categorie:
            integration_donnee(annuaire[designation], categorie_courante)

    else: # Sinon
        
        print("La désignation saisie est inexistante :/ !") # On affiche que la désignation est inexistante

# Permet de supprimer une adresse (à saisir ou non) dans l'annuaire
def suppression_adresse(annuaire, designation = None):

    if designation == None: # Si la désignation n'est pas renseignée alors 
        while True:
            designation = input("Suppression d'une adresse, veuillez saisir sa désignation : (NB: taper \"liste\" pour afficher les adresses déjà enregistrées). => ") # On demande à l'utilisateur de la saisir
            if designation.lower() == "liste":
                    recuperer_liste(annuaire)
            else:
                break    
    else:
        print(f"Suppression de l'adresse : {designation}")

    if designation in annuaire:
        
        if input(f"Confirmer la suppression de l'adresse \"{designation}\" (O/N) => ").lower() == "o":
            annuaire.pop(designation)
            print(f"L'adresse {designation} a bien été supprimé!")
        else:
            print(f"Annulation de la suppression de l'adresse {designation}.")

    else:

        print(f"/!\\ Attention, l'adresse {designation} inexistante!")

# Permet d'afficher toutes les données de l'annuaire : OK
def afficher_adresse(annuaire: dict, designation = None):
    
    if designation == None:
        
        print("\nAffichage complet de l'annuaire d'adresse : -------------")
        for designation, adresse in annuaire.items():
            print(f"Adresse référencé : {designation}")
            for categorie, donnee in adresse.items():
                print("-", categorie, "=>", donnee)
        
    else:
        
        while True:
            designation = input("Veuillez saisir la désignation à détailler : (NB: taper \"liste\" pour afficher les adresses déjà enregistrées). => ") # On demande à l'utilisateur de la saisir
            if designation.lower() == "liste":
                    recuperer_liste(annuaire)
            else:
                break

        print(f"\nAffichage de l'adresse {designation} : -------------")

        for categorie, donnee in annuaire[designation].items():
            print("-", categorie, "=>", donnee)

        print("-----------------------------------------------------------")

# Permet de gérer l'interface IHM de la gestion d'annuaire :
def gestion_annuaire_adresse(annuaire: dict):

    while True:

        if True:
            print("************************************************************")
            print("Bienvenue dans votre gestionnaire d'annuaire d'adresse :")
            print("Options disponibles :")
            print("1. Ajouter une adresse.")
            if (annuaire != {}): # Si le dictionnaire n'est pas vide alors
                print("2. Modifier une adresse.")
                print("3. Afficher une adresse (en développement).")
                print("4. Afficher l'adresse de l'annuaire.") if len(annuaire) == 1 else print(f"4. Afficher les {len(annuaire)} adresse de l'annuaire.")
                print("/!\\/!\\/!\\---/!\\/!\\/!\\---/!\\/!\\/!\\")
                print("5. Supprimer une adresse.")
            print("------------------------------------------------------------")
            print("0. Pour quitter le gestionnaire.")
            print("************************************************************")
        
        match input("Indiquer le numéro de l'option ? "):
            case "1":
                ajouter_adresse(annuaire)
            case "2":
                edition_adresse(annuaire) if (annuaire == {})  else print("Annuaire vide :/.")
            case "3":
                afficher_adresse(annuaire, "") if (annuaire == {})  else print("Annuaire vide :/.")
            case "4":
                afficher_adresse(annuaire) if (annuaire == {})  else print("Annuaire vide :/.")
            case "5":
                suppression_adresse(annuaire) if (annuaire == {})  else print("Annuaire vide :/.")
            case "0":
                print("<3<3<3 Merci d'avoir utilisé notre gestionnaire <3<3<3")
                break
            case _:
                print("/!\\/!\\/!\\ Merci de saisir un n° d'option valide /!\\/!\\/!\\")

# Permet de lancer la démo ou non de l'interface
def Environnement_annuaire_adresse():
    print("")
    gestion_annuaire_adresse(annuaire_adresse_demo) if input("Souhaitez lancer l'IHM en mode démo (Oui/Non) ? ").lower() == "oui" else gestion_annuaire_adresse(annuaire_adresse)
    print("")

# Récupérer la liste de désignation des adresses existantes
def recuperer_liste(annuaire):
    print("Liste des adresses disponibles")
    for designation in annuaire.keys():
        print(f"- {designation}")

# Permet le lancement du programme en mode démo (Annuaire prérempli) ou en production.
Environnement_annuaire_adresse()