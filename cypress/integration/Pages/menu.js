export class menu {

    women() {
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
    }

    tops() {
        cy.get('.tree > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=4&controller=category"]').click()
    }

    catalog() {
        cy.get('#layered_block_left > .title_block').should("include.text", "Catalog")
    }

    subcatagories() {
        cy.get('.subcategory-heading').should("include.text", "Subcategories")
        cy.get(':nth-child(1) > h5 > .subcategory-name').should("include.text", "Tops")
        cy.get(':nth-child(2) > h5 > .subcategory-name').should("include.text", "Dresses")
    }

    previewProduct() {
        cy.get(':nth-child(1) > .product-container > .left-block > .product-image-container > .quick-view-wrapper-mobile > .quick-view-mobile').click()
    }

    closePreview() {
        cy.get('.fancybox-item').click()
    }

    moreButton() {
        cy.get('.first-in-line.last-item-of-tablet-line > .product-container > .right-block > .button-container > .lnk_view > span').click()
        cy.get(':nth-child(2) > .page-product-heading').should("include.text", "Data sheet")
        cy.get(':nth-child(3) > .page-product-heading').should("include.text", "More info")
    }

    addQuantity() {
        cy.get('.button-plus > span').click()
    }

    selectColor() {
        cy.get('#color_24').click()
    }

    addToCart() {
        cy.get('.exclusive > span').click()
        cy.get('.layer_cart_product > h2').should("include.text", "Product successfully added to your shopping cart")
    }

    proceedToCheckout() {
        cy.xpath("(//*[@class='icon-chevron-right right'])[2]").click()
    }

    assertCartSummary() {
        cy.get('#cart_title').should("include.text", "Shopping-cart summary")
    }

    continueProceed() {
        cy.xpath("(//*[@class='icon-chevron-right right'])[3]").click()
    }

    assertAddress() {
        cy.get('.page-heading').should("include.text", "Addresses")
    }

    addressContinueProceed() {
        cy.xpath("(//*[@class='icon-chevron-right right'])[7]").click()
    }

    assertShipping() {
        cy.get('.page-heading').should("include.text", "Shipping")
    }

    termsOfService() {
        cy.get('.order_carrier_content > :nth-child(4)').should("include.text", "Terms of service")
        cy.get('#cgv').click()
    }

    choosePayment() {
        cy.get('.page-heading').should("include.text", "Please choose your payment method")
    }

    payByWire() {
        cy.get('.bankwire').click()
    }

    payByCheck() {
        cy.contains('Pay by check').click()
    }

    orderSummary() {
        cy.get('.page-heading').should("include.text", "Order summary")
    }

    confirmOrder() {
        cy.xpath("(//*[@class='icon-chevron-right right'])[3]").click()
        cy.get('.alert').should("include.text", "Your order on My Store is complete.")
    }

    backToOrders() {
        cy.get('.button-exclusive').click()
    }

    orderHistoryDetails() {
        cy.get(':nth-child(1) > .myaccount-link-list > :nth-child(1) > a > span').click()
        cy.get('.page-heading').should("include.text", "Order history")
    }

    firstOrderReference() {
        cy.get('.first_item > .history_link').click()
    }

    invoice() {
        cy.get(':nth-child(2) > .footable-row-detail-value > .link-button').click()
    }

    reorder() {
        cy.get(':nth-child(3) > .footable-row-detail-value > .link-button').click()
    }

    dresses() {
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
    }

    tshirts() {
        cy.get('.sf-menu > :nth-child(3) > a').click()
        cy.get('.ajax_add_to_cart_button > span').click()
        cy.get('.button-container > .button-medium > span > .icon-chevron-right').click()
        cy.get('.cart_navigation > .button > span > .icon-chevron-right').click()
    }

    removeProduct(){
        cy.get('[title="View my shopping cart"]').realHover()
        cy.xpath("//*[@class='ajax_cart_block_remove_link']").click()
    }

    cartEmpty(){
        cy.get('.alert').should("include.text", "Your shopping cart is empty.")
    }

    signOut(){
        cy.get('.logout').click()
    }
















}