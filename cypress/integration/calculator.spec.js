describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '234')
  });

  it('should update the display with the result of the arithmetical operation', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click()
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  });

  it('should be able to make multiple operations', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click()
    cy.get('#number3').click();
    cy.get('#operator-multiply').click()
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9')
  });

  it('should display negative result', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3');
  });

  it('should display decimals', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.5');
  });
  
  it('should display very large numbers', () => {
    Array(20).fill().forEach((i)=>{
      cy.get('#number1').click();
    });
    cy.get('#operator-divide').click();
    Array(20).fill().forEach((i)=>{
      cy.get('#number1').click();
    });
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1');
  });

  it('test devide by 0', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Not a Number');
  });
})