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
  //
//   .elements('a', function(err,res) {
//     var i = 0;
//     res.value.forEach(function(elem) {
//         client.elementIdAttribute(elem, 'href', function(err,res) {
//             console.log(++i, res.value);
//         });
//     });
// });
  .elements('a')
  .then(function(links) {
    for (var i=0; i<links.value.length; i++) {
      var link = links.value[i].ELEMENT;

      client.elementIdAttribute(link,'href')
        .then( function(result) {
          console.log(result.value);
          fetch(result.value)
            .then( function(res){
              console.log(res.status);
            })
            .catch( function(err){
              console.log(err || 'error');
            });
        });
    }
  })

  // function getAllHrefs(driver, cssValue){
  //     var selector;
  //     if(!cssValue)   selector = By.tagName('a');
  //     else            selector = By.css(cssValue);
  //     return driver.findElements(selector).then(function(oLinks){
  //         var allPromises = oLinks.map(function(oLink){
  //             return oLink.getAttribute('href');
  //         });
  //         return Driver.promise.all(allPromises);
  //     });
  // }
