import "cypress-v10-preserve-cookie"
/// <reference types="cypress" />
describe('PX4_Smoke_Suite', function () {

    const username = "testing@gmail.com";
    const password = "vishal123";
    var Authority_Number;
    var SecurityAuthentication;
    var Stakeholder_name;
    var abc = false;
    var captcha;
    var el;

    before(() => {
        cy.visit('https://infraqa.px4app.com/index.php/auth/login?redirect=/index.php/');
        cy.get('#identity').should('be.visible').click({
            force: true
        });
        cy.get('#identity').should('be.visible').type(username);
        cy.get('#password').should('be.visible').type(password);
        cy.get('form').should('be.visible').submit();



        cy.get('.login-body').then(($body) => {
            // synchronously ask for the body's text
            // and do something based on whether it includes
            // another string
            if ($body.text().includes('Security Code')) {
                // yup found it
                cy.xpath('//input[@id="VerificationCode"]').should('be.visible').type('147852');
                cy.xpath('//input[@type="submit"]').should('be.visible').click({
                    force: true
                });
                // cy.wait(10000)
                //   cy.get(...).should(...)
            } else {
                // nope not here
                //   cy.get(...).should(...)
                cy.log('Do nothing')
            }
        })


        // cy.get('.login-body').then(($body1) => {
        //         // synchronously ask for the body's text
        //         // and do something based on whether it includes
        //         // another string
        //         if ($body1.text().includes('company_head')) {
        //           // yup found it
        //           cy.get(':nth-child(1) > :nth-child(2) > #subscription_and_tc_check > .px4-primary-btn').click({force: true});
        //             // cy.wait(10000)
        //         //   cy.get(...).should(...)
        //         } else {
        //           // nope not here
        //         //   cy.get(...).should(...)
        //             cy.log('Do nothing')
        //         }
        //         })

        cy.get(':nth-child(1) > :nth-child(2) > #subscription_and_tc_check > .px4-primary-btn').click({
            force: true
        });

    })

    beforeEach(() => {
        cy.preserveCookieOnce("ci_session");

    });


    it('create_stakeholder', function () {

        //click on stake holders tab
        cy.xpath('(//a[@class="nav-link"])[7]').click()

        // assert page title
        cy.title().should('eq', 'stakeholders')

        //click add stakeholder button
        cy.xpath('//button[@class="auth-green-btn flex right clickable"]').click()

        // assert page title
        cy.title().should('eq', 'Create Stakeholder')

        //enter stakeholder name
        cy.xpath('//input[@id="holder_name"]').should('be.visible').type("Stakeholder" + Math.floor(Math.random() * 100000))

        // select authority holder
        cy.xpath('(//input[@id="roles"])[1]').click()

        // select management grouping
        cy.xpath('(//input[@id="roles"])[12]').click()

        //click on save
        cy.xpath('//button[@class="px4-save-btn"]').click({
            force: true
        })

        // assert page title
        cy.title().should('eq', 'Stakeholder Console')


        //assign stakeholder name in a variable
        cy.xpath('//h3[@class="px4-title m-0 p-30"]').invoke('text').then((Stakeholder) => {
            this.Stakeholder_name = Stakeholder.trim();
            cy.log("Stakeholder name is : " + this.Stakeholder_name);
            //expect(username).equal(username)
        })

    })

    it('New_Authority', function () {

        // cy.get('.black-text > :nth-child(1) > :nth-child(2)').click({force: true});

        //cy.get('.nav-item:nth-child(3) > .nav-link').click({force: true});

        // click on authorities tab
        cy.xpath('(//a[@class="nav-link"])[3]').click()
        cy.wait(1000)

        // assert page title
        cy.title().should('eq', 'PX4')

        //click on add authority
        cy.xpath('//button[@class="auth-green-btn flex right clickable"]').should('be.visible').click({
            force: true
        })

        //Select Jurisdiction
        // cy.get('#new_authority > div.col-md-12 > div:nth-child(1) > div:nth-child(2) > span > span.selection > span').should('be.visible').type('Queen{enter}');
        cy.xpath("(//span[@class='select2-selection select2-selection--single'])[1]").should('be.visible').click()
        cy.xpath("//input[@class='select2-search__field']").click().type('Queen{enter}')

        //Select Category
        // cy.get(':nth-child(1) > :nth-child(3) > .select2 > .selection > .select2-selection').should('be.visible').type('min{enter}');
        cy.xpath("(//span[@class='select2-selection select2-selection--single'])[2]").should('be.visible').click()
        cy.xpath("//input[@class='select2-search__field']").click().type('min{enter}');

        //Select Authority Type
        // cy.get('#new_authority > div.col-md-12 > div:nth-child(1) > div:nth-child(4) > span > span.selection > span').should('be.visible').type('EPC{enter}');
        cy.xpath("(//span[@class='select2-selection select2-selection--single'])[3]").should('be.visible').click()
        cy.xpath("//input[@class='select2-search__field']").click().type('EPC{enter}')


        //Select Management Grouping
        cy.xpath('(//span[@class="select2-selection select2-selection--single"])[4]').should('be.visible').click()
        cy.xpath('//input[@class="select2-search__field"]').click().type(this.Stakeholder_name).type('{enter}');


        //   cy.xpath('//li[contains(text(),"+ Add Stakeholder")]').click()  



        // enter authority number
        cy.xpath('//input[@class="form-control px4-input-text auth_number"]').click().type("EPC " + Math.floor(Math.random() * 100000)).type('{Enter}')

        //Select project
        // cy.get('#new_authority > div.col-md-12 > div:nth-child(4) > div:nth-child(4) > span > span.selection > span').should('be.visible').type('check{enter}');

        //Enter lodged date
        cy.xpath('//input[@class="form-control px4-datepicker px4-input-text attribute_class hasDatepicker"]').should('be.visible').click().type('1-3-15');

        //Enter Years Applied
        cy.xpath('//input[@class="form-control px4-input-text attribute_class years_applied"]').should('be.visible').click().type('8');

        //Enter Granted Date
        cy.xpath('//input[@class="form-control px4-datepicker px4-input-text attribute_class grant_date hasDatepicker"]').should('be.visible').click().type('2-3-15');

        //Enter Granted Years 
        cy.xpath('//input[@class="form-control px4-input-text attribute_class row0 years_granted_num"]').should('be.visible').click().type('8')

        // cy.wait(1000);

        // select authority holder
        cy.xpath('(//span[@class="select2-selection select2-selection--single"])[6]').click()
        cy.xpath('//input[@class="select2-search__field"]').should('be.visible').click().type(this.Stakeholder_name).type('{Enter}')

        //Enter Percentage
        cy.xpath('//input[@class="form-control px4-input-text percent"]').should('be.visible').click().type('100');
        

        //Click on "Create Authority"
        //cy.get('#submit_button').click({force: true});
        cy.xpath('//*[@id="submit_button"]').should('be.visible').click({
            force: true
        });
        
        cy.wait(1000);
        // Confirm Authorty number, Click on Save button
        //cy.get('body > div.swal2-container.swal2-center.swal2-shown > div > div.swal2-actions > button.swal2-confirm.px4-popup-save-btn').should('be.visible').click({force: true});
        cy.xpath('//button[contains(text(),"SAVE")]').should('be.visible').click({
            force: true
        })
        //cy.get('.swal2-confirm').click({force: true});
        
        cy.wait(2000);

        //  Which native title proces,If applicable?-->Expedited procedure
        cy.xpath('//select[@class="swal2-select"]').select('Expedited procedure');
        cy.wait(3000);

        //click on save button
        cy.xpath('//button[@class="swal2-confirm position-set-save-native-swal swal2-styled"]').should('be.visible').click({
            force: true
        });
        cy.wait(3000);

        //Are NTPC payments applicable for registered claimants?--> NO
        cy.xpath('//button[@class="btn px4-popup-cancel-btn btn-md swalbtn"]').should('be.visible').click({
            force: true
        });


        
        cy.wait(3000);
        //Click on "Is this overlapping tenure to an existing ATP and/or PL?" button (NO)

        cy.xpath("//button[@class='btn px4-popup-cancel-btn btn-md swalbtn']").should('be.visible').click()

        cy.wait(3000);
        //Click on "What is the Safety & Health Census Form frequency?" button
        cy.xpath('//select[@class="swal2-select"]').should('be.visible').select('Submit annually');

        cy.wait(3000);
        
        //click on save button
        //cy.get('body > div.swal2-container.swal2-center.swal2-shown > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click({force: true});
        cy.xpath('//button[@class="swal2-confirm position-set-save-native-swal swal2-styled"]').should('be.visible').click({
            force: true
        });
        cy.wait(3000);

        //site operation commencement date
        cy.xpath('//input[@id="input-field1"]').should('be.visible').type('2-3-15');
        
        
        cy.wait(3000);


        //click on save button
        cy.xpath('//button[@class="swal2-confirm px4-popup-save-btn position-set-save"]').should('be.visible').click({
            force: true
        });


        cy.wait(3000);

        //Click on "Are actions to be created from a specific date for this authority? " No
         cy.xpath('//button[@class="btn px4-popup-cancel-btn btn-md swalbtn"]').should('be.visible').click({
            force: true
        });
        cy.wait(30000);

        // click on OK button
        cy.xpath('//button[@class="swal2-confirm btn btn-success width140px"]').should('be.visible').click({
            force: true
        });



        cy.intercept('https://api-private.atlassian.com/gasv3/api/v1/batch').as('loadbatch')

        // once a request to get settings responds, 'cy.wait' will resolve
        cy.wait('@loadbatch')
        cy.wait(30000);


        // cy.intercept('https://infraqa.px4app.com/index.php/API_Process/update_next_step/1763379/1763381').as('load')

        // // once a request to get settings responds, 'cy.wait' will resolve
        // cy.wait('@load')   

        // assert page title
        cy.title().should('eq', 'Authority Console')

    })

    it('pending_Actions_Completion', function () {


        cy.xpath('//h3[@class="px4-title m-0"]').invoke('text').then((AuthorityNumber) => {
            this.Authority_Number = AuthorityNumber.trim();
            cy.log("Authority Number is : " + this.Authority_Number);
            //expect(username).equal(username)
        })

        cy.wait(10000);
        cy.xpath('(//a/i[@class="material-icons right blue"])[2]').should('be.visible').click({
            force: true
        });
        cy.log('This is to test the log');
        // cy.wait(3000);
        cy.xpath('(//i[contains(text(),"play_arrow")]/following::button)[1]').should('be.visible').click({
            force: true
        });
        // cy.wait(3000);
        cy.xpath('//button[@id="complete_action"]').should('be.visible').click({
            force: true
        });
        // cy.wait(3000);
        cy.xpath('//button[@type="submit" and @class="px4-save-btn confirm-complete"]').should('be.visible').click({
            force: true
        });
        // cy.wait(30000);
        cy.xpath('//select[@class="swal2-select" and @style="display: flex;"]').should('be.visible').select('Yes');
        // cy.wait(1000);
        cy.xpath('//button[@type="button" and @class="swal2-confirm position-set-save-native-swal swal2-styled"]').should('be.visible').click({
            force: true
        });
        // cy.wait(1000);
        cy.xpath('//button[@type="button" and @class="swal2-confirm px4-popup-save-btn position-set-save"]').should('be.visible').click({
            force: true
        });
        // cy.wait(1000);
        cy.xpath('//input[@id="input-field1"]').should('be.visible').type('5');
        cy.log('This to test');
        // cy.wait(10000);
        cy.xpath('//button[@type="button" and @class="swal2-confirm px4-popup-save-btn position-set-save"]').should('be.visible').click({
            force: true
        });
        // cy.wait(20000);          

    })

    it('creating_Manual_Actions', function () {
        cy.wait(30000);
        cy.xpath('//a[@class="nav-link" and @href="https://infraqa.px4app.com/index.php/Actions/actions_table"]').click({
            force: true
        })
        cy.log('This to test log for Manual action');
        cy.wait(10000);
        cy.xpath('//button[@class="auth-green-btn right flex"]').should('be.visible').click({
            force: true
        });
        cy.xpath('//input[@class="select2-search__field" and @type="search"]').should('be.visible').click({
            force: true
        });
        cy.xpath('//input[@class="select2-search__field" and @type="search"]').should('be.visible').type(this.Authority_Number).type('{enter}');

        // cy.xpath('//*[@id="select2-auth-result-hde9-8604~1" and @class="select2-results__option select2-results__option--highlighted"]').click({force: true});
        cy.xpath('//input[@id="action_name"]').should('be.visible').should('be.visible').type('Test Manual Action');
        cy.xpath('//span[@id="select2-action_type-container"]').should('be.visible').type('Application{enter}');
        cy.xpath('//input[@id="notification_date"]').should('be.visible').type('09-05-2017');
        cy.xpath('//input[@id="reminder_date"]').should('be.visible').type('09-05-2017');
        cy.xpath('//input[@id="original_due_date"]').should('be.visible').type('09-05-2017');
        cy.xpath('//button[@class="px4-save-btn"]').should('be.visible').click({
            force: true
        });
        cy.wait(2000);

    })

    it('creating_project', function () {
        // cy.wait(30000);        
        cy.xpath('//a[@href="https://infraqa.px4app.com/index.php/Projects/"]').click({
            force: true
        })
        cy.log('creating project');
        cy.wait(10000);
        cy.xpath('//button[@class="auth-green-btn flex right"]').should('be.visible').click({
            force: true
        });

        // selecting jurisdiction
        // cy.xpath('//span[contains(@title,"Queensland")]').should('be.visible').type('Queensland{enter}');
        cy.xpath('(//span[@class="select2-selection__rendered"])[1]').should('be.visible').type('Queensland{enter}');
        // select managemet grouping
        // cy.xpath('//span[contains(@title,"Select")]').should('be.visible').type('New Stakeholder{enter}');
        cy.xpath('(//span[@class="select2-selection__rendered"])[2]').click()
        cy.xpath('//input[@class="select2-search__field"]').click().type(this.Stakeholder_name).type('{enter}');


        //type project name
        //cy.xpath('//input[@name="project_name"]').should('be.visible').type('Test Project{enter}');
        cy.xpath('//input[@name="project_name"]').should('be.visible').type("Test Project" + Math.floor(Math.random() * 100000));
        //clicking on save button
        cy.xpath('//button[@class="px4-save-btn"]').should('be.visible').click({
            force: true
        });

        // cy.intercept('https://infraqa.px4app.com/index.php/Projects/projects_console/*').as('loadprojectconsole')

        // once a request to get settings responds, 'cy.wait' will resolve
        // cy.wait('@loadprojectconsole')
        // cy.scrollTo('bottom')
         cy.wait(30000);  

    })


    it('creating_Agreement', function () {
        // cy.wait(30000);        
        cy.xpath('//a[@href="https://infraqa.px4app.com/index.php/Agreement/agreement_list"]').click({
            force: true
        })
        cy.log('creating an agreement');
        cy.wait(10000);     
        //clicking on add agreement button 
        cy.xpath('//button[@class="auth-green-btn right flex"]').should('be.visible').click({
            force: true
        });


        // wait till create agreements page load        
        // cy.xpath('https://infraqa.px4app.com/index.php/Agreement/create_agreement/*').as('loadCreateAgreement')
        // cy.wait('@loadCreateAgreement')


        // selecting agreement category
        // cy.xpath('//select[@id="agreement_category"]')
        cy.xpath('(//span[@class="select2-selection__rendered"])[1]').should('be.visible').type('Commercial{Enter}');
        // cy.xpath('//select[@id="agreement_category"]').type('Commercial');

        // select agreement type
        cy.xpath('(//span[@class="select2-selection__rendered"])[2]').should('be.visible').type('General Commercial Agreement{Enter}');
        cy.wait(1000)
        //type management grouping
        cy.xpath('(//span[@class="select2-selection__rendered"])[3]').should('be.visible').click({force:true})
        cy.xpath('//input[@type="search"]').type(this.Stakeholder_name).type('{enter}')

        // stakeholder (party)
      cy.xpath('(//span[@class="select2-selection__rendered"])[6]').should('be.visible').click({force:true})
      cy.xpath('//input[@class="select2-search__field"]').type(this.Stakeholder_name).type('{enter}');

        //type Type stakeholder(party) role
        cy.xpath('(//span[@class="select2-selection__rendered"])[7]').should('be.visible').click({force:true})
        cy.xpath('//input[@class="select2-search__field"]').type('Management grouping').type('{enter}')

        //click on create agreement button
        cy.xpath('//button[@name="submit2"]').should('be.visible').click()

        //waiting
        // cy.xpath('https://infraqa.px4app.com/index.php/Agreement/create_agreement/*').as('loadAgreementConsole')
        // cy.wait('@loadAgreementConsole')

        // Has an agreement been executed? "YES"
        cy.xpath('//button[contains(text(),"YES")]').should('be.visible').click()

        //waiting
        // cy.xpath('https://infraqa.px4app.com/index.php/API_Process/get_one_back_pathway/*').as('loadReferenceNumber')
        // cy.wait('@loadReferenceNumber')

        // Alternative reference number for agreement  "SAVE"
        cy.xpath('//button[contains(text(),"SAVE")]').should('be.visible').click()

        // Agreement executed date
        cy.xpath('//input[@id="input-field1"]').should('be.visible').type('1-3-22')

        // click on Save button
        cy.xpath('//button[contains(text(),"SAVE")]').should('be.visible').click()

        // click on Save button
        cy.xpath('//button[contains(text(),"SAVE")]').should('be.visible').click()

        //Does the agreement have an expiry date?
        // cy.xpath('Does the agreement have an expiry date?')
        cy.xpath('//button[contains(text(),"NO")]').should('be.visible').click()

        //Agreement has been created with reference number
        cy.xpath('//button[contains(text(),"OK")]').should('be.visible').click()

    })

    it('creating_Contacts', function () {
        // cy.wait(30000);        
        cy.xpath('//a[@href="https://infraqa.px4app.com/index.php/Contacts/"]').click({
            force: true
        })
        cy.log('creating an new contact');
        // cy.wait(10000);

        //clicking on add contact 
        cy.xpath('//button[@class="auth-green-btn flex right clickable"]').should('be.visible').click({
            force: true
        });


        // enter first name    
        cy.xpath('//input[@name="first_name"]').should('be.visible').type("Test FirstName" + Math.floor(Math.random() * 100000))

        // enter last name  
        cy.xpath('//input[@name="last_name"]').should('be.visible').type("Test LastName" + Math.floor(Math.random() * 100000))

        // enter emailId  
        cy.xpath('//input[@name="email"]').type("Test" + Math.floor(Math.random() * 100000) + "gmail.com")

        // click on save button
        cy.xpath('//button[@id="save_contact"]').should('be.visible').click({
            force: true
        })
        cy.wait(1000)

    })

    it('importQLDautorities', function () {
        // cy.wait(30000);        
        cy.visit('https://infraqa.px4app.com/index.php/Import_Authorities')
        cy.log('importing QLD authority');

        //select jurisdiction
        cy.get('body > div.container-fluid.main-container > div.px4-body > div.white-box.px4-white-box-border > div > div > div:nth-child(1) > span > span.selection > span').should('be.visible').type('Queensland{Enter}');

        //select management grouping   
        cy.get('body > div.container-fluid.main-container > div.px4-body > div.white-box.px4-white-box-border > div > div > div:nth-child(2) > span > span.selection > span').click()
        cy.xpath('//input[@class="select2-search__field"]').should('be.visible').type(this.Stakeholder_name).type('{Enter}')

        // click on Go button
        cy.xpath('//button[@id="submit_button"]').should('be.visible').click()


        cy.get('#file_upload_div > div > label').selectFile('cypress/fixtures/importQLD.xlsx')

        cy.wait(10000)
        cy.xpath('//button[@id="start_importing"]').click({
            force: true
        })
        cy.wait(50000)

        cy.xpath('//div/h3[@class="px4-sub-title"]').invoke('text').then((summary) => {
            expect('Summary').equal(summary)
        })

        //click on users profile dropdown
        cy.xpath('(//i[@class="material-icons"])[2]').click({
            force: true
        })

        //click on administration
        cy.xpath('//a[contains(text(),"Administration")]').click({
            force: true
        })

        //click on delete authorities
        cy.xpath('//i[contains(text(),"delete_forever")]').click({
            force: true
        })

        // click on wish to proceed button  
        cy.xpath('//button[@class="px4-cancel-btn flex"]').click({
            force: true
        })

        //select authority number EPM 15146
        cy.xpath('//input[@class="form-control auth-autocomplete2 ui-autocomplete-input"]').should('be.visible').type('EPM 15146{enter}', {
            force: true
        })
        cy.wait(1000)
        cy.xpath('//input[@class="form-control auth-autocomplete2 ui-autocomplete-input"]').type('{enter}', {
            force: true
        })

        // cy.contains('#autocomplete2', 'EPM 15146').click()

        //click on confirm delete   
        cy.xpath('//button[@class="px4-cancel-btn flex"]').click({
            force: true
        })

        //Assert authority deleted
        cy.xpath('//h3[@class="px4-title"]').invoke('text').then((authoritydeleted) => {
            expect('Authority Deleted').equal(authoritydeleted)
        })
    })


    it('importWAautorities', function () {
        // cy.wait(30000);        
        cy.visit('https://infraqa.px4app.com/index.php/Import_Authorities')
        cy.log('importing WA authority');

        //select jurisdiction
        cy.get('body > div.container-fluid.main-container > div.px4-body > div.white-box.px4-white-box-border > div > div > div:nth-child(1) > span > span.selection > span').should('be.visible').type('Western Australia{Enter}');

        //select management grouping   
        // cy.get('body > div.container-fluid.main-container > div.px4-body > div.white-box.px4-white-box-border > div > div > div:nth-child(2) > span > span.selection > span').should('be.visible').type('ABC Company Pty Ltd{Enter}')

        //select management grouping   
        cy.get('body > div.container-fluid.main-container > div.px4-body > div.white-box.px4-white-box-border > div > div > div:nth-child(2) > span > span.selection > span').click()
        cy.xpath('//input[@class="select2-search__field"]').should('be.visible').type(this.Stakeholder_name).type('{Enter}')


        // click on Go button
        cy.xpath('//button[@id="submit_button"]').should('be.visible').click()


        cy.get('#file_upload_div > div > label').selectFile('cypress/fixtures/ImportWA.XML')

        cy.wait(10000)
        cy.xpath('//button[@id="start_importing"]').click({
            force: true
        })
        cy.wait(50000)

        cy.xpath('//div/h3[@class="px4-sub-title"]').invoke('text').then((summary) => {
            expect('Summary').equal(summary)
        })

        //click on users profile dropdown
        cy.xpath('(//i[@class="material-icons"])[2]').click({
            force: true
        })

        //click on administration
        cy.xpath('//a[contains(text(),"Administration")]').click({
            force: true
        })

        //click on delete authorities
        cy.xpath('//i[contains(text(),"delete_forever")]').click({
            force: true
        })

        // click on wish to proceed button  
        cy.xpath('//button[@class="px4-cancel-btn flex"]').click({
            force: true
        })

        //select authority number E 08/3883651
        cy.xpath('//input[@class="form-control auth-autocomplete2 ui-autocomplete-input"]').should('be.visible').type('E 08/3883651{enter}', {
            force: true
        })
        cy.wait(1000)
        cy.xpath('//input[@class="form-control auth-autocomplete2 ui-autocomplete-input"]').type('{enter}', {
            force: true
        })

        // cy.contains('#autocomplete2', 'EPM 15146').click()

        //click on confirm delete   
        cy.xpath('//button[@class="px4-cancel-btn flex"]').click({
            force: true
        })

        //Assert authority deleted
        cy.xpath('//h3[@class="px4-title"]').invoke('text').then((authoritydeleted) => {
            expect('Authority Deleted').equal(authoritydeleted)
        })
    })

    it('SearchEntity', function () {

        cy.xpath('//input[@class="form-control auth-autocomplete1 ui-autocomplete-input"]').should('be.visible').type(this.Authority_Number)
        cy.wait(1000)
        cy.xpath('//input[@class="form-control auth-autocomplete1 ui-autocomplete-input"]').type('{downArrow}{enter}')
    })


    it.skip('user_creation', function () {


        //click on users profile dropdown
        cy.xpath('(//i[@class="material-icons"])[2]').click({
            force: true
        })

        //click on administration
        cy.xpath('//a[contains(text(),"Administration")]').click({
            force: true
        })

        // click on users
        cy.xpath('(//i[contains(text(),"group")])[3]').should('be.visible').click({
            force: true
        })

        // click on add user
        cy.xpath('//a[@class="add-user"]').click({
            force: true
        })

        // enter first name
        cy.xpath('//input[@name="first_name"]').should('be.visible').type("Test User first name" + Math.floor(Math.random() * 100000))


         // enter last name
         cy.xpath('//input[@name="last_name"]').should('be.visible').type("Test User last name" + Math.floor(Math.random() * 100000))

       
         // enter emailid
         cy.xpath('//input[@name="email"]').should('be.visible').type("Test User last name" + Math.floor(Math.random() * 100000))

        
         // select permision level
         cy.xpath('//select[@name="permission"]').should('be.visible').select('Administrator')

         // store captcha in a variable
         cy.xpath('//input[@id="generated-captcha"]').invoke('text').then((captcha) => {
            this.captcha = captcha.trim();
            cy.log("this is your captcha : " + this.captcha);
            //expect(username).equal(username)
        })

        cy.xpath('//input[@id="entered-captcha"]').should('be.visible').type(this.captcha)
        cy.xpath('//button[@class="px4-save-btn"]').click({force:true})


    })


    it.skip('group_creation', function () {

        cy.xpath('//input[@class="form-control auth-autocomplete1 ui-autocomplete-input"]').should('be.visible').type(this.Authority_Number)
        cy.wait(1000)
        cy.xpath('//input[@class="form-control auth-autocomplete1 ui-autocomplete-input"]').type('{downArrow}{enter}')
    })



    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

})