/* IMPORTS */
const expect = require('chai').expect
const allure = require('@wdio/allure-reporter')

/* GETTERS AND METHODS */
class LoginScreen {

    get loginScreenText() {
        return $('//android.widget.TextView[@text="Login / Sign up Form"]')
    }

    get emailTxtField() {
        return $('//android.widget.EditText[@content-desc="input-email"]')
    }

    get passwordTxtField() {
        return $('//android.widget.EditText[@content-desc="input-password"]')
    }

    get loginBtn() {
        return $("//android.view.ViewGroup[@content-desc='button-LOGIN']/android.view.ViewGroup")
    }

    get successToaster(){
        return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]')
    }

    get closeSuccessPopup(){
        return $('//android.widget.Button[@resource-id="android:id/button1"]')
    }
  

    async loginToApp(emailId, password) {
        await (await this.loginScreenText).waitForDisplayed({ timeout: 5000, timeoutMsg: "Login Screen Not Displayed" })
        expect((await (await this.loginScreenText).getAttribute('text'))).to.eq('Login / Sign up Form')
        await (await this.emailTxtField).waitForDisplayed({ timeout: 10000, timeoutMsg: "Email ID text field is not displayed" })
        await (await this.emailTxtField).click()
        await driver.waitUntil(async () => await ((await this.emailTxtField).isEnabled()), {
            timeout: 5000,
            timeoutMsg: "Email ID TextField Not Enabled"
        })
        await (await this.emailTxtField).setValue(emailId)
        await allure.addStep(`Entered Email ID is ${emailId}`)
        const actualEmailID = await (await (await this.emailTxtField).getText());
        await driver.waitUntil(async () => await actualEmailID == emailId, {
            timeout: 5000,
            timeoutMsg: "Entered Email ID is not reflected"
        })
        await expect(actualEmailID).to.be.eq(emailId, "Displayed Email Id doesnt match with the entered Email ID")
        await (await this.passwordTxtField).waitForDisplayed({ timeout: 10000, timeoutMsg: "Password text field is not displayed" })
        await (await this.passwordTxtField).click()
        await driver.waitUntil(async () => await ((await this.passwordTxtField).isEnabled()), {
            timeout: 5000,
            timeoutMsg: "Password TextField Not Enabled"
        })
        await (await this.passwordTxtField).setValue(password)
        await allure.addStep(`Entered Password is ${password}`)
        await (await this.loginBtn).waitForDisplayed({ timeout: 5000, timeoutMsg: "Login Button Not Clickable" })
        await (await this.loginBtn).click()
         await driver.waitUntil(async () => (await this.successToaster).isDisplayed(), {
            timeout: 5000,
            timeoutMsg: "Success toaster not displayed"
        })
        await (await this.closeSuccessPopup).click()
    }

}
module.exports = new LoginScreen()