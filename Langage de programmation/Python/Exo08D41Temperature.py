# Diapo 41

# Écrire un programme qui prend en entrée une température temp 
# renvoie l'état de l'eau à cette température c'est-à-dire "SOLIDE", "LIQUIDE" ou "Gazeux".
# On prendra comme conditions les suivantes : si la température est 
# - strictement négatives alors l'eau est à l'état solide.
# - entre 0 et 100 (compris) l'eau est à l'état liquide.
# - strictement supérieur à 100 l'eau est à l'état gazeux.
# Il est possible de réaliser cet exercice sans if imbriqué grâce au elif

temp = int(input("Saisissez une température entre -50 et 150 °C."))

if temp < 0:
    etat = "solide"
elif temp <= 100:
    etat = "liquide"
else:
    etat = "gazeux"

print(f"A la température de \"{temp}\" °C, l'état de l'eau est {etat} ")