# Diapo 38

# Écrire un algorithme qui demande un nombre entier à l'utilisateur,
# puis qui teste et affiche s'il est divisible par 3. 
# Si le nombre est divisible par 3, affichez "Le nombre est divisible par 3", 
# sinon affichez "Le nombre n'est pas divisible par 3";

nbDiv3 = int(input("Saisissez un entier entre 0 et 99. "))
if nbDiv3 % 3 == 0 :
    print(f"\"{nbDiv3}\" est divisible par 3")
else :
    print(f"\"{nbDiv3}\" n'est pas divisible par 3")

# Utilisation d'un ternaire puis affichage du texte associé
texte_a_afficher = f"\"{nbDiv3}\" est divisible par 3" if nbDiv3 % 3 == 0 else f"\"{nbDiv3}\" n'est pas divisible par 3"
print(texte_a_afficher)