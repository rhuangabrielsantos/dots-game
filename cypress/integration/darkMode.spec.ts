describe('Dark mode tests', () => {
  it('given user click, when dark mode is disabled, should activate dark mode', () => {
    cy.visit('/')

    cy.get('#dark-mode-button').should('have.attr', 'aria-checked', 'false')

    cy.get('#dark-mode-button').click()

    cy.get('#dark-mode-button').should('have.attr', 'aria-checked', 'true')
    cy.get('body').should('have.css', 'background-color', 'rgb(32, 33, 36)')
  })

  it('given user click, when dark mode is enabled, should disable dark mode', () => {
    cy.visit('/')

    cy.get('#dark-mode-button').click()
    cy.get('#dark-mode-button').click()

    cy.get('#dark-mode-button').should('have.attr', 'aria-checked', 'false')
    cy.get('body').should('have.css', 'background-color', 'rgb(246, 241, 235)')
  })
})
