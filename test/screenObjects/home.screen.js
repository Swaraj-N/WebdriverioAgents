/* IMPORTS */
// const expect = require('chai').expect
const allure = require('@wdio/allure-reporter')
// const testData = require('../testData/data')

/* GETTERS AND METHODS */

class HomeScreen {

    get loginBtn() {
        return $("//android.view.View[@content-desc='Login']/android.widget.TextView")
    }

    async clickOnLogin() {
        await (await this.loginBtn).waitForDisplayed({ timeout: 10000, timeoutMsg: "Login Button is not displayed" })
        allure.addStep("Login Button is displayed in Homescreen")
        await (await this.loginBtn).click();
        allure.addStep("Clicked on Login button in Home screen")
    }

   

    // async verifyHeadersOfaBin(BinID) {
    //         try {
    //             while ((await (await this.searchedBinId(BinID)).isDisplayed()) == false) {
    //                 await (await this.homeScreenText).click()
    //                 const { height } = await driver.getWindowSize()
    //                 const anchorPercentage = 50
    //                 const startPointPercentage = 90
    //                 const endPointPercentage = 70
    //                 const anchor = height * anchorPercentage / 100
    //                 const startPoint = height * startPointPercentage / 100
    //                 const endPoint = height * endPointPercentage / 100
    //                 await driver.touchPerform([
    //                     {
    //                         action: 'press',
    //                         options: {
    //                             x: anchor,
    //                             y: startPoint
    //                         }
    //                     },
    //                     {
    //                         action: 'wait',
    //                         options: {
    //                             ms: 1000
    //                         }
    //                     },
    //                     {
    //                         action: 'moveTo',
    //                         options: {
    //                             x: anchor,
    //                             y: endPoint
    //                         }
    //                     },
    //                     {
    //                         action: 'release',
    //                         options: {}
    //                     }
    //                 ])
    //             }
    //         }
    //         catch (error) {
    //             console.log(error)
    //         } 
    //     await (await this.searchedBinId(BinID)).click()
    //     await SearchedBinScreen.verifyHeader(testData.binResultHeaders.sortid)
    //     await SearchedBinScreen.verifyHeader(testData.binResultHeaders.binstatus)
    //     await SearchedBinScreen.verifyHeader(testData.binResultHeaders.currentUbrBagID)
    //     await SearchedBinScreen.verifyHeader(testData.binResultHeaders.numberOfClosed)
    //     await SearchedBinScreen.verifyHeader(testData.binResultHeaders.timecutoff)
    //     await SearchedBinScreen.verifyHeader(testData.binResultHeaders.weightCutOff)
    //     await SearchedBinScreen.verifyHeader(testData.binResultHeaders.volumeCutOff)
    //     await SearchedBinScreen.verifyHeader(testData.binResultHeaders.parcelCount)
    //     await (await SearchedBinScreen.backButton(BinID)).waitForDisplayed({ timeout: 5000, timeoutMsg: "Back Button not displayed" })
    //     await (await SearchedBinScreen.backButton(BinID)).click()
    // }


}
module.exports = new HomeScreen();