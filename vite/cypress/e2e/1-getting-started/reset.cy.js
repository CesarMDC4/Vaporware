describe('Reset Password', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/reset');
    });
  
    it('should display the reset password form', () => {
      cy.get('h2').should('contain', 'Reset Password');
      cy.get('form').should('exist');
      cy.get('input[type="email"]').should('exist');
      cy.get('button[type="submit"]').should('exist').and('contain', 'Send Reset Email');
    });
  
    it('should display success message after submitting valid email', () => {
        const email = 'test@example.com';
        cy.get('form input[type="email"]').type(email);
        cy.get('form button[type="submit"]').click();
        cy.contains('Password reset email sent. Please check your inbox').should('be.visible');
    });
    
    
  
    it('should handle invalid email', () => {
      const invalidEmail = 'invalid';
      cy.get('input[type="email"]').type(invalidEmail);
      cy.get('button[type="submit"]').click();
      cy.on('window:alert', (message) => {
        expect(message).to.contain('Firebase: Error (auth/invalid-email).');
      });
    });
  });