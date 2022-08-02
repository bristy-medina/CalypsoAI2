import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { login } from "../Pages/login"

const loginPage = new login();

Given("I navigate to website url", () => {
loginPage.website()
});

And("I click sign in", () => {
    loginPage.signIn()
});

And("I enter my email and password to sign in", () => {
    loginPage.email()
    loginPage.password()
    loginPage.submitLogIn()

});

Then("I am logged in", () => {
    loginPage.assertLoggedIn()
});