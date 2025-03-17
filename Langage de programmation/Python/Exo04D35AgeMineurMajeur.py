# Diapo 35

# Écrire un programme qui, à partir de la saisie de l'âge de l'utilisateur, affiche True s'il est majeur et False s'il est mineur (sans structure conditionnelle if).

# Mise en variable de la valeur saisie par l'utilisateur
age_saisie = int(input("Veuillez indiquer un âge entre 0 et 99 ans."))

# Mise en variable du retour is_majeur
is_majeur = age_saisie >= 18 

# Affichage du message résultat
print(f"L'âge saisie est \"{age_saisie}\" ans, is_majeur = {is_majeur}")