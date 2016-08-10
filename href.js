var settings = {
  desiredCapabilities: {
    browserName: 'firefox',
  },
};

var fetch = require('node-fetch');

var webdriverio = require('webdriverio');
var client = webdriverio.remote(settings).init()
  .url('http://localhost:8000/')
  // .url('https://www.arcpublishing.com/')
  .elements('a')
  .then(function(links) {
    for (var i=0; i<links.value.length; i++) {
      var link = links.value[i].ELEMENT;

      client.elementIdAttribute(link,'href')
        .then( function(result) {
          console.log(result.value);
          fetch(result.value)
            .then( function(res){
              console.log(res);
            })
            .catch( function(err){
              console.log(err || 'error');
            });
        });
    }
  })
