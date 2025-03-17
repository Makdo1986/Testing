# Diapo 40

# Écrire un algorithme qui demande l'âge d'un enfant à l'utilisateur,
# ensuite, il l'informe de sa catégorie pour une licence sportive :
# 'Baby' entre 3 et 6 ans.
# 'Poussin' entre 7 et 8 ans.
# 'Pupille' entre 9 et 10 ans.
# 'Minime' entre 11 et 12 ans.
# 'Cadet' à partir de 13 ans.

age = int(input("Saisissez un âge entre 1 et 25 ans."))

if age < 3:
    print("Aucune catégorie")
elif age < 7:
    print("Baby")
elif age < 9:
    print("Poussin")
elif age < 11:
    print("Pupille")
elif age < 13:
    print("Minime")
else:
    print("Cadet")    