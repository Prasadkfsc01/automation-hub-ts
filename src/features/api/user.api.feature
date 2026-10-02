@api @smoke
Feature: User API

  Scenario: Get a user successfully
    When I request user with id 1
    Then the API response status should be 200
    And the user response should contain an id

  Scenario: Create a new user successfully
    When I create a new user
    Then the API response status should be 201
    And the created user response should contain the submitted details