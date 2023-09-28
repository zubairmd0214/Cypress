/// <reference types="cypress" />
describe('Authority_Creation', function () {

//     beforeEach(() => {
//        // cy.restoreLocalStorage();
//        // cy.saveLocalStorage();
//        cy.viewport(1835, 960)
//    });
//     afterEach(() => {
//        //cy.saveLocalStorage();
//    });
beforeEach(() => {                   
        cy.session('mySession', () => {     
        cy.visit('https://infraqa.px4app.com/index.php/auth/login?redirect=/index.php/');
        cy.get('#identity').click();
        cy.get('#identity').type('testing@gmail.com')
        cy.get('#password').type('vishal123');
        cy.get('form').submit();
                // cy.url().should('contain', '/login-successful')
            //   cy.visit('https://infraqa.px4app.com/index.php/auth/login?redirect=/index.php/', {
            //     onBeforeLoad: (window) => {
            //       cy.login(userName, password)  // sets a cookie
            //     //   cy.visit('https://infraqa.px4app.com/index.php/auth/login?redirect=/index.php/');
            //       cy.get('#identity').click();
            //       cy.get('#identity').type('testing@gmail.com');
            //       cy.get('#password').type('vishal123');
            //       cy.get('form').submit();
            //     }
            //   })
    })
  })
      
 // var Authority_Number;
  
   it('New_Authority', function () {

       
    //    cy.saveLocalStorage();
    //cy.visit('https://infraqa.px4app.com/index.php/auth/login?redirect=/index.php/');      
       cy.get('.black-text > :nth-child(1) > :nth-child(2)').click()

       cy.wait(30000)
       
      cy.xpath('a[@href="https://infraqa.px4app.com/index.php/Authority/authorities_table"]').click()
      
      cy.wait(30000)

    //    cy.get('.col-md-4 > .auth-green-btn').click()

       Cypress.on('uncaught:exception', (err, runnable) => {
           // returning false here prevents Cypress from
           // failing the test
           return false
       })

   })

   it('New_Authority1', function () {
    // cy.visit('https://infraqa.px4app.com/index.php/auth/login?redirect=/index.php/');
    cy.xpath('//a[@class="nav-link" and @href="https://infraqa.px4app.com/index.php/Actions/actions_table"]').click({
        force: true
    })
    cy.wait(30000)

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
   })

})


