# # Exo 01 : Nom prénom

# # Écrire une fonction qui prend en paramètre :
# # prénom
# # nom
# # Elle retournera une chaîne avec le prénom et le nom séparé d'un espace, exemple "John Doe"
# # Vous afficherez le résultat de cette fonction à l'aide de la fonction print()

# def nomprenom(prenom :str, nom: str):
#     return f"{prenom.capitalize()} {nom.capitalize()}"

# print(nomprenom("MattHieu", "DeGrAeVe"))

# # Exo 02 : Soustraction

# # Écrire la fonction "soustraire" qui prend en paramètre :
# # nombre a
# # nombre b
# # Elle retournera un entier qui sera la soustraction de ces deux nombres
# # exemple : soustraire(2, 1) # résultat = 1
# # De plus, lors de l'exécution, la fonction affichera "Je soustrais 2 et 1"
# # Vous afficherez le résultat à l'aide de la fonction print()

# def soustraction(a, b):
#     print(f"je soustrais {a} et {b}.")
#     return a - b

# print(soustraction(2,1))

# # Exo 03 : Quelle heure

# # Écrire une fonction quelle_heure.
# # Cette fonction aura un paramètre heure de type str.
# # Ce paramètre aura "12h00" comme valeur par défaut.
# # La fonction ne retournera aucun résultat mais affichera l'heure avec la fonction print()
# # exemple : quelle_heure() # résultat : "il est 12h00"
# # exemple : quelle_heure("14h00") # résultat : "il est 14h00"

# def quelle_heure(val1 = "12H00"):
#     print(f"Il est {val1}.")
    
# quelle_heure()
# quelle_heure("14H00")

# # Exo 04 : compter_lettre_a

# # Écrire une fonction compter_lettre_a.
# # Cette fonction prendra en paramètre une chaîne
# # Créer une boucle qui parcourt les lettres de la chaîne et compte le nombre de lettres égales à "a".
# # La fonction renverra un entier.
# # exemple : compter_lettre_a("abba") # résultat : 2
# # exemple : compter_lettre_a("mixer") # résultat : 0
# # Écrire une autre fonction sans boucle qui utilisera count à la place.

# def compter_lettre_a(txt: str):
#     nb_car = 0
#     for car in txt:
#         if car == "a":
#             nb_car += 1
#     return nb_car

# print(f"Compter \"a\" dans \"abba\" : {compter_lettre_a("abba")}")
# print(f"Compter \"a\" dans \"mixer\" : {compter_lettre_a("mixer")}")

# def count_lettre_a(txt: str):
#     return txt.count("a")

# print(f"Count \"a\" dans \"abba\" : {count_lettre_a("abba")}")
# print(f"Count \"a\" dans \"mixer\" : {count_lettre_a("mixer")}")

# # Exo 05 : ADN

# # Écrire un programme qui permet de saisir une chaîne d’ADN ainsi qu’une séquence d’ADN et qui retourne le d’occurrences de la séquence dans la chaîne
# # Cette séquence sera composée uniquement de la combinaison de lettre suivante 'a', 't', 'c', 'g'.
# # 1. Écrire une fonction vérification_adn qui permet de renvoyer la valeur True si la chaîne d’ADN est valide, False si elle est invalide

# def verification_adn(adn_saisie: str, element_sequence_valide: str = ['a', 't', 'c', 'g']): 
    
#     nb_car_saisie = len(adn_saisie) # On récupère le nombre de caractères de "adn_saisie"
#     nb_car_correspondance = 0 # On initialise le nombre total de caractère analysé

#     # Pour chaque caractère de "element_sequence_valide"
#     for car_esv in element_sequence_valide: # On charge "car_esv" du caractère courant
#         nb_car_correspondance += adn_saisie.count(car_esv) # On incrémente à "nb_car_correspondance" le nombre d'occurrences associés dans "adn_saisie" 

#     # On retourne "True" si le nombre 
#     return nb_car_correspondance == nb_car_saisie

# # 2. Écrire une fonction saisie_adn qui récupère une saisie, vérifie sa validité et renvoie une chaîne d’ADN valide sous forme de chaîne

# def saisie_adn(adn_saisie: str):
    
#     if verification_adn(adn_saisie):
#         return adn_saisie

# # 3. Écrire une fonction proportion qui reçoit deux paramètres une chaîne d’ADN et une séquence d’ADN Elle renverra le nombre d’occurrence de la séquence dans la chaîne

# def proportion(adn_saisie:str = "Saisie", sequence_saisie: str = ""):
    
#     if adn_saisie == "Saisie":
#         adn_saisie = input("Veuillez saisir l'ADN ?\n") 
#         sequence_saisie = input("Veuillez saisir la séquence ADN recherché?\n") 

#     if saisie_adn(adn_saisie) != "Séquence invalide":
#         return adn_saisie.count(sequence_saisie)

# # 4. Créer des instructions pour pouvoir tester le programme

# # Print de test pour vérifier "proportion_adn"

# # Essai OK avec ADN avec nombre de caractères = 4
# adn_test = "atcg"
# # Essai OK avec toutes les séquences possibles
# seq_test = "at"
# print(proportion(adn_test, seq_test)) # Attendu : 1 => résultat : 1
# seq_test = "tc"
# print(proportion(adn_test, seq_test)) # Attendu : 1 => résultat : 1
# seq_test = "cg"
# print(proportion(adn_test, seq_test)) # Attendu : 1 => résultat : 1
# # Essai OK avec une séquence inexistante
# seq_test = "gc"
# print(proportion(adn_test, seq_test)) # Attendu : 0 => résultat : 0

# # Essai OK avec ADN avec nombre de caractères < 4
# # Essai avec séquence ADN existant
# adn_test = "at"
# seq_test = "at"
# print(proportion(adn_test, seq_test)) # Attendu : 1 => résultat : 1
# # Essai avec séquence ADN inexistant
# adn_test = "tc"
# seq_test = "at"
# print(proportion(adn_test, seq_test)) # Attendu : 0 => résultat : 0

# # Essai OK avec ADN avec nombre de caractères > 4
# adn_test = "atcgatcgatcgatcgatcgatcg"
# # avec séquence ADN existant
# seq_test = "at"
# print(proportion(adn_test, seq_test)) # Attendu : 6 => résultat : 6
# # avec séquence ADN inexistant
# seq_test = "ta"
# print(proportion(adn_test, seq_test)) # Attendu : 0 => résultat : 0

# # Essai KO avec ADN avec nombre de caractères = 4
# adn_test = "matc"
# seq_test = "at"
# print(proportion(adn_test, seq_test)) # Attendu : 1 => résultat : 1
# # avec séquence ADN existant
# seq_test = "at"
# print(proportion(adn_test, seq_test)) # Attendu : None => résultat : None
# # avec séquence ADN inexistant
# seq_test = "tc"
# print(proportion(adn_test, seq_test)) # Attendu : None => résultat : None

# # Essai avec saisie utilisateur
# print(proportion())


# print("""
# testl1
# test2 _
# etc.
# """)

# Fonction avec lambda => permet de saisir une fonction en une ligne comme le ternaire

addition_lambda = lambda a, b : a + b
print("Addition avec une lambda :")
print(addition_lambda(1,2))
print(addition_lambda(3,2))

soustraction_lambda = lambda a, b : a - b
print("soustraction avec une lambda :")
print(soustraction_lambda(1,2))
print(soustraction_lambda(3,2))

multiplication_lambda = lambda x, y : x * y
print("multiplication de x par y avec une lambda :")
print(multiplication_lambda(1,2))
print(multiplication_lambda(3,2))

division_lambda = lambda x, y : x / y
print("division de x par y avec une lambda :")
print(division_lambda(1,2))
print(division_lambda(3,2))

puissance_lambda = lambda x, y : x ** y
print("puissance de x par y avec une lambda :")
print(puissance_lambda(1,2))
print(puissance_lambda(3,2))

# Ici, on utilise directement le lambda sans passer une fonction :)
# Ci-dessous => on souhaite multiplier par 2 => les valeurs transmises

nums = [1, 2, 3, 4]
result = list(map(lambda x : x * 2, nums))
print(nums)
print("Le \"lamba x : x * 2\" permet de multiplier par 2 les valeurs de la liste en argument")
print(result)

# Ci-dessous => on souhaite indiquer la "valeur" est pair ou impair via un ternaire

nums = [1, 2, 3, 4, 5, 6, 7, 8]
result = list(map(lambda x : f"{x} est pair" if (x % 2 == 0) else f"{x} est impair", nums))
print(nums)
print(result)

# Ci-dessous => on souhaite ne garder que les nombres "paires" via la fonction "filter"

nums = [1, 2, 3, 4, 5, 6, 7, 8]
result = list(filter(lambda x : x % 2 == 0, nums))
print(nums)
print(result)