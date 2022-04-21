describe('Offline game lobby tests', () => {
  beforeEach(() => {
    cy.visit('/create-game')
    cy.get('#offline-game-create').click()
  })

  it('given the user click the first player ready button, without writing his name and select a color, an error message should appear', () => {
    cy.get('#ready-button-first-player').click()

    cy.get('#name-error-first-player').should('be.visible')
    cy.get('#color-error-first-player').should('be.visible')
  })

  it('given the user click the first player ready button, with writing his name and select a color, should display that the user is ready', () => {
    cy.get('#name-input-first-player').type('Player 1')
    cy.get('#color-select-first-player > [data-color="#e02130"]').click()
    cy.get('#ready-button-first-player').click()

    cy.get('#first-player-ready-container').should(
      'have.css',
      'transform',
      'matrix3d(-1, 0, -1.22465e-16, 0, 0, 1, 0, 0, 1.22465e-16, 0, -1, 0, 0, 0, 0, 1)'
    )
  })

  it('given the user click the edit first player button, should display information to user edit', () => {
    cy.get('#name-input-first-player').type('Player 1')
    cy.get('#color-select-first-player > [data-color="#e02130"]').click()
    cy.get('#ready-button-first-player').click()

    cy.get('#first-player-edit-button').click()

    cy.get('#first-player-ready-container').should(
      'have.css',
      'transform',
      'none'
    )
  })

  it('given the user click the second player ready button, without writing his name and select a color, an error message should appear', () => {
    cy.get('#ready-button-second-player').click()

    cy.get('#name-error-second-player').should('be.visible')
    cy.get('#color-error-second-player').should('be.visible')
  })

  it('given the user click the second player ready button, with writing his name and select a color, should display that the user is ready', () => {
    cy.get('#name-input-second-player').type('Player 2')
    cy.get('#color-select-second-player > [data-color="#429867"]').click()
    cy.get('#ready-button-second-player').click()

    cy.get('#second-player-ready-container').should(
      'have.css',
      'transform',
      'matrix3d(-1, 0, -1.22465e-16, 0, 0, 1, 0, 0, 1.22465e-16, 0, -1, 0, 0, 0, 0, 1)'
    )
  })

  it('given the user click the edit second player button, should display information to user edit', () => {
    cy.get('#name-input-second-player').type('Player 2')
    cy.get('#color-select-second-player > [data-color="#429867"]').click()
    cy.get('#ready-button-second-player').click()

    cy.get('#second-player-edit-button').click()

    cy.get('#second-player-ready-container').should(
      'have.css',
      'transform',
      'none'
    )
  })

  it('given the user click in first player ready button and second player ready button, with names and colors, should display that information game container', () => {
    cy.get('#name-input-first-player').type('Player 1')
    cy.get('#color-select-first-player > [data-color="#e02130"]').click()
    cy.get('#ready-button-first-player').click()

    cy.get('#name-input-second-player').type('Player 2')
    cy.get('#color-select-second-player > [data-color="#429867"]').click()
    cy.get('#ready-button-second-player').click()

    cy.get('#information-game-container').should('be.visible')
  })
})
