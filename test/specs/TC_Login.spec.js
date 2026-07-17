const loginScreen = require('../screenObjects/wdiodemo.Login.screen');
const homeScreen = require('../screenObjects/wdiodemo.home.screen');
const testData = require('../testData/data')

describe('Login Scenario', () => {
  it('should Login To Application', async () => {
    await homeScreen.clickOnLogin();
    await loginScreen.loginToApp(testData.LoginCredentials.emailID,testData.LoginCredentials.password)
  })
})
