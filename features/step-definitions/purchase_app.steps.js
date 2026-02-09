const { Given, When, Then } = require('@wdio/cucumber-framework')
console.log('[wdio] Loaded purchase_app.steps.js')
const CartPage = require('../../pages/cart.page')
const CheckoutPage = require('../../pages/checkout.page')
const LoginPage = require('../../pages/login.page')
const PaymentPage = require('../../pages/payment.page')
const ProductDetailPage = require('../../pages/product_detail.page')
const ProductsPage = require('../../pages/products.page')
const PurchaseCompletePage = require('../../pages/purchase_complete.page')
const ReviewPage = require('../../pages/review.page')


Given("I am on the Products page of the Sauce Demo app", async() => {
    await driver.pause(1000)
    await expect(ProductsPage.productPageTitle).toHaveText("Products")

})

When("I open the first product {string}", async(index1) => {
    await ProductsPage.clickProduct(index1)

})

Given("I validate the first product details match {string} and {string}", async(product1, price1) => {
    await expect(ProductDetailPage.productTitle).toHaveText(product1)
    await expect(ProductDetailPage.productPrice).toHaveText(price1)

})

Given("I add the first product to the cart", async() => {
    await ProductDetailPage.addCartButton.click()

})

Given("I return to the product catalog page and swipe up", async() => {
    await ProductDetailPage.menuButton.click()
    await ProductDetailPage.catalogMenuSelection.click()
    await ProductDetailPage.swipe_up(1)
})

Given("I open the second product {string}", async(index2) => {
    await ProductsPage.clickProduct(index2) 
})

Given("I validate the second product details match {string} and {string}", async(product2, price2) => {
    await expect(ProductDetailPage.productTitle).toHaveText(product2)
    await expect(ProductDetailPage.productPrice).toHaveText(price2)
})

Given("I add the second product to the cart", async() => {
    await ProductDetailPage.addCartButton.click()
})

Given("I check the cart number of items {string} and tap on the cart icon", async(total_items) => {
    await expect(CartPage.cartIcon).toHaveText(total_items)
    await CartPage.cartIcon.click()

})

Then("I see the Cart page", async() => {
    await expect(CartPage.cartPageTitle).toHaveText("My Cart")
})

Given("the cart contains {string} with price {string} and {string} with price {string}", async(product1, price1, product2, price2) => {
    const prod_title_cart = await CartPage.productTitleCart
    const prod_price_cart = await CartPage.productPriceCart 
    // Check the text of each product one by one using the corrected index after applying the function
    await expect(prod_title_cart[0]).toHaveText(product1) 
    await expect(prod_price_cart[0]).toHaveText(price1) 
    await expect(prod_title_cart[1]).toHaveText(product2) 
    await expect(prod_price_cart[1]).toHaveText(price2)
})

Given("the total number of items is {string}", async(total_items) => {
    await expect(CartPage.totalItems).toHaveText(`${total_items} Items`)
})

Given("the total purchase value is {string}", async(total_value) => {
    await expect(CartPage.totalPrice).toHaveText(total_value)
})

When("I tap on the Checkout button to proceed to checkout", async() => {
    await CartPage.checkoutButton.click()
})

Then("the Login page appears", async() => {
    await expect(LoginPage.loginPageTitle).toHaveText("Login")
})

When("I fill in the login information", async() => {
    await LoginPage.fillLoginPage()
})

Given("I tap on the Login button", async() => {
    await LoginPage.loginButton.click()
})

Then("the checkout page opens", async() => {
    await expect(CheckoutPage.checkoutTitle).toHaveText("Checkout")
    await expect(CheckoutPage.shippingAddressTitle).toHaveText("Enter a shipping address")
})

When("I enter valid shipping information:", async(dataTable) => {
    const data = dataTable.rowsHash()
    await CheckoutPage.fillOrderPage(data)
})


Given("I tap To payment button", async() => {
    await CheckoutPage.paymentButton.click()

})

Then("the payment page opens", async() => {
    await expect(PaymentPage.paymentPageTitle).toHaveText("Checkout")
    await expect(PaymentPage.paymentMethodTitle).toHaveText("Enter a payment method")
})

When("I enter valid payment information:", async(dataTable2) => {
    const data2 = dataTable2.rowsHash()
    await PaymentPage.fillPaymentPage(data2)
})


Given("I tap the Review Order button", async() => {
    await PaymentPage.reviewOrderButton.click()
})

Then("the review order page opens", async() => {
    await expect(ReviewPage.checkoutReviewPageTitle).toHaveText("Checkout")
    await expect(ReviewPage.reviewOrderTitle).toHaveText("Review your order")
})

Given("the order summary shows {string} and {string}", async(product1, product2) => {
    const prod_title_review = await ReviewPage.productTitle
    // Check the text of each product one by one using the corrected index after applying the function
    await expect(prod_title_review[0]).toHaveText(product1) 
    await expect(prod_title_review[1]).toHaveText(product2) 
})

Given("the total purchase amount is {string}", async(total_value) => {
    await expect(ReviewPage.totalPrice).toHaveText(total_value)
})

When("I place the order", async() => {
    await ReviewPage.placeOrderButton.click()
})

Then("I see the Checkout Complete page", async() => {
    await expect(PurchaseCompletePage.checkoutCompletePageTitle).toHaveText("Checkout Complete")
})

Given("I tap on the continue shopping button to return to the home page", async() => {
    await PurchaseCompletePage.continueShoppingButton.click()
    await PurchaseCompletePage.resetAppState()
})

