Feature: Background color check 

Background:
Given Test page is open 
And "Set SkyBlue Background" button exists 
And "Set SkyWhite Background" button exists

Scenario: Sky Blue Background
When I click on "sky"  color button
Then the background color will change to sky blue


Scenario: White Background Change; 
When I click on "white"  color button
Then the background color will change to white 