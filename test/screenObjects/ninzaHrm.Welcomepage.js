/* eslint-disable wdio/no-pause */
import { $,browser } from '@wdio/globals'
const expect = require('chai').expect;
const allure = require('@wdio/allure-reporter')

// import {expect} from 'chai';

class HrmWelcomePage{

    get ninzaHrmTitle(){
        return $("//*[@Name='Ninza HRM']");
        }

    get projectsLink(){
        return $("//*[@Name='Projects']");
    }

    async verifyNinzaHRMTitle(){
            await browser.waitUntil(async () => (await this.ninzaHrmTitle.isDisplayed()) === true, {
                timeout: 5000,
                timeoutMsg: `${allure.addStep("Ninza HRM title is not displayed")}`
            });
            var actual=await this.ninzaHrmTitle.getAttribute('Name');
            await expect(actual).to.be.equal('Ninza HRM');
            allure.addStep("Ninza HRM title is displayed");
          
        }
    
    async clickOnProjectsLink(){
        await browser.waitUntil(async () => (await this.projectsLink.isDisplayed()) === true, {
            timeout: 5000,
            timeoutMsg: `${allure.addStep("Projects link is not displayed")}`
        });
        await this.projectsLink.click();
        allure.addStep("Clicked on Projects link");
    }
}
export default new HrmWelcomePage();