*** Settings ***
Library  Browser

*** Variables ***
${search}  Ballon

*** Test Cases ***
Test
    
    Open Browser         http://www.decathlon.fr  # Ouverture de la page web à l'adresse web donné
    Get Element States   id=didomi-notice-agree-button  contains  visible  # Attendre que l'élément "Accepter" soit visible 
    
    Click                id=didomi-notice-agree-button  # Cliquer sur l'élément "Accepter"
    get Element States   id=didomi-popup  contains  detached  # Attendre que la popup associée soit invisible

    get Element States   xpath=//input[@type='search']  contains  visible  # Attendre que l'élément "barre de recherche" soit visible 
    Fill Text            xpath=//input[@type='search']  ${search}  # Saisir le texte contenu dans la variable "search"
    
    Click                css=#search-bar button[type='submit']  # id = search-bar => button de type 'submit'
    
    Get Element States   id=search-suggestions-banner  contains  visible  # Vérifier si la bannière suggestions est visible
    Get Text             css=.searchText  contains  ${search}  # Vérifier que le texte de résultat contient le texte de la variable "search"

    Close Browser  # Fermeture du navigateur
    