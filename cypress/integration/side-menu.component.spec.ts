describe('Side Menu Component Tests', () => {

  before(() => {
    cy.visit('/');
    cy.get('[data-test=email-input]').type('teste@email.com');
    cy.get('[data-test=password-input]').type('123456');
    cy.get('[data-test=submit-button]').click();

    cy.get('[data-test=menu-button]').click();
  });

  it('Should have dashboard link', () => {
    // cy.get('[data-test=menu-button]').click();
    cy.get('[data-test=dashboard-link]').click();

    cy.location().should(location => {
      expect(location.pathname).equal('/modules', 'Should access dashboard page')
    });
  });

  it('Should have customers link', () => {
    // cy.get('[data-test=menu-button]').click();
    cy.get('[data-test=customer-link]').click();

    cy.location().should(location => {
      expect(location.pathname).equal('/modules/customer', 'Should access customers page')
    });
  });

  it('Should have products link', () => {
    // cy.get('[data-test=menu-button]').click();
    cy.get('[data-test=product-link]').click();

    cy.location().should(location => {
      expect(location.pathname).equal('/modules/product', 'Should access products page')
    });
  });

})
