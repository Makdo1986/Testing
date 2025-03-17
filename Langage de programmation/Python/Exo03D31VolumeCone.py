
#Écrire un programme qui, à partir de la saisie d'un rayon et d'une hauteur, calcule le volume d'un cône droit

from math import pi #Import de pi via bibliothèque "math"

Hauteur = input("Saisir la hateur en cm : ") # Saisie de la hauteur par l'utilisateur
Rayon = input("Saisir le rayon en cm : ") # Saisie du rayon par l'utilisateur

Volume = (1/3)*float(Hauteur)*pi*(float(Rayon)**2) # Calcul du volume associé

print(f"Le volume du cône droit est de {Volume:.2f} cm3") # Affiche du texte résultat avec variable
print(f"Le volume du cône droit est de {(1/3)*float(Hauteur)*pi*(float(Rayon)**2):.2f} cm3") # Idem sans variable