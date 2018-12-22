
**Selenium WebdriverIO Boilerplate with Mocha + Chai**

We are using Webdriverio's TestRunner, that comes with phantomjs, on top of Selenium to run all of our tests in mocha. I also included sinon so we can use it for unit testing within mocha.

Installation
-------------
`npm install`

Run Tests
-------------
run `npm start` or `npm test`.

note: `npm test`, runs all test within the test directory.
To kill/stop all selenium instances use: `npm run kill-selenium`.
use `npm run help` to see webdriverio's testrunner commands.
Also, when the selenium-standalone server starts, it' running on port 4444

Notes
-------------

while developing note that `Class browser.whatever()` uses all the methods here: <http://webdriver.io/api.html>

For configuration changes, please read & refer to the `wdio.config.js` file. All the information on how to configure this can be found on webdriverio <http://webdriver.io/guide/testrunner/configurationfile.html>

The global scope for all tests is located in the `before` method inside of the wdio.config.js file.
So, if you have any vars you want to declare for all your test to have access, you can put them there.

`
before: function (capabilities, specs) {
  ...
}
`


Tech Stack
-------------
node ( Version 6^ ) <https://nodejs.org>

selenium-standalone <https://github.com/vvo/selenium-standalone>

webdriverio <https://github.com/webdriverio/webdriverio/>

Mocha <https://mochajs.org/>

Chai <https://chaijs.com> ( test are written in Chai with es6 )
