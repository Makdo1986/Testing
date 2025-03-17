# Programme principal : Version 1
# Import d'une partie du module

# Import du contenu du module_animal :
from module_animal import my_favorite_animal as mfa # - la variable "my_favorite_animal"
from module_animal import ask_favorite_animal as afa # - la fonction "ask_favorite_animal"
from module_animal import function2 as f2 # - la fonction "function2"


# Import de la  du  module_animal

# Utilisation d'une variable importée
print(f"Récupération de la variable \"my_favrorite_animal\" => {mfa}")

# Utilisation d'une fonction importée
print(f"Récupération de la fonction \"ask_favorite_animal\" => {afa("Chien")}")

# Utilisation d'une autre fonction importée
f2()