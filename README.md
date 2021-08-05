#### This project comprises of test automation suite developed using cypress:6.5.0 for running Smoke and Full Regression Tests of `https://computer-database.gatling.io/computers` in Chrome 89

### OS and Software Requirements [To be installed]

##### OS X(Catalina)[Tested]/ Windows 10 / Linux [Recommended:Ubuntu 18+]

### Installation

#### Please install below items to run tests

##### Chrome 89

##### Node JS v13.12.0

## Core Dependencies used in this Project

##### a.Cypress 6.5.0

##### b.cypress-cucumber-preprocessor 2.3.1

##### c.multiple-cucumber-html-reporter 1.18.0

## Getting Started

##### 1.Install the above mentioned S/W

##### 2.Open a terminal/command prompt and navigate to this project directory `/cypresstraining`

##### 3.Run the command in the terminal `npm run install`

##### 4.Please refer to Test Scenarios under `cypress/integration/BDD`

##### 5.Please use below commands to run tests

    1.For Application Smoke Tests

        `npm run smokeTestsChromeHeaded` [mode:Headed]
        `npm run smokeTestsChromeHeadless` [mode:Headless]

    2.For Application Full Regression Tests

        `npm run regressionTestsChromeHeaded` [mode:Headed]
        `npm run regressionTestsChromeHeadless` [mode:Headless]

    3. For All Tests

        `npm run allTestsChromeHeaded` [mode:Headed]
        `npm run allTestsChromeHeadless` [mode:Headless]
        `npm run regressionTestsChromeHeadless` [mode:Headless]


##### 6.Cucumber report is configurable at `cucumber-html-report.js` and please use below command to generate cucumber report after test run

        `node cucumber-html-report.js`



Please note that the base URL is configured at `cypress.json` (env.url)
