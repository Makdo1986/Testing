*** Settings ***
Library  Browser

*** Keywords ***
I search for "${search}"
    Fill Text    xpath=//input[@type='search']    ${search}
    Click    css=#search-bar button[type='submit']

I go to the cart from the header
    Click    css=.cart.nav-cart > a

I click on menu Services & Voyages
    Click    css=[data-cs-override-id='CategoryItem_7']

I click on Revendre mon matériel
    Click    css=[data-cs-override-id='categoryitem_7-seconde-vie-revendre-mon-materiel']
