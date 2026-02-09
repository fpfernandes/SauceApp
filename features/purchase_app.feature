
Feature: Sauce Demo App

  Scenario Outline: Successful purchase of two products in the app
    Given I am on the Products page of the Sauce Demo app

    When I open the first product "<index1>"
    And I validate the first product details match "<product1>" and "<price1>"
    And I add the first product to the cart
    And I return to the product catalog page and swipe up
    And I open the second product "<index2>"
    And I validate the second product details match "<product2>" and "<price2>"
    And I add the second product to the cart
    And I check the cart number of items "<total_items>" and tap on the cart icon

    Then I see the Cart page
    And the cart contains "<product1>" with price "<price1>" and "<product2>" with price "<price2>"
    And the total number of items is "<total_items>"
    And the total purchase value is "<total_value>"

    When I tap on the Checkout button to proceed to checkout
    Then the Login page appears 

    When I fill in the login information
    And I tap on the Login button
    Then the checkout page opens

    When I enter valid shipping information:
      | fullName | Rebecca Winter |
      | address1 | Mandorley 112  |
      | address2 | Entrance 1     |
      | city     | Truro          |
      | state    | Cornwall       |
      | zip      | 89750          |
      | country  | United Kingdom |

    And I tap To payment button

    Then the payment page opens

    When I enter valid payment information:
      | nameCard   | Rebecca Winter      |
      | cardNumber | 5555 8888 9999 6666 |
      | expiryDate | 05/28               |
      | cvv        | 123                 |
    And I tap the Review Order button
    Then the review order page opens
    And the order summary shows "<product1>" and "<product2>"
    And the total purchase amount is "<total_with_shipping>"

    When I place the order
    Then I see the Checkout Complete page
    And I tap on the continue shopping button to return to the home page


    Examples:
    | product1                    | price1  | index1 | product2                     | price2  | index2 | total_items | total_value | total_with_shipping |
    | Sauce Labs Backpack         | $ 29.99 | 0      | Sauce Labs Backpack (violet) | $ 29.99 | 0      | 2           |  $ 59.98    | $ 65.97             |
    | Sauce Labs Backpack (red)   | $ 29.99 | 3      | Sauce Labs Backpack (yellow) | $ 29.99 | 1      | 2           |  $ 59.98    | $ 65.97             |
    

