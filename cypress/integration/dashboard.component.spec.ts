describe('Dashboard Component Tests', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test=email-input]').type('teste@email.com');
    cy.get('[data-test=password-input]').type('123456');
    cy.get('[data-test=submit-button]').click();
  });

  it('Location should be correct', () => {
    cy.location().should(location => {
      expect(location.pathname).equal('/modules', 'Should login')
    });
  });

  it('Dashboard page should have product chart', () => {
    cy.get('apx-chart').should(x => {
      expect(x).exist;
    });
  });
})
