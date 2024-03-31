describe('Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/login'); // Visit the Login page before each test
    });
  
    it('should display the login form', () => {
      cy.get('form').should('exist'); // Check if the login form exists
      cy.get('input[name="email"]').should('exist'); // Check if the email input field exists
      cy.get('input[name="password"]').should('exist'); // Check if the password input field exists
      cy.get('button[type="submit"]').should('exist'); // Check if the submit button exists
    });
  
    it('should display an error message for invalid credentials', () => {
      cy.get('input[name="email"]').type('invalid@email.com'); // Enter an invalid email
      cy.get('input[name="password"]').type('invalidpassword'); // Enter an invalid password
      cy.get('button[type="submit"]').click(); // Submit the form
  
      // Check for an error message or any other expected behavior for invalid credentials
      cy.on('window:alert', (message) => {
        expect(message).to.contain('Login failed');
      });
    });
  
    it('should log in with valid credentials', () => {
      cy.get('input[name="email"]').type('testuser@gmail.com'); // Enter a valid email
      cy.get('input[name="password"]').type('testing123'); // Enter a valid password
      cy.get('button[type="submit"]').click(); // Submit the form
  
      // Check if the user is redirected to the correct page or any other expected behavior for successful login
      cy.url().should('include', 'http://localhost:5173/test');
    });
  });