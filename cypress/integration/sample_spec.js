describe("Member Login", function () {
    it('Perform login', function () {
        cy.visit("http://localhost:8080");
        cy.url().should('include', 'login')
        cy.get('#inputEmail').type("carrie@carrie.com")
        cy.get("#inputPassword").type('123')
        cy.get('.login_btn').find('button').first().click()
    });
});

