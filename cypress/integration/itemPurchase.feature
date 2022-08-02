Feature: The purchase item lifecycle

    Scenario: Navigating to an item in the store and
        Given I am logged in to my account page
        And I click women tab to view catalog and subcatagories

    Scenario: Adding item to the cart and editing product
        And I click on the first item preview and close preview
        And I click more button to view product page
        And I am able to change quantity, color and add to cart successfully

    Scenario: Checkout Process for every page
        And I follow Proceed to checkout

    Scenario: Payment Process and confirm purchase 
        And I choose pay by check payment method and confirm my purchase
        Then I successfully complete my order

    Scenario: Order history, invoice, reorder and logout
        And I click back to orders to view order history
        And I click first order and click invoice to download my order
        And I click reorder to order the same items
        And I hover over cart and click close button to remove product and view message for empty shopping cart
        Then I click sign out to log out of my account

