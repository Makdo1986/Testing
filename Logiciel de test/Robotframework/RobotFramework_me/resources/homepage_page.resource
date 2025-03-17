*** Settings ***
Library  Browser

*** Keywords ***

I am on the homepage
    Open Browser         http://www.decathlon.fr  # Ouverture de la page web à l'adresse web donné
    Get Element States   id=didomi-notice-agree-button  contains  visible  # Attendre que l'élément "Accepter" soit visible 
    
    Click                id=didomi-notice-agree-button  # Cliquer sur l'élément "Accepter"
    get Element States   id=didomi-popup  contains  detached  # Attendre que la popup associée soit invisible

I search for "${search}"  # Mettre les "" pour indiquer que c'est une variable à l'écriture

    get Element States   xpath=//input[@type='search']  contains  visible  # Attendre que l'élément "barre de recherche" soit visible 
    Fill Text            xpath=//input[@type='search']  ${search}  # Saisir le texte contenu dans la variable "search"
    Click                css=#search-bar button[type='submit']  # id = search-bar => button de type 'submit'