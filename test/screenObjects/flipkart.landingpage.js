import { $ } from '@wdio/globals'
import allure from '../genericUtility/allureUtility.js';
// import {expect} from 'chai';

class LandingPage {

    get flipkartBanner() {
        return $('//android.widget.ScrollView/descendant::android.widget.ImageView[1]');
    }

    get skipBtn(){
        return $('//android.widget.TextView[@resource-id="com.flipkart.android:id/custom_back_icon"]');
    }

    get grantLocationOption() {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]');
    }

    async grantLocationPermissionAndClickSkipBtn() {
        if(await this.grantLocationOption.isDisplayed({timeout: 5000})) {
            await this.grantLocationOption.click();
            await allure.stepLevelLog('Location permission granted');
        }
        else{
        await allure.stepLevelLog('Location permission popup not displayed');
}
        if(await this.skipBtn.isDisplayed({timeout: 5000})) {
            await this.skipBtn.click();
            await allure.stepLevelLog('Clicked on Skip button');
        }
        else{
        await allure.stepLevelLog('Skip button not displayed');
        }
        
    }
    
    async clickFlipkartBanner() {
        await this.flipkartBanner.click();
        await allure.stepLevelLog('Clicked on Flipkart banner');
    }

}
export default new LandingPage();