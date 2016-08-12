#Selenium WebdriverIO Boilerplate with Mocha + Chai + Sinon
Selenium + Node + webdriverio + mocha + chai + sinon

##Tech Stack
-------------
node <https://nodejs.org>

selenium-standalone <https://github.com/vvo/selenium-standalone>

webdriverio <https://github.com/webdriverio/webdriverio/>

mocha <https://mochajs.org/>

chai <https://chaijs.com>

sinon <https://sinonjs.org>

##Installation
-------------
`npm install`

##Run Tests
-------------
Run the selenium server `selenium-standalone start` and then run `npm run test`

use `npm run test-help` to see webdriverio's testrunner commands

##Notes
-------------

For configuration changes, please refer to the wdio.config.js file. All the information on how to configure this can be found on webdriverio <http://webdriver.io/guide/testrunner/configurationfile.html>

The global scope for all tests is located in the `before` method inside of the wdio.config.js file

`before: function (capabilities, specs) { ... }`
