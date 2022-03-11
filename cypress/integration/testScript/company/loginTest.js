/// <reference types="Cypress" />
describe('Admin can Login', function (){
    let baseUrl = Cypress.env('localUrl');

    beforeEach(function() {
        cy.visit(baseUrl);
    });
    it('Verify that admin can login with valid email and password', function (){
        cy.wait(5000);
        cy.get('#email')
            .type("testuser.hari1@gmail.com");
        cy.get('#password')
            .type("test@123");
        cy.get('#btn-login')
            .click();
    });
});