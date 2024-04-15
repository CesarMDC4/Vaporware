describe('Register Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/Training/Register');
    });
  
    it('should display the register page with training information', () => {
      cy.contains('TRAINING').should('be.visible');
      cy.get('.table-container').should('be.visible');
      cy.contains('2024 Training Schedule').should('be.visible');
      cy.contains('March 2024').should('be.visible');
      cy.contains('May 2024').should('be.visible');
      cy.contains('July & August 2024').should('be.visible');
      cy.contains('September & October 2024').should('be.visible');
      cy.contains('CEG-TR-101').should('be.visible');
      cy.contains('Fri. March 8').should('be.visible');
      cy.contains('CalARP/RMP/PSM/CERS/Tier II Regulatory Compliance').should('be.visible');
    });
  
    it('should display a link to the training location map', () => {
      cy.contains('Cypress Engineering Group Training Classroom').should('have.attr', 'href', '/src/assets/img/CEG Office _ Parking.png');
    });
  
    it('should display bonus information and contact details', () => {
      cy.contains('Bonus!').should('be.visible');
      cy.contains('Bring your facility P&ID along with any questions you have').should('be.visible');
      cy.contains('Questions?').should('be.visible');
      cy.contains('Call').should('be.visible');
      cy.contains('training@cypresseg.com').should('have.attr', 'href', 'mailto:training@cypresseg.com');
    });
  
    it('should display correct styling for oval shape', () => {
      cy.get('.oval').should('have.css', 'width', '300px');
      cy.get('.oval').should('have.css', 'height', '200px');
      cy.get('.oval').should('have.css', 'border-radius', '50%');
    });
  });
  