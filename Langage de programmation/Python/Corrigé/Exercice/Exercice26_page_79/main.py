from module_adn import *

chaine_adn = saisie_adn("Veuillez saisir une chaine ADN (contient atcg) : ")
sequence_adn = saisie_adn("Veuillez saisir une sequence ADN  : ")

print(f"Il y a la sequence {sequence_adn} {proportion(chaine_adn,sequence_adn)} fois dans la chaine : {chaine_adn}")
print(f"Il y a la sequence {sequence_adn} {pourcentage_sequence(chaine_adn,sequence_adn,proportion(chaine_adn,sequence_adn))} % dans la chaine : {chaine_adn}")