mon_tuple = ("toto", 5, 9, True, "Yeah")
mon_tuple1 = "toto", 5, 9, True, "Yeah" # idem

print("")
print(f"mon joli tuple {mon_tuple}")

# Accéder à un élément
print("")
print(f"1ère valeur {mon_tuple[0]}")
print(f"2ème valeur {mon_tuple[1]}")
print(f"3ème valeur {mon_tuple[2]}")
print(f"Dernière valeur {mon_tuple[-1]}")
print(f"Avant dernière valeur {mon_tuple[-2]}")
print(f"Avant dernière valeur {mon_tuple.index("Yeah")}")

# unpacking avec "écratement" d'une valeur /!\ attention à l'ordre !
val1, val2, val3, _, val5 = mon_tuple

print("")
print("L'unpacking permet de récupérer unitairement :")
print(f"val1 = {val1}")
print(f"val2 = {val2}")
print(f"val3 = {val3}")
print("La quatrième valeur ne peut être prise car elle a été ignoré via le \"_\"")
print(f"val5 = {val5}")

# Exo 01

# Écrire un programme se servant d'une fonction retournant, à partir de deux nombres lui étant envoyés en paramètres :
# La somme
# La différence
# Le quotient
# Le produit
# Vous testerez cette fonction dans le cadre d'un programme console demandant à l'utilisateur deux valeurs et lui permettant d'obtenir les 4 résultats en même temps.

def somme_difference_quotient_produit(x, y):
    return x+y, x-y, x/y, x*y

def demande_sdqp():
    add, dif, div, pro = somme_difference_quotient_produit(float(input("Veuillez saisir x : ")), float(input("Veuillez saisir y : ")))
    print("Pour x par y :")
    print(f"La somme est de {add:.2f}")
    print(f"La différence est de {dif:.2f}")
    print(f"La division est de {div:.2f}")
    print(f"Le produit est de {pro:.2f}")

demande_sdqp()