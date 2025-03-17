Feature: Purchase and Account Creation on AutomationExercise.com

  Scenario: Add an item to the cart and create an account
    Given The user is on the homepage of "AutomationExercise.com"
    When The user adds the item to the cart
    And The user accesses the cart
    Then The user sees that the item is present in the cart
    When The user clicks on "Create an account"
    And The user enters their personal information :
      | Name    | Email                                  | Password | Address             | City   | Zip Code | Phone            |
      | Tester  | brahim-test@yopmail.com                | Pass123  | 2 rue Lorep ipsum   | Lille  | 59000    | 0612114578       |
      | Test 2  | brahim-test2@yopmail.com               | Pass123  | 2 rue Lorep ipsum   | Lille  | 59000    | 0755469888       |
    And The user confirms the account creation
    Then The account is successfully created

Feature: Purchase and Account Creation on AutomationExercise.com

  Scenario: Add an item to the cart
    Given The user is on the homepage of "AutomationExercise.com"
    When The user adds the first item to the cart
    And The user accesses the cart
    Then The user sees that the item is present in the cart

  Scenario: Navigate to account creation page
    Given The user is on the cart page
    When The user clicks on "Create an account"
    Then The user is redirected to the account creation page

  Scenario: Fill in personal details and create an account
    Given The user is on the account creation page
    When The user enters their personal information:
      | Name    | Email                     | Password  | Address             | City   | Zip Code  | Phone             |
      | Brahim  | brahim-test2@yopmail.com  | Pass1234  | 2 rue Lorep ipsum   | Lille  | 59000     | 0612114578        |
    And The user confirms the account creation
    Then The account is successfully created