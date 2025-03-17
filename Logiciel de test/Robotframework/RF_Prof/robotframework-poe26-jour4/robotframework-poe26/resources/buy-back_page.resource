*** Settings ***
Library  Browser
Library    Collections

*** Keywords ***
the slider Comment ça marche is opened
    Wait For Elements State    xpath=//*[@slot='title' and text()='Comment ça marche?']     visible    5s

the titles of sections are correctly displayed
    @{list}=  Create List    Identifier ton produit    Faire un diagnostique    Selectionner un magasin    Confirmer ton offre

    @{elements}=  Get Elements    css=.steps-workflow .step-title
    ${count_elements}=    Get Length    ${elements}

    FOR    ${index}    IN RANGE    0    ${count_elements}
        Log    ${index}
        ${element}=  Get From List    ${elements}  ${index}
        
        ${text_from_data}=    Get From List    ${list}    ${index}

        Get Text    ${element}    contains    ${text_from_data}
    END

    FOR    ${index}    ${element}    IN ENUMERATE    @{elements}
        Log    ${index}: ${element}
        ${text_from_data}=    Get From List    ${list}    ${index}
        Get Text    ${element}    contains    ${text_from_data}
    END
