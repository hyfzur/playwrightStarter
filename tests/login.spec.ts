import {test, expect} from '@playwright/test';
import {SauceDemoHomePage} from '../page-objects/sauce-demo-home';
import {SauceDemoDashboardPage} from '../page-objects/sauce-demo-dashboard';

test.describe('Sauce Demo Login Tests', () => {
    let homePage: SauceDemoHomePage;
    let dashboardPage: SauceDemoDashboardPage;

    test.beforeEach(async ({page}) => {
        console.log('Starting login test setup.');
        homePage = new SauceDemoHomePage(page);
        dashboardPage = new SauceDemoDashboardPage(page);
        await homePage.goto();
    });

    test('Successful login with valid credentials', async () => {
        console.log('Testing login with valid credentials.');
        await test.step('Log in with valid credentials', async () => {
            await homePage.login('standard_user', 'secret_sauce');
        });
        await test.step('Verify the inventory dashboard is displayed', async () => {
            await expect(dashboardPage.inventoryList, 'Inventory dashboard').toBeVisible();
        });
        console.log('Valid login opened the inventory dashboard.');
    });

    test('`Locked out user` cannot login', async () => {
        console.log('Testing login with a locked-out user.');
        await test.step('Attempt login with a locked-out user', async () => {
            await homePage.login('locked_out_user', 'secret_sauce');
        });
        await test.step('Verify the locked-out error is displayed', async () => {
            await expect(homePage.errorMessage, 'Locked-out error message').toBeVisible();
        });
        await test.step('Verify the locked-out error text', async () => {
            await expect(
                homePage.errorMessage,
                'Error explains that the user is locked out'
            ).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        });
        console.log('Locked-out user displayed the expected error.');
    });

    test('Successful logout after login', async () => {
        console.log('Testing logout after a successful login.');
        await test.step('Log in with valid credentials', async () => {
            await homePage.login('standard_user', 'secret_sauce');
        });
        await test.step('Log out from the inventory dashboard', async () => {
            await dashboardPage.hamburgerMenu.click();
            await dashboardPage.logoutButton.click();
        });
        await test.step('Verify the login form is displayed', async () => {
            await expect(homePage.usernameInput, 'Username field after logout').toBeVisible();
        });
        console.log('Logout returned to the login page.');
    });

});