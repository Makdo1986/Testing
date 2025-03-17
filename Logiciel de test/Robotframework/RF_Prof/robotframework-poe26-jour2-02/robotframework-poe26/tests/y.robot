*** Settings ***
Variables   ../data/dict.py  # Importer le fichier Python comme bibliothèque

*** Test Cases ***
Tester L'Accès Au Dictionnaire
    ${valeur}    Get Value    clé1
    Log    La valeur récupérée est: ${valeur}
