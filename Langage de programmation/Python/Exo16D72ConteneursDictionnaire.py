# # Charger un dictionnaire
# print("")
# mon_dictionnaire = {"Amada" : 28, "Matthieu" : 38, "Elsa" : 5, "Bernard" : 54}

# # Récupérer les données
# print("")
# print(f"Données du dico : {mon_dictionnaire}")
# print(f"Données du dico pour la clé \"Amanda\" : {mon_dictionnaire['Amada']}")
# print(f"Données du dico pour la clé \"Elsa\" : {mon_dictionnaire['Elsa']}")
# print(f"Données du dico \"clé\" : {mon_dictionnaire.keys()}")
# print(f"Données du dico \"values\" : {mon_dictionnaire.values()}")

# # Ecraser une valeur, on indique la nomdico[clé] = value
# print("")
# mon_dictionnaire["Matthieu"] = 999999999
# print(f"Données du dico pour la clé \"Matthieu\" : {mon_dictionnaire['Matthieu']}")
# # créer un nouvel ensemble "clé/valeur" si la clé n'existe pas.
# mon_dictionnaire["Michel"] = 444
# print(f"Données du dico pour la clé \"Michel\" : {mon_dictionnaire['Michel']}")
# print(f"Données du dico mis à jour : {mon_dictionnaire}")


# # Parcourir les clés et valeurs d'un dico
# # x => pour les clés
# # y => pour les valeurs
# print("")
# for x, y in mon_dictionnaire.items():
#     print(f"clé / valeur => {x} / {y}")

# # Supprimer un ensemble clé / valeur
# print("")
# recup_value = mon_dictionnaire.pop("Matthieu")
# print(f"Suppression de l'ensemble lié à la clé \"Matthieu\" : mon_dictionnaire.pop(\"Matthieu\")")
# print(f"Données du dico mis à jour : {mon_dictionnaire}")
# recup_value = mon_dictionnaire.popitem()
# print(f"Suppression du dernier ensemble : mon_dictionnaire.popitem()")
# print(f"Données du dico mis à jour : {mon_dictionnaire}")

# # Fusion de dico => dico_a.update(dico_b)
# print("")
# mon_dictionnaire_bis = {"Jackie" : 64, "Patrick" : 62}
# mon_dictionnaire.update(mon_dictionnaire_bis)
# print(f"Données du dico bis : {mon_dictionnaire_bis}")
# print(f"Fusion de dictionnaire  via : mon_dictionnaire.update(mon_dictionnaire_bis)")
# print(f"Données du dico mis à jour : {mon_dictionnaire}")

# ### Créer un annuaire de personne
# # Création des dictionnaires
# personne_01 = {
#     "Prénom" : "Matthieu",
#     "Nom" : "DEGRAEVE",
#     "Âge" : 38
# }
# personne_02 = {
#     "Prénom" : "Michel",
#     "Nom" : "DEGRAEVE",
#     "Âge" : 72
# }
# personne_03 = {
#     "Prénom" : "Patrick",
#     "Nom" : "BAERT",
#     "Âge" : 64
# }
# personne_04 = {
#     "Prénom" : "Gabriel",
#     "Nom" : "DEGRAEVE",
#     "Âge" : 7
# }
# # Création de l'annuaire :
# annuaire = [personne_01, personne_02, personne_04, personne_03]
# # Boucle sur l'annuaire pour afficher les données des personnes :
# print("")
# for personne in annuaire:
#     print(f"Entrée de l'annuaire n° {annuaire.index(personne)}")
#     for categorie, donnee in personne.items():
#         print(f"{categorie} : {donnee}")

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
# Clé => Désignation de l'adresse
# Valeur => Dictionnaire "données_adresse"
### Clé => chaque élément de [liste_categorie]
### Valeur => donnée associé
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

annuaire_adresse = {}

# permet d'ajouter une adresse dans l'annuaire
def ajout_adresse(annuaire):

    print("Ajout d'une adresse, veuillez saisir :")

    designation = input("- sa désignation : ")
    numero = input("- son numéro : ")
    complement = input("- son complément : ")
    intitule = input("- son intitulé de voie : ")
    commune = input("- sa commune : ")
    code_postal = input("- son code postal : ")

    adresse = { 
        "Numéro" : numero, 
        "Complément" : complement,
        "Intitulé" : intitule,
        "Commune" : commune,
        "Code postal" : code_postal,
    }

    annuaire[designation] = adresse

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
        designation = input("Modification d'une adresse, veuillez sa désignation : ") # On demande à l'utilisateur de la saisir
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
        designation = input("Suppression d'une adresse, veuillez sa désignation : ") # On demande à l'utilisateur de la saisir
        saisie_manuel = True
    else:
        print(f"Suppression de l'adresse : {designation}")
        saisie_manuel = False

    if designation in annuaire:
        
        if input(f"Confirmer la suppression de l'adresse \"{designation}\" (O/N) => ").lower() == "o":
            annuaire.pop(designation)
            print(f"L'adresse {designation} a bien été supprimé!")
        else:
            print(f"Annulation de la suppression de l'adresse {designation}.")

    else:

        print(f"/!\\ Attention, l'adresse {designation} inexistante!")

# Permet d'afficher toutes les données de l'annuaire : OK
def afficher_adresse(annuaire):
    
    print("\nAffichage complet de l'annuaire d'adresse : -------------")
    
    for designation, adresse in annuaire.items():
        print(f"Adresse référencé : {designation}")
        for categorie, donnee in adresse.items():
            print("-", categorie, "=>", donnee)
    
    print("-----------------------------------------------------------")

# Permet de gérer l'interface IHM de la gestion d'annuaire :
def gestion_annuaire_adresse(annuaire):

    while True:

        if True:
            print("************************************************************")
            print("Bienvenue dans votre gestionnaire d'annuaire d'adresse :")
            print("Options disponibles :")
            print("1. Ajouter une adresse.")
            if 0 < len(annuaire):
                print("2. Modifier une adresse.")
                print("3. Afficher une adresse (en développement).")
                print("4. Afficher l'adresse de l'annuaire.") if len(annuaire) == 1 else print(f"4. Afficher les {len(annuaire)} adresse de l'annuaire.")
                print("/!\\/!\\/!\\---/!\\/!\\/!\\---/!\\/!\\/!\\")
                print("5. Supprimer une adresse.")
            print("------------------------------------------------------------")
            print("6. Pour quitter le gestionnaire.")
            print("************************************************************")
        
        match input("Indiquer le numéro de l'option ? "):
            case "1":
                ajout_adresse(annuaire)
            case "2":
                edition_adresse(annuaire) if 0 < len(annuaire)  else print("Annuaire vide :/.")
            case "3":
                print("(!) Option en cours de développement, see you soon! (!)")
            case "4":
                afficher_adresse(annuaire) if 0 < len(annuaire)  else print("Annuaire vide :/.")
            case "5":
                suppression_adresse(annuaire) if 0 < len(annuaire)  else print("Annuaire vide :/.")
            case "6":
                print("<3<3<3 Merci d'avoir utilisé notre gestionnaire <3<3<3")
                break
            case _:
                print("/!\\/!\\/!\\ Merci de saisir un n° d'option valide /!\\/!\\/!\\")

# Permet de lancer la démo ou non de l'interface
def Environnement_annuaire_adresse():
    print("")
    gestion_annuaire_adresse(annuaire_adresse_demo) if input("Souhaitez lancer l'IHM en mode démo (Oui/Non) ? ").lower() == "oui" else gestion_annuaire_adresse(annuaire_adresse)
    print("")

# Permet le lancement du programme en mode démo (Annuaire prérempli) ou en production.
Environnement_annuaire_adresse()

# Print d'essai :

# Essai saisie d'une adresse :
#|# ajout_adresse(annuaire_adresse)
# ajout_adresse(annuaire_adresse_demo) # OK

# print(f"**********************************************")
# print("Essai => modification \"Matthieu\"")
# edition_adresse(annuaire_adresse_demo) # Matthieu => OK |

# print(f"**********************************************")
# print("Essai => modification \"Michou\"")
# edition_adresse(annuaire_adresse_demo) # Michou => OK |

# print(f"**********************************************")
# print("Essai => modification \"Elodie\"")
# edition_adresse(annuaire_adresse_demo, "Elodie") # Elodie (par défaut) => OK |

# print(f"**********************************************")
# print("Essai => Suppression d'une adresse de l'annuaire")
# suppression_adresse(annuaire_adresse_demo) # OK

# print(f"**********************************************")
# print("Essai => Affichage complet de l'annuaire")
# afficher_adresse(annuaire_adresse_demo) # OK
# print(f"**********************************************")

# Permet d'afficher toutes les données d'une adresse : à tester
def afficher_adresse_avec_ou_sans_cle(annuaire, designation):
    for designation, adresse in annuaire.items():
        print(f"Annuaire d'adresse référencé : {designation}")
        for categorie, donnee in adresse.items():
            print("-", categorie, "=>", donnee)

