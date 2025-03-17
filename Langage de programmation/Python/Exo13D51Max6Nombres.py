# Diapo 51

# Écrire un algorithme qui demande successivement 6 nombres à l'utilisateur,
# et qui lui dit ensuite quel était le plus grand parmis ces 6 nombres.

nb_saisie_max = 6
nb_saisie_en_cours = 0

valeur_saisie = 0
valeur_max = None

while nb_saisie_en_cours < nb_saisie_max:
    valeur_saisie = int(input(f"Veuillez saisir une valeur entre 0 et 99.\nNombre saisie disponible : {nb_saisie_max-nb_saisie_en_cours}\n"))
    if  (not valeur_max or ( valeur_max < valeur_saisie )):
        valeur_max = valeur_saisie
    nb_saisie_en_cours += 1
else:
    print(f"Votre valeur maximale saisie était : {valeur_max}")