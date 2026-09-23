import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  console.log('Opening Playwright documentation to verify the page title.');
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log('Playwright page title matched the expected text.');
});

test('get started link', async ({ page }) => {
  console.log('Opening Playwright documentation to verify the Get started link.');
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  console.log('Get started link opened the Installation page.');

  await page.close();
});
