*** Settings ***
Library  Browser

*** Keywords ***
I am on the search result for "${search}"  # Mettre les "" pour indiquer que c'est une variable à l'écriture

    Get Element States   id=search-suggestions-banner  contains  visible  # Vérifier si la bannière suggestions est visible
    Get Text             css=.searchText  contains  ${search}  # Vérifier que le texte de résultat contient le texte de la variable "search"