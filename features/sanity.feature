Feature: Sanity tests

Scenario Outline: Anonymous in search
Given I am on the grocery website
When I search for <term>
Then I should see results for <term>

Examples:
|term|
|cola|
|bread|

Scenario Outline: Signed in search and sign out
Given I logon to the groceries website
When I search for <term>
Then I should see results for <term>
And I logout

Examples:
|term|
|apple|
|meat|

Scenario: I can sign in and sign out on the grocery website
Given I logon to the groceries website
When I logout
Then I should be logged out of the site


Scenario: sign in using page objects
Given I logon to the groceries website using page objects
# When I search for <term>
# Then I should see results for <term>
And I logout 

@testme
Scenario: sign in using page objects - function inside the page
Given I logon to the groceries website using page objects method inside
# When I search for <term>
# Then I should see results for <term>
And I logout 

# Scenario: Anonymous browse


# Scenario: Signed in browse

# Scenario: Register a new user and place a delivery order

# Scenario: Sign in with an existing user and place a collection order


# Scenario: Reading data from json
# # Given I am on the grocery website
# # When I search for search term from a json file
# # When I search for search term from a yaml file
# When I logon to the groceries website

# Then I should see the correct results for the serch term

# Scenario Outline: Anonymous search 1
# Given I am on the grocery website
# When I search for <term>
# Then I should see results for <term>

# Examples:
# |term|
# |cola|
# |bread|


# Scenario Outline: Anonymous search2
# Given I am on the grocery website
# When I search for "<term>"
# Then I should see results for "<term>"

# Examples:
# |term|
# |cola|
# |bread|

# Scenario: Reading data from yaml
# Given I am on the grocery website
# When I search for search term from a json file
# Then I should see the correct results for the serch term


