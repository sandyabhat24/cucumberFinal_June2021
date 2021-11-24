$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sandh/june2021-Selenium/Final_cucumber/src/test/java/features/TF_Final_BackGround.feature");
formatter.feature({
  "line": 1,
  "name": "Background color check",
  "description": "",
  "id": "background-color-check",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Test page is open",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "\"Set SkyBlue Background\" button exists",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "\"Set SkyWhite Background\" button exists",
  "keyword": "And "
});
formatter.match({
  "location": "BackgroundStepDefinition.test_page_is_open()"
});
formatter.result({
  "duration": 4416835000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 1
    }
  ],
  "location": "BackgroundStepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 74834600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyWhite Background",
      "offset": 1
    }
  ],
  "location": "BackgroundStepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 56021000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Sky Blue Background",
  "description": "",
  "id": "background-color-check;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I click on \"sky\"  color button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sky",
      "offset": 12
    }
  ],
  "location": "BackgroundStepDefinition.i_click_on_color_button(String)"
});
formatter.result({
  "duration": 58893200,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 29429800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Test page is open",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "\"Set SkyBlue Background\" button exists",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "\"Set SkyWhite Background\" button exists",
  "keyword": "And "
});
formatter.match({
  "location": "BackgroundStepDefinition.test_page_is_open()"
});
formatter.result({
  "duration": 2043921100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 1
    }
  ],
  "location": "BackgroundStepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 60912600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyWhite Background",
      "offset": 1
    }
  ],
  "location": "BackgroundStepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 40247100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "White Background Change;",
  "description": "",
  "id": "background-color-check;white-background-change;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I click on \"white\"  color button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "white",
      "offset": 12
    }
  ],
  "location": "BackgroundStepDefinition.i_click_on_color_button(String)"
});
formatter.result({
  "duration": 46047800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinition.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 46903800,
  "status": "passed"
});
});