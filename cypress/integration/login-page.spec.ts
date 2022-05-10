describe('Login Page Test', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('When username and password is valid should login', () => {
    cy.get('[data-test=email-input]').type('teste@email.com');
    cy.get('[data-test=password-input]').type('123456');
    cy.get('[data-test=submit-button]').click();

    cy.location().should(location => {
      expect(location.pathname).equal('/modules', 'Should login')
    });
  });

  it('When username and password is invalid should not login', () => {
    cy.get('[data-test=email-input]').type('random@email.com');
    cy.get('[data-test=password-input]').type('987654');
    cy.get('[data-test=submit-button]').click();

    cy.location().should(location => {
      expect(location.pathname).equal('/auth', 'Should not login')
    });
  })
})
