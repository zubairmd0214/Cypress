/// <reference types="cypress" />

// const { delay } = require("cypress/types/bluebird")

describe('My First Test suite', function () {
    //onbeforeunload = function (e) {
    //console.log('app window.onbeforeunload')
    //cy.wait(1000);
    //}
    /////////////////////////////////////////


    context('iphone-X resolution', () => {
        beforeEach(() => {
            // run these tests as if in a mobile browser
            // and ensure our responsive UI is correct
            cy.viewport('iphone-x')
        })




        //////////////////////////////////////


        it('Verify title of the page', function () {
            //expect(true).to.equal(true)
            //cy.visit('https://devprominutes.quantana.com.au/')
            cy.visit('https://devkagami.quantana.com.au/', {
                onBeforeLoad: (abc) => {
                    abc.sessionStorage.clear()
                }
            })
            cy.wait(10000);
            cy.xpath
            cy.title().should('eq', 'Login | K4Coach') //This is to verify the title of the app
            cy.log('Verifying title Login | K4Coach')
            cy.get('div[class="text-center col"]').find("img").should('be.visible');
            cy.log('Verifying title Kagami Diagnostics Logo')
            //cy.xpath("//button[2][@class='dot_btn me-2 hover']").trigger('mouseover')
            cy.log('Verifying Mouse hover')
            //cy.get('header').scrollIntoView()
            cy.wait(10000);
            //cy.xpath("//button[1][@class='dot_btn me-2']").trigger('mouseover')

            cy.wait(10000);

            //cy.xpath("//button[3][@class='dot_btn']").trigger('mouseover')
            cy.wait(10000);
            cy.xpath("//img[@src='/img/logo.42ab3684.png']").click({
                force: true
            })
            cy.log('Verifying upon clicking in empty space redirects to K4COach official website')

            //cy.get('div[class="text-center col"]').find('img[class="ui avatar image"]');
            // cy.get('.text-center col').should('have.css', 'background-image');



            // cy.get(':nth-child(1) > .form-control').type("ramesh@quantana.in") //Enter User Email prominutes
            //cy.get('.input-group > .form-control').type("pro123{enter}") //Enter password and then press the enter key
            // cy.get( '#form_div > div > form > div:nth-child(1) > input').type("kumar.parakala@ghd.com")
            cy.log('Entering email id')
            cy.xpath("//input[@placeholder='Enter your Email']").type("kumar.parakala@ghd.com")
            
            cy.log('Entering invalid password')
            cy.log('Verify error message upon giving invalid credentials')
            cy.xpath(" //input[@placeholder='Enter Password']").type(">3B2eQm{enter}")
            
            cy.wait(10000);
            // cy.get("//input[@type='email']").clear()
            //cy.get("//input[@class='form-control border-right-0 password_input']").clear()
            cy.log('Clearing the in valid password')
            cy.focused().clear()
            
            cy.wait(10000);
            //cy.xpath("//input[@placeholder='Enter your Email']").type("kumar.parakala@ghd.com")
            //cy.log('Entering email id')
            //cy.get('#form_div > div > form > div.form-group.mt-3 > div > input').type(">3B2eQm3{enter}")
            cy.log('Entering valid Password')
            cy.xpath(" //input[@placeholder='Enter Password']").type(">3B2eQm3")
            
            cy.wait(10000);
            cy.log('Checking whether password is encripted or not')
            cy.xpath('//img[@src="/img/hide_eye.666ad26e.svg"]').click({ force: true})
                      
            cy.wait(10000);
            cy.xpath('//img[@src="/img/show_eye.3dfb398c.svg"]').click({force: true})

            cy.wait(10000);
            cy.xpath('//button[@value="Login"]').click({force: true})





            cy.wait(10000)

            //div//span/img[@src="/img/hide_eye.666ad26e.svg"]
            cy.wait(10000);
            cy.title().should('eq', 'Reports | K4Coach') // Verify the title after login to Reports page
            cy.xpath('//button[@class="mt-3 btn-brown btn-md rounded_30 p-10 border-0 px-5 py-3 cursor-pointer"]').click({
                force: true
            })
            cy.wait(10000)
            cy.title().should('eq', 'Dashboard | K4Coach') // Verify the title after login to Dashboard page
            cy.xpath("//div[@class='row mt-3 d-flex flex-row flex-nowrap overflow-auto']").scrollTo('right')
            cy.wait(10000)
            cy.xpath("//div[@class='row mt-3 d-flex flex-row flex-nowrap overflow-auto']").scrollTo('left')

            cy.wait(10000)




            //cy.contains('Meet Now').click({force: true}) //Click on meet now button

            //cy.contains('Kagami Diagnostics').click({force: true})

            //cy.get('#menu_header > div > img').click({force: true})
            cy.xpath('//img[@src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAViSURBVHgBlVZdaFxFFD4zd7ublkLXhz53n6zgg1tRLBVtNrUPKpa2ULF9SQrSHyk0qyCIwu5aUCiSpEH0RUmKP2lRTNoo5CXcQqAoIiSggiB298EHX2RLkbbZnTmen5m7aQhNMsneuTP33vOd7ztnzoz57uKLWNhawPzWAlAP+b4+k99WwAL3Ok99Hz3rw3xffmn7ztN7Dhw5O+i63UnvPdAPEb3he/RIYydz9Mdjw7132XuNHCCEZgzyvaGZ2PM1XhBbna4/cvDYG2Xf8ROGXrfW0CNLYHwF8NbTuxYN8tgYhw6tsWIJDYz/dvM6AYotNp/ZjxioN4YdaBrnBo6//ReNbGpt9IE7xz0CTVqUeXIcxenEWmFOmJd/XZgZ5m9yGS9jlKN8FPHYD9+667sDQ+/8zQZTY23RIevBn5MxY8kwkHQsJ31MRpIkMd459ARoARY9dIYjk5y8oh+LmagweS2ziYfD5xv/QD5JUuf8LnbCsn5gVRR61fOHxMRaK15yLOkxPXC3OnC/snhjpp0Bir78GipXsyJ26NzJc+N3WiZfSMlgyTIGakgscKIYZG8JSIyxeuImxZJMtGziBxbne2AA6keWGUaVlKHzrvHosx9MJnbbqE1smaSkJLEiBwvFIDzO5mycIyesvUWXyo9zV5qwqmnShEvMG5Ku8eSBkfqrr79XI+ZDnrJNEiCozW9JANRjldUzWeSsvJ14X1mYm2zBGi23csAMac2M7T36cf3EmQs1WlN1ShqOmhG9JD05uMTEB/1tEvShdQfJbRK6ks5+viaYApqwFAx76a/tO/ZZ9cTpC+cJqGYFh2XilCLvJZut8PM20QgQNatZxAEcmv/2k0V4SMsWPhFZwu6dk8fP1g+TkVEj6wkgghqLYcGGcPuwqIUbs4fq3NXxa7BOy4UsaTp3/8jkz+USeTmBwWqsOZoUCbNhN9gLAfW9qDa+/3psDDbQOIbNZQeVq7+XuSJM07gI0Ct40SLXBQUiablGqrLM8v3rX31Uhw02a+4S2B9lroApGS5pSFHrj/axxEkVsSaR9Od7+jVmvrxYh020XGeLK95rt9veaP4pOxEVtd5BAI8OaAnjntZ+ETbZbC6XTA8+0ySGWCHItoJJEKXM4QpxBUPRpOR46A6/cPRMDTbRWJtS3kJ6en+TthfTT3NtdZ8BMJQDBvCaNLoowphii6Y+cOjUhkEtaHksJbnC9FsH/m3RgqvGcq4rNOgswezJKZst6sZKj+v9h04NbgwQteDSfznZgtOzV8YmyV41voC8d/sAID2Pw44epaUR7QyTz798cl1QzfMYJ4P7b35zanR2amSMzDdCDA1mxrl86SpFOTFgBhpYj+47OFReh2EQMBYnC8O//HCuRgu5TjXmkjLCcCbRXu4lYz1kTPV88whFON3b/1rpYQzDftjLSEKtL82/OTw7dalKpi9ryUETGBmRUUA1awVMmdIrbgcdAdI9Ayd2rQ0YYxWu8VSTs3bkz5/eHbzXSapkc1HYaWaKlKCgoAeaTFoxQbOlHPob5TWYWj1M6HFoZUM54ZixidrO0rL7r0LGm6inIz36BQCfFQIPgTkfLTipSsZ3p8v9h4urAE3c6x9oRk81O2jbTSc+3F10YCpksBWYxHhK1upPFBD6mmjCtgzdJF0Jah8AMauLtiAXt9pcOjW6G3C5w0zbWVb2MjRmqWR1kD4+L7tlGM0AjYYvVJaw4OXz3gmOQHcV6NQ2/ekTVHOhn1i0MbKDKG0mKYYxBsY8P/T4068IqFX6sssFoBXAAS3suqUt27elC1881yJD1SyGomgPBEOBz+otLyM+6hscfuypl2r/AyCGBTyjyF1TAAAAAElFTkSuQmCC"]').click({
                force: true})
            cy.wait(10000);
            //cy.get('#sidebar > ul > a:nth-child(2) > li > span.align-middle').click({force: true})
            cy.xpath('//span[@class="align-middle font-18 brown fw-bold"]').click({force: true})
            cy.wait(10000);






            ////////////////////////////////
            cy.get('[data-text="Add Agenda here"]').click().type('Test the Agenda Input field')
            cy.log(' Enter agenda description')
            cy.get('[data-text="Enter Instant Meeting Description here"]').click({
                force: true
            }).type('Test Minute Input field') //Enter Minute description
            cy.get('.multiselect__single').type('{enter}') // select type action
            cy.get('.mt-4 > .multiselect > .multiselect__tags').click().type('{downarrow}{enter}', {
                delay: 1000
            }); //Select group from dropdown
            cy.wait(1000);
            cy.get('.col-4 > .btn').click({
                force: true
            }, {
                delay: 100
            }) //click on close meeting button
            cy.get('.row > :nth-child(1) > .btn').click(); //close and publish meeting
            cy.wait(1000);
            cy.get('#menu_header > div > .w-40').click({
                force: true
            }) //click on Hamburger menu button
            cy.get('[href="/meetings"] > .list-group-item > :nth-child(1) > .w-30').click({
                force: true
            }) // Click on "Meetings" button
            cy.xpath()
        })

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
})