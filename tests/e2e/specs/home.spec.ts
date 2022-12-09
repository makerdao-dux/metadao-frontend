describe('Home page', () => {
  it('should render', () => {
    cy.visit('/').then(() => {
      console.log('AHHH IM VISITIIIING');
    });
  });
});
