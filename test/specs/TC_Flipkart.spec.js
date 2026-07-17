import {browser} from '@wdio/globals'
import allure from '../genericUtility/allureUtility.js';
import landingPage from '../screenObjects/flipkart.landingpage.js';
import homepage from '../screenObjects/flipkart.homepage.js';
import {expect} from 'chai';

describe('Flipkart Scenario', () => {
    it('Flipkart Scenario', async() => {
        await landingPage.grantLocationPermissionAndClickSkipBtn();
        await landingPage.clickFlipkartBanner();
        // eslint-disable-next-line wdio/no-pause
        browser.pause(5000);
        if(expect(homepage.homepageIcon.isDisplayed())){
            allure.stepLevelLog('Flipkart Homepage is displayed');
        }else{
            allure.stepLevelLog('Flipkart Homepage is not displayed');
        }
    });
});