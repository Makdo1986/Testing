*** Settings ***
Library  Browser

*** Variables ***


*** Keywords ***
I am on the homepage
  Open Browser  https://www.decathlon.fr
  Get Element States    id=didomi-notice-agree-button  contains  visible
  Click    id=didomi-notice-agree-button
  Get Element States    id=didomi-notice-agree-button  contains  detached

I search for "${search}"
    Fill Text    xpath=//input[@type='search']    ${search}
    Click    css=#search-bar button[type='submit']

I go to the login form
    Click    css=.tool--account a