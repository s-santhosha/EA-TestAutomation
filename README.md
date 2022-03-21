## Energy Australia API Coding Test 


## Test written with reference from Swagger - https://eacp.energyaustralia.com.au/codingtest/api-docs/
 
## The framework is developed with WebdriverIO NextGen Javascript Automation Framework along with mocha/Jasmine

Techstack - Nodejs, Javascript, Supertest, Chai-assertion, html reporting

## How to run the project
Clone or download this project from Github.

## Download dependencies using npm package manager 
npm install 

## Links to WebdriverIO - https://webdriver.io/docs/gettingstarted

## Executing the tests

## To run the api test for music festival use either of mocha or jasmine testrunner
"npx mocha ./test/specs/api-test.js"  (or) "npx jasmine ./test/specs/api-test.js"


## Issues observed with API endpoint - 
1. Everytime a Get call is performed on the API endpoint,  test data response is random/changes
2. Many a times empty string response with 200 status is displayed
3. Too many throttling status code 429 is observed
4. Few test data have missing Keys across name and recordLabel
5. Few test data have missing value for recordLabel
6. Contract testing would be beneficial between consumer and provider





