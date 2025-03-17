# Exo 01 lié à Exo17D75Modules.py

# Restructurer le script ADN avec la structure vue précédemment
# Écrire un script qui utilise les fonctions de l'exercice ADN.

# Écrire une fonction vérification_adn qui permet de renvoyer la valeur True si la chaîne
# d’ADN est valide, False si elle est invalide ('a', 't', 'c', 'g'.)
def verification_adn(chaine: str):
    # print(f"ma chaine tester est : {chaine}")
    for lettre in chaine:
        # print(f"je verifie la lettre {lettre}")
        if lettre not in 'atcg':
            # print(f"oups celle la convient pas ...")
            return False
    # print("tous est bon !!!")
    return True

# 2. Écrire une fonction saisie_adn qui récupère une saisie, vérifie sa validité et renvoie une
# chaîne d’ADN valide sous forme de chaîne

def saisie_adn(question):
    ma_chaine = input(question)
    while not verification_adn(ma_chaine):
        print("erreur de saisie !!!")
        ma_chaine = input(question)
    return ma_chaine


# saisie_adn("Veuillez saisir une chaine ADN (contient atcg) : ")
    
# 3. Écrire une fonction proportion qui reçoit deux paramètres une chaîne d’ADN et une
# séquence d’ADN Elle renverra le nombre d’occurrences de la séquence dans la chaîne

def proportion(chaine: str,sequence: str):
    return chaine.count(sequence)

# Bonus calcul du pourcentage

def pourcentage_sequence(chaine: str,sequence: str,proportion : int):
    return round(proportion * len(sequence) * 100 / len(chaine),2)

print(f"Les instructions sont lancés depuis le fichier \"module_adn.py\" => \"__name__\" => {__name__}")

# Permet de gérer des prints de vérifications spécifiques à ce fichier module

if __name__ == "__main__": # ==> le fichier contient "__main__" quand c'est celui à partir duquel on clique sur "|>"
    # instructions qui seront lancées si on lance le programme depuis le fichier
    print("(!) Ce print s'affiche si on lance ses instructions à partir de ce fichier (!)")
else:
    # instructions qui seront lancées si on lance le programme depuis un import
    print("/!\\ Ce print s'affiche si on lance ses instructions à partir d'un import /!\\")