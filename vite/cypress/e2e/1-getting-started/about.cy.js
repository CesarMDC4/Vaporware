describe('About Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/about');
  });

  it('should display the About section with correct content', () => {
    // Check to see if the "We are..." section is visible
    cy.contains('We are...').should('be.visible');
    cy.contains('Cypress Engineering Group (CEG), providing engineering services to companies primarily in California and Arizona.').should('be.visible');
    cy.contains('CEG (formerly KIE Consultants) was founded by Robby Kroeze and Sefa Isik in 2008.').should('be.visible');

    // Check to see if the "Facts" section is visible
    cy.contains('Facts').should('be.visible');
    cy.contains('Some magic numbers below. Counting up since 2008.').should('be.visible');
    cy.contains('180').should('be.visible');
    cy.contains('1,350').should('be.visible');
    cy.contains('78').should('be.visible');
    cy.contains('9').should('be.visible');

    //Check to see if the "OUR CLIENTS" section is visible
    cy.contains('OUR CLIENTS').should('be.visible');
    cy.get('.w-3\\/4').should('be.visible');
    cy.get('.slick-track').should('be.visible');

    //Check to see if the "Cypress" video section is visible and contains the video
    cy.contains('Cypress').should('be.visible');
    cy.get('video').should('be.visible');

    //Check to see if the "THE CYPRESS TEAM" section is visible and contains team member cards
    cy.contains('THE CYPRESS TEAM').should('be.visible');
    cy.get('#team .member').should('have.length.gt', 0);
  });
});
