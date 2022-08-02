export class login {

    website() {
        cy.visit("http://automationpractice.com/")
        cy.url().should("include", "index.php")
    }

    signIn() {
        cy.get('.login').click()
    }

    email() {
        cy.get('#email').type('Blue123@yahoo.com')
    }

    password() {
        cy.get('#passwd').type('Blue123!')
    }

    submitLogIn() {
        cy.get('#SubmitLogin > span').click()
    }
    
    assertLoggedIn() {
        cy.url().should("include", "index.php?controller=my-account")
        cy.get('.page-heading').should("include.text", "My account")
        cy.get('.info-account').should("include.text", "Welcome to your account. Here you can manage all of your personal information and orders.")
    }
}