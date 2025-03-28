*** Settings ***
Library    AppiumLibrary
Resource  ../resources/variables.resource   

*** Keywords ***
Calculator opened
    Open Application    
    ...    ${REMOTE_URL_CALCULATOR}    
    ...    platformName=${PLATFORM_NAME_CALCULATOR}    
    ...    platformVersion=${PLATFORM_VERSION_CALCULATOR}    
    ...    deviceName=${DEVICE_NAME_CALCULATOR}   
    ...    appPackage=${APP_PACKAGE_CALCULATOR}    
    ...    appActivity=${APP_ACTIVITY_CALCULATOR}    
    ...    automationName=${AUTOMATION_NAME_CALCULATOR}

I type an operation 9+1

    Sleep    1s  # Attendre 1 seconde

    Click Element    id=com.google.android.calculator:id/digit_9      # Cliquer sur le chiffre 9
    Click Element    id=com.google.android.calculator:id/op_add       # Cliquer sur l'opérateur +
    Click Element    id=com.google.android.calculator:id/digit_1      # Cliquer sur le chiffre 1  
    Click Element    id=com.google.android.calculator:id/eq           # Cliquer sur le bouton égal

I should see the result 10
    
    # Récupérer le texte de l'élément et vérifier s'il contient 10
    ${text}=    Get Element Attribute    id=com.google.android.calculator:id/result_final    text
    Should Contain    ${text}    10
    
    Element Text Should Be    id=com.google.android.calculator:id/result_final    10  # Assertion sur le texte de l'élément devrait être 10
    
    # Afficher le résultat dans la console
    ${text}=   Get Text    id=com.google.android.calculator:id/result_final  # récupérer le texte de l'élément
    Log To Console    ${text}                                                # Afficher le texte dans la console