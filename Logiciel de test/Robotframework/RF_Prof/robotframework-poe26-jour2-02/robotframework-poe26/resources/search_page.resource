*** Settings ***
Library  Browser
Library    Collections

*** Keywords ***
I am on the search page for "${search}"
  Get Element States    id=search-suggestions-banner  contains  visible
  Get Text    css=.searchText  contains  ${search}

the selected sorting method is "${method}"
  Get Selected Options    id=list-sort-select    label    contains    ${method}

I sort the list by "${method}"
  Select Options By    id=list-sort-select    label    ${method}

I open the first product page
    Click    xpath=(//*[contains(concat(' ', normalize-space(@class), ' '), ' product-list ')]/*)[1]//a[./img]

The sellers are displayed correctly
    
    @{list}=  Create List    Decathlon    Balles de Sport    Sport & Go    Butyjana    Sportano EU
      
    ${count}=  Count Values In List  @{list}
    FOR    ${index}    IN RANGE    1    ${count}+1
        Log    ${index}
        # //summary[.//*[contains(text(), 'Filtrer par vendeurs')]]/following-sibling::div
    END