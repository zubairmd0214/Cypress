/// <reference types="cypress" />
describe('smoke test suite', function (done) {

    // beforeEach(function () {
    // cy.getCookies().then(cookies => {
    //  const namesOfCookies = cookies.map(c => c.name)
    //  Cypress.Cookies.preserveOnce(...namesOfCookies)
    //   cy.reload()
    //  })   

    var like;
    var TPPID = 2;
    var userID = "61385d5cf519418af1d4c5da";
    var Auth = {
        "username": "K4-api-dev",
        "password": "DataTeam@2021"
    }
    beforeEach(() => {
        cy.restoreLocalStorage();
        cy.viewport(1200, 700);
    });
    afterEach(() => {
        cy.saveLocalStorage();
    });
    it.only('Test case to verify login page', function () {
        cy.visit('https://dev.k4coach.com/', {
            // onBeforeLoad: (abc) => {
            //     abc.sessionStorage.clear()
            // }
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
        cy.xpath("//input[@placeholder='Enter your Email']").type("larry.miller@comp2.com")
        cy.xpath(" //input[@placeholder='Enter Password']").type("4>aY1zR>")
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
        ///////////////////////////////////////////////
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[2]/button[2]').invoke('text').then((startbutton) => {
            cy.log("The name of the user is : " + startbutton);
            expect(startbutton).equal('Start Now')
        })
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[2]/button[2]').click({
            force: true
        })
        cy.get('.btn-brown').click({
            force: true
        })
        // var survey_status = localStorage.getItem('survey_status'); //retrieve the key
        // cy.log(survey_status)
        //////////////////////////////////////////////
    })
    ///////////////////////////

    it('Test case to verify Survey pages', function () {
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[2]/button[2]').invoke('text').then((startbutton) => {
            cy.log("click on : " + startbutton);
            expect(startbutton).equal('Start Now')
        })
        cy.wait(2000)
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[2]/button[2]').click({
            force: true
        })
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[2]/button[2]').click({
            force: true
        })
        var survey_status = cy.getLocalStorage('survey_status'); //retrieve the key
        cy.log(survey_status)     

    })


    ////////////////////////////
    it.skip('Test case to verify the dashboard page', function () {
        cy.title().should('eq', 'Reports | K4Coach')
        cy.log('verifying the title of the dashboard page')
        cy.xpath('//button[@class="mt-3 btn-brown btn-md rounded_30 p-10 border-0 px-5 py-3 cursor-pointer"]').click({
            force: true
        })
        cy.wait(2000);
        cy.title().should('eq', 'Dashboard | K4Coach')
        cy.xpath('//span[@class="black fw-bold me-3"]').invoke('text').then((username) => {
            cy.log("The name of the user is : " + username);
            expect(username).equal(username)
        })
        cy.wait(2000)
        cy.xpath("//div[@class='mt-3 d-sm-flex flex-sm-row flex-nowrap overflow-auto']").scrollTo('right')
        cy.wait(2000);
        cy.xpath("//div[@class='mt-3 d-sm-flex flex-sm-row flex-nowrap overflow-auto']").scrollTo('left')
        cy.wait(2000);
        cy.scrollTo('bottom')
        cy.wait(2000);
        cy.scrollTo('top')
    })

    it.skip('Test case to verify 4FSummary api ', () => {
        var FSummary_req = {
            "TPPID": TPPID
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/4FSummary_v2",
            method: "POST",
            auth: Auth,
            body: FSummary_req,
        }).then((response) => {
            expect(response.status).equal(200)
            cy.log("Cognitive Alignment Score", response.body["Cognitive Alignment Score"])
            cy.writeFile('cypress/fixtures/success.json', response.body)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.get('.active > .card > .card-body > .card-text').invoke('text').then((obj) => {
                    cy.log("This is Cognitive text: " + obj);
                    var focusScore = Math.round(file.Cognitive_Alignment_Score)
                    expect(focusScore).equal(Number(obj))
                })
                cy.get(':nth-child(2) > .card > .card-body > .card-text').invoke('text').then((obj) => {
                    cy.log("This is FUN_score Score: " + obj);
                    var funscore = Math.round(file.FUN_score)
                    expect(funscore).equal(Number(obj))
                })
                cy.get(':nth-child(3) > .card > .card-body > .card-text').invoke('text').then((obj) => {
                    cy.log("This is Growth_Behaviour_Score: " + obj);
                    var futurescore = Math.round(file.FUTURE_score)
                    expect(futurescore).equal(Number(obj))
                })
                cy.get(':nth-child(4) > .card > .card-body > .card-text').invoke('text').then((obj) => {
                    cy.log("This is Growth_Context_Score: " + obj);
                    var foundationscore = Math.round(file.FOUNDATION_score)
                    expect(foundationscore).equal(Number(obj))
                })
            })
        })
        cy.log('4FSummary api successfully tested')
    })

    it.skip('Test case to expand hamburger menu and navigate to dashboard page', () => {
        cy.log('expand hamburger menu and navigate to dashboard page')
        cy.xpath('//*[@id="menu_header"]/div/img').trigger('mouseover')
        cy.log('navigating to survey page from the hamburger menu')
        cy.xpath('//*[@id="sidebar"]/ul/a[2]/li/span[3]').invoke('text').then((Survey_page) => {
            expect('Survey').equal(Survey_page)
        })
        cy.xpath('//*[@id="sidebar"]/ul/a[2]/li/span[3]').click({
            force: true
        })
        cy.wait(5000);
        //cy.get('#menu_header > div > img').trigger('mouseover')
        cy.log('navigating to dashboard page from the hamburger menu')
        cy.xpath('//*[@id="sidebar"]/ul/a[1]/li/span[3]').invoke('text').then((Dashboard_page) => {
            expect('Dashboard').equal(Dashboard_page)
        })
        cy.xpath('//div/div/div//ul/a/li//span[2]/img[@src="/img/home_icon_brown.8c77db89.svg"]').click({
            force: true
        })
        cy.wait(5000);
        cy.log(' how did we arrive this insight?')
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]/div[2]/div/div/div/div[2]/div[3]/div/p').scrollIntoView({
            duration: 3000
        })
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]/div[2]/div/div/div/div[2]/div[3]/div/p').click({
            force: true
        })
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]/div[2]/div/div/div/div[2]/div[3]/div/p').scrollIntoView({
            duration: 3000
        })
        cy.wait(2000);
        cy.scrollTo('bottom')
        cy.wait(2000);
        cy.scrollTo('top')
        cy.wait(5000);
        cy.log(' What does this mean for you?')
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div/p').scrollIntoView({
            duration: 3000
        })
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div/p').click({
            force: true
        })
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div/p').scrollIntoView({
            duration: 3000
        })
        cy.wait(2000);
        cy.scrollTo('bottom')
        cy.wait(2000);
        cy.scrollTo('top')
    })

    it.skip('Test case to verify Insights API ', () => {
        var Req_body_insights = {
            "TPPID": TPPID,
            "userID": userID,
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/insights_v2",
            method: "POST",
            auth: Auth,
            body: Req_body_insights,
        }).then((response) => {
            expect(response.status).equal(200)
            cy.log('API response is ' + ' ' + response.body)
            var insights_response = response.body;
            this.insights_id = insights_response.insights[0]._id;
            cy.log('Insight Id is ' + ' ' + this.insights_id)
            this.goal_id = insights_response.insights[0].goalID;
            cy.log('Goal Id  is ' + ' ' + this.goal_id)
            var like1 = insights_response.insights[0].liked;
            this.like = like1.toString();
            cy.log('Like value is ' + ' ' + this.like)
            cy.log('TPPId  is ' + ' ' + TPPID)
            cy.log('UserId  is ' + ' ' + userID)
        })
    })

    it.skip('Test case to verify InsightsFeedback API', () => {
        var Req_body_insights_feedback = {
            "insightID": this.insights_id,
            "goalID": this.goal_id,
            "TPPID": TPPID,
            "userID": userID,
            "like": this.like
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/insightsFeedback_v2",
            method: "POST",
            auth: Auth,
            body: Req_body_insights_feedback,
        }).then((response) => {
            expect(response.status).equal(200)
            cy.log(response.body)
            cy.log(response.body.like)
            if (response.body.like !== this.like) {
                cy.log('click the like button')
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div[1]/div/div[2]/p[1]/span[2]/img').click({
                    force: true
                })
            } else {
                cy.wait(2000);
                cy.log('click on the undo of like button')
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div[1]/div/div[2]/p[1]/span[2]/img').click({
                    force: true
                })
            }
        })
        cy.wait(2000)
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]//button').invoke('text').then((view_recommendation) => {
            cy.log("clicking on the button : " + view_recommendation);

            expect(view_recommendation).equal(view_recommendation)
        })
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]//button').click({
            force: true
        })
        cy.wait(2000)
        cy.xpath("//div[@class='row mt-3 d-flex flex-row flex-nowrap overflow-auto']").scrollTo('right')
        cy.wait(2000);
        cy.xpath("//div[@class='row mt-3 d-flex flex-row flex-nowrap overflow-auto']").scrollTo('left')
        cy.wait(2000);
        cy.scrollTo('bottom')
        cy.wait(2000);
        cy.scrollTo('top')
    })

    it.skip('Test case to verify Recommendations API', () => {
        var reqbody = {
            "TPPID": TPPID,
            "userID": userID,
            "insightID": this.insights_id
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/recommendations_v2/",
            method: "POST",
            auth: Auth,
            body: reqbody,
        }).then((response) => {
            expect(response.status).equal(200)
            cy.log(response.body)
            cy.writeFile('cypress/fixtures/success.json', response.body)
            cy.log("Recommendations actionable response", response.body.recommendations[0].actionable)

            if (response.body.recommendations[0].actionable == true) {
                cy.log('click on No button')
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]//div/div/div[3]/span').scrollIntoView({
                    duration: 2000
                })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]//div/div/div[3]/span').click({
                    force: true
                })
                cy.xpath('//*[@class="modal-title"]').invoke('text').then((why) => {

                    expect('Why was this not actionable?').equal(why)
                })
                cy.xpath('//div[6]/label/span').click({
                    force: true
                })
                cy.xpath('//div[1]/textarea').focus().type('Please provide other reason')
                cy.xpath('//div[2]/button').click({
                    force: true
                })
                cy.wait(2000);
                cy.scrollTo('bottom')
                cy.wait(2000);
                cy.scrollTo('top')
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]//div/div/div[3]/span').scrollIntoView({
                    duration: 2000
                })

            } else if (response.body.recommendations[0].actionable == false) {
                cy.log('false value')
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]//div/div[2]/span').click({
                    force: true
                })
                cy.log('click on Yes button')
                cy.wait(2000);
                cy.scrollTo('bottom')
                cy.wait(2000);
                cy.scrollTo('top')
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]//div/div[2]/span').scrollIntoView({
                    duration: 2000
                })
            } else {
                cy.log('Null value')
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]//div/div[2]/span').click({
                    force: true
                })
                cy.log('click on Yes button')
                cy.wait(2000);
                cy.scrollTo('bottom')
                cy.wait(2000);
                cy.scrollTo('top')
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]//div/div[2]/span').scrollIntoView({
                    duration: 2000
                })
            }
        })
    })

    it.skip('Test case to verify Privacy policy', () => {
        cy.xpath('//ul/li/a/span[text()="Privacy Policy"]').invoke('text').then((privacy_policy) => {
            cy.log("Verify privacy policy button: " + privacy_policy);
            expect('Privacy Policy').equal(privacy_policy)
        })
        cy.xpath('//span[@class="black fw-bold me-3"]').click({
            force: true
        })
        cy.wait(2000)
        cy.xpath('//a[@href="https://k4coach.com/privacy-policy/"]').invoke('removeAttr', 'target').click({
            multiple: true,
            force: true
        })
        cy.wait(2000)
        cy.scrollTo('bottom')
        cy.wait(2000);
        cy.scrollTo('top')
        cy.go('back')
        cy.go('back')
        cy.scrollTo('top')
        cy.wait(2000);
    })

    it.skip('Test case to verify Findings Summary api ', () => {
        var FindingsSummary_req = {
            "TPPID": TPPID
        }
        cy.wait(2000);
        cy.log('Hover on help text')
        cy.xpath('//div/img[@class="cursor-pointer FOCUS0"]').click({
            force: true
        })
        cy.wait(2000);
        cy.xpath('//button[@class="btn btn-lg btn-brown rounded_25 fs-6" and @id="FOCUS0"]').invoke('text').then((Impact) => {
            cy.log("Verify Impact button    : " + Impact);
            expect('Impact ').equal(Impact)
        })
        cy.xpath('//button[@class="btn btn-lg btn-brown rounded_25 fs-6" and @id="FOCUS0"]').click({
            force: true
        })
        cy.wait(2000);
        cy.xpath('//div[@class="col-12 my-content-tab"]').click({
            force: true
        })
        cy.request({
            url: "https://dev.k4coach.com/backend/findingsSummary_v2",
            method: "POST",
            auth: Auth,
            body: FindingsSummary_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.log(response.body.body[0].FOCUS.measure.measureValue)
            cy.writeFile('cypress/fixtures/Findings_Success.json', response)
            cy.readFile('cypress/fixtures/Findings_Success.json').then(obj => {
                var file = obj;
                cy.log(file);
                expect(file.body.body[0].FOCUS.sourceMeasure[0].measure.measureValue).equal(response.body.body[0].FOCUS.sourceMeasure[0].measure.measureValue)
                expect(file.body.body[0].FOCUS.sourceMeasure[0].finding.findingValue).equal(response.body.body[0].FOCUS.sourceMeasure[0].finding.findingValue)
                cy.get(':nth-child(2) > .col-12 > :nth-child(1) > .findings_container > .flex_grow_measurename > .pl_60 > .font_weight_bold').invoke('text').then((invk1) => {
                    cy.log("This is " + invk1);
                    expect(file.body.body[0].FOCUS.sourceMeasure[0].measure.measureName).equal(invk1)
                })
                expect(file.body.body[0].FOCUS.sourceMeasure[1].measure.measureValue).equal(response.body.body[0].FOCUS.sourceMeasure[1].measure.measureValue)
                expect(file.body.body[0].FOCUS.sourceMeasure[1].finding.findingValue).equal(response.body.body[0].FOCUS.sourceMeasure[1].finding.findingValue)
                cy.get(':nth-child(2) > .col-12 > :nth-child(2) > .findings_container > .flex_grow_measurename > .pl_60 > .font_weight_bold').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.body[0].FOCUS.sourceMeasure[1].measure.measureName).equal(invk)
                })
            })
        })
        cy.log('Findings Summary api successfully tested')
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]//button').invoke('text').then((view_recommendation) => {
            cy.log("clicking on the button : " + view_recommendation);
            expect(view_recommendation).equal(view_recommendation)
        })
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]//button').click({
            force: true
        })
        cy.wait(5000)
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]/h5/button').scrollIntoView({
            duration: 5000
        })
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]/h5/button').invoke('text').then((view_Insight) => {
            cy.log("clicking on the button : " + view_Insight);
            expect(view_Insight).equal(view_Insight)
        })
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]/h5/button').click({
            force: true
        })
        cy.wait(3000)
    })

    it.skip('Test case to verify Terms of Use & Privacy policy', () => {
        cy.xpath('//*[@id="main_body_div"]/div[3]/div/p/span[2]').invoke('text').then((Terms_of_Use) => {
            cy.log("Verify Terms of Use & Privacy policy: " + Terms_of_Use);
            expect('Terms of Use | ').equal(Terms_of_Use)
        })
        cy.xpath('//*[@id="main_body_div"]/div[3]/div/p/span[1]').invoke('text').then((K4Coach) => {
            cy.log("Verify Terms of Use & Privacy policy: " + K4Coach);
            expect('© K4Coach | ').equal(K4Coach)
        })
        cy.wait(2000)
        cy.xpath('//a[@href="https://k4coach.com/privacy-policy/" and @class="dropdown-item"]').invoke('removeAttr', 'target').click({
            force: true
        })
        cy.wait(2000)
        cy.scrollTo('bottom')
        cy.wait(2000);
        cy.scrollTo('top')
        cy.go('back')
        cy.scrollTo('top')
        cy.wait(2000);
    })

    it.skip('Test case to verify tabbed view of focus, fun, future and foundation', () => {
        var FindingsSummary_req = {
            "TPPID": TPPID
        }
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[1]/div[1]/div[1]/div/div/h4').click({
            force: true
        })
        cy.request({
            url: "https://dev.k4coach.com/backend/findingsSummary_v2",
            method: "POST",
            auth: Auth,
            body: FindingsSummary_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.log(response.body.body[0].FOCUS.measure.measureValue)
            cy.writeFile('cypress/fixtures/Findings_Success.json', response)
            cy.readFile('cypress/fixtures/Findings_Success.json').then(obj => {
                var file = obj;
                cy.log(file);
                expect(file.body.body[0].FOCUS.sourceMeasure[0].measure.measureValue).equal(response.body.body[0].FOCUS.sourceMeasure[0].measure.measureValue)
                expect(file.body.body[0].FOCUS.sourceMeasure[0].finding.findingValue).equal(response.body.body[0].FOCUS.sourceMeasure[0].finding.findingValue)
                cy.get(':nth-child(2) > .col-12 > :nth-child(1) > .findings_container > .flex_grow_measurename > .pl_60 > .font_weight_bold').invoke('text').then((invk1) => {
                    cy.log("This is " + invk1);
                    expect(file.body.body[0].FOCUS.sourceMeasure[0].measure.measureName).equal(invk1)
                })
                expect(file.body.body[0].FOCUS.sourceMeasure[1].measure.measureValue).equal(response.body.body[0].FOCUS.sourceMeasure[1].measure.measureValue)
                expect(file.body.body[0].FOCUS.sourceMeasure[1].finding.findingValue).equal(response.body.body[0].FOCUS.sourceMeasure[1].finding.findingValue)
                cy.get(':nth-child(2) > .col-12 > :nth-child(2) > .findings_container > .flex_grow_measurename > .pl_60 > .font_weight_bold').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.body[0].FOCUS.sourceMeasure[1].measure.measureName).equal(invk)
                })
            })
        })
        cy.wait(2000);
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[1]/div[1]/div[2]/div/div/h4').click({
            force: true
        })
        cy.request({
            url: "https://dev.k4coach.com/backend/findingsSummary_v2",
            method: "POST",
            auth: Auth,
            body: FindingsSummary_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.log(response.body.body[0].FOCUS.measure.measureValue)
            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);
                expect(file.body.body[1].FUN.sourceMeasure[0].measure.measureValue).equal(response.body.body[1].FUN.sourceMeasure[0].measure.measureValue)
                expect(file.body.body[1].FUN.sourceMeasure[0].finding.findingValue).equal(response.body.body[1].FUN.sourceMeasure[0].finding.findingValue)
                cy.get(':nth-child(3) > .col-12 > :nth-child(1) > .findings_container > .flex_grow_measurename > .pl_60 > .font_weight_bold').invoke('text').then((invk1) => {
                    cy.log("This is " + invk1);
                    expect(file.body.body[1].FUN.sourceMeasure[0].measure.measureName).equal(invk1)
                })
                expect(file.body.body[1].FUN.sourceMeasure[1].measure.measureValue).equal(response.body.body[1].FUN.sourceMeasure[1].measure.measureValue)
                expect(file.body.body[1].FUN.sourceMeasure[1].finding.findingValue).equal(response.body.body[1].FUN.sourceMeasure[1].finding.findingValue)
                cy.get(':nth-child(3) > .col-12 > :nth-child(2) > .findings_container > .flex_grow_measurename > .pl_60 > .font_weight_bold').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.body[1].FUN.sourceMeasure[1].measure.measureName).equal(invk)
                })
            })
        })
        cy.wait(2000);
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[1]/div[1]/div[3]/div/div').click({
            force: true
        })
        cy.request({
            url: "https://dev.k4coach.com/backend/findingsSummary_v2",
            method: "POST",
            auth: Auth,
            body: FindingsSummary_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.log(response.body.body[2].FUTURE.measure.measureValue)
            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);
                expect(file.body.body[2].FUTURE.sourceMeasure[0].measure.measureValue).equal(response.body.body[2].FUTURE.sourceMeasure[0].measure.measureValue)
                expect(file.body.body[2].FUTURE.sourceMeasure[0].finding.findingValue).equal(response.body.body[2].FUTURE.sourceMeasure[0].finding.findingValue)
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[1]/div[4]/div/div[1]/div/div[1]/div/h6').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.body[2].FUTURE.sourceMeasure[0].measure.measureName).equal(invk2)
                })
            })
        })
        cy.wait(2000);
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[1]/div[1]/div[4]').click({
            force: true
        })
        cy.request({
            url: "https://dev.k4coach.com/backend/findingsSummary_v2",
            method: "POST",
            auth: Auth,
            body: FindingsSummary_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.log(response.body.body[3].FOUNDATION.measure.measureValue)
            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);
                expect(file.body.body[3].FOUNDATION.sourceMeasure[0].measure.measureValue).equal(response.body.body[3].FOUNDATION.sourceMeasure[0].measure.measureValue)
                expect(file.body.body[3].FOUNDATION.sourceMeasure[0].finding.findingValue).equal(response.body.body[3].FOUNDATION.sourceMeasure[0].finding.findingValue)
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[1]/div[5]/div/div[1]/div/div[1]/div/h6').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.body[3].FOUNDATION.sourceMeasure[0].measure.measureName).equal(invk2)
                })

            })
        })
    })

    it('Test case to verify Focus page enablers and radial graph', () => {
        //////////////////////
        //     // cy.visit('https://dev.k4coach.com/', {
        //     //     onBeforeLoad: (abc) => {
        //     //         abc.sessionStorage.clear()
        //     //     }
        //     // })

        //    // cy.visit('https://dev.k4coach.com/')
        //     cy.xpath("//input[@placeholder='Enter your Email']").type("larry.miller@comp2.com")
        //     cy.xpath(" //input[@placeholder='Enter Password']").type("4>aY1zR>")
        //     cy.xpath('//button[@value="Login"]').click({
        //         force: true
        //     })
        //     cy.wait(2000);
        cy.xpath('//*[@id="sidebar"]/ul/div/a[1]/li').click({
            force: true
        })
        cy.wait(2000);
        cy.scrollTo('bottom')
        cy.wait(2000);



        ////////////////////////
        var Focus_req = {
            "measureName": "Cognitive Alignment Score",
            "TPPID": 2
        }
        cy.xpath('//*[@id="sidebar"]/ul/div/a[1]/li').click({
            force: true
        })
        cy.scrollTo('bottom')
        cy.wait(2000);
        cy.scrollTo('top')
        cy.request({
            url: "https://dev.k4coach.com/backend/score_v2",
            method: "POST",
            auth: Auth,
            body: Focus_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);
                expect(file.body.result.measure.measureValue).equal(response.body.result.measure.measureValue)
                cy.xpath('//div[@class="card-body"]/p[@class="grey fw-bold"]').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.measure.measureName).equal(invk2)
                })
                expect(file.body.result.measure.measureValue).equal(response.body.result.measure.measureValue)
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[3]/div/div/div[1]/div/div/div/span[@class="fs-5 fw-bold"]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.measure.measureValue).equal(response.body.result.measure.measureValue)
                })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[1]/div/div/div[1]/div[1]/div[1]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[0].measure.measureQuestionText).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[1]/div/div/div[1]/div[1]/div[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[0].measure.measureValue).equal(response.body.result.sourceMeasure[0].measure.measureValue)
                })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[1]/div/div/div[2]/div[1]/div[1]/text()').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[1].measure.measureQuestionText).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[1]/div/div/div[2]/div[1]/div[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[1].measure.measureValue).equal(response.body.result.sourceMeasure[1].measure.measureValue)
                })
            })
        })
    })

    it('Test case to verify Focus page Context Alignment Component', () => {
        var Focus_req = {
            "TPPID": 2,
            "measureName": "Context Alignment Component",
        }
        // cy.xpath('//*[@id="menu_header"]/div/img').trigger('mouseover')
        // cy.xpath('//*[@id="sidebar"]/ul/div/a[1]/li').click({
        //     force: true
        // })
        cy.request({
            url: "https://dev.k4coach.com/backend/score_v2",
            method: "POST",
            auth: Auth,
            body: Focus_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/h5[1]').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.measure.measureName).equal(invk2)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/h5[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.measure.measureQuestionText).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/div/div[2]/h6').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.finding.finding).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/div/div[2]/div/p').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.impact.impactText[0]).equal(invk)
                })
            })
        })
    })

    it('Test case to verify Focus page Priority Alignment Component', () => {
        var Focus_req = {
            "TPPID": 2,
            "measureName": "Priority Alignment Component",
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/score_v2",
            method: "POST",
            auth: Auth,
            body: Focus_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)

            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/h5[1]').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.measure.measureName).equal(invk2)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/h5[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.measure.measureQuestionText).equal(invk)
                })

                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[1]/p').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.finding.finding).equal(invk)
                })
                var arr = []
                for (var i = 0; i < 6; i++) {
                    var obj = new Object();
                    file.body.result.sourceMeasure.forEach(function (element, index) {
                        if (index % 3 == 0) {
                            //cy.log(index)
                            obj['CeoMeasureValue'] = Object.values(file.body.result.sourceMeasure[index].measure.measureValue)[i];
                        } else if (index % 2 == 0) {

                            obj['measureExplanation'] = Object.values(file.body.result.sourceMeasure[index].measure.measureValue)[i];
                        } else {

                            obj['TeamMeasureValue'] = Object.values(file.body.result.sourceMeasure[index].measure.measureValue)[i];
                        }
                        obj['measureTitle'] = Object.keys(file.body.result.sourceMeasure[index].measure.measureValue)[i].replace(/_/g, ' ');
                    })
                    arr.push(obj);
                }
                cy.log(file.body.result)
                arr.sort(function (a, b) {
                    return a.CeoMeasureValue - b.CeoMeasureValue;
                });
                Object.assign(file.body.result, {
                    "priorityMeasures": arr
                });
                cy.writeFile('cypress/fixtures/success.json', file.body.result)
                cy.readFile('cypress/fixtures/success.json').then(obj => {
                    var readfile = obj;
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[3]/div/div[1]/div').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        var rank = readfile.priorityMeasures[0].CeoMeasureValue
                        expect(rank).equal(Number(invk))
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[3]/div/div[2]/h6').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        expect(readfile.priorityMeasures[0].measureTitle).equal(invk)
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[3]/div/div[3]/span').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        var percentage = readfile.priorityMeasures[0].TeamMeasureValue
                        percentage = percentage + '%';
                        expect(percentage).equal(invk)
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[4]/div/div[1]/div').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        var rank = readfile.priorityMeasures[1].CeoMeasureValue
                        expect(rank).equal(Number(invk))
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[4]/div/div[2]/h6').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        expect(readfile.priorityMeasures[1].measureTitle).equal(invk)
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[4]/div/div[3]/span').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        var percentage = readfile.priorityMeasures[1].TeamMeasureValue
                        percentage = percentage + '%';
                        expect(percentage).equal(invk)
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[5]/div/div[1]/div').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        var rank = readfile.priorityMeasures[2].CeoMeasureValue
                        expect(rank).equal(Number(invk))
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[5]/div/div[2]/h6').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        expect(readfile.priorityMeasures[2].measureTitle).equal(invk)
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[5]/div/div[3]/span').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        var percentage = readfile.priorityMeasures[2].TeamMeasureValue
                        percentage = percentage + '%';
                        expect(percentage).equal(invk)
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[6]/div/div[1]/div').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        var rank = readfile.priorityMeasures[3].CeoMeasureValue
                        expect(rank).equal(Number(invk))
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[6]/div/div[2]/h6').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        expect(readfile.priorityMeasures[3].measureTitle).equal(invk)
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[6]/div/div[3]/span').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        var percentage = readfile.priorityMeasures[3].TeamMeasureValue
                        percentage = percentage + '%';
                        expect(percentage).equal(invk)
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[7]/div/div[1]/div').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        var rank = readfile.priorityMeasures[4].CeoMeasureValue
                        expect(rank).equal(Number(invk))
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[7]/div/div[2]/h6').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        expect(readfile.priorityMeasures[4].measureTitle).equal(invk)
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[7]/div/div[3]/span').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        var percentage = readfile.priorityMeasures[4].TeamMeasureValue
                        percentage = percentage + '%';
                        expect(percentage).equal(invk)
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[8]/div/div[1]/div').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        var rank = readfile.priorityMeasures[5].CeoMeasureValue
                        expect(rank).equal(Number(invk))
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[8]/div/div[2]/h6').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        expect(readfile.priorityMeasures[5].measureTitle).equal(invk)
                    })
                    cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div[2]/div[8]/div/div[3]/span').invoke('text').then((invk) => {
                        cy.log("This is " + invk);
                        var percentage = readfile.priorityMeasures[5].TeamMeasureValue
                        percentage = percentage + '%';
                        expect(percentage).equal(invk)
                    })
                })
            })
        })
    })

    it('Test case to verify Focus page Growth Behaviour', () => {
        var Focus_req = {
            "TPPID": 2,
            "measureName": "Growth Behaviour",
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/score_v2",
            method: "POST",
            auth: Auth,
            body: Focus_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)

            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/h5[1]').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.measure.measureName).equal(invk2)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/h5[2]/text()').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.measure.measureQuestionText).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[1]/div/div[2]/div[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[0].measure.measureName).equal(invk.trim())
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[2]/div/div[2]/div[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[1].measure.measureName).equal(invk.trim())
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[3]/div/div[2]/div[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[2].measure.measureName).equal(invk.trim())
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[4]/div/div[2]/div[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[3].measure.measureName).equal(invk.trim())
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[5]/div/div[2]/div[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[4].measure.measureName).equal(invk.trim())
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[6]/div/div[2]/div[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[5].measure.measureName).equal(invk.trim())
                })
            })
        })
    })

    it('Test case to verify Focus page Context Alignment Component', () => {


        var Focus_req = {
            "TPPID": 2,
            "measureName": "Context Alignment Component",
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/score_v2",
            method: "POST",
            auth: Auth,
            body: Focus_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)

            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);

                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/h5[1]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.measure.measureName).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/h5[2]').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.measure.measureQuestionText).equal(invk2)
                })

                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/div/div[2]/h6').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.finding.finding).equal(invk)
                })

                // cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[2]/div/div[2]/div[2]').invoke('text').then((invk) => {
                //     cy.log("This is " + invk);
                //     expect(file.body.result.sourceMeasure[1].measure.measureName).equal(invk.trim())
                // })
                // cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[3]/div/div[2]/div[2]').invoke('text').then((invk) => {
                //     cy.log("This is " + invk);
                //     expect(file.body.result.sourceMeasure[2].measure.measureName).equal(invk.trim())
                // })
                // cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[4]/div/div[2]/div[2]').invoke('text').then((invk) => {
                //     cy.log("This is " + invk);
                //     expect(file.body.result.sourceMeasure[3].measure.measureName).equal(invk.trim())
                // })
                // cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[5]/div/div[2]/div[2]').invoke('text').then((invk) => {
                //     cy.log("This is " + invk);
                //     expect(file.body.result.sourceMeasure[4].measure.measureName).equal(invk.trim())
                // })
                // cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[6]/div/div[2]/div[2]').invoke('text').then((invk) => {
                //     cy.log("This is " + invk);
                //     expect(file.body.result.sourceMeasure[5].measure.measureName).equal(invk.trim())
                // })

                cy.xpath('//*[@id="radar-chart"]').should('be.visible').and(chart => {
                    // we can assert anything about the chart really
                    expect(chart.height()).to.be.greaterThan(200)
                })
                cy.xpath('//*[@id="radar-chart"]').should('have.css', 'opacity', '1')
                cy.xpath('//*[@id="radar-chart"]').trigger('mousemove').wait(1000)
                cy.xpath('//*[@id="radar-chart"]').trigger('mouseleave')


            })
        })
    })

    it('Test case to verify Fun page enablers and radial graph', () => {
        var Fun_req = {
            "TPPID": 2,
            "measureName": "FUN Score"
        }
        cy.xpath('//*[@id="sidebar"]/ul/div/a[2]/li').click({
            force: true
        })
        cy.wait(2000);
        cy.scrollTo('bottom')
        cy.wait(2000);


        cy.request({
            url: "https://dev.k4coach.com/backend/score_v2",
            method: "POST",
            auth: Auth,
            body: Fun_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                obj = parseInt(obj)
                cy.log(file);
                cy.wait(2000)
                expect(file.body.result.measure.measureValue).equal(response.body.result.measure.measureValue)
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[3]/div/div/p').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.measure.measureName).equal(invk2)
                })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[3]/div/div/div[1]/div/div/div/span[@class="fs-5 fw-bold"]').invoke('text').then((invk4) => {
                    cy.log("This is " + invk4);
                    cy.log("This is " + parseFloat(invk4))
                    expect(file.body.result.measure.measureValue).equal(parseFloat(invk4))
                })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[1]/div/div/p').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(invk).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[1]/div/div/div[1]/div[1]/div[1]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[0].measure.measureQuestionText).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[1]/div/div/div[1]/div[1]/div[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(invk).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[1]/div/div/div[2]/div[1]/div[1]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[1].measure.measureQuestionText).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[1]/div/div/div[2]/div[1]/div[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[1].measure.measureValue).equal(parseFloat(invk))
                })
            })
        })
    })

    it('Test case to verify Fun page Role Fitment Component', () => {
        var Fun_req = {
            "TPPID": 2,
            "measureName": "Role Fitment Component",
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/score_v2",
            method: "POST",
            auth: Auth,
            body: Fun_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/h5[1]').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.measure.measureName).equal(invk2)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/h5[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.measure.measureQuestionText).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/div/div[1]/div/div[3]/div[1]/div/span[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[0].measure.measureName).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/div/div[1]/div/div[3]/div[2]/div/span[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[1].measure.measureName).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/div/div[1]/div/div[3]/div[3]/div/span[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[2].measure.measureName).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/div/div[1]/div/div[3]/div[4]/div/span[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[3].measure.measureName).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/div/div[1]/div/div[3]/div[5]/div/span[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[4].measure.measureName).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/div/div[1]/div/div[3]/div[6]/div/span[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[5].measure.measureName).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/div/div[2]/h6').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.finding.finding).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[1]/div/div/div/div[2]/div/p').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.impact.impactText[0]).equal(invk)
                })
            })
        })
    })

    it('Test case to verify Fun page SPICED Component', () => {


        var Focus_req = {
            "TPPID": 2,
            "measureName": "SPICED Component",
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/score_v2",
            method: "POST",
            auth: Auth,
            body: Focus_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)

            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);

                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/h5[1]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.measure.measureName).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/h5[2]').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.measure.measureQuestionText).equal(invk2)
                })

                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div/div[2]/h6').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.finding.finding).equal(invk)
                })


                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[2]/div/div/div/div[2]/div/p/text()').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.impact.impactText[0]).equal(invk)
                })
                // cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[3]/div/div[2]/div[2]').invoke('text').then((invk) => {
                //     cy.log("This is " + invk);
                //     expect(file.body.result.sourceMeasure[2].measure.measureName).equal(invk.trim())
                // })
                // cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[4]/div/div[2]/div[2]').invoke('text').then((invk) => {
                //     cy.log("This is " + invk);
                //     expect(file.body.result.sourceMeasure[3].measure.measureName).equal(invk.trim())
                // })
                // cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[5]/div/div[2]/div[2]').invoke('text').then((invk) => {
                //     cy.log("This is " + invk);
                //     expect(file.body.result.sourceMeasure[4].measure.measureName).equal(invk.trim())
                // })
                // cy.xpath('//*[@id="main_body_div"]/div[3]/div/div[3]/div/div/div[1]/div[6]/div/div[2]/div[2]').invoke('text').then((invk) => {
                //     cy.log("This is " + invk);
                //     expect(file.body.result.sourceMeasure[5].measure.measureName).equal(invk.trim())
                // })

                cy.xpath('//*[@id="radar-chart"]').should('be.visible').and(chart => {
                    // we can assert anything about the chart really
                    expect(chart.height()).to.be.greaterThan(200)
                })
                cy.xpath('//*[@id="radar-chart"]').should('have.css', 'opacity', '1')

                cy.xpath('//*[@id="radar-chart"]').trigger('mousemove').wait(1000)

                cy.xpath('//*[@id="radar-chart"]').trigger('mouseleave')


            })
        })
    })

    it('Test case to verify Future page Neuroscience of future', () => {
        cy.xpath('//*[@id="sidebar"]/ul/div/a[3]/li').click({
            force: true
        })
        cy.wait(2000);
        cy.scrollTo('bottom')
        cy.wait(2000);


        var Future_req = {
            "TPPID": 2,
            "measureName": "FUTURE Score",
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/score_v2",
            method: "POST",
            auth: Auth,
            body: Future_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[1]/div/div/div[2]/p/span').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.measure.helpText).equal(invk2)
                })
            })
        })
    })

    it('Test case to verify Future page Our Growth Context', () => {
        var Future_req = {
            "TPPID": 2
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/compGrowthContext",
            method: "POST",
            auth: Auth,
            body: Future_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div/div/div[2]/p[2]/text()').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.companyGrowthContext).equal(invk2)
                })
            })
        })
    })

    it('Test case to verify Future page Team persona score', () => {


        var Fun_req = {
            "TPPID": 2,
            "measureName": "Team Persona Score"
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/score_v2",
            method: "POST",
            auth: Auth,
            body: Fun_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                obj = parseInt(obj)
                cy.log(file);
                cy.wait(2000)
                expect(file.body.result.measure.measureValue).equal(response.body.result.measure.measureValue)
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div/div/h5[@class="me-2 pb-1 fw-bold"]').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.measure.measureName).equal(invk2)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div/div/h5[@class="brown fw-bold"]').invoke('text').then((invk4) => {
                    cy.log("This is " + invk4);
                    // cy.log("This is " + parseFloat(invk4))
                    expect(file.body.result.measure.measureQuestionText).equal(invk4)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div/div/div/div[3]/h6[@class="fw-bold"]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.finding.finding).equal(invk)
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div/div/div/div[1]/div[2]/div[1]/h5[1]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[0].measure.measureValue.Resilients).equal(Number(invk))
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div/div/div/div[1]/div[2]/div[1]/h5[2]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[0].measure.measureValue.Navigators).equal(Number(invk))
                })
                cy.xpath('//*[@id="main_body_div"]/div[3]/div/div/div/div/div[1]/div[2]/div[1]/h5[3]').invoke('text').then((invk) => {
                    cy.log("This is " + invk);
                    expect(file.body.result.sourceMeasure[0].measure.measureValue.Explorers).equal(Number(invk))
                })
                cy.xpath('//*[@id="bubble-chart"]').should('be.visible').and(chart => {
                    expect(chart.height()).to.be.greaterThan(200)
                })
                cy.xpath('//*[@id="bubble-chart"]').should('have.css', 'opacity', '1')
                cy.xpath('//*[@id="bubble-chart"]').trigger('mousemove').wait(1000)
                cy.xpath('//*[@id="bubble-chart"]').trigger('mouseleave')

            })
        })
    })


    it('Test case to verify Foundation page Neuroscience of Foundation', () => {
        cy.xpath('//*[@id="sidebar"]/ul/div/a[4]/li').click({
            force: true
        })
        cy.scrollTo('bottom')
        cy.wait(2000);


        var Future_req = {
            "TPPID": 2,
            "measureName": "FUTURE Score",
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/score_v2",
            method: "POST",
            auth: Auth,
            body: Future_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);
                // cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[1]/div/div/div[2]/p/span').invoke('text').then((invk2) => {
                //     cy.log("This is " + invk2);
                //     expect(file.body.result.measure.helpText).equal(invk2)
                // })
            })
        })
    })

    it('Test case to verify Foundation page Our Growth Context', () => {
        var Future_req = {
            "TPPID": 2
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/compGrowthContext",
            method: "POST",
            auth: Auth,
            body: Future_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[2]/div/div/div[2]/p[2]/text()').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.companyGrowthContext).equal(invk2)
                })
            })
        })
    })

    it('Test case to verify Foundation page Enablers', () => {

        var Future_req = {
            "TPPID": 2,
            "measureName": "Foundation Score",
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/score_v2",
            method: "POST",
            auth: Auth,
            body: Future_req,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).equal(200)
            cy.writeFile('cypress/fixtures/success.json', response)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var file = obj;
                cy.log(file);
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[3]/div/div/p').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.measure.measureName).equal(invk2)
                })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[3]/div/div/div[1]/div/div/div/span[2]').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.measure.measureValue).equal(Number(invk2))
                })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[3]/div/div/div[3]').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.finding.finding).equal(invk2)
                })
                // cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[1]/div/div/div/div[1]/div[1]/text()').invoke('text').then((invk2) => {
                //     cy.log("This is " + invk2);
                //     expect(file.body.result.sourceMeasure[0].measure.helpText).equal(invk2)
                // })
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div/div[3]/div[1]/div/div/div/div[1]/div[2]').invoke('text').then((invk2) => {
                    cy.log("This is " + invk2);
                    expect(file.body.result.measure.measureValue).equal(Number(invk2))
                })
            })
        })
    })

    it('Test case to verify Foundation Capability Score pie chart', () => {

        cy.xpath('//*[@id="pie-chart"]').should('be.visible').and(chart => {

            expect(chart.height()).to.be.greaterThan(200)
        })

        cy.xpath('//*[@id="pie-chart"]').should('have.css', 'opacity', '1')
        cy.xpath('//*[@id="pie-chart"]').trigger('mousemove').wait(1000)

        cy.xpath('//*[@id="pie-chart"]').trigger('mouseleave')

    })

})