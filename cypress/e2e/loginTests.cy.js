/// <reference types="cypress" />

beforeEach(() => {
    cy.viewport(1980, 1000);
  });
it('Login test booking.com', () => {
  // Cypress.Cookies.debug(true)

  // cy.setCookie('aws-waf-token', '1ac65467-5edb-4c63-a549-01f956895ea5:DgoAog+RSf1WAgAA:saEyzzaBV/OBAQX2gCSXnKcASqDj+eGKeIThcbAbL96kxWULOSL98ZeyVBuaggTvT3Icki7In0RrbSgBn3/qTLRDLGsID9hg1oW/GOXfVbCT11hnGEOTJtpG2f+EEHTNO+/yPt0DJXMAStZtLqmMd4mvriQjXd9GngAloL1UdOYKH2NL5Opsm3Dajn6wcbBRq3mzk+HxeZ595SZxORNWztoXSBzvkM6+kC1fDeobRVeZDslaOMwzhNoPi/T1D7m3Ehs=')
    cy.visit('https://booking.com/')
    cy.get('.c1af8b38aa > .c624d7469d > .a83ed08757').click()
    cy.get('#username').type('marko1milentijevic@gmail.com')
    cy.contains('Continue with email').click()
    cy.get('#password').type('Book269ms3')
    cy.contains('Sign in').click()
    
    cy.wait(3000)
        cy.get('#px-captcha').realMouseDown()
        cy.wait(10000)
        cy.get('#px-captcha').realMouseUp();

});

// Having trouble?
// It might be because:

// Javascript is turned off or blocked by an extension (e.g. an ad blocker)
// Your browser doesn't support cookies
// Double-check that both javascript and cookies are enabled, and try turning off your ad blocker.

// Reference ID: #