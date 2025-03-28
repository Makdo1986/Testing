*** Settings ***
Library    AppiumLibrary
Resource   ../resources/keywords_calculator.resource

*** Test Cases ***
Test Open Calculator

    [Documentation]    Ouvrir l'application calculatrice
    given Calculator opened
    when I type an operation 9+1
    then I should see the result 10
