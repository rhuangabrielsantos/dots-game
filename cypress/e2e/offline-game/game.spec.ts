import {
  prepareDrawGame,
  prepareFirstWinnerGame,
  prepareSecondWinnerGame,
} from '../../utils/GameUtils.spec'

describe('Offline game play tests', () => {
  beforeEach(() => {
    cy.visit('/create-game')
    cy.get('#offline-game-create').click()

    cy.get('#name-input-first-player').type('first')
    cy.get('#color-select-first-player > [data-color="#e02130"]').click()
    cy.get('#ready-button-first-player').click()

    cy.get('#name-input-second-player').type('second')
    cy.get('#color-select-second-player > [data-color="#429867"]').click()
    cy.get('#ready-button-second-player').click()

    cy.get('#play-button').click()

    cy.url().should('include', '/game')
  })

  it('given the user click in lines, should line colors match user colors', () => {
    cy.get('[data-lines-coordinates="0x0"]').click()
    cy.get('[data-lines-coordinates="0x0"]').should(
      'have.css',
      'background-color',
      'rgb(224, 33, 48)'
    )

    cy.get('[data-lines-coordinates="0x1"]').click()
    cy.get('[data-lines-coordinates="0x1"]').should(
      'have.css',
      'background-color',
      'rgb(66, 152, 103)'
    )
  })

  it('given the user clicks on the lines, the last click on the square being the players, it should display the winner of the square with the color of the players', () => {
    cy.get('[data-lines-coordinates="0x0"]').click()
    cy.get('[data-lines-coordinates="0x1"]').click()
    cy.get('[data-lines-coordinates="1x0"]').click()
    cy.get('[data-lines-coordinates="1x1"]').click()
    cy.get('[data-lines-coordinates="2x0"]').click()

    cy.get('[data-square-coordinates="0x0"]').should(
      'have.css',
      'background-color',
      'rgb(224, 33, 48)'
    )

    cy.get('#first-player-pontuation').should('contain', '1')
    cy.get('#second-player-pontuation').should('contain', '0')

    cy.get('[data-lines-coordinates="1x2"]').click()
    cy.get('[data-lines-coordinates="2x1"]').click()

    cy.get('[data-square-coordinates="0x1"]').should(
      'have.css',
      'background-color',
      'rgb(66, 152, 103)'
    )
  })

  it('given the game over, with draw, should display draw screen', () => {
    prepareDrawGame()

    cy.url().should('include', '/winner')
    cy.get('#title').should('contain', "It's a draw!")
  })

  it('given the game over, with first player winner, should display winner screen', () => {
    prepareFirstWinnerGame()

    cy.url().should('include', '/winner')
    cy.get('#title').should('contain', 'first wins!')
  })

  it('given the game over, with second player winner, should display winner screen', () => {
    prepareSecondWinnerGame()

    cy.url().should('include', '/winner')
    cy.get('#title').should('contain', 'second wins!')
  })
})
