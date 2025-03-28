*** Settings ***
Library    AppiumLibrary
Library    Collections
Resource  ../resources/keywords_api_demo.resource

*** Test Cases ***
test debug appli

    # Ouvrez l’application ApiDemo
    open API Demo

    # go to hyperspace and get the messages    
    # go to hyperspace and get the messages
    
    # go to the chronomoter and change the format
    # go to the chronomoter and change the format

    # Seek bar mettez la à 88
    
    Click Element  accessibility_id=Views
    Swipe    650    500    0    -2000
    Click Element  accessibility_id=Seek Bar
    
    ${seekbar}    Get WebElement    id=io.appium.android.apis:id/seek

    ${location}    Get Element Location    ${seekbar}
    ${size}       Get Element Size    ${seekbar}
    ${enabled}    Get Element Attribute    ${seekbar}    enabled
    ${clickable}  Get Element Attribute    ${seekbar}    clickable

    Log To Console    Position : X=${location["x"]}, Y=${location["y"]}
    Log To Console    Taille : Largeur=${size["width"]}, Hauteur=${size["height"]}
    Log To Console    Est activé : ${enabled}
    Log To Console    Est cliquable : ${clickable}
    
    # DON T WORK AT ALL
    # ${progress}   Execute Script    return arguments[0].getAttribute("progress");    ${seekbar}
    # ${max}        Execute Script    return arguments[0].getAttribute("max");    ${seekbar}

    # Log To Console    Valeur actuelle : ${progress}
    # Log To Console    Valeur max : ${max}

    ${start_x}    Set Variable    ${location["x"]}
    ${end_x}      Evaluate    ${start_x} + ${size["width"]} * 0.88  # 88% de la largeur
    ${y}          Evaluate    ${location["y"]} + (${size["height"]} / 2)

    Swipe    ${start_x}    ${y}    ${end_x}    ${y}    500