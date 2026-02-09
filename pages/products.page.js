const BasePage = require('./base.page')

class ProductsPage extends BasePage {

    get productPageTitle() { return $('id=com.saucelabs.mydemoapp.android:id/productTV') }

    async clickProduct(index) {
        await $(`android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(${index})`).click()
    }

}

module.exports = new ProductsPage()