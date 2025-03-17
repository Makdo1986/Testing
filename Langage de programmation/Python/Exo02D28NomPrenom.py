# Diapo 28

# Écrire un programme, qui, à partir de la saisie d'un nom et prénom, affiche le message suivant :
# Bonjour M. Ou Mme {Prénom} {Nom}
# Il peut être utile de chercher en ligne les méthodes lower, upper, capitalize et/ou title pour forcer la casse.

lastname = input("Veuillez entrer votre nom.") #"degraeve"
firstname = input("Veuillez entrer votre prénom.") #"matthieu"

texte_a_afficher = f"Bonjour M. ou Mme {firstname.capitalize()} {lastname.upper()}."

print(f"Normal : {texte_a_afficher}") # Afficher le texte sans modification
print(f"upper : {texte_a_afficher.upper()}") # Afficher le texte en majusucule
print(f"lower : {texte_a_afficher.lower()}") # Afficher le texte en minuscule
print(f"capitalize : {texte_a_afficher.capitalize()}") # Afficher le texte en lettre capitale
print(f"title : {texte_a_afficher.title()}") # Afficher le texte en mode titre (chaque mot à sa 1er lettre en majuscule)