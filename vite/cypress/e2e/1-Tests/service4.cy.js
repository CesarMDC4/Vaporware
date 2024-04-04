describe('Service4', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/services/service4')
    });

    
    it('displays the name of the service, slides and arrow buttons', () => {
        cy.contains('Environmental Compliance').should('be.visible')
        cy.get('button[name="left"]').should('be.visible')
        cy.get('button[name="right"]').should('be.visible')
        cy.get('button[name="left"]').click()
        cy.get('button[name="right"]').click()
        cy.get('[id="CurrSlide"]').should('be.visible')
      });
});