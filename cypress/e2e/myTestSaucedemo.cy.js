describe('Saucedemo testing functions', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Login with standard_user and perform checkout', () => {
    // Login with standard_user
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_list').should('exist')

    // Add products to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.item_pricebar > .btn_secondary').should('exist')

    // Checkout
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Gabriel')
    cy.wait(500)
    cy.get('[data-test="lastName"]').type('Florescu')
    cy.wait(500)
    cy.get('[data-test="postalCode"]').type('5272')
    cy.wait(500)
    cy.get('.btn_primary').click()
    cy.get('.btn_action').should('exist')
    cy.get('.btn_action').click()
    cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    cy.wait(500)

    // Logout
    cy.get('.bm-burger-button').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('#login-button').should('exist')
    cy.wait(500)
  })

  it('Login with problem_user and perform checkout', () => {
    // Login with problem_user
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    

    // Logout 1
    cy.get('.bm-burger-button').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('#login-button').should('exist')
    cy.wait(500)
    

    // Login with problem_user again
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_list').should('exist')

    // Add products to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.item_pricebar > .btn_secondary').should('exist')

    // Checkout
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Gabriel')
    cy.wait(500)
    cy.get('[data-test="lastName"]').type('Florescu')
    cy.wait(500)
    cy.get('[data-test="postalCode"]').type('	5272')
    cy.wait(500)
    cy.get('.btn_primary').click()
    cy.get('.btn_action').should('exist')
    cy.get('.btn_action').click()
    cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    cy.wait(500)

    // Logout
    cy.get('.bm-burger-button').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('#login-button').should('exist')
    cy.wait(500)
  })
})