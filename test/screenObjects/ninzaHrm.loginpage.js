/* eslint-disable wdio/no-pause */
import { $,browser } from '@wdio/globals'
const allure = require('@wdio/allure-reporter')

// import {expect} from 'chai';

class HrmLoginPage{

    get usernameTxt(){
        return $("//*[@Name='Username']");
        }
    get passwordTxt(){
        return $('//*[@Name="Password"]');
        }
    get loginBtn(){
        return $('//*[@Name="Sign in"]');
        }

        async loginToApplication(username, password){
            await browser.waitUntil(async () => (await this.usernameTxt.isDisplayed()) === true, {
                timeout: 5000,
                timeoutMsg: `${allure.addStep("Username text box is not displayed")}`
            });
            await this.usernameTxt.click();
            await this.usernameTxt.setValue(username);
            // await browser.pause(5000);
            allure.addStep("Username is entered in username text box");
            await browser.waitUntil(async () => (await this.passwordTxt.isDisplayed()) === true, {
                timeout: 5000,
                timeoutMsg: `${allure.addStep("Password text box is not displayed")}`
            });
            await this.passwordTxt.click();
            await this.passwordTxt.setValue(password);
            // await browser.pause(5000);
            allure.addStep("Password is entered in password text box");
            await this.loginBtn.click();
            allure.addStep("Clicked on Login button");
            // await browser.pause(5000);
        }
}
export default new HrmLoginPage();