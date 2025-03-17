# Exo Diapo 53

# Écrivez un algorithme qui affiche les nombres de 1 à 100. 
# Mais pour les multiples de 3, affichez "Fizz" à la place du nombre, 
# pour les multiples de 5, affichez "Buzz". 
# Pour les nombres qui sont à la fois des multiples de 3 et de 5, affichez "FizzBuzz".

for NB in range(1, 101):

    is_divisible_by_3 = (NB % 3 == 0)
    is_divisible_by_5 = (NB % 5 == 0)

    if (is_divisible_by_3 and is_divisible_by_5) :
        print("FizzBuzz")
    elif is_divisible_by_3 :
        print("Fizz")
    elif is_divisible_by_5 :
        print("Buzz")
    else:
        print(NB)