# Diapo 48

# Nous devons écrire un algorithme 
# qui demande à l'utilisateur de saisir un nombre compris entre 1 et 3,
# et qui répète cette demande tant que la réponse de l'utilisateur n'est pas valide.

is_valid = False

while not is_valid :
    valeur_saisie = int(input("Méthode 1 : Veuillez saisir un valeur entre 1 et 3."))
    #is_valid = not ((valeur_saisie < 1) or (3 < valeur_saisie))
    is_valid = (1 <= valeur_saisie) and (valeur_saisie <= 3)
else:
    print(f"Vous avez saisi {valeur_saisie} qui est une valeur de l'interval.")

valeur_saisie = 0

while not ((1 <= valeur_saisie) and (valeur_saisie <= 3)) :
    valeur_saisie = int(input("Méthode 2 : Veuillez saisir un valeur entre 1 et 3."))