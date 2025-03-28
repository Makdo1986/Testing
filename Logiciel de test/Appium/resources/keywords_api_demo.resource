*** Settings ***
Library    AppiumLibrary
Library    Collections
Resource  ../resources/variables.resource

*** Keywords ***
List Does Not Contain
    [Arguments]    ${list}    ${item}
    ${result}    Set Variable    ${True}
    FOR    ${element}    IN    @{list}
        IF    '${element}' == '${item}'
            ${result}    Set Variable    ${False}
            BREAK
        END
    END
    [Return]    ${result}

open API Demo

    # Ouvrez l’application ApiDemo
    Open Application    
    ...    ${REMOTE_URL_API}    
    ...    platformName=${PLATFORM_NAME_API}    
    ...    platformVersion=${PLATFORM_VERSION_API}    
    ...    deviceName=${DEVICE_NAME_API}    
    ...    appPackage=${APP_PACKAGE_API}    
    ...    appActivity=${APP_ACTIVITY_API}    
    ...    automationName=${AUTOMATION_NAME_API}

go to hyperspace and get the messages

    # View > animation > push > Sélectionne hyperspace et retranscrit les messages affichés 
    Click Element    accessibility_id=Views
    Click Element    accessibility_id=Animation
    Click Element    accessibility_id=Push
    Click Element    id=android:id/text1

    # Click Element  xpath=//android.widget.TextView[@content-desc="Views"]              # Cliquer sur le bouton Views
    # click Element  xpath=//android.widget.TextView[@content-desc="Animation"]          # Cliquer sur le bouton Animation
    # click Element  xpath=//android.widget.TextView[@content-desc="Push"]               # Cliquer sur le bouton Pushing
    # click Element  xpath=//android.widget.TextView[@resource-id="android:id/text1"]    # Cliquer sur le sélecteur "Select an animation"
    click Element  xpath=//android.widget.CheckedTextView[@text="Hyperspace"]          # Cliquer sur l'animation Hyperspace
    
    # Ca marche mais c'est moche.
    
    Log to console  -

    sleep  6s

    FOR    ${element}    IN RANGE   1   5
        ${texte_actuel}    Get Text    xpath=//android.widget.TextView[@content-desc]
        Log To Console  ${texte_actuel}
        # Append To List    @{textes_affiches}    ${texte_actuel}
        Sleep    2s
    END

    # ----------------------------------------------NE FONCIONNE PAS----------------------------------------------
        # @{textes_affiches}    Create List
        # ${dernier_texte}    Set Variable    ${EMPTY}
        
        # WHILE    True

        #     ${texte_actuel}    Get Text    xpath=//android.widget.TextView[@content-desc]

        #     log to console  ----Avant while ${texte_actuel}----
            
        #     IF  ('${texte_actuel}' not in '${textes_affiches}')
        #         Append To List    ${textes_affiches}    ${texte_actuel}
        #         log to console  Nouveau texte trouvé : ${texte_actuel}
        #         ${dernier_texte}    Set Variable    ${texte_actuel}
        #     ELSE IF  ('${texte_actuel}' != '${dernier_texte}') AND ('${texte_actuel}' in '${textes_affiches}')
        #         log to console  Fin de la rotation des textes.
        #         BREAK
        #     END
        
        # END

        # ${texte_actuel}    Get Text    xpath=//android.widget.TextView[@content-desc]
        # Log To Console  ----   ${texte_actuel}   ----
        
        # Log To Console   liste des textes récupérés   @{textes_affiches}

        #     BREAK

        # END

    # ---------------------------------------------- FIN ----------------------------------------------
    
    # Nouvelle tentative via chatGPT

        # ${textes_affiches}    Create List
        # ${dernier_texte}    Set Variable    ${EMPTY}

        # WHILE    True
        #     ${texte_actuel}    Get Text    xpath=//android.widget.TextView[@content-desc]

        #     Run Keyword And Continue On Failure    List Does Not Contain    ${textes_affiches}    ${texte_actuel}
        #     ${nouveau}    Run Keyword And Return Status    List Does Not Contain    ${textes_affiches}    ${texte_actuel}

        #     IF    ${nouveau}
        #         Append To List    ${textes_affiches}    ${texte_actuel}
        #         Log    Nouveau texte trouvé : ${texte_actuel}
        #         ${dernier_texte}    Set Variable    ${texte_actuel}
        #     ELSE IF    '${texte_actuel}' == '${dernier_texte}'
        #         Log    Fin de la rotation des textes.
        #         BREAK
        #     END

        #     Sleep    5s

        # END

        # Log    Tous les textes collectés : ${textes_affiches}
    
    Go Back  # Retourner en arrière sur push
    Go Back  # Retourner en arrière sur animation
    Go Back  # Retourner en arrière sur API Demos

go to the chronomoter and change the format
    # Ensuite chronomètre commencez le et changer le format, assurez vous que le format a changer mais que le chronomètre tourne encore
    
    Click Element  accessibility_id=Views
    Click Element  accessibility_id=Chronometer  # Cliquer sur le bouton Chronometer
    click Element  accessibility_id=Start

    ${format_initial}    Get Text    id=io.appium.android.apis:id/chronometer
    Log To Console  Format initial : ${format_initial}
    Should Contain    ${format_initial}    Initial format:

    Click Element    accessibility_id=Set format string
    Sleep    2s
    click Element  accessibility_id=Stop

    ${format_actuel}    Get Text    id=io.appium.android.apis:id/chronometer
    Log To Console  Format actuel : ${format_actuel}
    Should Contain    ${format_actuel}    Fomatted time

    Go Back  # Retourner en arrière sur animation
    Go Back  # Retourner en arrière sur API Demos