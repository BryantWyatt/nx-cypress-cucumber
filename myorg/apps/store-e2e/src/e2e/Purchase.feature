@purchase
Feature: Purchase an item

Scenario: Spending denarios
    Given I have 100 denarios
    When I spend 25 denarios
    Then I have 75 denarios remaining