describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');

    cy.get('[data-testId="email-input"]').type('gustavo@gmail.com');

    cy.get('[data-testId="senha-input"]').type('123');

    cy.get('[data-testId="submit-button"]').click();
  });

  it('calls addFruitById and removeFruitById when plus and minus button is clicked', () => {
    cy.get('[data-testId="buttonGroup-plus-button"]').first().click();
    cy.get('[data-testId="buttonGroup-plus-button"]').first().click();

    cy.window().then(win => {
      if (win.app && win.app.$store && win.app.$store.dispatch) {
        expect(win.app.$store.dispatch).to.be.calledWith({ type: 'ADD_FRUIT_BY_ID', fruitId: 1 });
      }
    });

    cy.get('[data-testId="buttonGroup-minus-button"]').first().click();

    cy.window().then(win => {
      if (win.app && win.app.$store && win.app.$store.dispatch) {
        expect(win.app.$store.dispatch).to.be.calledWith({ type: 'ADD_FRUIT_BY_ID', fruitId: 1 });
      }
    });
  });
});
