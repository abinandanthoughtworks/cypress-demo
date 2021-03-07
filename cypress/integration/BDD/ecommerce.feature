Feature: End to End Ecommerce validation

    application Regression
    @Regression
    Scenario:   Ecommerce products delivery
        Given I open Ecommerce Page
        When I add items to Cart
        And Validate the total prices
        Then Select the country submit and verify Thankyou message
    @Smoke
    Scenario:   Filling the form to shop
        Given I open Ecommerce Page
        When I fill the form details
            | name      | gender |
            | abinandan | Male   |
        Then Validate the form behavior
        And Select the Shop Page
