describe('Login Page', () => {
  it('should log in with valid credentials', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('[data-testId="email-input"]').type('gustavo@gmail.com');

    cy.get('[data-testId="senha-input"]').type('123');

    cy.get('[data-testId="submit-button"]').click();

    cy.url().should('include', '/home');
  });

  it('should not log in with invalid credentials', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('[data-testId="email-input"]').type('gustavo@gmail.com');
    cy.get('[data-testId="senha-input"]').type('12345678');
    cy.get('[data-testId="submit-button"]').click();

    // Verifica se a mensagem de erro está presente no DOM
    cy.contains('Erro ao fazer login: Credenciais inválidas').should('exist');
  });
});