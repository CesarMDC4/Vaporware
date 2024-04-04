describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('displays upcoming training opportunities section', () => {
    cy.contains('Upcoming training opportunities!').should('be.visible')
    cy.contains('Oct & Nov 2023 in Monterey, CA').should('be.visible')
    cy.contains('Ammonia Refrigeration, Regulatory Compliance, and HAZWOPER Training').should('be.visible')
    cy.contains('In-person and online options available.').should('be.visible')
    cy.contains('Click below to go to our new training registration page for more info and to register.').should('be.visible')
    cy.get('a[href="http://localhost:5173/Training/Register"]').should('be.visible').and('have.text', 'Register Now!')
  })

  it('displays service cards section', () => {
    cy.get('.max-w-screen-xl').should('be.visible')
    cy.get('.max-w-sm').should('have.length', 5) // For 5 service cards
  })

  it('displays Cypress Engineering Group service card', () => {
      cy.contains('Cypress Engineering Group').should('be.visible')
      cy.contains('KIE Consultants has transformed into Cypress Engineering Group with all good things about KIE remaining the same, plus new team members and refreshed enthusiasm.').should('be.visible')
      cy.get('a[href="/about"]').should('be.visible').and('contain.text', 'Cypress Engineering Group')
    })

  it('displays HVAC service card', () => {
    cy.contains('HVAC, Plumbing, Fire Protection, Building Cx, Energy Audits').should('be.visible')
    cy.contains('Our field experience combined with the knowledge of engineering concepts gives us an advantageous perspective that allows us to design better systems with constructability and practicality in mind as well as conduct and prepare constructability review comments for clients.').should('be.visible')
    cy.get('a[href="/services/service1"]').should('be.visible').and('have.text', 'HVAC, Plumbing, Fire Protection, Building Cx, Energy Audits')
  })

  it('displays Industrial Refrigeration service card', () => {
    cy.contains('Industrial Refrigeration').should('be.visible')
    cy.contains('Our promise to you is to provide you the latest technology, latest trends, and up-to-date refrigeration solutions.').should('be.visible')
    cy.get('a[href="/services/service3"]').should('be.visible').and('have.text', 'Industrial Refrigeration')
  })

  it('displays Environmental & Regulatory Compliance service card', () => {
    cy.contains('Environmental & Regulatory Compliance').should('be.visible')
    cy.contains('We love ammonia, and we love it safe. We will make sure that you remain in safe operating limits.').should('be.visible')
    cy.get('a[href="/services/service4"]').should('be.visible').and('have.text', 'Environmental & Regulatory Compliance')
  })

  it('displays Training service card', () => {
    cy.contains('Training').should('be.visible')
    cy.contains('We provide RMP/PSM regulatory compliance, ammonia refrigeration, HAZWOPER, and industrial general permit storm water compliance training.').should('be.visible')
    cy.get('a[href="/services/service6"]').should('be.visible').and('have.text', 'Training')
  })
})