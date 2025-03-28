*** Settings ***
Library    AppiumLibrary
# Library    XML

*** Variables ***
# Definition des capabilities
${REMOTE_URL}            http://127.0.0.1:4723
${PLATFORM_NAME}    Android
${PLATFORM_VERSION}    15
${DEVICE_NAME}    emulator-5554
${APP_PACKAGE}    com.google.android.calculator
${APP_ACTIVITY}    com.android.calculator2.Calculator
${AUTOMATION_NAME}    UiAutomator2

*** Keywords ***
Open Calculator
    Open Application    
    ...    ${REMOTE_URL}    
    ...    platformName=${PLATFORM_NAME}    
    ...    platformVersion=${PLATFORM_VERSION}    
    ...    deviceName=${DEVICE_NAME}    
    ...    appPackage=${APP_PACKAGE}    
    ...    appActivity=${APP_ACTIVITY}    
    ...    automationName=${AUTOMATION_NAME}

*** Test Cases ***
Test Open Calculator
    [Documentation]    Ouvrir l'application calculatrice
    Open Calculator
    
    Sleep    1s  # Attendre 1 seconde

    Click Element    id=com.google.android.calculator:id/digit_9      # Cliquer sur le chiffre 9
    Click Element    id=com.google.android.calculator:id/op_add       # Cliquer sur l'opérateur +
    Click Element    id=com.google.android.calculator:id/digit_1      # Cliquer sur le chiffre 1  
    Click Element    id=com.google.android.calculator:id/eq           # Cliquer sur le bouton égal
    
    # Récupérer le texte de l'élément et vérifier s'il contient 10
    ${text}=    Get Element Attribute    id=com.google.android.calculator:id/result_final    text
    Should Contain    ${text}    10
    
    Element Text Should Be    id=com.google.android.calculator:id/result_final    10  # Assertion sur le texte de l'élément devrait être 10
    
    # Afficher le résultat dans la console
    ${text}=   Get Text    id=com.google.android.calculator:id/result_final  # récupérer le texte de l'élément
    Log To Console    ${text}                                                # Afficher le texte dans la console
