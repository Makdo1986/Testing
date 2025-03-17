*** Settings ***
Library  Browser

*** Keywords ***
I am on the product page for "${name}"
    Get Text    css=h1    contains    ${name}

I add the product to the cart
    Click    css=.conversion-zone__purchase-cta

the product is added to the cart successfully
    #Get Element States    css=#popin-cross-sell [slot='title']    contains    visible
    Wait For Elements State    css=#popin-cross-sell [slot='title']    visible    10s

I go to the cart
    Click  css=[data-href='/checkout/cart']

# Popin d'information d'ajout au panier
# #popin-cross-sell[role='dialog']
# #popin-cross-sell[role='dialog'] .undefined button => 

I close the cart popin
    Get Element States    css=#popin-cross-sell[role='dialog'] .ecomm-sidepanel__close-btn  contains  visible
    Click    css=#popin-cross-sell[role='dialog'] .ecomm-sidepanel__close-btn