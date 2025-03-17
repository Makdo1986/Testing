*** Settings ***
Library  Browser

*** Keywords ***
I am on the search page for "${search}"
  Get Element States    id=search-suggestions-banner  contains  visible
  Get Text    css=.searchText  contains  ${search}

I check that the result is sorted by "${sortCategory}"
    Get Element States    id=list-sort-select   contains  visible
    Get Selected Options  id=list-sort-select               label          ==         ${sortCategory}

I sort the result by "${sortCategory}"
    Get Element States    id=list-sort-select   contains  visible
    Select Options By    id=list-sort-select    label    ${sortCategory}
    Get Selected Options  id=list-sort-select               label          ==         ${sortCategory}

I get the informations of the first product
    Get Element States    css=.product-list, .pl-list   contains  visible
    