describe('webdriver.io page', ()=> {
    it('should have the right title - the fancy generator way', ()=> {
        browser.url('http://webdriver.io')
        browser.getTitle().should.be.equal('WebdriverIO - Selenium 2.0 javascript bindings for nodejs')
    });
});
