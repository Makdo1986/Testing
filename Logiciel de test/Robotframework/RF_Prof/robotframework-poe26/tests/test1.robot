*** Settings ***
Library  Browser
Resource  ../resources/homepage_page.resource
Resource  ../resources/search_page.resource
Resource  ../resources/login_page.resource

Test Setup  Given I am on the homepage  # Permet de lancer des instructions avant chaque test

*** Variables ***
${variable}    "ballon"


*** Test Cases ***
Test HomePage
    # Given I am on the homepage
    No Operation    

Test Search ballon
    # Given I am on the homepage
    When I search for "ballon"
    Then I am on the search page for "ballon"

    Then I am on the login form

Test login failed
    # Given I am on the homepage
    When I go to the login form
    Then I am on the login form
    When I try to connect with the email address "toto@yopmail;com"
    Then I have an error for a wrong email address

Test Sort by "Meilleures ventes"
    # Given I am on the homepage
    When I search for "ballon"
    Then I am on the search page for "ballon"
    And I check that the result is sorted by "Meilleures ventes"
    When I sort the result by "Note des clients"
    then I check that the result is sorted by "Note des clients"

Test Add a product in the cart
    when I search for "ballon"
    then I am on the search page for "ballon"
# I get the informations of the first product
    Get Element States    css=.product-list, .pl-list   contains  visible
    
    Get Element States    css=article.vtmn-grid, .product-main-infos--grid   contains  visible
     
    Then I am on the login form
    # when I go on the product page of the first element

test 6
    when I search for "ballon"
    Then I am on the search page for "ballon"
    # When I open the first product page
    # Then I am on the product 