import "cypress-v10-preserve-cookie"
/// <reference types="cypress" />
describe('PX4_Smoke_Suite', function () {

    // const username = "testing@gmail.com";
    // const password = "vishal123";
    var Authority_Number;
    var SecurityAuthentication;
    var Stakeholder_name;
    var contact_Name;
    var abc = false;
    var captcha;
    var el;

    before(() => {       

        
    cy.fixture('credentials.json').then( (data) => {
 
    cy.visit(data.user_url)
    cy.wait(3000)
    // cy.viewport(1280, 755)
    cy.get('#identity').should('be.visible').click({
        force: true
    });
    cy.get('#identity').should('be.visible').type(data.username);
    cy.get('#password').should('be.visible').type(data.password);
    cy.get('form').should('be.visible').submit();


        })




        //// till here


        // cy.visit('https://qa.px4app.com/index.php/auth/login?redirect=/index.php/');
        // // cy.viewport(1280, 755)
        // cy.get('#identity').should('be.visible').click({
        //     force: true
        // });
        // cy.get('#identity').should('be.visible').type(username);
        // cy.get('#password').should('be.visible').type(password);
        // cy.get('form').should('be.visible').submit();



        cy.get('.login-body').then(($body) => {
            // synchronously ask for the body's text
            // and do something based on whether it includes
            // another string
            if ($body.text().includes('Security Code')) {
                // yup found it
                cy.get('input[id="VerificationCode"]').should('be.visible').type('147852');
                cy.get('input[type="submit"]').should('be.visible').click({
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
        // cy.xpath('(//a[@class="nav-link"])[7]').click()

        //click on add button
        cy.get('div[class="dropdown paused_pathway"]>p[class="flex"]').click();

        //click on add stake holders
        cy.get('a[href*="Holders/add_new_holder"]').click();

        // assert page title
        // cy.title().should('eq', 'stakeholders')

        //click add stakeholder button
        // cy.xpath('//button[@class="auth-green-btn flex right clickable"]').click()

        // assert page title
        cy.title().should('eq', 'Create Stakeholder')

        //enter stakeholder name
        cy.get('input[id="holder_name"]').should('be.visible').type("Stakeholder" + Math.floor(Math.random() * 100000))

        // select authority holder
        cy.get('input[value="2"][id="roles"]').click()

        // select management grouping
        cy.xpath('input[value="1"][id="roles"]').click()

        //click on save
        cy.get('button[class="px4-save-btn"]').click({
            force: true
        })

        // assert page title
        cy.title().should('eq', 'Stakeholder Console')


        //assign stakeholder name in a variable
        cy.get('h3[class="px4-title m-0 p-30"]').invoke('text').then((Stakeholder) => {
            this.Stakeholder_name = Stakeholder.trim();
            cy.log("Stakeholder name is : " + this.Stakeholder_name);
            //expect(username).equal(username)
        })

    })

    it('New_Authority', function () {

        // cy.get('.black-text > :nth-child(1) > :nth-child(2)').click({force: true});

        //cy.get('.nav-item:nth-child(3) > .nav-link').click({force: true});

        // click on authorities tab
        // cy.xpath('(//a[@class="nav-link"])[3]').click()
        // cy.wait(1000)


        // assert page title
        // cy.title().should('eq', 'PX4')       


         //click on add button
         cy.get('div[class="dropdown paused_pathway"]>p[class="flex"]').click({force:true});

        //click on add authority
        cy.get('span[data-target="#createThirdPartyModal"]').should('be.visible').click({
            force: true
        })

        cy.wait(1000)
        //Select Jurisdiction

        cy.get('span[id="select2-create_manully_jurisdiction-container"]').click({force:true});
        cy.wait(1000)
        //select QLD
        cy.get('li[data-select2-id*="select2-create_manully_jurisdiction"]:nth-of-type(5)').click({force:true});

        //click on create button
        cy.get('input[id="submit_create_authority_manully_button"]').click({force:true});



        cy.wait(1000)

        // cy.get('#new_authority > div.col-md-12 > div:nth-child(1) > div:nth-child(2) > span > span.selection > span').should('be.visible').type('Queen{enter}');
        // cy.xpath("(//span[@class='select2-selection select2-selection--single'])[1]").should('be.visible').click()
    //    Not required // cy.xpath("//input[@class='select2-search__field']").click().type('Queensland{enter}')

        //Select Category
        // cy.get(':nth-child(1) > :nth-child(3) > .select2 > .selection > .select2-selection').should('be.visible').type('min{enter}');
        cy.get('div[class="col-md-3"] span[id="select2-authcatselect-container"]').should('be.visible').click({force:true})
        cy.wait(1000)
        cy.get('li[class="select2-results__option"]').contains('Mineral or Coal').click({force:true})
        cy.wait(1000)

        //Select Authority Type
        // cy.get('#new_authority > div.col-md-12 > div:nth-child(1) > div:nth-child(4) > span > span.selection > span').should('be.visible').type('EPC{enter}');
        cy.get('span[id="select2-authtemplateselect-container"]').should('be.visible').click({force:true})
        cy.wait(1000)
        
        cy.get('li[class="select2-results__option"]').contains('EPC - Exploration Permit for Coal').click({force:true})

        cy.wait(1000)
        //Select Management Grouping
        cy.get('#select2-owners-select-container').click({force:true});
        // cy.xpath('//span[@class="select2 select2-container select2-container--default select2-container--focus"]').click()
        cy.get('span[class="select2-search select2-search--dropdown"] input[role="textbox"]').click().type(this.Stakeholder_name).type('{enter}');


        //   cy.xpath('//li[contains(text(),"+ Add Stakeholder")]').click()  



        // enter authority number
        cy.get('input[class="form-control px4-input-text auth_number"]').click().type("EPC " + Math.floor(Math.random() * 100000)).type('{Enter}')

        //Select project
        // cy.get('#new_authority > div.col-md-12 > div:nth-child(4) > div:nth-child(4) > span > span.selection > span').should('be.visible').type('check{enter}');

        //Enter lodged date
        cy.get('input[class="form-control px4-datepicker px4-input-text attribute_class hasDatepicker"]').should('be.visible').click().type('1-3-15');

        //Enter Years Applied
        cy.get('input[class="form-control px4-input-text attribute_class years_applied"]').should('be.visible').click().type('8');

        //Enter Granted Date
        cy.get('input[class="form-control px4-datepicker px4-input-text attribute_class grant_date hasDatepicker"]').should('be.visible').click().type('2-3-15');
        cy.wait(1000)

        //Enter Granted Years 
        cy.get('input[class="form-control px4-input-text attribute_class row0 years_granted_num"]').should('be.visible').click().type('8')

        // cy.wait(1000);

        // select authority holder
        cy.get('div[class="col-md-3"] span[id="select2-holder-26-container"]').click({force:true})
        // cy.get('#select2-holder-tm-container').click()
        // cy.get('body.pace-done:nth-child(6) div.container-fluid.main-container:nth-child(3) div.modal.bd-example-modal-lg.fade:nth-child(8) div.modal-dialog.modal-dialog-lg.modal-dialog-centered div.modal-content div.modal-body div.all_document_count div.container div.row div.col-md-8 div.form-group:nth-child(5) span.select2.select2-container.select2-container--default:nth-child(3) span.selection span.select2-selection.select2-selection--multiple ul.select2-selection__rendered li.select2-search.select2-search--inline > input.select2-search__field').click()
        cy.get('span[class="select2-search select2-search--dropdown"]').should('be.visible').click({force:true}).type(this.Stakeholder_name).type('{Enter}')


        // cy.get('.select2-dropdown > .select2-search > .select2-search__field').click().type(this.Stakeholder_name).type('{Enter}')

        //Enter Percentage
        cy.xpath('input[class="form-control px4-input-text percent"]').should('be.visible').click().type('100');
        

        //Click on "Create Authority"
        //cy.get('#submit_button').click({force: true});
        cy.get('button[id="submit_button"]').should('be.visible').click({
            force: true
        });
        
        cy.wait(10000);
        // Confirm Authorty number, Click on Save button
        //cy.get('body > div.swal2-container.swal2-center.swal2-shown > div > div.swal2-actions > button.swal2-confirm.px4-popup-save-btn').should('be.visible').click({force: true});
        cy.xpath('//button[contains(text(),"CREATE AUTHORITY")]').should('be.visible').click({
            force: true
        })
        cy.wait(10000);
        //Click on save
        cy.xpath('button[class="swal2-confirm px4-popup-save-btn position-set-save"]').should('be.visible').click({
            force: true
        })
        
        //cy.get('.swal2-confirm').click({force: true});
        
        cy.wait(2000);

        //  Which native title proces,If applicable?-->Expedited procedure
        cy.get('select[class="swal2-select"]').click({force:true})
        cy.get('select[class="swal2-select"] option').contains('Expedited procedure').click({force:true})
       
        cy.wait(3000);

        //click on save button
        cy.get('button[class="swal2-confirm position-set-save-native-swal swal2-styled"]').should('be.visible').click({
            force: true
        });
        cy.wait(10000);

        //Are NTPC payments applicable for registered claimants?--> NO
        cy.get('button[class="btn px4-popup-cancel-btn btn-md swalbtn"]').should('be.visible').click({
            force: true
        });


        
        cy.wait(3000);
        //Click on "Is this overlapping tenure to an existing ATP and/or PL?" button (NO)

        cy.get("button[class='btn px4-popup-cancel-btn btn-md swalbtn']").should('be.visible').click({force:true})

        cy.wait(30000);
        //Click on "What is the Safety & Health Census Form frequency?" button
        cy.get('select[class="swal2-select"]').select('Submit annually').should('be.visible');


        // cy.xpath('//select[@class="swal2-select"]').select('Submit annually', { force: true }).invoke('val').should('eq', 'Submit annually')
       

        cy.wait(10000);
        
        //click on save button
        //cy.get('body > div.swal2-container.swal2-center.swal2-shown > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click({force: true});
        cy.get('button[class="swal2-confirm position-set-save-native-swal swal2-styled"]').should('be.visible').click({
            force: true
        });
        cy.wait(3000);

        //site operation commencement date
        cy.xpath('input[id="input-field1"]').should('be.visible').type('2-3-15');
        
        
        cy.wait(3000);


        //click on save button
        cy.get('button[class="swal2-confirm px4-popup-save-btn position-set-save"]').should('be.visible').click({
            force: true
        });


        cy.wait(3000);

        //Click on "Are actions to be created from a specific date for this authority? " No
         cy.get('button[class="btn px4-popup-cancel-btn btn-md swalbtn"]').should('be.visible').click({
            force: true
        });
        cy.wait(50000);

        // click on OK button
        cy.get('button[class*="swal2-confirm"]').should('be.visible').click({
            force: true
        });



        cy.intercept('https://api-private.atlassian.com/gasv3/api/v1/batch').as('loadbatch')

        // once a request to get settings responds, 'cy.wait' will resolve
        cy.wait('@loadbatch')
        // cy.wait(30000);


        // cy.intercept('https://infraqa.px4app.com/index.php/API_Process/update_next_step/1763379/1763381').as('load')

        // // once a request to get settings responds, 'cy.wait' will resolve
        // cy.wait('@load')   

        // assert page title
        cy.title().should('eq', 'Authority Console')

    })

    it('pending_Actions_Completion', function () {


        cy.get('h3[class="px4-title"]').invoke('text').then((AuthorityNumber) => {
            this.Authority_Number = AuthorityNumber.trim();
            cy.log("Authority Number is : " + this.Authority_Number);
            //expect(username).equal(username)
        })

        cy.wait(10000);

        //Go to pending actions page
        cy.get('a[class="nav-link"][href*="Actions/pending_actions_table"]').should('be.visible').click({
            force: true
        });
        cy.log('This is to test the log');
        // cy.wait(3000);
        // click on view button of renewal action
        cy.scrollTo('bottom')
        cy.xpath('(//i[contains(text(),"play_arrow")]/following::button)[1]').should('be.visible').click({
            force: true
        });
        // cy.wait(3000);
        // click on complete button
        cy.get('button[id="complete_action"]').should('be.visible').click({
            force: true
        });
        cy.wait(30000);
        cy.scrollTo('bottom')

        //click on confirm complete button
        cy.get('button[id="action_confirm_complete"]').scrollIntoView().click({
            force: true
        });
        cy.wait(30000);

        // cy.intercept('https://qa.px4app.com/index.php/API_Process/get_one_back_pathway/').as('loadPopup')
      

        // once a request to get settings responds, 'cy.wait' will resolve
        // cy.wait('@loadPopup')

        //Has a Renewal application been lodged?--> Yes
        cy.get('select[class="swal2-select" ]').select('Yes');
        // cy.wait(1000);
        //click on save button
        cy.get('button[type="button"][class="swal2-confirm position-set-save-native-swal swal2-styled"]').should('be.visible').click({
            force: true
        });
        // cy.wait(1000);
        //Renewal application's lodged date--> Click on save button
        cy.get('button[type="button"][class="swal2-confirm px4-popup-save-btn position-set-save"]').should('be.visible').click({
            force: true
        });
        // cy.wait(1000);
        //Number of years applied for--> Type 5
        cy.get('input[id="input-field1"]').should('be.visible').type('5');
        cy.log('This to test');
        // cy.wait(10000);
        //click on save button
        cy.get('button[type="button"][class="swal2-confirm px4-popup-save-btn position-set-save"]').should('be.visible').click({
            force: true
        });
        cy.wait(20000);   
        cy.title().should('contain', 'Authority Console');  

    })

    it('creating_Manual_Actions', function () {
        // cy.wait(30000);
        // cy.xpath('//a[@class="nav-link" and @href="https://qa.px4app.com/index.php/Actions/actions_table"]').click({
        //     force: true
        // })
        cy.log('This to test log for Manual action');
        // cy.wait(10000);

        
        //click on add button
        cy.get('div[class="dropdown paused_pathway"]>p[class="flex"]').click({force:true});

        //click on add action
        cy.get('a[href$="Actions/create_manual_action"]').click({force:true});


        // cy.xpath('//button[@class="auth-green-btn right flex"]').should('be.visible').click({
        //     force: true
        // });

        //click on select entity
        cy.get('input[placeholder="Select Entity"]').should('be.visible').click({
            force: true
        });
        cy.get('input[placeholder="Select Entity"]').should('be.visible').type(this.Authority_Number).type('{enter}');

        // cy.xpath('//*[@id="select2-auth-result-hde9-8604~1" and @class="select2-results__option select2-results__option--highlighted"]').click({force: true});

        //type action name
        cy.get('input[id="action_name"]').should('be.visible').should('be.visible').type('Test Manual Action');

        //select action type
        cy.get('span[id="select2-action_type-container"]').should('be.visible').type('Application{enter}');

        //type First Notification On date
        cy.get('input[id="notification_date"]').should('be.visible').type('09-05-2017');

        //type Daily Reminders From date
        cy.get('input[id="reminder_date"]').should('be.visible').type('09-05-2017');

        //type due date
        cy.get('input[id="original_due_date"]').should('be.visible').type('09-05-2017');


        //click on save button
        cy.get('button[class="px4-save-btn"]').should('be.visible').click({
            force: true
        });
        cy.wait(2000);

    })

    it('create_Objection_manager', function () {

        // test

        const linksWithEpectedText = [

            {id:'a[href*="Resources/"]', expectedtext:'homeDashboard'},
            {id:'li a[href*="/actions_table"]', expectedtext:'scheduleActions'},
            {id:'li a[href*="/authorities_table"]', expectedtext:'descriptionAuthorities'}
        ];

        linksWithEpectedText.forEach((linkinfo) =>{

            cy.get(linkinfo.id).should('have.text',linkinfo.expectedtext).click({force:true})

        })





        ////test



        //click on administration
        cy.get('div[class="normal-title right"]>div:nth-child(2)>p').should('be.visible').click({force:true})

        //click on administration
        cy.get('a[href$="settings/"]').should('be.visible').click({force:true})

        //assert page title
        cy.title().should('eq','Settings | PX4')

        //click on Manage Lists
        cy.get('li[class="nav-item"]>label').should('be.visible').click({force:true})

        //click on objection manager
        cy.get('a[href*=objections_manager]').should('be.visible').click({force:true})



        cy.get('input[placeholder*="Select User"]').click({force:true})
        cy.get('li[class="select2-results__option"]').then(($ele) => {
            if ($ele.length > 0) {
              cy.log('Elements found')
              cy.get('ul>li[class="select2-results__option"]:nth-of-type(2)').invoke('text').then((Objection_manager)=>{
              cy.log(Objection_manager)         
            })
            cy.get('ul>li[class="select2-results__option"]:nth-of-type(2)').click()
              //select txt one and save in avariable and click on it
            } else {
              cy.log('Elements not found')
              //create new Objection manager by selecting from users page
            }
          })
        //click on save button
        cy.get('button[class="px4-save-btn"]').click()

    })
    it('New_Thirdparty_Authority', function () {

         //click on add button
         cy.get('div[class="dropdown paused_pathway"]>p[class="flex"]').click({force:true});

        //click on add authority
        cy.get('span[data-target="#createThirdPartyModal"]').should('be.visible').click({
            force: true
        })

        cy.wait(1000)
        //Select Jurisdiction

        cy.get('span[id="select2-create_manully_jurisdiction-container"]').click({force:true});
        cy.wait(1000)
        //select QLD
        cy.get('ul[id="select2-create_manully_jurisdiction-results"] li[class="select2-results__option"]').contains('Western Australia').click({force:true});

        //select management grouping
        cy.get('span[id="select2-create_manully_management_select-container"]').click({force:true})
        cy.get('ul[class="select2-results__options"] li').contains('Third Party').click({force:true})

        //click on create button
        cy.get('input[id="submit_create_authority_manully_button"]').click({force:true});

        cy.wait(3000)

        //select category
        cy.get('div[class="col-md-3"] span[id="select2-authcatselect-container"]').should('be.visible').click({force:true})
        cy.get('li[class="select2-results__option"]').contains('Mineral or Coal').click({force:true})

        cy.wait(3000)
        //Select authority type
        cy.get('span[id="select2-authtemplateselect-container"]').click({force:true})
        cy.get('li[class="select2-results__option"]').contains('Exploration Licence').click({force:true})

        //enter authority number
        cy.get('input[id="auth_number"]').click().type("EL " + Math.floor(Math.random() * 100000)).type('{Enter}')

        //click on create authority button
        cy.get('button[id="submit_button"]').should('be.visible').click({force:true})

        cy.wait(30000)

        //click on save button
        cy.get('button[class="swal2-confirm px4-popup-save-btn position-set-save"]').click({force:true})

        //Current departmental status?

        cy.get('select[class="swal2-select"] option').contains('Live').click({force:true})
        cy.get('button[class="swal2-confirm position-set-save-native-swal swal2-styled"]').click({force:true})

        cy.wait(50000)

        cy.get('h3[class="px4-sub-title m-0 padding-top-10"]').invoke('text').then((authority_console)=>{

        expect('Authority Console').equal(authority_console)

        })


    })

    it('upload_document', function () {

        //click on add button
 
        cy.get('div[class="dropdown paused_pathway"]>p[class="flex"]').should('be.visible').click({force:true});

        //click on add document
        cy.get('span[data-target*="document"]').should('be.visible').click({force:true})


        // click on document library
        // cy.get('a[href*="https://qa.px4app.com/index.php/Document_library/document_library_table/authority/"]>i[class="material-icons"]').should('be.visible').click({force:true})

        //click on button
        // cy.get('button[id="button"]').should('be.visible').click({force:true})




        //select file   div[id="all_doc_upload_0"] 
        cy.get('input[type="file"][id="all-drop-zone__input_0"]').selectFile('cypress/fixtures/PX4_Software.docx',{force:true})
        
        cy.scrollTo("bottom")
        //select category
        // cy.get('input[class="select2-search__field"]').should('be.visible').type('Agreement{enter}').click()

        cy.get('input[class="select2-search__field"]').should('be.visible').type('Agreement')
        cy.get('li[class="select2-results__option"]').contains('Indigenous Agreement').click()
        // cy.get('li[class="select2-search select2-search--inline"]>input[class="select2-search__field"][role="textbox"][type="search"]').type('Agreement').click({force:true})

        cy.wait(3000)
        //Trying foreach loop
            // cy.get('li[class="select2-results__option"]').each(($el, index, $list) =>{

       
            // cy.log(`index: ` + index);
       

            // if($el.text()=='Agreement')
            // {
            //     cy.log(`el: ` + $el);
            //     cy.wrap($el).click()
            // }

            //  })



        cy.wait(3000)
        // cy.get('input[class="select2-search__field"]').should('have.value','Agreement')


        //select association
        cy.get('div[class="col-md-5"] span[id="select2-all_doc_entity_type_00-container"]').type('Authority{enter}')
        
        cy.wait(10000)
        //select entity
        cy.get('div[class="col-md-5"] span[id="select2-all_et-container"]').click({force:true})
        cy.get('span[class="select2-search select2-search--dropdown"] input[class="select2-search__field"]').click().type('{downArrow}{enter}')

        // click on save button
        cy.get('input[id="all_doc_submit_button_new"]').should('be.visible').click({force:true})

        // cy.intercept('https://qa.px4app.com/index.php/Document_library/insert_multiple_document').as('Waituntilupload')

        // once a request to get settings responds, 'cy.wait' will resolve
        // cy.wait('@Waituntilupload')
        // cy.wait(30000);

        //click on ok button
        cy.get('button[class="swal2-confirm swal2-styled"]').click({force:true})

        

    })    

    it('creating_project', function () {
        // cy.wait(30000);        
        // cy.xpath('//a[@href="https://qa.px4app.com/index.php/Projects/"]').click({
        //     force: true
        // })
        cy.log('creating project');
        // cy.wait(10000);

        //click on add button
        cy.get('div[class="dropdown paused_pathway"]>p[class="flex"]').click();


        // click on add project
        cy.get('a[href$="Projects/add_new_project"]').click({
            force: true
        })

        // cy.xpath('//button[@class="auth-green-btn flex right"]').should('be.visible').click({
        //     force: true
        // });

        // selecting jurisdiction
        // cy.xpath('//span[contains(@title,"Queensland")]').should('be.visible').type('Queensland{enter}');
        cy.get('span[id="select2-jurisdiction-container"]').should('be.visible').type('Queensland{enter}');
        cy.get('li[class="select2-results__option"]').contains('Queensland').click({force:true})
        // select managemet grouping
        // cy.xpath('//span[contains(@title,"Select")]').should('be.visible').type('New Stakeholder{enter}');
        cy.get('span[id="select2-owner-container"]').click()
        cy.get('span[class="select2-search select2-search--dropdown"] input[class="select2-search__field"]').click().type(this.Stakeholder_name).type('{enter}');


        //type project name
        //cy.xpath('//input[@name="project_name"]').should('be.visible').type('Test Project{enter}');
        cy.get('input[name="project_name"]').should('be.visible').type("Test Project" + Math.floor(Math.random() * 100000));
        //clicking on save button
        cy.get('button[class="px4-save-btn"]').should('be.visible').click({
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
        // cy.xpath('//a[@href="https://qa.px4app.com/index.php/Agreement/agreement_list"]').click({
        //     force: true
        // })
        cy.log('creating an agreement');
        cy.wait(10000);     
       

        
        //click on add button
        cy.get('div[class="dropdown paused_pathway"]>p[class="flex"]').click();

         //clicking on add agreement button 

        cy.get('a[href$="Agreement/create_agreement"]').should('be.visible').click({
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
        cy.xpath('//span[@id="select2-agreement_type-container"]').should('be.visible').type('General Commercial Agreement{Enter}');
        cy.wait(1000)
        //type management grouping
        cy.xpath('(//span[@class="select2-selection__rendered"])[3]').should('be.visible').click({force:true})
        cy.xpath('(//input[@class="select2-search__field"])[3]').type(this.Stakeholder_name).type('{enter}')

        // stakeholder (party)
      cy.xpath('(//span[@class="select2-selection select2-selection--single"])[6]').should('be.visible').click({force:true})
      cy.xpath('(//input[@class="select2-search__field"])[3]').type(this.Stakeholder_name).type('{enter}');

        //type Type stakeholder(party) role
        cy.xpath('(//span[@class="select2-selection__rendered"])[7]').should('be.visible').click({force:true})
        cy.xpath('(//input[@class="select2-search__field"])[3]').type('Portfolio Authority holder').type('{enter}')

        //click on create agreement button
        cy.xpath('//button[@name="submit2"]').should('be.visible').click({force:true})

        //waiting
        // cy.xpath('https://infraqa.px4app.com/index.php/Agreement/create_agreement/*').as('loadAgreementConsole')
        // cy.wait('@loadAgreementConsole')
        cy.wait(30000)
        // Has an agreement been executed? "YES"
        cy.xpath('//button[contains(text(),"YES")]').should('be.visible').click({force:true})

        //waiting
        // cy.xpath('https://infraqa.px4app.com/index.php/API_Process/get_one_back_pathway/*').as('loadReferenceNumber')
        // cy.wait('@loadReferenceNumber')

        // Alternative reference number for agreement  "SAVE"
        cy.xpath('//button[contains(text(),"SAVE")]').should('be.visible').click({force:true})

        // Agreement executed date
        cy.xpath('//input[@id="input-field1"]').should('be.visible').type('1-3-22')

        // click on Save button
        cy.xpath('//button[contains(text(),"SAVE")]').should('be.visible').click({force:true})

        // click on Save button
        cy.xpath('//button[contains(text(),"SAVE")]').should('be.visible').click({force:true})

        //Does the agreement have an expiry date?
        // cy.xpath('Does the agreement have an expiry date?')
        cy.xpath('//button[contains(text(),"NO")]').should('be.visible').click({force:true})

        //Agreement has been created with reference number
        cy.xpath('//button[contains(text(),"OK")]').should('be.visible').click({force:true})
        cy.wait(30000)
    })

    it('creating_Contacts', function () {
        // cy.wait(30000);        
        // cy.xpath('//a[@href="https://qa.px4app.com/index.php/Contacts/"]').click({
        //     force: true
        // })
        cy.log('creating an new contact');
        // cy.wait(10000);

        //clicking on add contact 
        // cy.xpath('//button[@class="auth-green-btn flex right clickable"]').should('be.visible').click({
        //     force: true
        // });

          
        //click on add button
        cy.xpath('div[class="dropdown paused_pathway"]>p[class="flex"]').click();

         //clicking on add contact button 

        cy.xpath('a[href$="Contacts/add_new_contact"]').should('be.visible').click({
            force: true
        });

        // cy.wait(20000)



        // enter first name    
        cy.xpath('//input[@name="first_name"]').should('be.visible').type("FirstName" + Math.floor(Math.random() * 100000))

        // enter last name  
        cy.xpath('//input[@name="last_name"]').should('be.visible').type("lastName" + Math.floor(Math.random() * 100000))

        // enter emailId  
        cy.xpath('//input[@name="email"]').type("Test" + Math.floor(Math.random() * 100000) + "gmail.com")

        // click on save button
        cy.xpath('//button[@id="save_contact"]').should('be.visible').click({
            force: true
        })
        cy.wait(1000)
        // assert page title
        cy.title().should('eq', 'Contacts Console')

        cy.xpath('//h3[@class="px4-title m-0"]').invoke('text').then((contact_Name) => {
            this.contact_Name = contact_Name.trim();
            cy.log("Authority Number is : " + this.contact_Name);
            //expect(username).equal(username)
        })


    })

    it('create_communication', function () {


        //click on administration
        cy.get('div[class="normal-title right"]>div:nth-child(2)>p').should('be.visible').click({force:true})

        //click on administration
        cy.get('a[href$="settings/"]').should('be.visible').click({force:true})

        //assert page title
        cy.title().should('eq','Settings | PX4')

        //click on Manage Lists
        cy.get('li[class="nav-item"]>label').should('be.visible').click({force:true})

        //click on Communication caterory
        cy.get('a[href$="settings/communication_category"]').should('be.visible').click({force:true})

        //type communication caterory
        cy.get('input[id="communication_category_name[]"]').type('Communication Category')

        //click on save button
        cy.get('div[class="row"] button[class="px4-save-btn"]').should('be.visible').click({force:true})

        //click on Manage Lists
        cy.get('li[class="nav-item"]>label').should('be.visible').click({force:true})

        //click on communication type
        cy.get('a[href$="settings/communication_type"]').should('be.visible').click({force:true})

        //type communication type
        cy.get('input[id="communication_type_name[]"]').type('Communication Type')

        
        //click on save button
        cy.get('div[class="row"] button[class="px4-save-btn"]').should('be.visible').click({force:true})
            
        //click on add button
        cy.get('div[class="dropdown paused_pathway"]>p[class="flex"]').click();

         //clicking on add communication button 

        cy.get('a[href$="Communication/create_communication"]').should('be.visible').click({
            force: true
        });

        //click on category
        cy.get('span[id="select2-category_select-container"]').click({force:true})
        cy.get('span[class="select2-search select2-search--dropdown"] input[class="select2-search__field"]').type('Communication Category{enter}')

        //select type
        cy.get('span[id="select2-type_select-container"]').click({force:true})
        cy.get('span[class="select2-search select2-search--dropdown"] input[class="select2-search__field"]').type('Communication Type{enter}')

        //enter start date
        cy.xpath('//input[@id="start_date"]').type('09-02-2023')

        //type subject
        cy.xpath('//input[@id="subject"]').should('be.visible').type("TestCommunication" + Math.floor(Math.random() * 100000))

        //select stakeholder
        cy.xpath('(//span[@class="select2-selection select2-selection--single"])[3]').should('be.visible').click({force:true})
        cy.xpath('(//input[@class="select2-search__field"])[4]').type(this.Stakeholder_name).type('{enter}')

        //click on create communication
        cy.xpath('//button[@class="px4-save-btn"]').should('be.visible').click({force:true})

        //assert page title

        cy.title().should('contain', 'PX4'); 
    })

   
    it('deleting_Contact', function () {

        //click on contacts menu
        cy.get('a[href$="Contacts/"]').should('be.visible').click({force:true})

        cy.intercept('https://api-private.atlassian.com/gasv3/api/v1/batch').as('loadcontacts')

        // once a request to get settings responds, 'cy.wait' will resolve
        cy.wait('@loadcontacts')

        // Type contact name
        cy.xpath('(//span[@class="select2-selection select2-selection--multiple"])[1]').type(this.contact_Name).type('{enter}')

        //click on apply filter button
        cy.xpath('//button[@id="apply_button"]').should('be.visible').click({force:true})

        

        //wait for given contact to load
        cy.intercept('https://api-private.atlassian.com/gasv3/api/v1/batch').as('loadgivencontact')

        // once a request to get settings responds, 'cy.wait' will resolve
        cy.wait('@loadgivencontact')

        //select checkbox
        cy.xpath('//input[@class="checkbox"]').scrollIntoView().should('be.visible').click({force:true})

        //click on delete button
        cy.xpath('//button[@id="delete_contacts"]').should('be.visible').click({force:true})

        //assert popup title
        cy.xpath('//h2[@class="px4-popup-title"]').should('contain',"Confirm Delete?")

        //click on confirm delete button
        cy.xpath('//button[@class="btn btn-md px4-popup-delete-btn swalbtn"]').should('be.visible').click({force:true})




        
    })

   
    it('importQLDautorities', function () {
        // cy.wait(30000);        
        cy.visit('https://qa.px4app.com/index.php/Import_Authorities')
        cy.log('importing QLD authority');

        //select jurisdiction
        cy.get('body > div.container-fluid.main-container > div.px4-body > div.white-box.px4-white-box-border > div > div > div:nth-child(1) > span > span.selection > span').should('be.visible').type('Queensland{Enter}');

        //select management grouping   
        cy.get('body > div.container-fluid.main-container > div.px4-body > div.white-box.px4-white-box-border > div > div > div:nth-child(2) > span > span.selection > span').click({force:true})
        cy.get('span[class="select2-container select2-container--default select2-container--open"] input[class="select2-search__field"]').should('be.visible').type(this.Stakeholder_name).type('{Enter}')

        // click on Go button
        cy.get('button[id="submit_button"]').should('be.visible').click({force:true})


        // cy.get('#file_upload_div > div > label').selectFile('cypress/fixtures/importQLD.xlsx')
        cy.get('label[class="btn auth-green-btn"][for="upload_file"]').selectFile('cypress/fixtures/importQLD.xlsx')

        cy.wait(10000)
        //click on import button
        cy.get('button[id="start_importing"]').click({
            force: true
        })
        cy.wait(50000)

        cy.get('h3[class="px4-title m-0"]').invoke('text').then((summary) => {
            expect('Import Queensland Authorities').equal(summary)
        })

        //click on users profile dropdown
        cy.get('div[class="dropdown"]:nth-of-type(2) i').click({
            force: true
        })

        //click on administration
        cy.get('a[href$="settings/"]').click({
            force: true
        })

        //click on delete authorities
        cy.get('a[href*="delete_entrance"]').click({
            force: true
        })

        // click on wish to proceed button  
        cy.get('button[class="px4-cancel-btn flex"]').click({
            force: true
        })

        
        //select authority number EPM 15146
        cy.get('input[placeholder="Search Authority Number"]').should('be.visible').type('EPM 15146{enter}', {
            force: true
        })
        cy.wait(1000)
        cy.get('input[placeholder="Search Authority Number"]').type('{enter}', {
            force: true
        })

        // cy.contains('#autocomplete2', 'EPM 15146').click()

        //click on confirm delete   
        cy.get('button[class="px4-cancel-btn flex"]').click({
            force: true
        })

        //Assert authority deleted
        cy.get('h3[class="px4-title"]').invoke('text').then((authoritydeleted) => {
            expect('Authority Deleted').equal(authoritydeleted)
        })
    })


    it('importWAautorities', function () {
        // cy.wait(30000);        
        cy.visit('https://qa.px4app.com/index.php/Import_Authorities')
        cy.log('importing WA authority');

        //select jurisdiction
        cy.get('body > div.container-fluid.main-container > div.px4-body > div.white-box.px4-white-box-border > div > div > div:nth-child(1) > span > span.selection > span').should('be.visible').type('Western Australia{Enter}');

        //select management grouping   
        // cy.get('body > div.container-fluid.main-container > div.px4-body > div.white-box.px4-white-box-border > div > div > div:nth-child(2) > span > span.selection > span').should('be.visible').type('ABC Company Pty Ltd{Enter}')

        //select management grouping   
        cy.get('body > div.container-fluid.main-container > div.px4-body > div.white-box.px4-white-box-border > div > div > div:nth-child(2) > span > span.selection > span').click({force:true})
        cy.get('span[class="select2-search select2-search--dropdown"] input[role="textbox"]').should('be.visible').type(this.Stakeholder_name).type('{Enter}')


        // click on Go button
        cy.xpath('//button[@id="submit_button"]').should('be.visible').click({force:true})


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
        cy.get('div[class="dropdown"]:nth-of-type(2) i').click({
            force: true
        })

        //click on administration
        cy.get('a[href$="settings/"]').click({
            force: true
        })

        //click on delete authorities
        cy.get('a[href*="delete_entrance"]').click({
            force: true
        })

        // click on wish to proceed button  
        cy.get('button[class="px4-cancel-btn flex"]').click({
            force: true
        })

        //select authority number E 08/3883651
        cy.get('input[placeholder="Search Authority Number"]').should('be.visible').type('E 08/3883651{enter}', {
            force: true
        })
        cy.wait(1000)
        cy.get('input[placeholder="Search Authority Number"]').type('{enter}', {
            force: true
        })

        // cy.contains('#autocomplete2', 'EPM 15146').click()

        //click on confirm delete   
        cy.get('button[class="px4-cancel-btn flex"]').click({
            force: true
        })

        //Assert authority deleted
        cy.get('h3[class="px4-title"]').invoke('text').then((authoritydeleted) => {
            expect('Authority Deleted').equal(authoritydeleted)
        })
    })
    it('importObjections', function () {
        cy.visit('https://qa.px4app.com/index.php/Objection/import_objections')
        cy.log('importing Objections');
        cy.get('h3[class="px4-title marg-top-10"]').invoke('text').then((ImportOnjections)=>{
            expect('Import Objections').equal(ImportOnjections)
        })
        // cy.get('label[class="btn auth-green-btn"][for="upload_file"]').click({force:true})
        cy.get('label[class="btn auth-green-btn"][for="upload_file"]').selectFile('cypress/fixtures/objection.xlsx')
        cy.wait(10000)
        //click on import button
        cy.get('button[id="start_importing"]').click({force:true})

        //assert objection page
        cy.get('h3[class="px4-title m-0"]').invoke('text').then((ImportObjection)=>{

            expect('Import Objection').equal(ImportObjection)

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



