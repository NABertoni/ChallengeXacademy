Cypress.Commands.add('login', (username, password) => {
  cy.get('#user-name').type(username)
  cy.get('#password').type(password)
  cy.get('#login-button').click()
})

Cypress.Commands.add('addToCart', (item) => {
  cy.get(`[data-test="add-to-cart-${item}"]`).click()
})

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type(firstName)
  cy.get('[data-test="lastName"]').type(lastName)
  cy.get('[data-test="postalCode"]').type(postalCode)
  cy.get('.btn_primary').click()
  cy.get('.btn_action').click()
})

Cypress.Commands.add('logout', () => {
  cy.get('.bm-burger-button').click()
  cy.get('#logout_sidebar_link').click()
})
