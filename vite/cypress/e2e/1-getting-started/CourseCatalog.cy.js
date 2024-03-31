describe('Course Catalog Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/Training/CourseCatalog') 
  })

  it('should display the correct title', () => {
    //page contains the correct title
    cy.contains('h1', 'Course Catalog').should('be.visible');
  });

  it('should display the list of products', () => {
    // page contains 4 products
    cy.get('.products').find('.product').should('have.length', 4); // Assuming there are three products
  });

  it('should display the next training information', () => {
    // page contains the next training info
    cy.contains('h1', 'Next Training: Feb & March 2024 in Monterey, CA!').should('be.visible');
    cy.contains('.ntInfo', 'Attend either in person at the Cypress Engineering Group Training Classroom or on Zoom').should('be.visible');
    cy.contains('.address', '8 Harris Court, Suite A6, Monterey, CA 93940').should('be.visible');
    cy.contains('.ntInfo', 'We look forward to seeing you at our upcoming training sessions!').should('be.visible');
  });

  it('should display the table of upcoming training dates', () => {
    // page contains table of upcoming training dates
    cy.get('.tableTitle').contains('h1', 'Upcoming Training Dates').should('be.visible');
    cy.get('.table').find('tbody').find('tr').should('have.length', 4); // Assuming there are four rows in the table
  });

  it('should display the training fee inclusions', () => {
    // page contains the training fee inclusions
    cy.contains('.bpTitle', 'Training Fee Includes:').should('be.visible');
    cy.contains('.bulletPoint', 'Training materials').should('be.visible');
    cy.contains('.bulletPoint', 'Continental breakfast and lunch for in-person trainees').should('be.visible');
    cy.contains('.bulletPoint', 'Certificate upon completion').should('be.visible');
  });

  it('should contain a "register" now button', () => {
    // page contains a 'register now' button
    cy.contains('.button-link', 'Register Now').should('be.visible');
    // Click on the register now button and assert that it navigates to the registration page
    cy.get('.button-link').click();
    cy.url().should('include', '/Training/Register');
  });
});
