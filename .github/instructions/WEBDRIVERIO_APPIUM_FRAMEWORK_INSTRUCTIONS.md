# WebdriverIO + Appium Automation Framework Instructions

## Objective
This document defines the mandatory standards, conventions, architecture, and implementation rules for the WebdriverIO + Appium automation framework.

## Technology Stack
- WebdriverIO
- Appium
- JavaScript
- Screen Object Model (SOM)
- Excel/JSON Test Data
- Environment Variables (.env)

## Framework Structure
```text
tests/
├── screenObjects/
├── specs/
├── genericUtility/
├── testData/
├── .env
├── wdio.conf.js
└── package.json
```

## Folder Responsibilities
| Folder | Responsibility |
|---|---|
| screenObjects | Locators and reusable screen actions |
| specs | Test flow, assertions, orchestration |
| genericUtility | Excel, gestures, common helpers |
| testData | Externalized test data |
| .env | Secrets and environment configuration |

## Core Principles
- Reusability
- Readability
- Maintainability
- Stability
- Separation of Concerns
- Minimal Code Duplication

## Screen Object Rules
Screen objects must contain:
- Locators (getter methods)
- Reusable UI actions
- Navigation methods

They must NOT contain:
- Assertions
- Test logic
- Hardcoded data

Example:
```js
get loginBtn(){ return $('~login'); }

async clickLogin(){
  await this.loginBtn.waitForDisplayed({timeout:10000});
  await this.loginBtn.click();
}
```

## Spec Rules
Specs contain:
- Business flow
- Assertions
- Test orchestration
- Test data retrieval

Example:
```js
await homeScreen.clickLogin();
await loginScreen.login(email,password);
expect(await homeScreen.homeTitle).toBeDisplayed();
```

## Naming Standards
- Screen files: `login.screen.js`
- Spec files: `login.spec.js`
- Classes: PascalCase
- Methods: camelCase
- Locator suffixes:
  - Btn
  - Edt
  - Txt
  - Lbl
  - Chk
  - Dd

## Locator Strategy
Priority:
1. Accessibility Id
2. Resource Id
3. UIAutomator / iOS Predicate
4. CSS (Hybrid/WebView)
5. XPath

Avoid brittle XPath.

## Wait Strategy
Preferred:
```js
await element.waitForDisplayed();
await element.waitForEnabled();
await element.waitForExist();
```
Never:
```js
driver.pause(5000);
```

## Assertions
Assertions belong only in spec files.

## Test Data
Never hardcode reusable values.
Use ExcelUtility, JSON, or environment variables.

## Environment Variables
Store credentials in `.env`.

```env
APP_USERNAME=
APP_PASSWORD=
```

Access:
```js
process.env.APP_USERNAME
```

## Generic Utility
Place reusable logic in `tests/genericUtility`:
- ExcelUtility
- CommonUtility
- GestureUtility
- DateUtility
- RandomDataUtility

Do not duplicate helper logic.

## Mobile Gestures
Wrap gestures inside utilities.

```js
await GestureUtility.scrollUntilVisible(element);
```

## Hooks
Use WebdriverIO hooks.

```js
before(async()=>{});
beforeEach(async()=>{});
afterEach(async()=>{});
after(async()=>{});
```

## Logging
Use meaningful logs and Allure steps where applicable.

## Error Handling
Avoid unnecessary try/catch.
Prefer WebdriverIO waits.

## Dynamic Data
Generate unique values where needed.

```js
const username=`user_${Date.now()}`;
```

## Cross Platform
Prefer accessibility id.
Keep Android/iOS differences inside screen objects.

## Forbidden Practices
- Hardcoded credentials
- driver.pause()
- Assertions in screen objects
- Duplicate locators
- Massive methods
- Business logic in screen objects
- Hardcoded test data

## AI Code Generation Rules
AI must:
- Generate WebdriverIO compatible code
- Follow Screen Object Model
- Reuse Generic Utilities
- Keep assertions in specs
- Use explicit waits
- Use stable locators
- Support Android and iOS

AI must NOT:
- Use Playwright APIs
- Generate fixtures
- Use driver.pause()
- Duplicate logic
- Hardcode credentials

## Final Goal
Maintain a scalable, readable, reusable, enterprise-ready automation framework.
