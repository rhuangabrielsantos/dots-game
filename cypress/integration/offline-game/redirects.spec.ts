describe('Redirect offline game tests', () => {
  it('given user click in offline game button, should redirect to offline lobby page', () => {
    cy.visit('/')

    cy.get('#offline-game-button').click()

    cy.url().should('include', '/lobby')
  })

  it('given the user click in play button, should redirect to offline game play', () => {
    cy.visit('/lobby')

    cy.get('#name-input-first-player').type('Player 1')
    cy.get('#color-select-first-player > [data-color="#e02130"]').click()
    cy.get('#ready-button-first-player').click()

    cy.get('#name-input-second-player').type('Player 2')
    cy.get('#color-select-second-player > [data-color="#429867"]').click()
    cy.get('#ready-button-second-player').click()

    cy.get('#play-button').click()

    cy.url().should('include', '/game')
  })

  it('given the user click in play again button, should redirect to offline game play', () => {
    cy.visit('/lobby')

    cy.get('#name-input-first-player').type('Player 1')
    cy.get('#color-select-first-player > [data-color="#e02130"]').click()
    cy.get('#ready-button-first-player').click()

    cy.get('#name-input-second-player').type('Player 2')
    cy.get('#color-select-second-player > [data-color="#429867"]').click()
    cy.get('#ready-button-second-player').click()

    cy.get('#play-button').click()

    prepareDrawGame()

    cy.get('#play-again-button').click()
    cy.url().should('include', '/game')

    prepareDrawGame()
    cy.url().should('include', '/winner')
  })
})

function prepareDrawGame() {
  cy.get('[data-lines-coordinates="0x0"]').click()
  cy.get('[data-lines-coordinates="0x1"]').click()
  cy.get('[data-lines-coordinates="0x2"]').click()
  cy.get('[data-lines-coordinates="0x3"]').click()

  cy.get('[data-lines-coordinates="2x0"]').click()
  cy.get('[data-lines-coordinates="2x1"]').click()
  cy.get('[data-lines-coordinates="2x2"]').click()
  cy.get('[data-lines-coordinates="2x3"]').click()

  cy.get('[data-lines-coordinates="4x0"]').click()
  cy.get('[data-lines-coordinates="4x1"]').click()
  cy.get('[data-lines-coordinates="4x2"]').click()
  cy.get('[data-lines-coordinates="4x3"]').click()

  cy.get('[data-lines-coordinates="6x0"]').click()
  cy.get('[data-lines-coordinates="6x1"]').click()
  cy.get('[data-lines-coordinates="6x2"]').click()
  cy.get('[data-lines-coordinates="6x3"]').click()

  cy.get('[data-lines-coordinates="8x0"]').click()
  cy.get('[data-lines-coordinates="8x1"]').click()
  cy.get('[data-lines-coordinates="8x2"]').click()
  cy.get('[data-lines-coordinates="8x3"]').click()

  cy.get('[data-lines-coordinates="1x0"]').click()
  cy.get('[data-lines-coordinates="1x1"]').click()
  cy.get('[data-lines-coordinates="1x2"]').click()
  cy.get('[data-lines-coordinates="1x3"]').click()
  cy.get('[data-lines-coordinates="1x4"]').click()

  cy.get('[data-lines-coordinates="3x0"]').click()
  cy.get('[data-lines-coordinates="3x1"]').click()
  cy.get('[data-lines-coordinates="3x2"]').click()
  cy.get('[data-lines-coordinates="3x3"]').click()
  cy.get('[data-lines-coordinates="3x4"]').click()

  cy.get('[data-lines-coordinates="5x0"]').click()
  cy.get('[data-lines-coordinates="5x1"]').click()
  cy.get('[data-lines-coordinates="5x2"]').click()
  cy.get('[data-lines-coordinates="5x3"]').click()
  cy.get('[data-lines-coordinates="5x4"]').click()

  cy.get('[data-lines-coordinates="7x0"]').click()
  cy.get('[data-lines-coordinates="7x1"]').click()
  cy.get('[data-lines-coordinates="7x2"]').click()
  cy.get('[data-lines-coordinates="7x3"]').click()
  cy.get('[data-lines-coordinates="7x4"]').click()
}
