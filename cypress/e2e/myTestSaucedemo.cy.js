describe('Saucedemo testing functions', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Login with standard_user and perform checkout', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('.inventory_list').should('exist')

    cy.addToCart('sauce-labs-backpack')
    cy.get('.shopping_cart_link').click()
    cy.get('.item_pricebar > .btn_secondary').should('exist')

    cy.checkout('Gabriel', 'Florescu', '5272')
    cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')

    cy.logout()
    cy.get('#login-button').should('exist')
  })

  it('Login with problem_user and perform checkout', () => {
    cy.login('problem_user', 'secret_sauce')
    cy.logout()
    cy.get('#login-button').should('exist')

    cy.login('problem_user', 'secret_sauce')
    cy.get('.inventory_list').should('exist')

    cy.addToCart('sauce-labs-backpack')
    cy.get('.shopping_cart_link').click()
    cy.get('.item_pricebar > .btn_secondary').should('exist')

    cy.checkout('Gabriel', 'Florescu', '5272')
    cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')

    cy.logout()
    cy.get('#login-button').should('exist')
  })
})
