# Programme principal : Version 1
# Import du module_animal complet
import module_animal

# Utilisation d'une variable du module
print(f"Récupération de la variable \"my_favrorite_animal\" => {module_animal.my_favorite_animal}")

# Utilisation d'une fonction du module
print(f"Récupération de la fonction \"ask_favorite_animal\" => {module_animal.ask_favorite_animal("Chien")}")

# Utilisation d'une autre fonction
module_animal.function2()

#Afficher toutes les éléments utilisables du module indiqué
print(dir(module_animal))