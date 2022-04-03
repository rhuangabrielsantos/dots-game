describe('Offline game play tests', () => {
  beforeEach(() => {
    cy.visit('/lobby')

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

function prepareFirstWinnerGame() {
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
  cy.get('[data-lines-coordinates="5x2"]').click()
  cy.get('[data-lines-coordinates="5x1"]').click()
  cy.get('[data-lines-coordinates="5x3"]').click()
  cy.get('[data-lines-coordinates="5x4"]').click()

  cy.get('[data-lines-coordinates="7x0"]').click()
  cy.get('[data-lines-coordinates="7x2"]').click()
  cy.get('[data-lines-coordinates="7x1"]').click()
  cy.get('[data-lines-coordinates="7x3"]').click()
  cy.get('[data-lines-coordinates="7x4"]').click()
}

function prepareSecondWinnerGame() {
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
  cy.get('[data-lines-coordinates="7x4"]').click()
  cy.get('[data-lines-coordinates="7x3"]').click()
}
