/// <reference types="cypress" />
describe('MFA code', function () {

    it('get MFA', function () {

        cy.task('queryDb',"SELECT 	mfa_code FROM `users` WHERE `id` = 3").then((mfa_code) => {
            cy.log("MFA code is: " + mfa_code);
    })
})
})


