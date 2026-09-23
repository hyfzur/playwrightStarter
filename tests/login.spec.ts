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
        await homePage.login('standard_user', 'secret_sauce');
        await expect(dashboardPage.inventoryList).toBeVisible();
        console.log('Valid login opened the inventory dashboard.');
    });

    test('`Locked out user` cannot login', async () => {
        console.log('Testing login with a locked-out user.');
        await homePage.login('locked_out_user', 'secret_sauce');
        await expect(homePage.errorMessage).toBeVisible();
        await expect(homePage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        console.log('Locked-out user displayed the expected error.');
    });

    test('Successful logout after login', async () => {
        console.log('Testing logout after a successful login.');
        await homePage.login('standard_user', 'secret_sauce');
        await dashboardPage.hamburgerMenu.click();
        await dashboardPage.logoutButton.click();
        await expect(homePage.usernameInput).toBeVisible();
        console.log('Logout returned to the login page.');
    });

});