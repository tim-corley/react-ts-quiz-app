describe('Mobile Smoke Tests', () => {
  it('Select Question Difficulty', () => {
    cy.viewport('iphone-8');
    cy.visit('http://localhost:3000/react-ts-quiz-app');
    cy.contains('hard').click();
    cy.get('input[name="hard"]').should('be.checked');
  });
  it('Clicking Start Button Prompts First Question', () => {
    cy.viewport('iphone-8');
    cy.visit('http://localhost:3000/react-ts-quiz-app');
    cy.contains('Start').click();
    cy.get('h2').should('have.text', 'Question: 1 / 10');
  });
  // TODO select first button from answers list
  // assert that Next button is disaplyed
});

describe('Desktop Smoke Tests', () => {
  it('Select Question Difficulty', () => {
    cy.visit('http://localhost:3000/react-ts-quiz-app');
    cy.contains('hard').click();
    cy.get('input[name="hard"]').should('be.checked');
  });
  it('Clicking Start Button Prompts First Question', () => {
    cy.visit('http://localhost:3000/react-ts-quiz-app');
    cy.contains('Start').click();
    cy.get('h2').should('have.text', 'Question: 1 / 10');
  });
  // TODO select first button from answers list
  // assert that Next button is disaplyed
});
