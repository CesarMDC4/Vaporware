describe('Navbar', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/') // Assuming the navbar is present on the homepage
    })
  
    it('displays the logo correctly', () => {
      cy.get('img').should('have.attr', 'src', 'https://www.cypresseg.com/img/logo/CypressEG.png')
    })
  
    it('navigates to different pages on clicking navigation links', () => {
      cy.get('nav').contains('Home').click()
      cy.url().should('include', 'http://localhost:5173/')
  
      cy.get('nav').contains('About Us').click()
      cy.url().should('include', 'http://localhost:5173/about')
  
      // Similarly, test for other navigation links
    })
  
    it('opens and closes mobile menu properly', () => {
      cy.viewport('iphone-x') // Emulate mobile viewport
  
      // Open mobile menu
      cy.get('button[aria-label="Open main menu"]').click()
      cy.get('nav').should('have.class', 'block')
  
      // Close mobile menu
      cy.get('button[aria-label="Open main menu"]').click()
      cy.get('nav').should('have.class', 'hidden')
    })
  
    // Test dropdown menus
    it('displays dropdown menus properly', () => {
      cy.get('nav').contains('Services').click()
      cy.get('a[href="http://localhost:5173/services/service1"]').should('exist')
      cy.get('a[href="http://localhost:5173/services/service2"]').should('exist')
      // Test other dropdown items as well
    })
  
    it('navigates to correct pages from dropdown menus', () => {
      cy.get('nav').contains('Services').click()
      cy.get('a[href="http://localhost:5173/services/service1"]').click()
      cy.url().should('include', 'http://localhost:5173/services/service1')

    })
  
    // Test shopping cart icon
    it('navigates to cart page when shopping cart icon is clicked', () => {
      cy.get('nav').find('a[href="http://localhost:5173/cart"]').click()
      cy.url().should('include', 'http://localhost:5173/cart')
    })
  })