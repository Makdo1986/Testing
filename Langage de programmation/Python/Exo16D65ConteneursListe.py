# Défintion d'une liste
ma_liste_essai = ["b", "y", "Michel", 28, True, ["Titi", "Rominet"], -42, False]

# Récupérer les valeurs de la liste
print(ma_liste_essai)

# Récupération d'une valeur
print(ma_liste_essai[0]) # 1ère valeur
print(ma_liste_essai[2]) # 3ème valeur
print(ma_liste_essai[-1]) # Dernière valeur
print(ma_liste_essai[-2]) # Avant dernière valeur
print(ma_liste_essai[-3][1]) # 2ème valeur du tableau contenu
print(ma_liste_essai[5][-1]) # 2ème valeur du tableau contenu

# Ajouter une valeur à la fin
ma_liste_essai.append("Choupi")
print(ma_liste_essai)

# Insérer une valeur à un index donné
ma_liste_essai.insert(4, "Nouvel élément index 4 / position 5")
print(ma_liste_essai)

# Etendre la liste avec les données d'une liste
ma_liste_essai.extend(["Tbl2D1", "Tbl2D2", "Tbl2D3"])
print(ma_liste_essai)

# Supprimer un élément de la liste selon sa valeur (uniquement la première occurence)
ma_liste_essai.insert(2, "Choupi")
ma_liste_essai.insert(5, "Choupi")
ma_liste_essai.remove("Choupi") # Suppression de l'élément "Choupi"
print(ma_liste_essai)

# Supprimer un élément de la liste selon son index
ma_liste_essai.pop() # Suppression du dernier élément (index -1 par défaut)
print(ma_liste_essai)
ma_liste_essai.pop(0) # Suppression du premier élément (index 0)
print(ma_liste_essai)
ma_liste_essai.pop(3) # Suppression du 4ème élément (index 3)
print(ma_liste_essai)

# Exemple de tri dans une liste

# Supprimer un élément de la liste dans la liste selon son index
ma_liste_essai[5].pop(0) # Suppression du 1er élément (index 0) de la liste positionné en 6ème position (index 5)
print(ma_liste_essai)

def essai_liste(ma_liste_test):
    print(ma_liste_test)
    ma_liste_test.sort() # Défaut croissant
    print(ma_liste_test)
    ma_liste_test.sort(reverse=True)
    print(ma_liste_test) # Décroissant
    ma_liste_test.sort()
    ma_liste_test.reverse() # Décroissant
    print(ma_liste_test)


essai_liste(["a", "z", "y", "m", "w"]) # Liste de caractères
essai_liste(["Michel", "Matthieu", "Dominique", "Elodie", "Izy"]) # Liste de texte
essai_liste([2,1,5,9,-5,-99,99,1000000]) # Liste de nombres
essai_liste([[28,85], [29,87], [1,100]]) # Liste de listes

# Exo 1 :
# Écrire un algorithme qui déclare et stocke dans un tableau 10 chiffres, 
# puis affiche le 9éme élément de ma liste.

min_tableau = [1,2,3,4,5,6,7,8,9,10]
print(min_tableau[8])

# # Exo 2 :
# # Écrire un algorithme permettant de saisir 15 notes et de les afficher.

# notes = []

# # for i in range(1, 16):
# for i in range(15):

#     first_input = True

#     while True:

#         note = float(input(f"{i+1}/15 saisie(s)\nVeuillez saisir une note entre 0 et 20 ?\n" if first_input else f"{i+1}/15 saisie(s)\nMerci de saisir une note entre 0 et 20 ?\n"))
#         if (0 <= note <= 20):
#             break
#         else:
#             print("/!\\/!\\/!\\ Erreur de saisie /!\\/!\\/!\\")
#             first_input = False

#     notes.append(note)

# print(notes)

# Exo 3

# Via l'utilisation d'une variable de type liste, 
# 
# vous devrez réaliser un logiciel permettant à l'utilisateur d'entrer une série de notes, 
# dont le nombre possible à entrer sera soit (au choix de l'utilisateur) :
# - saisie avant la saisie de notes permissif 
# - et pourra aller jusqu'à entrer une note négative qui stoppera la saisie des notes.
# 
# Une fois la saisie des notes terminée, 
# l'utilisateur aura à sa disposition un affichage lui permettant d'avoir 
# la note max, 
# la note min 
# ainsi que la moyenne (possible de faire un menu pour choisir)

notes = []
nombre_saisie_demandee = 15
is_ok = True

# for i in range(1, 16):
for i in range(nombre_saisie_demandee): 

    first_input = True

    while True:

        note = float(input(f"{i+1}/{nombre_saisie_demandee} saisie(s)\nVeuillez saisir une note entre 0 et 20 ?\n" if first_input else f"{i+1}/{nombre_saisie_demandee} saisie(s)\nMerci de saisir une note entre 0 et 20 ?\n"))
        if (0 <= note <= 20):
            break
        elif ((note < 0) or (20 < note)):
            is_ok = False
            break
        else:
            print("/!\\/!\\/!\\ Erreur de saisie /!\\/!\\/!\\")
            first_input = False

    if is_ok:
        notes.append(note)
    else:
        break

if is_ok:

    notes.sort()
    note_max = notes[-1]
    note_min = notes[0]

    note_somme = float(sum(notes))
    # note_nombre = float(notes.count) !!!!! ne fonctionne pas !!!!! il faut utiliser len()
    note_nombre = float(len(notes))

    print(f"Voici la liste des notes que tu as saisi : {notes}")

    choix_utilisateur = input("""Que voulez-vous afficher ? saisir :
max - pour la note maximum
min - pour la notre minimum
moy - pour la moyenne
    
NB : saisie les à la suite (sans espace) si vous souhaitez en avoir plusieurs.""")

    if choix_utilisateur.count("max") == 1:
        print(f"La note max est de : {note_max:.2f}")
    if choix_utilisateur.count("min") == 1:
        print(f"La note min est de : {note_min:.2f}")
    if choix_utilisateur.count("moy") == 1:
        print(f"La note moyenne est de : {note_somme / note_nombre:.2f}")

else:

    print("Fais attention à ta saisie, pour la peine, tu peux tout recommencer :D!")
    print("Vous n'avez pas dit le mot magique !!!!!! hein hein hein !!!!!")

import random

for i in range(20):
    print(int(random.uniform(1, 100)))

# Exo 03 par Jean Sébastien

nb = int(input("Entrez la taille de la liste de notes: "))
mesnotes = []


def creerList():
    print ("Entrez une note négative pour arréter la saisie de notes")
    for i in range (1,nb+1):
        note = int(input(f"Entrez la note n°{i}: "))
        if note>0:
            mesnotes.append(note)
            print(mesnotes)
        else :
            choix(mesnotes)
    choix(mesnotes)


def choix(mesnotes):
    while True:
        print("""       Tapez sur s pour supprimer une note
        Tapez sur a pour ajouter une note
        Tapez sur mo pour afficher la moyenne
        Tapez sur mi pour afficher la note minimale
        Tapez sur ma pour afficher la note maximale
        Tapez sur aff pour afficher le tableau de notes
        Tapez sur q pour quitter""")
        option = input("Entrez l'option: ")
        match option:
            case "s":
                su = int(input("Entrez la note à supprimer: "))
                if su in mesnotes:
                    mesnotes.remove(su)
                    print(mesnotes)
                else:
                    print("Note non trouvée")

            case "a":
                aj = int(input("Entrez la note à ajouter: ")) 
                mesnotes.append(aj)
                print(mesnotes)

            case "mo":
                print(sum(mesnotes)/len(mesnotes))
                print("La moyenne des notes est de",mesnotes)
                
            case "mi":
                mini = min(mesnotes)
                print("La note minimale est",mini)
                print(mesnotes)

            case "ma":

                maxi = max(mesnotes)
                print("La note maximale est",maxi)
                print(mesnotes)

            case "aff":
                print(mesnotes)  

            case "q":
                break  

            case _:
                print("Erreur de saisie!")

mesnotes = creerList()

# Exo 4

# Une année s'est écoulée et la nouvelle édition de la course de module de Tatooine est encore plus captivante.
# Cette année, la position de chaque concurrent est stockée dans une liste. (on y mettre le nom des concurrents)
# Parmi les moments phares de cette édition il y a :
# - Une panne moteur fait passer le premier concurrent à la dernière position.
# - Le second concurrent accélère et prend la tête de la course.
# - Le dernier concurrent sauve l'honneur et dépasse l'avant-dernier module de la course.
# - Un tir de blaster élimine le module en tête de la course.
# - Dans un spectaculaire retournement de situation, un module qu'on pensait éliminé fait son grand retour à la dernière position.

course_module_tatooine = ["Anakin", "Sebulba", "Wan Sandage", "Neva Kee", "Clegg Holdfast", "Dud Bolt", "Ebe Endocott", "Ody Mandrell"]

# Appel d'une fonction en paramétrage
# Fonction Essai_Resultat

def essai_resultat(fonction_a_tester, texte_affiche, liste, donnee = None):
    print(texte_affiche, "Avant", "=>", liste)
    if donnee == None:
        fonction_a_tester(liste)
    else:
        fonction_a_tester(liste, "Wan Sandage")
    print(texte_affiche, "Après", "=>", course_module_tatooine)   

# Créer la fonction panne_moteur, modifiant la liste passée en argument de manière à ce que le premier module passe dernier, le deuxième premier et ainsi de suite.

def panne_moteur(liste_course):
    liste_course.append(liste_course[0])
    liste_course.pop(0)

essai_resultat(panne_moteur, "panne_moteur", course_module_tatooine)

# Créer la fonction passe_en_tete, modifiant la liste passée en argument de manière à ce que le premier module passe deuxième et le deuxième premier.

def passe_en_tete(liste_course):
    second = liste_course[1]
    liste_course[1] = liste_course[0]
    liste_course[0] = second

essai_resultat(passe_en_tete, "passe_en_tete", course_module_tatooine)

# Créer la fonction sauve_honneur, modifiant la liste passée en argument de manière à ce que le dernier module passe avant dernier et l'avant dernier dernier.

def sauve_honneur(liste_course):
    avant_dernier = liste_course[-2]
    liste_course[-2] = liste_course[-1]
    liste_course[-1] = avant_dernier

essai_resultat(sauve_honneur, "sauve_honneur", course_module_tatooine)

# Créer la fonction tir_blaster, enlevant le premier concurrent de la liste passée en argument.

def tir_blaster(liste_course):
    liste_course.pop(0)

essai_resultat(tir_blaster, "tir_blaster", course_module_tatooine)

# Compléter la fonction retour_inattendu , ajoutant un concurrent à la fin de la liste passée en argument.

def retour_inattendu(liste_course, nom_concurrent:str):
    liste_course.append(nom_concurrent)

essai_resultat(retour_inattendu, "retour_inattendu", course_module_tatooine, "Wan Sandage")