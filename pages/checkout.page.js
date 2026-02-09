const BasePage = require('./base.page')

class CheckoutPage extends BasePage {

    get checkoutTitle() { return $('id=com.saucelabs.mydemoapp.android:id/checkoutTitleTV') }
    get shippingAddressTitle() { return $('id=com.saucelabs.mydemoapp.android:id/enterShippingAddressTV') }
    get fullName() { return $('id=com.saucelabs.mydemoapp.android:id/fullNameET') }
    get address1() { return $('id=com.saucelabs.mydemoapp.android:id/address1ET') }
    get address2() { return $('id=com.saucelabs.mydemoapp.android:id/address2ET') }
    get city() { return $('id=com.saucelabs.mydemoapp.android:id/cityET') }
    get state() { return $('id=com.saucelabs.mydemoapp.android:id/stateET') }
    get zip() { return $('id=com.saucelabs.mydemoapp.android:id/zipET') }
    get country() { return $('id=com.saucelabs.mydemoapp.android:id/countryET') }

    async fillOrderPage(dataTable) {
        await this.fullName.setValue(dataTable.fullName)
        await this.address1.setValue(dataTable.address1)
        await this.address2.setValue(dataTable.address2)
        await this.city.setValue(dataTable.city)
        await this.state.setValue(dataTable.state)
        await this.zip.setValue(dataTable.zip)
        await this.country.setValue(dataTable.country)
    }

    get paymentButton() {
        return $('id=com.saucelabs.mydemoapp.android:id/paymentBtn')

    }

}

module.exports = new CheckoutPage()

