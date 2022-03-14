/// <reference types="Cypress" />
describe('Login functionality', function (){
    let baseUrl = Cypress.env('localUrl');

    beforeEach(function() {
        cy.visit(baseUrl);
    });

    it('Verify that admin can login with valid email and password', function (){
        
        cy.get('#username')
            .type("syuszk+stg@gmail.com");
        cy.get('#password')
            .type("auth123!");
        cy.get('.c56665bee > .c9c3c2470')
            .click();
    });

    it('Verify that admin can login with invalid email and valid password', function (){
        
        cy.get('#username')
            .type("syuszk+stg@gmail");
        cy.get('#password')
            .type("auth123!");
        cy.get('.c56665bee > .c9c3c2470')
            .click();
        cy.get('#error-message').should('Wrong email or password')
    });

    it('Verify that admin can login with valid email and invalid password', function (){
        
        cy.get('#username')
            .type("syuszk+stg@gmail.com");
        cy.get('#password')
            .type("auth1234");
        cy.get('.c56665bee > .c9c3c2470')
            .click();
        cy.get('#error-message').should('Wrong email or password')
    });
});