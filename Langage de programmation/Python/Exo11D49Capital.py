# Diapo 49

# Soit un capital c placé à un taux t. 
# On veut connaître le nombre d'années nécessaire au doublement de ce capital.
# Exemple de calcul (le taux est de 4%, soit 0,04)
# Cn = 10 000 x (1+0,04)^ 5 = 12 166 euros, soit un gain de 2 166 euros sur 5 ans.

capital_init = 10000
taux = 4
capital_simule = capital_init
capital_vise = capital_init * 2
nbAnnee = 0

while capital_simule <= capital_vise:
    nbAnnee += 1
    capital_simule = capital_simule * (1 + (taux / 100))
else:
    print(f"Pour un capital initial de {capital_init}€, il faudra attendre {nbAnnee} année(s) pour atteindre un capital de  {capital_simule:.2f}.")

