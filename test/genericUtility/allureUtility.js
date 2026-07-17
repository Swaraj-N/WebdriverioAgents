const allure = require('@wdio/allure-reporter')
class AllureUtility {
     /**
     * @description This method is used to add step level logs in the report
     * @param {string} endPointWithURL 
     * @author SWARAJ <swaraj.t@testyantra.com>
     */
    async stepLevelLog(message) {
        await allure.addStep(message)
    }
}
module.exports = new AllureUtility();