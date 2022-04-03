describe('Dark mode tests', () => {
  it('test dark mode, given user click, when dark mode is disabled, should activate dark mode', () => {
    cy.visit('/')

    cy.get('#dark-mode-button').should('have.attr', 'aria-checked', 'false')

    cy.get('#dark-mode-button').click()

    cy.get('#dark-mode-button').should('have.attr', 'aria-checked', 'true')
    cy.get('#root').should('have.css', 'background-color', 'rgb(32, 33, 36)')
  })

  it('test dark mode, given user click, when dark mode is enabled, should disable dark mode', () => {
    cy.visit('/')

    cy.get('#dark-mode-button').click()
    cy.get('#dark-mode-button').click()

    cy.get('#dark-mode-button').should('have.attr', 'aria-checked', 'false')
    cy.get('#root').should('have.css', 'background-color', 'rgb(246, 241, 235)')
  })
})
