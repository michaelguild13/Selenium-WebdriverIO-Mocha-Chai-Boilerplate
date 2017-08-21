// example of a test group
// note: all tests under the test directory are ran

describe('webdriver.io page', ()=> {

    it('should have the right title - the fancy generator way', ()=> {
        browser.url('http://webdriver.io')
        browser.getTitle().should.be.equal('WebdriverIO - WebDriver bindings for Node.js')
    });

    it('does "What-is-WebdriverIO" link exsist?', ()=> {
        browser.url('http://webdriver.io')
        browser.getText('#What-is-WebdriverIO').should.be.equal('What is WebdriverIO?')
    });

    it('All links should point to an exsiting page', ()=> {
        browser.url('http://webdriver.io')
        let links = browser.elements('a')

        for (let i=0; i < links.value.length; i++) {
          let link = links.value[i].ELEMENT,
              href = browser.elementIdAttribute(link,'href'),
              status = true

          console.log(href.value)

          fetch(href.value)
            .then( function(res){
            })
            .catch( function(err){
              status = false
            })

          expect(status).to.be.true;
        }
    });
});
