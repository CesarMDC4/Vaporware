describe('Footer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/footer');
  });

  it('should display the footer with correct content', () => {
    //Check if the footer is visible
    cy.get('.bg-gray-500').should('be.visible');

    //Check if the logo is present and has correct attributes
    cy.get('img[src="/src/assets/img/logo/CypressEG.png"]').should('be.visible');
    cy.get('img[src="/src/assets/img/logo/CypressEG.png"]').should('have.attr', 'alt', 'Logo');
    cy.get('img[src="/src/assets/img/logo/CypressEG.png"]').should('have.attr', 'class', 'mb-4 object-scale-down max-h-24');

    //Check if the contact information is displayed correctly
    cy.contains('CONTACT US').should('be.visible');
    cy.contains('8 Harris Court Suite A8').should('be.visible');
    cy.contains('Monterey, CA 93940').should('be.visible');
    cy.contains('United States').should('be.visible');
    cy.contains('Phone: +1 831.218.1802').should('be.visible');
    cy.contains('Email: info@cypresseg.com').should('be.visible');

    //Check to see if the copyright notice is displayed correctly
    cy.contains(`© ${new Date().getFullYear()} Cypress Engineering Group, LLC. All Rights Reserved`).should('be.visible');
  });
});
