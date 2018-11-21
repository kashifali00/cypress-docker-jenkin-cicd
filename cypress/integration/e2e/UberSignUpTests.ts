describe("Uber Signup", () => {
    before(() => {
        cy.visit("/")
    })

    it("Verify that signup button appears on main page and user is able to click it", () => {
      
        cy.get('button[aria-label="Sign up"]').should('be.visible')
        cy.get('button[aria-label="Sign up"]').should('have.text', "Sign up").click()
        cy.get('a[aria-label="Sign up to ride"]').should('be.visible')      
    });

    it("Verify that user is able to sigup as rider", () => {
        cy.get('a[aria-label="Sign up to ride"]').click()
        cy.get('div').contains('Sign Up to Ride').should('have.text', 'Sign Up to Ride')
    })

    it("Verify that First Name field is visible and user is able to write first name" , () => {
        cy.get('#firstName').should('be.visible')
        cy.get('#firstName').type("Kashif")
    })

    it("Verify that Last Name field is visible and user is able to write last name" , () => {
        cy.get('#lastName').should('be.visible')
        cy.get('#lastName').type("Ali")
    })

})