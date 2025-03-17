*** Settings ***
library  Browser
Library    XML

*** Keywords ***
I click on the menu "Services & voyages"
    Get Element States   css=button[data-cs-override-id="CategoryItem_7"]  
    ...  contains  
    ...  visible
    click   css=button[data-cs-override-id="CategoryItem_7"]


I am on the menubar "Services & voyages"
    Get Element States  css=.menubar > .menubar--expansion-panel-container  
    ...  contains  
    ...  visible

I click on "Revendre mon matériel"
    Get Element States   css=[data-cs-override-id="categoryitem_7-seconde-vie-revendre-mon-materiel"]
    ...  contains  
    ...  visible
    click   css=[data-cs-override-id="categoryitem_7-seconde-vie-revendre-mon-materiel"]