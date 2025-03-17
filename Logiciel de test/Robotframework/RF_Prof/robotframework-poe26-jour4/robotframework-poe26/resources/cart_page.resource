*** Settings ***
Library  Browser

*** Keywords ***
the cart is displayed
    Get Text    css=h1    contains    Panier

there are "${count}" product(s) in the cart
    Get Element Count    css=.cart-line    ==    ${count}

the product "${name}" is in the cart
    Get Text    css=.cart-list .cart-line a span    contains    ${name}

the product "${name}" is in the cart at the position "${index}"
    Get Text    
    ...    xpath=(//*[contains(concat(' ', normalize-space(@class), ' '), ' cart-list ')]//*[contains(concat(' ', normalize-space(@class), ' '), ' cart-line ')]//a//span)[${index+1}]    
    ...    contains    
    ...    ${name}