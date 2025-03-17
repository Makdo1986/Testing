*** Settings ***
Library  Browser
Resource  ../resources/homepage_page.Resource
Resource  ../resources/productlist_page.resource

*** Variables ***
${current_search}  Ballon  # Comment l'utiliser 

*** Test Cases ***
Test Homepage
    
    Given I am on the homepage

Test Search Ballon Product
    
    Given I am on the homepage
    When I search for "${current_search}"
    Then I am on the search result for "${current_search}"
    
    Close Browser  # Fermeture du navigateur

Test Login failed
    
    Given I am on the homepage
    
    Get Element States    css=.tool--account a
    Click    css=.tool--account a

    Get Element States  id=input-email  contains  visible
    Fill Text    id=input-email    matt@gmail.com

    Get Element States    id=lookup-btn  contains  visible
    Click    id=lookup-btn
    
    Get Element States    id=content_page  contains  visible
    Get Text             id=content_page  contains  Renseignez le code reçu :

# .tool--account a