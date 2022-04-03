declare global {
  namespace Cypress {
    type Greeting = {
      greeting: string
      name: string
    }

    interface Chainable {
      /**
       * Yields "foo"
       *
       * @returns {typeof foo}
       * @memberof Chainable
       * @example
       *    cy.foo().then(f = ...) // f is "foo"
       */
      foo: typeof foo
      foo2: typeof foo2

      /**
       * Yields sum of the arguments.
       *
       * @memberof Cypress.Chainable
       *
       * @example
        ```
        cy.sum(2, 3).should('equal', 5)
        ```
       */
      sum: (a: number, b: number) => Chainable<number>

      /**
       * Example command that passes an object of arguments.
       * @memberof Cypress.Chainable
       * @example
       ```
        cy.greeting({ greeting: 'Hello', name: 'Friend' })
        // or use defaults
        cy.greeting()
       ```
       */
      greeting: (options?: Greeting) => void
    }
  }
}
