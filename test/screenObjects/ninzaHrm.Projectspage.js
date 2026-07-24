/* eslint-disable wdio/no-pause */
import { $,browser } from '@wdio/globals'
const allure = require('@wdio/allure-reporter')

// import {expect} from 'chai';

class HrmProjectPage{


    get createProjectBtn(){
        return $("//*[@Name='Create Project']");
        }

    get projectsLink(){
        return $("//*[@Name='Projects']");
    }

    get projectNameTxt(){
        return $("(//*[@Name='Project Name']/following-sibling::*[@LocalizedControlType='edit'])[1]");
    }

     get projectManagerTxt(){
        return $("(//*[@Name='Project Manager']/following-sibling::*[@LocalizedControlType='edit'])[1]");
    }

    get projectStatusDropdown(){
        return $("//*[@LocalizedControlType='combo box']");
    }

    get statusCreated(){
        return $("//*[@Name='Created']");
    }

    get statusOnGoing(){
        return $("//*[@Name='On Going']");
    }

    get statusCompleted(){
        return $("//*[@Name='Completed']");
    }

    get cancelBtn(){
        return $("//*[@Name='Cancel']");
    }
    get addProjectBtn(){
        return $("//*[@Name='Add Project']");
    }

    async createProjectwithStatus(projectName,projectManager,status){
        await browser.waitUntil(async () => (await this.createProjectBtn.isDisplayed()) === true, {
            timeout: 5000,
            timeoutMsg: `${allure.addStep("Create Project button is not displayed")}`
        });
        await this.createProjectBtn.click();
        allure.addStep("Clicked on Create Project button");
        await browser.pause(2000);
        await this.projectNameTxt.click();
        await this.projectNameTxt.setValue(projectName);
        allure.addStep(`${projectName} is entered in Project Name text box`);
        await browser.pause(2000);
        await this.projectManagerTxt.click();
        await this.projectManagerTxt.setValue(projectManager);
        allure.addStep(`${projectManager} is entered in Project Manager text box`);
        await browser.pause(2000);
        await this.projectStatusDropdown.click();
        await this.statusCreated.click();
        allure.addStep(`${status} is selected from Project Status dropdown`);
        await this.addProjectBtn.click();
        allure.addStep("Clicked on Add Project button");
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
export default new HrmProjectPage();