const BasePage = require('./base.page')

class PaymentPage extends BasePage {

    get paymentPageTitle() { return $('id=com.saucelabs.mydemoapp.android:id/enterPaymentTitleTV') }
    get paymentMethodTitle() { return $('id=com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV') }
    get nameCard() { return $('id=com.saucelabs.mydemoapp.android:id/nameET') }
    get cardNumber() { return $('id=com.saucelabs.mydemoapp.android:id/cardNumberET') }
    get expiryDate() { return $('id=com.saucelabs.mydemoapp.android:id/expirationDateET') }
    get cvv() { return $('id=com.saucelabs.mydemoapp.android:id/securityCodeET') }
    
    async fillPaymentPage(dataTable2) {
        await this.nameCard.setValue(dataTable2.nameCard)
        await this.cardNumber.setValue(dataTable2.cardNumber)
        await this.expiryDate.setValue(dataTable2.expiryDate)
        await this.cvv.setValue(dataTable2.cvv)
    }

    get reviewOrderButton() {
        return $('id=com.saucelabs.mydemoapp.android:id/paymentBtn')

    }

}

module.exports = new PaymentPage()



