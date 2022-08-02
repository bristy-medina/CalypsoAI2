import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { menu } from "../Pages/menu"
import { login } from "../Pages/login"

const menuPage = new menu();
const loginPage = new login();

Given("I am logged in to my account page", () => {
    cy.Login()
});

And("I click women tab to view catalog and subcatagories", () => {
    menuPage.women()
    menuPage.catalog()
    menuPage.subcatagories()
});

And("I click on the first item preview and close preview", () => {
    menuPage.previewProduct()
    menuPage.closePreview()
});

And("I click more button to view product page", () => {
    menuPage.moreButton()
});

And("I am able to change quantity, color and add to cart successfully", () => {
    menuPage.addQuantity()
    menuPage.selectColor()
    menuPage.addToCart()
});

And("I follow Proceed to checkout", () => {
    menuPage.proceedToCheckout()
    menuPage.continueProceed()

    loginPage.email()
    loginPage.password()
    loginPage.submitLogIn()

    menuPage.assertAddress()
    menuPage.addressContinueProceed()
    menuPage.assertShipping()
    menuPage.termsOfService()
    menuPage.continueProceed()
});

And("I choose pay by check payment method and confirm my purchase", () => {
    menuPage.payByCheck()
    menuPage.tshirts()

    loginPage.email()
    loginPage.password()
    loginPage.submitLogIn()

    menuPage.assertAddress()
    menuPage.addressContinueProceed()
    menuPage.assertShipping()
    menuPage.termsOfService()
    menuPage.continueProceed()

    menuPage.choosePayment()
    menuPage.payByCheck()
});

Then("I successfully complete my order", () => {
    menuPage.orderSummary()
    menuPage.confirmOrder()
});

And("I click back to orders to view order history", () => {
    menuPage.backToOrders()

    loginPage.email()
    loginPage.password()
    loginPage.submitLogIn()
    
    menuPage.orderHistoryDetails()
});

And("I click first order and click invoice to download my order", () => {
    menuPage.firstOrderReference()
    menuPage.invoice()
});

And("I click reorder to order the same items", () => {
    menuPage.reorder()
});

And("I hover over cart and click close button to remove product and view message for empty shopping cart", () => {
    menuPage.removeProduct()
    menuPage.cartEmpty()
});

Then("I click sign out to log out of my account", () => {
    menuPage.signOut()
});