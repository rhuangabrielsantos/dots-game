import { prepareDrawGame } from '../../utils/GameUtils.spec'

describe('Redirect offline game tests', () => {
  it('given user click in offline game button, should redirect to offline lobby page', () => {
    cy.visit('/create-game')
    cy.get('#offline-game-create').click()

    cy.url().should('include', '/lobby')
  })

  it('given the user click in play button, should redirect to offline game play', () => {
    cy.visit('/create-game')
    cy.get('#offline-game-create').click()

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
    cy.visit('/create-game')
    cy.get('#offline-game-create').click()

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
