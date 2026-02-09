const BasePage = require('./base.page')

class LoginPage extends BasePage {

    get loginPageTitle() {return $('id=com.saucelabs.mydemoapp.android:id/loginTV') }
    get username() { return $('id=com.saucelabs.mydemoapp.android:id/nameET') }
    get password() { return $('id=com.saucelabs.mydemoapp.android:id/passwordET') }

    async fillLoginPage() {
        await this.username.setValue('bod@example.com')
        await this.password.setValue('10203040')
    }

    get loginButton() {
        return $('id=com.saucelabs.mydemoapp.android:id/loginBtn') 
    }
    

}

module.exports = new LoginPage()

