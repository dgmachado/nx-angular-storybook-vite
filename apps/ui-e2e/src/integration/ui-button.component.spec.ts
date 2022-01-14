describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uibuttoncomponent--primary&args=size:s;uiType:primary;'));
  it('should render the component', () => {
    cy.get('angular-storybook-ui-button').should('exist');
  });
});