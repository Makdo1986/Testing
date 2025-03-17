*** Settings ***
library  Browser
Library  Collections

*** Keywords ***
I am on the popin "Comment ça marche ?"
    # Wait For Elements State    css=.drawer.open > #drawer-background    visible    10s
    # Wait For Elements State    xpath=(//*[@id='drawer-background'])[1]//*[@slot="title"]    visible    10s
    Wait For Elements State    xpath= //*[@slot="title" and text()='Comment ça marche?']    visible    10s    

I check the name of the four categories
    # No Operation
    No Operation

    # .step-title
    # //*[@class="step-title"]
    
    @{howLabels}=  Create List    
    ...    Identifier ton produit    
    ...    Faire un diagnostique
    ...    Selectionner un magasin
    ...    Confirmer ton offre

    ${count}=  Get Length  ${howLabels}
    Log    ${count}
    
    #  Get Element Count   //div[@class="step-bubble svelte-r7gt6y"]  

    FOR    ${index}    IN RANGE    0    ${count}

        ${howLabel}=  Get From List    ${howLabels}    ${index}
        Log    ${index}
        
        Get Text    
        ...  xpath=(//div[contains(concat(' ',normalize-space(@class),' '),' individual-step ')])[${index + 1}]//div[contains(concat(' ',normalize-space(@class),' '),' step-title ')]    
        ...  contains
        ...  ${howLabel}
        
    END
