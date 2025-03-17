## Permet de connaître la liste des modules disponibles sur python
#help("modules")

## Permet de connaître le contenu du module
#dir(nom_module)

# # Exo 01

# # Restructurer le script ADN avec la structure vue précédemment
# # => Fichier "module_adn.py" contenu dans le dossier "Dossier_modules"

# # Écrire un script qui utilise les fonctions de l'exercice ADN.

# from Dossier_modules.module_adn import *

# from Dossier_modules.module_adn import saisie_adn as sa # J'importe la fonction "saisie_adn" renommée ici : "sa"
# from Dossier_modules.module_adn import proportion as pp # J'importe la fonction "proportion" renommée ici : "pp"
# from Dossier_modules.module_adn import pourcentage_sequence as ps # J'importe la fonction "pourcentage_sequence" renommé ici : "ps"

# print(f"Les instructions sont lancés depuis le fichier \"Exo17D75Modules.py\" => \"__name__\" => {__name__}")

# chaine_adn = sa("Veuillez saisir une chaine ADN (contient atcg) : ")
# sequence_adn = sa("Veuillez saisir une sequence ADN  : ")

# print(f"Il y a la sequence {sequence_adn} {pp(chaine_adn,sequence_adn)} fois dans la chaine : {chaine_adn}")
# print(f"Il y a la sequence {sequence_adn} {ps(chaine_adn,sequence_adn, pp(chaine_adn,sequence_adn))} % dans la chaine : {chaine_adn}")

# # Utilisation fichier csv ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import csv

# # Lecture (avec close)
# fichier = open("noms.csv", mode="r", encoding="UTF-8") # la fonction open pour ouvrir un fichier et r pour lecture seul t pour text brut
# lecteurcsv = csv.reader(fichier, delimiter=";") # Ouverture du lecteur CSV en lui fournissant le caractère séparateur
# for ligne in lecteurcsv:
#     print (ligne) # Exemple avec la 1re ligne du fichier d'exemple : ['Nom', 'Prénom', 'Age']
# fichier.close()

# # Lecture (sans close)
# with open("noms.csv", mode="r", encoding="UTF-8") as fichier: # la fonction open pour ouvrir un fichier et r pour lecture seul t pour text brut
#     lecteurcsv = csv.reader(fichier, delimiter=";") # Ouverture du lecteur CSV en lui fournissant le caractère séparateur
#     for ligne in lecteurcsv:
#         print (ligne) # Exemple avec la 1re ligne du fichier d'exemple : ['Nom', 'Prénom', 'Age']

# # Écriture [écrasement des données]
# fichier = open("ecrivains.csv", mode="w", encoding="UTF-8", newline="") # On peut changer le newline
# ecrivainCSV = csv.writer(fichier, delimiter="|") # On peut changer le délimiteur
# ecrivainCSV.writerow(["Nom", "Prénom", "Téléphone"]) # On écrit la ligne d'en-tête avec le titre des colonnes
# ecrivainCSV.writerow(["Martin", "Julie;Clara", "0399731590"]) # attention aux caractères spéciaux (;,:« ’.)
# fichier.close()

# # Ecriture [ajout de données (mode="a" |append|)] (sans close)
# with open("ecrivains.csv", mode="a", encoding="UTF-8", newline="") as fichier: # la fonction open pour ouvrir un fichier et r pour lecture seul t pour text brut
#     writer = csv.writer(fichier, delimiter=";") # Ouverture du lecteur CSV en lui fournissant le caractère séparateur
#     writer.writerow(["Degraeve", "Matthieu", "0275731590"]) # attention aux caractères spéciaux (;,:« ’.)
#     writer.writerow(["Baert", "Patrick", "0278945826"]) # attention aux caractères spéciaux (;,:« ’.)

# # Exo 02 

# # Écrire un script qui demande les informations d'un produit :
# # - Titre
# # - Prix
# # - Stock
# # Il les ajoute ensuite dans un fichier inventaire.csv

# # Ecriture [ajout de données (mode="a" |append|)] (sans close)
# with open("inventaire.csv", mode="a", encoding="UTF-8", newline="") as fichier: # la fonction open pour ouvrir un fichier et r pour lecture seul t pour text brut
#     writer = csv.writer(fichier, delimiter=";") # Ouverture du lecteur CSV en lui fournissant le caractère séparateur
#     while True:
#         if input("Voulez-vous ajouter un produit ? (O/N) => ").lower() == "o":
#             writer.writerow([
#                 input("Désignation produit => "), 
#                 input("prix produit => "), 
#                 input("stock produit => ")]) # attention aux caractères spéciaux (;,:« ’.)
#         else:
#             break

# # Lecture (sans close)
# with open("inventaire.csv", mode="r", encoding="UTF-8") as fichier: # la fonction open pour ouvrir un fichier et r pour lecture seul t pour text brut
#     lecteurcsv = csv.reader(fichier, delimiter=";") # Ouverture du lecteur CSV en lui fournissant le caractère séparateur
#     for ligne in lecteurcsv:
#         print (ligne[0], ligne[1], ligne[2]) # Exemple avec la 1re ligne du fichier d'exemple
        
# Exo 03 

# Écrire un programme permettant à un utilisateur de sauvegarder un texte secret dans un fichier.
# Si le fichier n'existe pas, il devra être créé avec un nouveau secret.
# L'utilisateur pourra :
# - Voir le secret
# - Modifier le secret
# - Quitter le programme (Cette action sauvegardera le fichier)
# Pour éviter tout problème, il est conseillé de ne lire et écrire le fichier qu'une seule fois à l'entrée et la sortie du programme.

import os

filename = "secret.txt"
if not os.path.exists(filename):
    print("Le fichier n'existe pas Oo!")
    if input("Souhaitez-vous le créer ? (o/n) => ").lower() == "o":
        with open(filename, "w") as fichier:
            fichier.write ("Test")
else:
    secret = None
    while True:
        if True:
            print("")
            print("------------------------------")
            print("Options disponibles :")
            print("1. Afficher le secret.")
            print("2. Modifier le secret.")
            print("0. Quitter le programme.")
            print("------------------------------")
            print("")
        user_choice = input("Option sélectionnée => ")
        match user_choice:
            case "1": # voir le secret
                if secret == None:
                    with open(filename, "r", encoding="UTF-8") as fichier:
                        contenu = (fichier.read())
                else:
                    contenu = secret
                print(f"Votre secret le plus sombre est : \n{contenu}")
            case "2": # modifier le secret
                secret = input("Saisisssez votre nouveau secret => ")
                print(secret)
            case "0": # fermer le fichier
                if secret != None:
                    with open(filename, "w", encoding="UTF-8") as fichier:
                        fichier.write(secret)
                break
            case _: # informer d'une erreur de saisie
                print("!!! Erreur de saisie !!!")