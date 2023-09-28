/// <reference types="cypress" />
describe('smoke test suite', function (done) {

  // beforeEach(function () {
  // cy.getCookies().then(cookies => {
  //  const namesOfCookies = cookies.map(c => c.name)
  //  Cypress.Cookies.preserveOnce(...namesOfCookies)
  //   cy.reload()
  //  })   

  // var like;
  // var TPPId = 2;
  // var userId = "61385d5cf519418af1d4c5da";
  // var Auth = {
  //     "username": "K4-api-dev",
  //     "password": "DataTeam@2021"
  // }
  // beforeEach(() => {
  //     cy.restoreLocalStorage();
  // });
  // afterEach(() => {
  //     cy.saveLocalStorage();
  // });
  it('Test case to verify login page', function () {
      cy.visit('https://dev1.px4app.com/index.php/auth/login?redirect=/index.php/', {
          onBeforeLoad: (abc) => {
              abc.sessionStorage.clear()
          }
      })
      // cy.title().should('eq', 'Login | K4Coach')
      // cy.log('Verifying title Login | K4Coach')
      // cy.get('div[class="text-center col"]').find("img").should('be.visible');
      // cy.log('Verifying title Kagami Diagnostics Logo')
      // cy.xpath('//*[@id="login_left"]/div[2]/div/p[1]/span[2]').invoke('text').then((dot2) => {
      //     expect(dot2).equal(dot2)
      // })
      // cy.xpath("//button[2][@class='dot_btn me-2 hover']").trigger('mouseover')
      // cy.log('Verifying Mouse hover')
      // cy.wait(2000);
      // cy.xpath('//*[@id="__BVID__8"]/div/p/span[1]').invoke('text').then((dot1) => {
      //     expect(dot1).equal(dot1)
      // })
      // cy.xpath("//button[1][@class='dot_btn me-2']").trigger('mouseover')
      // cy.wait(2000);
      // cy.xpath('//*[@id="__BVID__10"]/div/p/span[1]').invoke('text').then((dot3) => {
      //     expect(dot3).equal(dot3)
      // })
      // cy.xpath("//button[3][@class='dot_btn']").trigger('mouseover')
      // cy.wait(2000);
      // cy.get('#app > div > div.col-lg-5.col-sm-5.p-0 > a').invoke('removeAttr', 'target').click({
      //     force: true
      // })
      // cy.wait(2000)
      // cy.go('back')
      // cy.wait(5000)
      // cy.log('Entering credentials of user who is not president')
      // cy.xpath("//input[@placeholder='Enter your Email']").type("theresa.wells@ghd.com")
      // cy.xpath(" //input[@placeholder='Enter Password']").type("8Jo$TOqX{enter}")
      // cy.xpath('//form//div[2]//p').invoke('text').then((error_text) => {
      //     cy.log("This is error message: " + error_text);
      //     expect('Username/Password Incorrect').equal(error_text)
      // })
      // cy.log('Verified error message upon giving invalid credentials')
      // cy.wait(2000);
      // cy.xpath("//input[@placeholder='Enter your Email']").type('{selectall}{backspace}')
      // cy.xpath("//input[@placeholder='Enter Password']").type('{selectall}{backspace}')
      // cy.wait(2000);
      // cy.log('Entering credentials of user who is not president')
      // cy.xpath("//input[@placeholder='Enter your Email']").type("ylvain.emeric@ghd.com")
      // cy.xpath(" //input[@placeholder='Enter Password']").type("y~pv7#QQ{enter}")
      // cy.xpath('//form//div[2]//p').invoke('text').then((error_text) => {
      //     cy.log("This is error message: " + error_text);
      //     expect('Username/Password Incorrect').equal(error_text)
      // })
      // cy.log('Verified error message upon giving invalid credentials')
      // cy.wait(2000);
      // cy.xpath("//input[@placeholder='Enter your Email']").type('{selectall}{backspace}')
      // cy.xpath("//input[@placeholder='Enter Password']").type('{selectall}{backspace}')
      // cy.wait(2000);
      // cy.log('Entering credentials of user who is not president')
      // cy.xpath("//input[@placeholder='Enter your Email']").type("arunika@mojro.com")
      // cy.xpath(" //input[@placeholder='Enter Password']").type("Itz5cd|${enter}")
      // cy.xpath('//form//div[2]//p').invoke('text').then((error_text) => {
      //     cy.log("This is error message: " + error_text);
      //     expect('Username/Password Incorrect').equal(error_text)
      // })
      // cy.log('Verified error message upon giving invalid credentials')
      // cy.wait(2000);
      // cy.xpath("//input[@placeholder='Enter your Email']").type('{selectall}{backspace}')
      // cy.xpath("//input[@placeholder='Enter Password']").type('{selectall}{backspace}')
      // cy.wait(2000);
      // cy.log('Entering credentials of user who is president')
      // cy.xpath("//input[@placeholder='Enter your Email']").type("larry.miller@comp2.com")
      // cy.xpath(" //input[@placeholder='Enter Password']").type("4>aY1zR>")
      // cy.wait(2000);
      // cy.log('Checking whether password is encripted or not')
      // cy.xpath('//div//span/img[@src="/img/hide_eye.666ad26e.svg"]').click({
      //     force: true
      // })
      // cy.wait(2000);
      // cy.xpath('//img[@src="/img/show_eye.3dfb398c.svg"]').click({
      //     force: true
      // })
      // cy.wait(2000);
      // cy.xpath('//button[@value="Login"]').click({
      //     force: true
      // })
    })
 })
  // })