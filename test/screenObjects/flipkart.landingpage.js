import { $, browser } from '@wdio/globals'
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
        await browser.waitUntil(async () => await this.grantLocationOption.isDisplayed(), {
            timeout: 5000,
            timeoutMsg: 'Grant location option not displayed'
        });
        await this.grantLocationOption.click();
        await this.skipBtn.click();
    }
    
    async clickFlipkartBanner() {
        // expect(await this.flipkartBanner.isDisplayed({timeout: 5000}));
        await this.flipkartBanner.click();
    }

}
export default new LandingPage();