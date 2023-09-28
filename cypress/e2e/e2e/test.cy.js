/// <reference types="cypress" />
describe('Authority_Creation', function () {

    before(() => {
        cy.session('mySession', () => {

            cy.visit('https://infraqa.px4app.com/index.php/auth/login?redirect=/index.php/', {
                onBeforeLoad: (abc) => {
                    abc.sessionStorage.clear()
                }

            })
        })



        // cy.visit('https://infraqa.px4app.com/index.php/auth/login?redirect=/index.php/', {
        //         onBeforeLoad: (abc) => {
        //             abc.sessionStorage.clear()
        //         }
        //         cy.get('#identity').click();
        //         cy.get('#identity').type('testing@gmail.com')
        //         cy.get('#password').type('vishal123');
        //         cy.get('form').submit();
        //     }
        // });
        cy.get('#identity').click();
        cy.get('#identity').type('testing@gmail.com')
        cy.get('#password').type('vishal123');
        cy.get('form').submit();
    });

    // BeforeEach(() => {
    //         Cypress.Cookies.preserveOnce('connect.sid')
    //     }

    // )
    //     afterEach(() => {
    //        //cy.saveLocalStorage();
    //    });
    var Authority_Number;

    it('New_Authority', function () {

        cy.visit('https://infraqa.px4app.com/index.php/auth/login?redirect=/index.php/');

        // cy.visit('https://infraqa.px4app.com/index.php/auth/login?redirect=/index.php/', {
        //     onBeforeLoad: (abc) => {
        //         abc.sessionStorage.clear()
        //     }
        // })


        cy.get('#identity').click();
        cy.get('#identity').type('testing@gmail.com');
        // cy.get('#identity').type('karthik_test1@quantana.in');
        cy.get('#password').type('vishal123');
        // cy.get('.btn').click();
        cy.get('form').submit();
        cy.saveLocalStorage();
        cy.screenshot;

        cy.get('.black-text > :nth-child(1) > :nth-child(2)').click();

        //cy.get('.nav-item:nth-child(3) > .nav-link').click();

        cy.get('.col-md-4 > .auth-green-btn').click();


        cy.get('#new_authority > div.col-md-12 > div:nth-child(1) > div:nth-child(2) > span > span.selection > span').type('Queen{enter}');
        //Select Jurisdiction

        cy.get(':nth-child(1) > :nth-child(3) > .select2 > .selection > .select2-selection').type('min{enter}');
        //Select Category

        cy.get('#new_authority > div.col-md-12 > div:nth-child(1) > div:nth-child(4) > span > span.selection > span').type('EPC{enter}');
        //Select Authority Type

        cy.get('#new_authority > div.col-md-12 > div:nth-child(4) > div:nth-child(2) > span > span.selection > span').type('New Stakeholder{enter}');
        //Select Management Grouping
        cy.get('#auth_number').type("EPC " + Math.floor(Math.random() * 100000));

        cy.get('#new_authority > div.col-md-12 > div:nth-child(4) > div:nth-child(4) > span > span.selection > span').type('check{enter}');
        //Select project

        cy.get('#lodgement_date0').type('1-3-15');
        //Enter lodged date

        cy.get('#years_applied0').type('8');
        //Enter Years Applied


        cy.get('#grant_date0').type('2-3-15');
        //Enter Granted Date


        cy.get('#years_granted0').click();
        //Enter Granted Years 
        cy.wait(1000);

        cy.get('#holder_select > span > span.selection > span').type('FINDEX PTY LTD{enter}');

        cy.get('#percentage_select > div').type('100');
        //Enter Percentage

        //cy.get('#submit_button').click();
        cy.xpath('//*[@id="submit_button"]').click();
        //Click on "Create Authority"
        cy.wait(1000);
        cy.get('body > div.swal2-container.swal2-center.swal2-shown > div > div.swal2-actions > button.swal2-confirm.px4-popup-save-btn').click();

        //cy.get('.swal2-confirm').click();
        //Click on "Authority Number Confirm Button on the Swal"
        cy.wait(2000);
        cy.xpath('//select[@class="swal2-select"]').select('Expedited procedure');


        // cy.xpath('//body/div[7]/div/div[2]').click({
        //     force: true
        // })

        // cy.xpath('//body/div[7]/div/div[2]/select/option[4]').click();

        cy.wait(3000);
        cy.get('.swal2-confirm').click();
        cy.wait(3000);
        //Click on "Native Title Process" "Save" button on the Swal
        cy.get('#swal2-content > button.btn.px4-popup-cancel-btn.btn-md.swalbtn').contains('NO').click();
        cy.wait(3000);
        //Click on "Is there a registered native title claimant/s for NTPC?" button (NO)
        cy.wait(3000);
        cy.get('#swal2-content > button.btn.px4-popup-cancel-btn.btn-md.swalbtn').contains('NO').click();
        cy.wait(3000);
        //Click on "Is this overlapping tenure to an existing ATP and/or PL?" button (NO)
        cy.get('.swal2-select').select('Submit annually');
        cy.wait(3000);
        //Click on "What is the Safety & Health Census Form frequency?" button
        //cy.get('body > div.swal2-container.swal2-center.swal2-shown > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click();
        cy.get('.swal2-confirm').click();
        cy.wait(3000);

        cy.get('#input-field1').type('2-3-15');
        cy.wait(3000);
        cy.get('.swal2-confirm').click();
        cy.wait(3000);

        cy.get('#swal2-content > button.btn.px4-popup-cancel-btn.btn-md.swalbtn').contains('NO').click();
        //Click on "Are actions to be created from a specific date for this authority? " No
        cy.wait(30000);

        cy.get('.swal2-confirm').click();
        cy.wait(2000);

        // cy.get('.swal2-confirm').contains('OK').click();


        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })

    it('pending_Actions_Completion', function () {

        cy.visit('https://infraqa.px4app.com/index.php/auth/login?redirect=/index.php/');
        cy.xpath('//h3[@class="px4-title m-0"]').invoke('text').then((AuthorityNumber) => {
            this.Authority_Number = AuthorityNumber.trim();
            cy.log("Authority Number is : " + this.Authority_Number);
            //expect(username).equal(username)
        })

        cy.wait(10000);
        cy.xpath('(//a/i[@class="material-icons right blue"])[2]').click();
        cy.log('This is to test the log');
        cy.wait(3000);
        cy.xpath('(//i[contains(text(),"play_arrow")]/following::button)[1]').click();
        cy.wait(3000);
        cy.xpath('//button[@id="complete_action"]').click();
        cy.wait(3000);
        cy.xpath('//button[@type="submit" and @class="px4-save-btn confirm-complete"]').click();
        cy.wait(3000);
        cy.xpath('//select[@class="swal2-select" and @style="display: flex;"]').select('Yes');
        cy.wait(1000);
        cy.xpath('//button[@type="button" and @class="swal2-confirm position-set-save-native-swal swal2-styled"]').click();
        cy.wait(1000);
        cy.xpath('//button[@type="button" and @class="swal2-confirm px4-popup-save-btn position-set-save"]').click();
        cy.wait(1000);
        cy.xpath('//input[@id="input-field1"]').type('5');
        cy.log('This to test');
        cy.wait(10000);
        cy.xpath('//button[@type="button" and @class="swal2-confirm px4-popup-save-btn position-set-save"]').click();
        cy.wait(20000);

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })

    it('creating_Manual_Actions', function () {
        cy.wait(50000);
        cy.visit('https://infraqa.px4app.com/index.php/auth/login?redirect=/index.php/');
        cy.get('#identity').click();
        cy.get('#identity').type('testing@gmail.com');
        // cy.get('#identity').type('karthik_test1@quantana.in');
        cy.get('#password').type('vishal123');
        // cy.get('.btn').click();
        cy.get('form').submit();

        cy.xpath('//a[@class="nav-link" and @href="https://infraqa.px4app.com/index.php/Actions/actions_table"]').click({
            force: true
        })
        cy.log('This to test log for Manual action');
        cy.wait(10000);
        cy.xpath('//button[@class="auth-green-btn right flex"]').click();
        cy.xpath('//input[@class="select2-search__field" and @type="search"]').click();
        cy.xpath('//input[@class="select2-search__field" and @type="search"]').type(this.Authority_Number);
        cy.xpath('//*[@id="select2-auth-result-hde9-8604~1" and @class="select2-results__option select2-results__option--highlighted"]').click();
        cy.xpath('//input[@type="text" and @class="form-control px4-input-text" and @id="action_name"]').type('Test Manual Action ');
        cy.xpath('//span[@class="select2-selection__rendered" and @id="select2-action_type-container"]').select('Application');
        cy.xpath('//input[@type="text" and @id="notification_date"]').type('09-05-2017');
        cy.xpath('//input[@type="text" and @id="reminder_date"]').type('09-05-2017');
        cy.xpath('//input[@type="text" and @id="original_due_date"]').type('09-05-2017');
        cy.xpath('//button[@type="submit" and @class="px4-save-btn"]').click();
        cy.wait(2000);

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

})