const BasePage = require('./base.page')

class PurchaseCompletePage extends BasePage {

    get checkoutCompletePageTitle() {
        return $('id=com.saucelabs.mydemoapp.android:id/completeTV') 
    }

    get continueShoppingButton() {
        return $('id=com.saucelabs.mydemoapp.android:id/shoopingBt')
    }

    get viewMenuBtn() {
        return $('~View menu'); 
    }

    get resetAppStateOption() {
        return $('android=new UiSelector().text("Reset App State")');
    }

    get confirmResetBtn() {
        return $('id=android:id/button1');
    }

    async resetAppState() {
        await this.viewMenuBtn.click();
        await this.resetAppStateOption.click();
        await this.confirmResetBtn.click(); // first confirmation
        await this.confirmResetBtn.click(); // second confirmation
    }

}

module.exports = new PurchaseCompletePage()