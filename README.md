#Selenium WebdriverIO Boilerplate with Mocha + Chai + Sinon
Selenium + Node + webdriverio + mocha + chai + sinon

We are using Webdriverio's TestRunner on top of Selenium to run all of our tests in mocha.
I also included sinon so we can use it for unit testing within mocha.

-------------
Author: Michael Guild from <http://threde.com>

mg@threde.com

michaelguild13@gmail.com


##Tech Stack
-------------
node ( Version 6^ ) <https://nodejs.org>

selenium-standalone <https://github.com/vvo/selenium-standalone>

webdriverio <https://github.com/webdriverio/webdriverio/>

Mocha <https://mochajs.org/>

Chai <https://chaijs.com> ( test are written in Chai with es6 )

Sinon <https://sinonjs.org> ( generates random units for testing )


##Installation
-------------
`npm install`

###Note: this installation requires Node 6^ , NPM 3^ , & Java 1.8^
if you get an `cant connect to selenium`, it might be due to vagrant or another virtual machine.
run `node run kill-selenium` to kill all machines running on port 4444.

##Run Tests
-------------
Run the selenium server `selenium-standalone start` (runs on port 4444) and then run `npm test` in a new terminal.

note: `npm test`, runs all test within the test directory.

To kill/stop all selenium instances use: `npm run kill-selenium`.

use `npm run help` to see webdriverio's testrunner commands.

##Notes
-------------

while developing note that `Class browser.whatever()` uses all the methods here: <http://webdriver.io/api.html>

For configuration changes, please read & refer to the `wdio.config.js` file. All the information on how to configure this can be found on webdriverio <http://webdriver.io/guide/testrunner/configurationfile.html>

The global scope for all tests is located in the `before` method inside of the wdio.config.js file

`before: function (capabilities, specs) {
  ...
}
`
