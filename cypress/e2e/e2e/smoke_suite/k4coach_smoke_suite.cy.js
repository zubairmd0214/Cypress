/// <reference types="cypress" />

// const { delay } = require("cypress/types/bluebird")

describe('smoke test suite', function (done) {

    // beforeEach(function () {
    //     cy.getCookies().then(cookies => {
    //         const namesOfCookies = cookies.map(c => c.name)
    //         Cypress.Cookies.preserveOnce(...namesOfCookies)
    //         cy.reload()
    //     })
    //     cy.on('uncaught:exception', (err) => {
    //         return false;
    //     });

    // })

    it('verify login page', function () {
        cy.visit('https://devkagami.quantana.com.au/', {
            onBeforeLoad: (abc) => {
                abc.sessionStorage.clear()
            }
        })

        cy.title().should('eq', 'Login | K4Coach') //This is to verify the title of the app
        cy.log('Verifying title Login | K4Coach')
        cy.get('div[class="text-center col"]').find("img").should('be.visible');
        cy.log('Verifying title Kagami Diagnostics Logo')
        cy.xpath("//button[2][@class='dot_btn me-2 hover']").trigger('mouseover')
        cy.log('Verifying Mouse hover')
        cy.wait(2000);
        cy.xpath("//button[1][@class='dot_btn me-2']").trigger('mouseover')
        cy.wait(2000);
        cy.xpath("//button[3][@class='dot_btn']").trigger('mouseover')
        cy.wait(2000);
        // cy.xpath("//img[@src='/img/logo.42ab3684.png']").click({
        //     force: true
        // })
        // cy.log('Verifying upon clicking in empty space redirects to K4COach official website')
        cy.log('Entering email id')
        cy.xpath("//input[@placeholder='Enter your Email']").type("kumar.parakala@ghd.com")
        cy.log('Entering invalid password')
        cy.log('Verify error message upon giving in valid credentials')
        cy.screenshot()
        cy.xpath(" //input[@placeholder='Enter Password']").type(">3B2eQm{enter}")
        cy.wait(2000);
        cy.log('Clearing the invalid password')
        cy.focused().clear()

        cy.wait(2000);
        cy.log('Entering Password')
        cy.xpath(" //input[@placeholder='Enter Password']").type(">3B2eQm3")

        cy.wait(2000);
        cy.log('Checking whether password is encripted or not')
        cy.xpath('//div//span/img[@src="/img/hide_eye.666ad26e.svg"]').click({
            force: true
        })

        cy.wait(2000);
        cy.xpath('//img[@src="/img/show_eye.3dfb398c.svg"]').click({
            force: true
        })
        cy.wait(2000);
        cy.xpath('//button[@value="Login"]').click({
            force: true
        })

    })
    it('verify the dashboard page', function () {
        cy.title().should('eq', 'Reports | K4Coach')
        cy.log('verifying the title of the dashboard page')
        cy.xpath('//button[@class="mt-3 btn-brown btn-md rounded_30 p-10 border-0 px-5 py-3 cursor-pointer"]').click({
            force: true
        })
        cy.wait(2000);
        cy.title().should('eq', 'Dashboard | K4Coach') // Verify the title after login to Dashboard page
        cy.xpath("//div[@class='row mt-3 d-flex flex-row flex-nowrap overflow-auto']").scrollTo('right')
        cy.wait(2000);
        cy.xpath("//div[@class='row mt-3 d-flex flex-row flex-nowrap overflow-auto']").scrollTo('left')
        cy.wait(2000);
        cy.get('#menu_header > div > img').click({
            force: true
        })
        cy.wait(2000);
        cy.get('#sidebar > ul > a:nth-child(2) > li > span.align-middle').click({
            force: true
        })
        cy.wait(2000);
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

})