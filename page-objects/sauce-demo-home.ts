import {type Locator, type Page} from '@playwright/test';

export class SauceDemoHomePage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.locator('input[type="submit"]');
        this.errorMessage = page.locator('h3[data-test="error"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
        console.log('Opening the Sauce Demo login page.');
    }


    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        console.log(`Attempting login for user: ${username}.`);
        await this.loginButton.click();
        console.log(`Login form submitted for user: ${username}.`);
    }
}
