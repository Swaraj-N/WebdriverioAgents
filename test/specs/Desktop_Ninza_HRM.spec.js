/* IMPORTS */
const { default: ninzaHrmLoginpage } = require('../screenObjects/ninzaHrm.loginpage');
const { default: ninzaHrmWelcomePage } = require('../screenObjects/ninzaHrm.Welcomepage');
const { default: ninzaHrmProjectPage } = require('../screenObjects/ninzaHrm.Projectspage');
const util = require('../genericUtility/stringUtility')
const { projectManager } = require('../testData/data');
require('dotenv').config({ path: './.env' });


describe('Desktop Automation', () => {
    it('Login to Application and Create a project with status Created', async () => {

        // create  synthtic data for project name
        let number = await util.randomNumber(6);
        let projectName = `TestProject${number}`;

        //loing to DeskTop app
        await ninzaHrmLoginpage.loginToApplication(process.env.APPUSERNAME, process.env.APPPASSWORD);

        // verify the home Window scrren
        await ninzaHrmWelcomePage.verifyNinzaHRMTitle();

        // click on Projects link
        await ninzaHrmWelcomePage.clickOnProjectsLink();

        //create a new Project with status Created
        await ninzaHrmProjectPage.createProjectwithStatus(projectName, projectManager.projectManagerName, "Created");
    });
})
