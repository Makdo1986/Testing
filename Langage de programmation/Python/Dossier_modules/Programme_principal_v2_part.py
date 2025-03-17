# Programme principal : Version 2
# Import d'une partie du module

# Import du contenu du module_animal :
from module_animal import my_favorite_animal # - la variable "my_favorite_animal"
from module_animal import ask_favorite_animal # - la fonction "ask_favorite_animal"
from module_animal import function2 # - la fonction "function2"


# Import de la  du  module_animal

# Utilisation d'une variable importée
print(f"Récupération de la variable \"my_favrorite_animal\" => {my_favorite_animal}")

# Utilisation d'une fonction importée
print(f"Récupération de la fonction \"ask_favorite_animal\" => {ask_favorite_animal("Chien")}")

# Utilisation d'une autre fonction importée
function2()