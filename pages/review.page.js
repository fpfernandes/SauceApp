const BasePage = require('./base.page')

class ReviewPage extends BasePage {

    get checkoutReviewPageTitle() {
        return $('id=com.saucelabs.mydemoapp.android:id/checkoutTitleTV') 
    }

    get reviewOrderTitle() {
        return $('id=com.saucelabs.mydemoapp.android:id/enterShippingAddressTV') 
    }

    get itemCard() {
        return $$('id=com.saucelabs.mydemoapp.android:id/infoCL') 
    } // Select the parent first before the cart items. $$ returns an array (list) of elements 

    get productTitle() {
        return this.itemCard.map(item => item.$('id=com.saucelabs.mydemoapp.android:id/titleTV'))
    }

    get productPrice() {
        return this.itemCard.map(item => item.$('id=com.saucelabs.mydemoapp.android:id/priceTV'))
    }

    get totalItems() {
        return $('id=com.saucelabs.mydemoapp.android:id/itemNumberTV') 
    }
    
    get totalPrice() {
        return $('id=com.saucelabs.mydemoapp.android:id/totalAmountTV') 
    }

    get placeOrderButton() {
        return $('id=com.saucelabs.mydemoapp.android:id/paymentBtn')
    }

}

module.exports = new ReviewPage()