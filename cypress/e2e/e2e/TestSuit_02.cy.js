/// <reference types="cypress" />
describe('smoke test suite', function (done) {

    // beforeEach(function () {
    // cy.getCookies().then(cookies => {
    //  const namesOfCookies = cookies.map(c => c.name)
    //  Cypress.Cookies.preserveOnce(...namesOfCookies)
    //   cy.reload()
    //  })   

    var like;
    var TPPId = 2;
    var userId = "61385d5cf519418af1d4c5da";
    var Auth = {
        "username": "K4-api-dev",
        "password": "DataTeam@2021"
    }
    beforeEach(() => {
        cy.restoreLocalStorage();
    });
    afterEach(() => {
        cy.saveLocalStorage();
    });
    it('Test case to verify login page', function () {
        cy.visit('https://dev.k4coach.com/', {
            onBeforeLoad: (abc) => {
                abc.sessionStorage.clear()
            }
        })
        cy.title().should('eq', 'Login | K4Coach')
        cy.log('Verifying title Login | K4Coach')
        cy.get('div[class="text-center col"]').find("img").should('be.visible');
        cy.log('Verifying title Kagami Diagnostics Logo')
        cy.xpath('//*[@id="login_left"]/div[2]/div/p[1]/span[2]').invoke('text').then((dot2) => {
            expect(dot2).equal(dot2)
        })
        cy.xpath("//button[2][@class='dot_btn me-2 hover']").trigger('mouseover')
        cy.log('Verifying Mouse hover')
        cy.wait(2000);
        cy.xpath('//*[@id="__BVID__8"]/div/p/span[1]').invoke('text').then((dot1) => {
            expect(dot1).equal(dot1)
        })
        cy.xpath("//button[1][@class='dot_btn me-2']").trigger('mouseover')
        cy.wait(2000);
        cy.xpath('//*[@id="__BVID__10"]/div/p/span[1]').invoke('text').then((dot3) => {
            expect(dot3).equal(dot3)
        })
        cy.xpath("//button[3][@class='dot_btn']").trigger('mouseover')
        cy.wait(2000);
        cy.get('#app > div > div.col-lg-5.col-sm-5.p-0 > a').invoke('removeAttr', 'target').click({
            force: true
        })
        cy.wait(2000)
        cy.scrollTo('bottom')
        cy.wait(5000);
        cy.scrollTo('top')
        cy.go('back')
        cy.wait(2000)
        cy.log('Entering credentials of user who is not president')
        cy.xpath("//input[@placeholder='Enter your Email']").type("theresa.wells@ghd.com")
        cy.xpath(" //input[@placeholder='Enter Password']").type("8Jo$TOqX{enter}")
        cy.xpath('//form//div[2]//p').invoke('text').then((error_text) => {
            cy.log("This is error message: " + error_text);
            expect('Username/Password Incorrect').equal(error_text)
        })
        cy.log('Verified error message upon giving invalid credentials')
        cy.wait(2000);
        cy.xpath("//input[@placeholder='Enter your Email']").type('{selectall}{backspace}')
        cy.xpath("//input[@placeholder='Enter Password']").type('{selectall}{backspace}')
        cy.wait(2000);
        cy.log('Entering credentials of user who is not president')
        cy.xpath("//input[@placeholder='Enter your Email']").type("ylvain.emeric@ghd.com")
        cy.xpath(" //input[@placeholder='Enter Password']").type("y~pv7#QQ{enter}")
        cy.xpath('//form//div[2]//p').invoke('text').then((error_text) => {
            cy.log("This is error message: " + error_text);
            expect('Username/Password Incorrect').equal(error_text)
        })
        cy.log('Verified error message upon giving invalid credentials')
        cy.wait(2000);
        cy.xpath("//input[@placeholder='Enter your Email']").type('{selectall}{backspace}')
        cy.xpath("//input[@placeholder='Enter Password']").type('{selectall}{backspace}')
        cy.wait(2000);
        cy.log('Entering credentials of user who is not president')
        cy.xpath("//input[@placeholder='Enter your Email']").type("arunika@mojro.com")
        cy.xpath(" //input[@placeholder='Enter Password']").type("Itz5cd|${enter}")
        cy.xpath('//form//div[2]//p').invoke('text').then((error_text) => {
            cy.log("This is error message: " + error_text);
            expect('Username/Password Incorrect').equal(error_text)
        })
        cy.log('Verified error message upon giving invalid credentials')
        cy.wait(2000);
        cy.xpath("//input[@placeholder='Enter your Email']").type('{selectall}{backspace}')
        cy.xpath("//input[@placeholder='Enter Password']").type('{selectall}{backspace}')
        cy.wait(2000);
        cy.log('Entering credentials of user who is president')
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
    })
    it('Test case to verify the dashboard page', function () {
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
        cy.xpath("//div[@class='row mt-3 d-flex flex-row flex-nowrap overflow-auto']").scrollTo('right')
        cy.wait(2000);
        cy.xpath("//div[@class='row mt-3 d-flex flex-row flex-nowrap overflow-auto']").scrollTo('left')
        cy.wait(2000);
        cy.scrollTo('bottom')
        cy.wait(2000);
        cy.scrollTo('top')
    })
    it('Test case to verify 4FSummary api ', () => {
        var FSummary_req = {
            "TPPId": TPPId
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/4FSummary",
            method: "POST",
            auth: Auth,
            body: FSummary_req,
        }).then((response) => {
            expect(response.status).equal(200)
            cy.log("Cognitive Alignment Score", response.body["Cognitive Alignment Score"])
            cy.writeFile('cypress/fixtures/success.json', response.body)
            cy.readFile('cypress/fixtures/success.json').then(obj => {
                var abc = obj;
                console.log(abc);
                cy.get(':nth-child(1) > .card > .card-body > .card-title').invoke('text').then((obj) => {
                    cy.log("This is Cognitive text: " + obj);
                    obj = parseInt(obj)
                    expect(abc["Cognitive Alignment Score"]).equal(obj)
                })
                cy.get(':nth-child(2) > .card > .card-body > .card-title').invoke('text').then((obj) => {
                    cy.log("This is Growth Behaviour Score: " + obj);
                    obj = parseInt(obj)
                    expect(abc["Growth Behaviour Score"]).equal(obj)
                })
                cy.get(':nth-child(3) > .card > .card-body > .card-title').invoke('text').then((obj) => {
                    cy.log("This is Growth Context Score: " + obj);
                    obj = parseInt(obj)
                    expect(abc["Growth Context Score"]).equal(obj)
                })
                cy.get(':nth-child(4) > .card > .card-body > .card-title').invoke('text').then((obj) => {
                    cy.log("This is Dominant Sales Persona: " + obj);
                    expect(abc["Dominant Sales Persona"]).equal(obj)
                })
            })
        })
        cy.log('4FSummary api successfully tested')
    })

    it('Test case to expand hamburger menu and navigate to dashboard page', () => {
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
        cy.get('#menu_header > div > img').trigger('mouseover')
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
    it('Test case to verify Insights API ', () => {
        var Req_body_insights = {
            "TPPId": TPPId,
            "userId": userId,
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/insights",
            method: "POST",
            auth: Auth,
            body: Req_body_insights,
        }).then((response) => {
            expect(response.status).equal(200)
            cy.log('API response is ' + ' ' + response.body)
            var insights_response = response.body;
            this.insights_id = insights_response.insights[0]._id;
            cy.log('Insight Id is ' + ' ' + this.insights_id)
            this.goal_id = insights_response.insights[0].goalMaterId;
            cy.log('Goal Id  is ' + ' ' + this.goal_id)
            var like1 = insights_response.insights[0].liked;
            this.like = like1.toString();
            cy.log('Like value is ' + ' ' + this.like)
            cy.log('TPPId  is ' + ' ' + TPPId)
            cy.log('UserId  is ' + ' ' + userId)
        })
    })
    it('Test case to verify InsightsFeedback API', () => {
        var Req_body_insights_feedback = {
            "insightId": this.insights_id,
            "goalId": this.goal_id,
            "TPPId": TPPId,
            "userId": userId,
            "like": this.like
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/insightsFeedback",
            method: "POST",
            auth: Auth,
            body: Req_body_insights_feedback,
        }).then((response) => {
            expect(response.status).equal(200)
            cy.log(response.body)
            cy.log(response.body.like)
            if (response.body.like !== this.like) {
                cy.log('click the like button')
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]/div[2]/div/div/div/div[1]/p[2]/span[2]/img').click({
                    force: true
                })
            } else {
                cy.wait(2000);
                cy.log('click on the undo of like button')
                cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]/div[2]/div/div/div/div[1]/p[2]/span[2]/img').click({
                    force: true
                })
            }
        })
        cy.wait(2000)
        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]/div[3]/div/div/div[3]/button').invoke('text').then((view_recommendation) => {
            cy.log("clicking on the button : " + view_recommendation);

            expect(view_recommendation).equal(view_recommendation)
        })

        cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[3]/div[3]/div/div/div[3]/button').click({
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

        if (TPPId == 2) {
            cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]/div[3]/div/button').invoke('text').then((read_more) => {
                cy.log("Verify read more button: " + read_more);
                expect('Read more').equal(read_more)
            })
            cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]/div[3]/div/button').click({
                force: true
            })
            cy.wait(2000)
            cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]/div[3]/div/button').invoke('text').then((read_less) => {
                cy.log("Verify read less button: " + read_less);
                expect('Read less').equal(read_less)
            })
            cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]/div[3]/div/button').click({
                force: true
            })
            cy.wait(2000)

        } else {
            cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]/div[2]/div/button').invoke('text').then((read_more) => {
                cy.log("Verify read more button: " + read_more);
                expect('Read more').equal(read_more)
            })
            cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]/div[2]/div/button').click({
                force: true
            })
            cy.wait(2000)
            cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]/div[2]/div/button').invoke('text').then((read_less) => {
                cy.log("Verify read less button: " + read_less);
                expect('Read less').equal(read_less)
            })
            cy.xpath('//*[@id="main_body_div"]/div[2]/div/div[2]/div/div/div/div/div[2]/div[2]/div/button').click({
                force: true
            })
            cy.wait(2000)
        }
    })

    it('Test case to verify Recommendations API', () => {
        var reqbody = {
            "TPPId": TPPId,
            "userId": userId,
            "insightId": this.insights_id
        }
        cy.request({
            url: "https://dev.k4coach.com/backend/recommendations",
            method: "POST",
            auth: Auth,
            body: reqbody,
        }).then((response) => {
            expect(response.status).equal(200)
            cy.log(response.body)
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

    it('Test case to verify Privacy policy', () => {
        cy.xpath('//ul/li/a/span').invoke('text').then((privacy_policy) => {
            cy.log("Verify privacy policy button: " + privacy_policy);
            expect('Privacy Policy').equal(privacy_policy)
        })
        cy.xpath('//span[@class="black fw-bold me-3"]').click({
            force: true
        })
        cy.wait(2000)
        cy.xpath('//a[@href="https://k4coach.com/privacy-policy/"]').invoke('removeAttr', 'target').click({
            force: true
        })
        cy.wait(2000)
        cy.scrollTo('bottom')
        cy.wait(2000);
        cy.scrollTo('top')
        cy.go('back')
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

})