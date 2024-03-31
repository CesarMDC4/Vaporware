describe('Service3', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/services/service3')
    });

    
    it('displays the name of the service, slides and arrow buttons', () => {
        cy.contains('Industrial Refrigeration').should('be.visible')
        cy.get('button[name="left"]').should('be.visible')
        cy.get('button[name="right"]').should('be.visible')
        cy.get('button[name="left"]').click()
        cy.get('button[name="right"]').click()
        cy.get('[id="CurrSlide"]').should('be.visible')
      });
});