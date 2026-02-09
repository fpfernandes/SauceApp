
const BasePage = require('./base.page')

class ProductDetailPage extends BasePage{

    get productTitle() {
        return $('id=com.saucelabs.mydemoapp.android:id/productTV') 
    }

    get productPrice() {
        return $('id=com.saucelabs.mydemoapp.android:id/priceTV') 
    }

    get addCartButton() {
        return $('id=com.saucelabs.mydemoapp.android:id/cartBt') 
    }

    get menuButton() {
        return $('id=com.saucelabs.mydemoapp.android:id/menuIV') 
    }

    get catalogMenuSelection() {
        return $('id=com.saucelabs.mydemoapp.android:id/itemTV') 
    }

}

module.exports = new ProductDetailPage()