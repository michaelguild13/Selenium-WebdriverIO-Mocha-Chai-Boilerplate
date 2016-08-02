var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
console.log(webdriverio.init());
webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('asdjflaksjdflksadjf');
        console.log('Title was: ' + title);
    })
    .end();
