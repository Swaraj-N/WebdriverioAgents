const { default: ninzaHrmLoginpage } = require('../screenObjects/ninzaHrm.loginpage');
const { default: ninzaHrmWelcomePage } = require('../screenObjects/ninzaHrm.Welcomepage');
const { default: ninzaHrmProjectPage } = require('../screenObjects/ninzaHrm.Projectspage');
const util = require('../genericUtility/stringUtility')
const { projectManager } = require('../testData/data');
require('dotenv').config({ path: './.env' });
describe('Desktop Automation', () => {
    it('Login to Application and Create a project', async () => {
        await ninzaHrmLoginpage.loginToApplication(process.env.APPUSERNAME, process.env.APPPASSWORD);
        await ninzaHrmWelcomePage.verifyNinzaHRMTitle();
        await ninzaHrmWelcomePage.clickOnProjectsLink();
        let number = await util.randomNumber(6);
        let projectName = `TestProject${number}`;
        await ninzaHrmProjectPage.createProjectwithStatus(projectName, projectManager.projectManagerName, "Created");
    });
})
