# Playwright Starter

This project is a Playwright-based end-to-end test setup for validating the Sauce Demo website. It includes a reusable page object model, browser automation tests for login and cart behavior, and HTML test reporting for local execution.

## Project overview

The automation suite covers core user flows such as:

- logging in with valid credentials
- handling invalid or locked-out users
- logging out from the dashboard
- selecting inventory items and validating cart totals

The code is organized into:

- `tests/` for test specifications
- `page-objects/` for reusable UI interactions and selectors
- `playwright.config.ts` for Playwright configuration
- `playwright-report/` for generated HTML report output
- `test-results/` for recorded test artifacts

## Prerequisites

Before running the tests, make sure you have:

- Node.js 18 or newer
- npm installed
- A browser environment supported by Playwright

## Setup

Install project dependencies:

```bash
npm install
```

Install Playwright browser binaries:

```bash
npx playwright install
```

## Available commands

Run the full Playwright suite:

```bash
npm test
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

Run a specific test by name:

```bash
npx playwright test -g "Successful login with valid credentials"
```

Open the HTML report:

```bash
npx playwright show-report
```

## Test structure

Example test files include:

- `tests/login.spec.ts` for authentication scenarios
- `tests/purchase.spec.ts` for cart and subtotal validation
- `tests/example.spec.ts` for a basic Playwright smoke check

## Notes

- The default Playwright configuration runs tests across Chromium, Firefox, and WebKit.
- The reporter is configured to generate an HTML report after runs.
- The project uses a page-object pattern to keep selectors and UI actions organized and reusable.
