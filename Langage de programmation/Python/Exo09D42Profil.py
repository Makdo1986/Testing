# Diapo 42

# Écrire un programme qui permet de tester si un profil est valable pour une candidature ou non selon ces trois critères :
# - L'âge minimum pour le poste est 30 ans
# - Le salaire maximum possible est 40 000 euros.
# - Le nombre d'années d'expérience minimum est de 5 ans.
# On affichera différents messages pour chaque condition non respectée.
# Il est possible de réaliser cet exercice avec une seule structure conditionnelle ne comportant qu'une condition par clause (pas de and/or)

# Demande à l'utilisateur de saisir les différents données : âge, salaire, expérience
age = int(input("Veuillez sasir votre âge."))
sal = int(input("Veuillez indiquer votre salaire souhaité."))
exp = int(input("Veuillez indiquer vos années d'expérience."))

# txt_tmp est chargé par un ternaire sur le texte à afficher en fonction de la variable
txt_tmp = "vous avez l'âge requis!" if 30 <= age else f"/!\\ vous n'avez pas l'âge requis!"
txt_age = f"Age saisi : {age} , {txt_tmp}\n" 
txt_tmp = "Ce salaire est possible." if sal < 40000 else f"/!\\ Le salaire demandé est trop important!"
txt_sal = f"Salaire demandé : {sal} , {txt_tmp}\n" 
txt_tmp = "Ce salaire est possible." if 5 <= exp else f"/!\\ Le salaire demandé est trop important!"
txt_exp = f"Expérience saisi : {exp} an(s), {txt_tmp}" 

# Récupération du texte global
txt_aff = txt_age + txt_sal + txt_exp

# Affichage de celui-ci
print(txt_aff)