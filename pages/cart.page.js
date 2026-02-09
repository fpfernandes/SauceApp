const BasePage = require('./base.page')

class CartPage extends BasePage {

    get cartIcon() {
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/cartTV"]')
    }

    get cartPageTitle() { 
        return $('id=com.saucelabs.mydemoapp.android:id/productTV') 
    }

    get itemCard() {
        return $$('id=com.saucelabs.mydemoapp.android:id/infoCL') 
    } // Select the parent first before the cart items. $$ returns an array (list) of elements 

    get productTitleCart() {
        return this.itemCard.map(item => item.$('id=com.saucelabs.mydemoapp.android:id/titleTV'))
    }

    get productPriceCart() {
        return this.itemCard.map(item => item.$('id=com.saucelabs.mydemoapp.android:id/priceTV'))
    }

    get totalItems() {
        return $('id=com.saucelabs.mydemoapp.android:id/itemsTV') 
    }

    get totalPrice() {
        return $('id=com.saucelabs.mydemoapp.android:id/totalPriceTV') 
    }

    get checkoutButton() {
        return $('id=com.saucelabs.mydemoapp.android:id/cartBt')
    }
       
}

module.exports = new CartPage()



