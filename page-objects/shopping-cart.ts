import {type Page, Locator} from '@playwright/test';

export class ShoppingCartPage {
    readonly page: Page;
    readonly title: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly cartItems: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.title');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
        this.cartItems = page.locator('.cart_item');
    }

    async totalItemsInCart() {
        const itemCount = await this.cartItems.count();
        console.log(`Cart contains ${itemCount} item(s).`);
        return itemCount;
    }

    async checkout() {
        console.log('Proceeding to checkout.');
        await this.checkoutButton.click();
    }

    async continueShopping() {
        console.log('Returning to the inventory to continue shopping.');
        await this.continueShoppingButton.click();
    }

    async getCartItemNames() {
        const itemNames = [];
        const itemCount = await this.cartItems.count();

        // Read the names in cart order so they can be compared with the selection.
        for (let i = 0; i < itemCount; i++) {
            const itemName = await this.cartItems.nth(i).locator('.inventory_item_name').textContent();
            if (itemName) {
                itemNames.push(itemName.trim());
            }
        }
        console.log(`Cart item names: ${itemNames.join(', ')}.`);
        return itemNames;
    }

    async getCartTotalCost(): Promise<number> {
        const itemCount = await this.cartItems.count();
        let cartTotal = 0;

        // Calculate the cart subtotal independently from the dashboard selection.
        for (let index = 0; index < itemCount; index++) {
            const itemPrice = await this.cartItems.nth(index).locator('.inventory_item_price').innerText();
            cartTotal += Number(itemPrice.replace('$', '').trim());
        }

        console.log(`Cart subtotal: $${cartTotal.toFixed(2)}.`);
        return Number(cartTotal.toFixed(2));
    }
}