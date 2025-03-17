# Aller dans le menu "services & voyages"
# Dans ce menu, sous menu "Seconde vie", cliquer sur "Revendre mon matériel"
# Un encard s'affiche sur la droite
# S'assurer que les 4 sections de texte sont bien "Identifier ton produit" etc...

*** Settings ***

Library  Browser

Resource  ../resources/homepage_page.resource
Resource  ../resources/search_page.resource
Resource  ../resources/login_page.resource
Resource  ../resources/searchbar_element.resource
Resource  ../resources/product_page.resource
Resource  ../resources/cart_page.resource
Resource  ../resources/menubar_element.resource
Resource  ../resources/buyback_page.resource

Variables  ../data/products.py

Test Setup  Given I am on the homepage

*** Variables ***
&{product1}=  ref=8549582  name=OREILLER DE CAMPING - COMFORT

*** Test Cases ***
Test 1

    # Aller dans le menu "services & voyages"
    # Dans ce menu, sous menu "Seconde vie", cliquer sur "Revendre mon matériel"
    # Un encard s'affiche sur la droite
    # S'assurer que les 4 sections de texte sont bien "Identifier ton produit" etc...

    when I click on the menu "Services & voyages"
    Then I am on the menubar "Services & voyages"
    When I click on "Revendre mon matériel"
    Then I am on the popin "Comment ça marche ?"
    And I check the name of the four categories

    Then I am on the menubar "Services & voyages"