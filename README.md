# Playwright Test Automation

A Playwright end-to-end test automation project using TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/)

## Setup

```bash
npm install
npx playwright install
```

## Running Tests

```bash
npx playwright test
```

## Viewing Reports

```bash
npx playwright show-report
```

## Project Structure

```
PlayWright/
  tests/
    02_first_tests/          # First running test - basic verification
    03_locator_command/      # Locator command specs
    04_session_storage/      # Session storage tests
    05_ui_elements/          # UI element interactions
    06_Multiple_Element_/    # Handling multiple elements & filtering
    07_WebTables/            # Web table & dynamic table tests
    08_Web_Select_Frames_Iframe/ # Dropdowns, selects & iframe handling
    template.spec.ts         # Test template
  playwright.config.ts       # Playwright configuration
  package.json               # Dependencies
```

## Configuration

The project is configured to run tests on Chromium, Firefox, and WebKit browsers. Edit `playwright.config.ts` to customize settings.

## Repository

https://github.com/shubhambhatt5625-Tester/Playwright
