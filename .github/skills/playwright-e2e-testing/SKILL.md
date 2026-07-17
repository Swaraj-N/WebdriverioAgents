# WebdriverIO + Appium Framework Skill File

This skill file defines standards for AI and developers.

## Stack
- WebdriverIO
- Appium
- JavaScript
- Screen Object Model
- Generic Utilities

## Structure
```text
tests/
├── screenObjects/
├── specs/
├── genericUtility/
├── testData/
├── .env
├── wdio.conf.js
```

## Rules
- Screen Objects contain getters and reusable actions only.
- Assertions belong in specs.
- Use before/beforeEach/afterEach/after hooks.
- Never use Playwright APIs or fixtures.
- Prefer accessibility id then resource id.
- Avoid driver.pause().
- Use waitForDisplayed/waitForEnabled/waitForExist.
- Reuse GenericUtility methods.
- Externalize test data.
- Support Android and iOS.

## AI MUST
- Generate WebdriverIO + Appium code.
- Follow Screen Object Model.
- Use explicit waits.
- Use reusable methods.

## AI MUST NOT
- Use Playwright.
- Hardcode credentials.
- Put assertions in screen objects.
- Duplicate logic.
