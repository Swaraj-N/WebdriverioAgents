import {browser} from '@wdio/globals'
import landingPage from '../screenObjects/flipkart.landingpage.js';
import homepage from '../screenObjects/flipkart.homepage.js';
import {expect} from 'chai';

describe('Flipkart Scenario', () => {
    it('Flipkart Scenario add product to cart', async() => {
        await landingPage.grantLocationPermissionAndClickSkipBtn();
        await landingPage.clickFlipkartBanner();
        // eslint-disable-next-line wdio/no-pause
        browser.pause(5000);
        expect(homepage.homepageIcon.isDisplayed());
    });
});