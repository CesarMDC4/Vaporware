describe('Contact', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/contact')
  })

  it('should display all elements on the webpage', () => {
    cy.get('.text-center').should('be.visible');
    cy.get('ion-icon[name="location-outline"]').should('be.visible');
    //cy.get('ion-icon[name="call-outline"]').should('be.visible');
    cy.get('ion-icon[name="mail-outline"]').should('be.visible');
    cy.get('[name="name"]').should('be.visible');
    cy.get('[name="email"]').should('be.visible');
    cy.get('[name="message"]').should('be.visible');
    
    
    cy.get('button[type="submit"]').should('be.visible');
    cy.get('iframe[title="Google Map"]').should('be.visible');
  });
  
  it('should fill out and submit the contact form', () => {
    cy.get('[name="name"]').type('Mickey M');
    cy.get('[name="email"]').type('mm@gmail.com');
    cy.get('[name="message"]').type('Bye bye!');
    
  
    cy.get('button[type="submit"]').click();
  
    // Check if the form submission was successful
    //cy.get('.text-center').should('contain', 'Form submitted');
  });
  

    it('should display an error message if reCAPTCHA is not completed', () => {
      cy.get('[name="name"]').type('Mickey M');
      cy.get('[name="email"]').type('mm@gmail.com');
      cy.get('[name="message"]').type('Hello!');
  
      cy.get('button[type="submit"]').click();
  
      // Check if the error message is displayed
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Please complete the reCAPTCHA verification.');
      });
    });
  });
  