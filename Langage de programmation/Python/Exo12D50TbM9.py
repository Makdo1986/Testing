 # Diapo 50

# Écrire un algorithme permettant d'afficher la table de multiplication par 9.

# Avec utilisation du range 
# /!\ valeur max visée => valeur max + 1
print("Avec range(0, 10) | /!\\ c'est 10-1")
for nb in range(0,10):
    print(f"{nb} * 9 = {nb*9}")

# Avec utilisation du [ ... ] 
print("Avec [0,1,2,3,4,5,6,7,8,9] | /!\\ c'est 10-1")
for nb in [0,1,2,3,4,5,6,7,8,9]:
    print(f"{nb} * 9 = {nb*9}")